const Task = require('../models/taskModel');

// Get all tasks
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create a task
exports.createTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const task = new Task({ title, description, status });
    const savedTask = await task.save();
    res.status(201).json(savedTask);
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};

// Update a task
exports.updateTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, { title, description, status, updatedAt: Date.now() }, { new: true });
    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(updatedTask);
  } catch (err) {
    if (err.name === 'CastError') {
      res.status(404).json({ message: 'Task not found' });
    } else {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};

// Delete a task
exports.deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    if (err.name === 'CastError') {
      res.status(404).json({ message: 'Task not found' });
    } else {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};
