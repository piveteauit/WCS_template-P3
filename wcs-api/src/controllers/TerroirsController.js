const { TerroirsModel } = require("../models");
const BaseController = require("./BaseController");

class TerroirsController extends BaseController {

    constructor(req, res) {
        super(req, res);
        this.model = new TerroirsModel();
    }

}

module.exports = TerroirsController;