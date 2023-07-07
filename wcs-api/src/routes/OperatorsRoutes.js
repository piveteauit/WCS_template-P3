const {Router} = require('express');
const { OperatorsController } = require('../controllers');

const OperatorsRouter = Router();

OperatorsRouter.get('', (req, res) => new OperatorsController(req, res).getAll());
OperatorsRouter.get('/:id', (req, res) => new OperatorsController(req, res).getById());


module.exports = OperatorsRouter;