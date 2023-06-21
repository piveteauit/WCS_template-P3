const { CouleurModel } = require("../models");
const BaseController = require("./BaseController");

class CouleurController extends BaseController {

    constructor(req, res) {
        super(req, res);
        this.model = new CouleurModel();
    }

}

module.exports = CouleurController;