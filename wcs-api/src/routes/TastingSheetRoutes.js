const { Router } = require("express");
const { TastesController, TastingSheetController } = require('../controllers');

const tastingSheetRouter = Router();

tastingSheetRouter.get('', (req, res) => new TastesController(req, res).getAll());
tastingSheetRouter.get('/:id', (req, res) => new TastesController(req, res).getById());
tastingSheetRouter.post('', (req, res) => new TastingSheetController(req, res).createTastingSheet());


module.exports = tastingSheetRouter;