const {Router} = require('express');
const { TerroirsController } = require('../controllers');

const terroirsRouter = Router();

terroirsRouter.get('', (req, res) => new TerroirsController(req, res).getAll());
terroirsRouter.get('/:id', (req, res) => new TerroirsController(req, res).getById());


module.exports = terroirsRouter;