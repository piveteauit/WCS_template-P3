const {Router} = require('express');
const { TerroirController } = require('../controllers');

const terroirRouter = Router();

terroirRouter.get('', (req, res) => new TerroirController(req, res).getAll());
terroirRouter.get('/:id', (req, res) => new TerroirController(req, res).getById());


module.exports = terroirRouter;