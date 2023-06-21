const {Router} = require('express');
const { CouleurController } = require('../controllers');

const couleurRouter = Router();

couleurRouter.get('', (req, res) => new CouleurController(req, res).getAll());
couleurRouter.get('/:id', (req, res) => new CouleurController(req, res).getById());


module.exports = couleurRouter;