const userRepo = require('../repositories/userRepository');
const { hashPassword, comparePassword } = require('../middleware/passwordUtils');
const { generateToken } = require('../middleware/tokenUtils');

const register = async (userData) => {
  const existing = await userRepo.findByEmail(userData.email);
  if (existing) throw new Error('Email already registered');

  userData.password = await hashPassword(userData.password);
  const user = await userRepo.createUser(userData);
  const token = generateToken(user.id);

  return { user: { id: user.id, fullName: user.fullName, email: user.email }, token };
};

const login = async ({ email, password }) => {
  const user = await userRepo.findByEmail(email);
  if (!user || !(await comparePassword(password, user.password))) {
    throw new Error('Invalid email or password');
  }

  const token = generateToken(user.id);
  return { user: { id: user.id, fullName: user.fullName, email: user.email }, token };
};

const getProfile = async (userId) => {
  const user = await userRepo.findById(userId);
  if (!user) throw new Error('User not found');
  return user;
};

module.exports = {
  register,
  login,
  getProfile
};