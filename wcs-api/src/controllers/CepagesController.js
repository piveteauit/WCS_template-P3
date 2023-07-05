const { CepagesModel } = require("../models");
const BaseController = require("./BaseController");

class CepagesController extends BaseController {

    constructor(req, res) {
        super(req, res);
        this.model = new CepagesModel();
    }

    getById() {
        this.sendJson({ ok : "route by id ok"})
    }

    createTastes() {
        this.sendJson({ok : "route ok"})
    }

}

module.exports = CepagesController;