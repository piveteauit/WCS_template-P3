const {Router} = require('express');
const { TerroirsController } = require('../controllers');

const terroirsRouter = Router();

terroirRouter.get('', (req, res) => new TerroirController(req, res).getAll());
terroirRouter.get('/:id', (req, res) => new TerroirController(req, res).getById());


module.exports = terroirRouter;