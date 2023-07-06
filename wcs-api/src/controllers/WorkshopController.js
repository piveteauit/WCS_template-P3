const { WorkshopModel } = require("../models");
const BaseController = require("./BaseController");

class WorkshopController extends BaseController {

    constructor(req, res) {
        super(req, res);
        this.model = new WorkshopModel();
    }
    

}

module.exports = WorkshopController;