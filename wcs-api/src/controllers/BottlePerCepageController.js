const { BottlePerCepageModel } = require("../models");
const BaseController = require("./BaseController");

class BottlePerCepageController extends BaseController {

    constructor(req, res) {
        super(req, res);
        this.model = new BottlePerCepageModel();
    }

    getById() {
        this.sendJson({ ok : "route by id ok"})
    }

    createBottlePerCepageController() {
        this.sendJson({ok : "route ok"})
    }

}

module.exports = BottlePerCepageController;