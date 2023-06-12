function handleResponse(req, res, next) {    
    res.status(res.response.status).json(res.response.data)
}

module.exports = handleResponse;