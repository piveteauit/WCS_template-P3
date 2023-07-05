const {Router} = require('express');
const { BottlePerCepageController } = require('../controllers');

const BottlePerCepageRouter = Router();

bottlepPerCepageRouter.get('', (req, res) => new BottlePerCepageController(req, res).getAll());
bottlePerCepageRouter.get('/:id', (req, res) => new BottlePerCepageController(req, res).getById());


module.exports = BottlePerCepageRouter;