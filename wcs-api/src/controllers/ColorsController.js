const { ColorsModel } = require("../models");
const BaseController = require("./BaseController");

class ColorsController extends BaseController {

    constructor(req, res) {
        super(req, res);
        this.model = new ColorsModel();
    }

    getById() {
        this.sendJson({ ok : "route by id ok"})
    }

    createTastes() {
        this.sendJson({ok : "route ok"})
    }

}

module.exports = ColorsController;