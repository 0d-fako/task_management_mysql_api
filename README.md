# 📌 Task Management API

A robust RESTful API for managing personal tasks, built with Node.js, Express, Sequelize, and MySQL. Features include JWT-based authentication, user-specific task access, filtering, pagination, and interactive Swagger UI documentation.

## 🚀 Features

- JWT authentication (register/login)
- Task CRUD operations
- Mark tasks completed via PATCH
- Filtering by completion, priority, and date range
- Pagination on task listings
- createdAt and updatedAt timestamps
- Swagger UI for API exploration

## 🛠️ Tech Stack

- Node.js + Express
- Sequelize ORM + MySQL
- JWT authentication via jsonwebtoken
- Password hashing via bcryptjs
- swagger-jsdoc + swagger-ui-express for docs
- dotenv for environment config

## 📂 Project Structure

.
├── config/
├── controllers/
├── middlewares/
├── models/
├── repositories/
├── routes/
├── services/
├── utils/
├── swagger.js
├── server.js
└── .env

## 🔧 Getting Started

### 1. Clone the repository

git clone https://github.com/your-username/task-management-api.git  
cd task-management-api

### 2. Install dependencies

npm install

### 3. Create `.env` file in root directory

PORT=3000  
DB_NAME=taskdb  
DB_USER=root  
DB_PASSWORD=your_mysql_password  
DB_HOST=localhost  
JWT_SECRET=your_jwt_secret  
JWT_EXPIRES_IN=1d

### 4. Set up your database

CREATE DATABASE taskdb;

### 5. Run the server

node server.js  
http://localhost:3000

## 🔐 Authentication

Use JWT token in Authorization header:  
Authorization: Bearer <token>

## 🧪 Example Requests

### Register

POST /api/users/register  
Body:
{
  "fullName": "Olumide",
  "email": "olu@example.com",
  "password": "supersecret"
}

### Login

POST /api/users/login  
Body:
{
  "email": "olu@example.com",
  "password": "supersecret"
}

### Create Task

POST /api/tasks  
Header: Authorization: Bearer <token>  
Body:
{
  "title": "Write README",
  "description": "Complete and polish documentation",
  "dueDate": "2024-12-31",
  "priority": "high"
}

### Mark Task as Completed

PATCH /api/tasks/:id/complete  
Authorization: Bearer <token>

### Filter Tasks

GET /api/tasks?completed=true&priority=medium&from=2024-01-01&to=2024-12-31  
Authorization: Bearer <token>

## 📘 Swagger Docs

Visit: http://localhost:3000/api-docs

## ✅ Testing Tips

- Use Postman or curl
- All /tasks routes require token
- Pagination: /api/tasks?page=1&limit=10

## 👨🏾‍💻 Author

Built with ⚡ by Olumide D. Fakorede