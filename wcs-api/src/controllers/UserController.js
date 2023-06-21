const { UserModel } = require("../models");
const BaseController = require("./BaseController");

class UserController extends BaseController {

    constructor(req, res) {
        super(req, res);
        this.model = new UserModel();
    }

    createUser() {
        this.sendJson({ ok : "route ok"})
        const { name, email } = req.body;
        // CHECK EMAIL AND NAME //
        if(!name || !email) {
            this.res.status(400).send ({ error : "Please specify both name and email"})
        return;
        }

        UserModel.users
            .insert ({ name, email})
            .then(([result]) => {
                this.res.status(201).send({ id: result.insertId, name, email})
            })
            .catch((err) => {
                console.error(err);
                this.res.status(500).send({
                    error: err.message,
                });
            });
      
    }

    
}

module.exports = UserController;