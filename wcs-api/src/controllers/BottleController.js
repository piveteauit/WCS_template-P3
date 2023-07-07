const { BottleModel} = require("../models");
const BaseController = require("./BaseController");

class BottleController extends BaseController {

    constructor(req, res) {
        super(req, res);
        this.model = new BottleModel();
    }

}

module.exports = BottleController;