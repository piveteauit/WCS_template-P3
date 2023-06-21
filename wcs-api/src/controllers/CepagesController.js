const { CepagesModel } = require("../models");
const BaseController = require("./BaseController");

class CepagesController extends BaseController {

    constructor(req, res) {
        super(req, res);
        this.model = new CepagesModel();
    }

}

module.exports = CepagesController;