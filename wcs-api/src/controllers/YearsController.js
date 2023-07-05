const { ColorsModel } = require("../models");
const BaseController = require("./BaseController");

class YearsController extends BaseController {

    constructor(req, res) {
        super(req, res);
        this.model = new YearsModel();
    }
    

}

module.exports = YearsController;