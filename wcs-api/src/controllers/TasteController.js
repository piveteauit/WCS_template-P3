const { TasteModel } = require("../models");
const BaseController = require("./BaseController");

class TasteController extends BaseController {

    constructor(req, res) {
        super(req, res);
        this.model = new TasteModel();
    }
    
    getById() {
        this.sendJson({ ok : "route by id ok"})
    }

    createTaste() {
        this.sendJson({ok : "route ok"})
    }

}

module.exports = TasteController;