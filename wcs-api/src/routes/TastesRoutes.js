const { Router } = require("express");
const { TastesController } = require('../controllers');

const tastesRouter = Router();

tastesRouter.post('', (req, res) => new TastesController(req, res).createTastes());


module.exports = tastesRouter;