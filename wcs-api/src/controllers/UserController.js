const { UserModel } = require("../models");
const BaseController = require("./BaseController");

class UserController extends BaseController {

    constructor(req, res, next) {
        super(req, res, next);
        this.model = new UserModel();
    }

    
}

module.exports = UserController;