const express = require('express');
require('dotenv').config();

const swaggerUi = require("swagger-ui-express")
const swaggerDocument = require("./api-docs/swagger.json")

const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');

// Initialize models 
const User = require('./models/User');
const Task = require('./models/Task');

// Initialize express
const app = express();
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// Register routes
const userController = require('./controllers/userController');
const taskController = require('./controllers/taskController');

app.use('/api/users', userRoutes(userController));
app.use('/api/tasks', taskRoutes(taskController));

// Health check
app.get('/', (_req, res) => res.send('🚀 Task Manager API is running...'));

// Start server and DB
const PORT = process.env.PORT 
sequelize.authenticate()
  .then(() => {
    console.log('✅ Connected to MySQL');
    return sequelize.sync(); 
  })
  .then(() => {
    app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
  })
  .catch((err) => console.error('❌ DB connection failed:', err));