const { Router } = require("express");
const { TasteController } = require('../controllers');

const tasteRouter = Router();

tasteRouter.get('', (req, res) => new TasteController(req, res).createTaste());
tasteRouter.get('/:id', (req, res) => new TasteController(req, res).getById())

module.exports = tasteRouter;