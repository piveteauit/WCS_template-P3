const { TastingSheetModel } = require("../models");
const BaseController = require("./BaseController");

class TastingSheetController extends BaseController {

    constructor(req, res) {
        super(req, res);
        this.model = new TastingSheetModel();
    }
    
    createTastingSheet() {
        //this.sendJson({ ok : "route ok"})
        const { date, cepages, notes } = this.req.body;

        this.model
            .insert ({ date, cepages, notes })
            .then((result) => {
               return this.res.status(201).send({ id: result.insertId, date, cepages, notes })
            })
            .catch((err) => {
                console.error(err);
                return this.res.status(500).send({
                    error: err.message,
                });
            });
      
    }

    getById() {
        const id = this.model.getById(this.req.params.id)
             .then(([results]) => this.sendJson(results[0]))
     }
 
    
    }


module.exports = TastingSheetController;