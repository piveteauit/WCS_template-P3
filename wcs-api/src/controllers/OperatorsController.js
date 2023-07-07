const { OperatorsModel } = require("../models");
const BaseController = require("./BaseController");

class OperatorsController extends BaseController {

    constructor(req, res) {
        super(req, res);
        this.model = new OperatorsModel();
    }

}

module.exports = OperatorsController;