const { CepageModel } = require("../models");
const BaseController = require("./BaseController");

class CepageController extends BaseController {

    constructor(req, res) {
        super(req, res);
        this.model = new CepageModel();
    }

}

module.exports = CepageController;