const {Router} = require('express');
const { UserController } = require('../controllers');
const { removePasswordMiddleware, handleResponse } = require('../middlewares');

const userRouter = Router();

userRouter.get('', (req, res, next) => new UserController(req, res, next).getAll(), removePasswordMiddleware, handleResponse);
userRouter.get('/:id', (req, res, next) => new UserController(req, res, next).getById(), removePasswordMiddleware, handleResponse);

module.exports = userRouter;