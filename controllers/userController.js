const userService = require('../services/userService');

const register = async (req, res) => {
  try {
    const { user, token } = await userService.register(req.body);
    res.status(201).json({ message: 'User registered', user, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { user, token } = await userService.login(req.body);
    res.status(200).json({ message: 'Login successful', user, token });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

const logout = async (_req, res) => {
  res.status(200).json({ message: 'Logout successful (client-side only)' });
};

const getProfile = async (req, res) => {
  try {
    const profile = await userService.getProfile(req.userId);
    res.status(200).json(profile);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

module.exports = { register, login, logout, getProfile };