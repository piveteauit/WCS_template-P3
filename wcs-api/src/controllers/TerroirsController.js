const { TerroirsModel } = require("../models");
const BaseController = require("./BaseController");

class TerroirsController extends BaseController {

    constructor(req, res) {
        super(req, res);
        this.model = new TerroirsModel();
    }

    getById() {
        this.sendJson({ ok : "route by id ok"})
    }

    createTastes() {
        this.sendJson({ok : "route ok"})
    }

}

module.exports = TerroirsController;