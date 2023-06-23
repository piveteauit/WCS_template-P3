const { RolesModel } = require("../models");
const BaseController = require("./BaseController");

class RolesController extends BaseController {

    constructor(req, res) {
        super(req, res);
        this.model = new RolesModel();
    }

}

module.exports = RolesController;