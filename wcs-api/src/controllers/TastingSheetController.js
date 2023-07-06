const { TastingSheetModel } = require("../models");
const BaseController = require("./BaseController");

class TastingSheetController extends BaseController {

    constructor(req, res) {
        super(req, res);
        this.model = new TastingSheetModel();
    }
    
    }


module.exports = TastingSheetController;