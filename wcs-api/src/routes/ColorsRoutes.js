const {Router} = require('express');
const { ColorsController } = require('../controllers');

const colorsRouter = Router();

colorsRouter.get('', (req, res) => new ColorsController(req, res).getAll());
colorsRouter.get('/:id', (req, res) => new ColorsController(req, res).getById());


module.exports = colorsRouter;