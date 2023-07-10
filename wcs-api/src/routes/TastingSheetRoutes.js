const { Router } = require("express");
const { TastesController } = require('../controllers');

const tastingSheetRouter = Router();

tastingSheetRouter.get('', (req, res) => new TastesController(req, res).getAll());
tastingSheetRouter.get('/:id', (req, res) => new TastesController(req, res).getById());


module.exports = tastingSheetRouter;