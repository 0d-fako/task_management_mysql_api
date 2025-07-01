const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');

module.exports = (controller) => {
  // Protect all task routes
  router.use(protect);
  
  router.post('/', controller.createTask);
  router.get('/', controller.getAllTasks);
  router.get('/:id', controller.getTaskById);
  router.put('/:id', controller.updateTask);
  router.delete('/:id', controller.deleteTask);
  
  return router;
};