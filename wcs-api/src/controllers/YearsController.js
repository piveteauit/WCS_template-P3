const { YearsModel } = require("../models");
const BaseController = require("./BaseController");

class YearsController extends BaseController {

    constructor(req, res) {
        super(req, res);
        this.model = new YearsModel();
    }
    getById() {
        this.sendJson({ ok : "route by id ok"})
    }

    createYears() {
        this.sendJson({ok : "route ok"})
    }

}

module.exports = YearsController;