const { TastesModel } = require("../models");
const BaseController = require("./BaseController");

class TastesController extends BaseController {

    constructor(req, res) {
        super(req, res);
        this.model = new TastesModel();
    }
    
    getById() {
        this.sendJson({ ok : "route by id ok"})
    }

    createTastes() {
        this.sendJson({ok : "route ok"})
    }

}

module.exports = TastesController;