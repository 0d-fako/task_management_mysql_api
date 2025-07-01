const taskRepo = require('../repositories/taskRepository');

const createTask = async (userId, taskData) => {
  taskData.userId = userId;
  return taskRepo.createTask(taskData);
};

const getTasks = async (userId, query) => {
  const { completed, priority, from, to, page = 1, limit = 10 } = query;
  const offset = (page - 1) * limit;

  const filters = {
    completed: completed === 'true' ? true : completed === 'false' ? false : undefined,
    priority,
    from,
    to
  };

  return taskRepo.getUserTasks(userId, filters, { limit: Number(limit), offset });
};

const getTaskById = async (id, userId) => {
  const task = await taskRepo.getTaskById(id, userId);
  if (!task) throw new Error('Task not found');
  return task;
};

const updateTask = async (id, userId, data) => {
  const updated = await taskRepo.updateTask(id, userId, data);
  if (updated[0] === 0) throw new Error('Update failed');
  return true;
};

const deleteTask = async (id, userId) => {
  const deleted = await taskRepo.deleteTask(id, userId);
  if (!deleted) throw new Error('Task not found or unauthorized');
  return true;
};

const markComplete = async (id, userId) => {
  return updateTask(id, userId, { completed: true });
};

module.exports = {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
  markComplete
};