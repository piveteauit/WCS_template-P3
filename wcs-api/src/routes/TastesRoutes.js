const { Router } = require("express");
const { TastingSheetController } = require('../controllers');

const tastingSheetRouter = Router();

tastingSheetRouter.get('', (req, res) => new TastingSheetController(req, res).getAll());

tastingSheetRouter.get('/:id', (req, res) => new TastingSheetController(req, res).getById());


module.exports = tastingSheetRouter;