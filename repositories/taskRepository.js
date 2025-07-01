const { Task } = require('../models');
const { Op } = require('sequelize');

const createTask = async (taskData) => {
  return Task.create(taskData);
};

const getUserTasks = async (userId, filters = {}, pagination = {}) => {
  const { completed, priority, from, to } = filters;
  const { limit, offset } = pagination;

  const where = { userId };

  if (completed !== undefined) where.completed = completed;
  if (priority) where.priority = priority;
  if (from || to) {
    where.dueDate = {};
    if (from) where.dueDate[Op.gte] = from;
    if (to) where.dueDate[Op.lte] = to;
  }

  return Task.findAndCountAll({
    where,
    limit,
    offset,
    order: [['dueDate', 'ASC']]
  });
};

const getTaskById = async (id, userId) => {
  return Task.findOne({ where: { id, userId } });
};

const updateTask = async (id, userId, updateData) => {
  return Task.update(updateData, {
    where: { id, userId }
  });
};

const deleteTask = async (id, userId) => {
  return Task.destroy({ where: { id, userId } });
};

module.exports = {
  createTask,
  getUserTasks,
  getTaskById,
  updateTask,
  deleteTask
};