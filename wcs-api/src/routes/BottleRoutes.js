const {Router} = require('express');
const { BottleController } = require('../controllers');

const BottleRouter = Router();

bottleRouter.get('', (req, res) => new BottleController(req, res).getAll());
bottleRouter.get('/:id', (req, res) => new BottleController(req, res).getById());


module.exports = BottleRouter;