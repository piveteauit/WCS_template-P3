const { TastesModel } = require("../models");
const BaseController = require("./BaseController");

class TastesController extends BaseController {

    constructor(req, res) {
        super(req, res);
        this.model = new TastesModel();
    }
    
    }


module.exports = TastesController;