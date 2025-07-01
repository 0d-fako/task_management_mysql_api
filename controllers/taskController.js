const taskService = require('../services/taskServices');

const createTask = async (req, res) => {
  try {
    const task = await taskService.createTask(req.userId, req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const result = await taskService.getTasks(req.userId, req.query);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getTaskById = async (req, res) => {
  try {
    const task = await taskService.getTaskById(req.params.id, req.userId);
    res.status(200).json(task);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

const updateTask = async (req, res) => {
  try {
    await taskService.updateTask(req.params.id, req.userId, req.body);
    res.status(200).json({ message: 'Task updated' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    await taskService.deleteTask(req.params.id, req.userId);
    res.status(200).json({ message: 'Task deleted' });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

const markCompleted = async (req, res) => {
  try {
    await taskService.markComplete(req.params.id, req.userId);
    res.status(200).json({ message: 'Task marked as completed' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
  markCompleted
};  