const { RoleModel } = require("../models");
const BaseController = require("./BaseController");

class RoleController extends BaseController {

    constructor(req, res) {
        super(req, res);
        this.model = new RoleModel();
    }

}

module.exports = RoleController;