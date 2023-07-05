const { RolesModel } = require("../models");
const BaseController = require("./BaseController");

class RolesController extends BaseController {

    constructor(req, res) {
        super(req, res);
        this.model = new RolesModel();
    }

    getById() {
        this.sendJson({ ok : "route by id ok"})
    }

    createTastes() {
        this.sendJson({ok : "route ok"})
    }

}

module.exports = RolesController;