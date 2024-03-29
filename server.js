const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');
require('dotenv').config()

const app = express();

//mongodb connection
mongoose.connect(process.env.MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => { 
    console.log(err);
    process.exit(1);
  });

app.use(bodyParser.json());

app.use('/api/tasks', taskRoutes);

//server creation
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
