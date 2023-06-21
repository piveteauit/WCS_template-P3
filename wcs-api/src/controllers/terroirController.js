const { TerroirModel } = require("../models");
const BaseController = require("./BaseController");

class TerroirController extends BaseController {

    constructor(req, res) {
        super(req, res);
        this.model = new TerroirModel();
    }

}

module.exports = TerroirController;