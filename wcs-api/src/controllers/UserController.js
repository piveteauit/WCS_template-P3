const { UserModel } = require("../models");
const BaseController = require("./BaseController");

class UserController extends BaseController {

    constructor(req, res) {
        super(req, res);
        this.model = new UserModel();
    }

    createUser() {
        // this.sendJson({ ok : "route ok"})
        const { date, name, age, mail, password } = this.req.body;
        // CHECK NAME AND AGE //
        if(!name || !age) {
            return this.res.status(400).send ({ error : "Please specify both your name and your age"})
        }

        this.model
            .insert ({ date, name, age, mail, password })
            .then((result) => {
               return this.res.status(201).send({ id: result.insertId, date, name, age, mail, password })
            })
            .catch((err) => {
                console.error(err);
                return this.res.status(500).send({
                    error: err.message,
                });
            });
      
    }

    
}

module.exports = UserController;