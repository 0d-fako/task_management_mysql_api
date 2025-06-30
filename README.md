# Task Manager API

A RESTful API for managing tasks with user authentication.

## Features

- User registration and login (JWT authentication)
- CRUD operations for tasks
- Task filtering by status, priority, and date range
- Pagination support
- Swagger API documentation

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file based on `.env.example`
4. Start the server: `npm start`

## API Documentation

After starting the server, access the Swagger UI at:  
`http://localhost:3000/api-docs`

## Environment Variables

- `DB_HOST`: Database host
- `DB_USER`: Database username
- `DB_PASS`: Database password
- `DB_NAME`: Database name
- `PORT`: Server port (default: 3000)
- `JWT_SECRET`: Secret for JWT signing
- `JWT_EXPIRES_IN`: JWT expiration time (e.g., '1h')
- `COOKIE_EXPIRES_IN`: Cookie expiration in days

## Example Requests

### Register a new user
```bash
POST /api/auth/register
{
  "name": "Olumide D. Fakorede",
  "email": "Olumide@fakorede.com",
  "password": "securepassword"
}