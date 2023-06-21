const {Router} = require('express');
const { CepageController } = require('../controllers');

const cepageRouter = Router();

cepageRouter.get('', (req, res) => new CepageController(req, res).getAll());
cepageRouter.get('/:id', (req, res) => new CepageController(req, res).getById());


module.exports = cepageRouter;