const {Router} = require('express');
const { RolesController } = require('../controllers');

const rolesRouter = Router();

rolesRouter.get('', (req, res) => new RolesController(req, res).getAll());
rolesRouter.get('/:id', (req, res) => new RolesController(req, res).getById());


module.exports = rolesRouter;