const {Router} = require('express');
const { BottlePerCepageController } = require('../controllers');

const BottlePerCepageRouter = Router();

BottlePerCepageRouter.get('', (req, res) => new BottlePerCepageController(req, res).getAll());
BottlePerCepageRouter.get('/:id', (req, res) => new BottlePerCepageController(req, res).getById());


module.exports = BottlePerCepageRouter;
