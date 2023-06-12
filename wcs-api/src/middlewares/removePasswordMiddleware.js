function removePasswordMiddleware(req, res, next) {
    const removePassword = (user) => {
        return {
            ...user,
            password: "*****"
        }
    }

    if (!Array.isArray(res.response.data)) {
        res.response.data = removePassword(res.response.data)
    } else {
        res.response.data = res.response.data.map(removePassword)
    }
    
    next();
}

module.exports = removePasswordMiddleware;