const { ColorsModel } = require("../models");
const BaseController = require("./BaseController");

class ColorsController extends BaseController {

    constructor(req, res) {
        super(req, res);
        this.model = new ColorsModel();
    }

}

module.exports = ColorsController;