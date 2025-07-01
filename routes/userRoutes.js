const express = require('express');
const router = express.Router();

module.exports = (controller) => {
  router.post('/register', controller.register);
  router.post('/login', controller.login);
  router.post('/logout', controller.logout);
  router.get('/profile', controller.getProfile);
  
  return router;
};