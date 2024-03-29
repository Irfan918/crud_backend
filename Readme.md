# Shopping Portal RESTful API

This project is a shopping portal backend developed using Node.js, Express.js, and MongoDB. It provides a RESTful API for managing tasks, including basic CRUD operations (Create, Read, Update, Delete). Each task has a title, description, status, and timestamps for creation and last update.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before running this project, make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/) (along with npm)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/shopping-portal.git
   ```

2. Install dependencies:

   ```bash
   cd shopping-portal
   npm install
   ```

3. Configure MongoDB:
   - Make sure MongoDB is running on your local machine or update `config.js` with the appropriate connection URI if using a remote MongoDB server.

4. Start the server:

   ```bash
   npm start
   ```

## Usage

Once the server is running, you can interact with the API endpoints using tools like [Postman](https://www.postman.com/) or by making HTTP requests from your client-side application.

## API Documentation

1. GET All Tasks
Method: GET
URL: http://localhost:3000/api/tasks
Description: Retrieves all tasks stored in the database.
Response:
Status Code: 200 OK
Body: Array of task objects with the following properties:
id (String): The unique identifier of the task.
title (String): The title of the task.
description (String): The description of the task.
status (String): The status of the task (pending, in-progress, or completed).
createdAt (Date): The timestamp when the task was created.
updatedAt (Date): The timestamp when the task was last updated.
2. Create a Task
Method: POST
URL: http://localhost:3000/api/tasks
Description: Creates a new task with the provided details.
Request Body:
Type: JSON
Fields:
title (String, required): The title of the task.
description (String, required): The description of the task.
status (String, optional): The status of the task (pending, in-progress, or completed). Default is pending.
Response:
Status Code: 201 Created
Body: JSON object representing the newly created task with the following properties:
id (String): The unique identifier of the task.
title (String): The title of the task.
description (String): The description of the task.
status (String): The status of the task.
createdAt (Date): The timestamp when the task was created.
updatedAt (Date): The timestamp when the task was last updated.
3. Update a Task
Method: PUT
URL: http://localhost:3000/api/tasks/:id
Description: Updates an existing task with the provided details.
URL Parameters:
id (String, required): The unique identifier of the task to be updated.
Request Body:
Type: JSON
Fields: Any combination of the following fields to be updated:
title (String): The new title of the task.
description (String): The new description of the task.
status (String): The new status of the task (pending, in-progress, or completed).
Response:
Status Code: 200 OK
Body: JSON object representing the updated task with the following properties:
id (String): The unique identifier of the task.
title (String): The title of the task.
description (String): The description of the task.
status (String): The status of the task.
createdAt (Date): The timestamp when the task was created.
updatedAt (Date): The timestamp when the task was last updated.
4. Delete a Task
Method: DELETE
URL: http://localhost:3000/api/tasks/:id
Description: Deletes the specified task from the database.
URL Parameters:
id (String, required): The unique identifier of the task to be deleted.
Response:
Status Code: 200 OK
Body: JSON object with the following property:
message (String): A message indicating that the task was deleted successfully.

For detailed documentation of each API endpoint, refer to the [API Documentation](#api-documentation) section in the codebase.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to help improve this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README file further to suit your project's specific requirements and details.