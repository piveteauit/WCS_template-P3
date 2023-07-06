const { Router } = require("express");
const { TastesController } = require('../controllers');

const tastingSheetRouter = Router();

tastesRouter.get('', (req, res) => new TastesController(req, res).getAll());
tastesRouter.get('/:id', (req, res) => new TastesController(req, res).getById());


module.exports = tastingSheetRouter;