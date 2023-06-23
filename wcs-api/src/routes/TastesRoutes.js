const { Router } = require("express");
const { TastesController } = require('../controllers');

const tastesRouter = Router();

tastesRouter.get('', (req, res) => new TastesController(req, res).createTaste());
tastesRouter.get('/:id', (req, res) => new TastesController(req, res).getById())

module.exports = tastesRouter;