class BaseController {

    req;
    res;
    next;
    model;

    constructor(req, res, next) {
        this.req = req;
        this.res = res;
        this.next = next;
    }

    getAll() {
        this.model.getAll()
            .then(([results]) => this.sendJson(results))
    }

    getById() {
        this.model.getById(this.req.params.id)
            .then(([results]) => this.sendJson(results[0]))
    }

    sendJson(data) {
        this.res.response = {
            status: 200,
            data: data
        }
        this.next();
        // this.res.status(200).json(data)
    }
}

module.exports = BaseController;