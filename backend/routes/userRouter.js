const express = require('express');
const usersController = require('../controllers/usersCtrl');


const userRouter = express.Router();
userRouter.post('/api/v1/users/register', usersController.register);
userRouter.post('/api/v1/users/login', usersController.login);
userRouter.get('/api/v1/users/profile', usersController.profile);

module.exports = userRouter;