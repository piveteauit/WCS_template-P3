const BaseModel = require("./BaseModel");

class UserModel extends BaseModel {

    constructor() {
        super('users')
    }

    insert(userData) {
        console.log(userData)
        return this.db.query('INSERT INTO users (role_id, date, name, age, mail, password)  VALUES (?, ?, ?, ?, ?, ?)', [2, userData.date, userData.name, userData.age, userData.mail, userData.password]);
    }
}

module.exports = UserModel;