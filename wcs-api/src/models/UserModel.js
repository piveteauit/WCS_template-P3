const BaseModel = require("./BaseModel");

class UserModel extends BaseModel {

    constructor() {
        super('users')
    }

    insert(userData) {
        return this.db.query('INSERT INTO users (role_id, date, name, age, mail, password)  VALUES (?, ?, ?, ?, ?, ?)', [2, userData.date, userData.name, userData.age, userData.mail, userData.password]);
    }

    deleteUser(id) {
        return this.db.query('DELETE FROM users WHERE id = ?', [id])
    }

    updateUser(userData) {
        return this.db.query('UPDATE users SET role_id = ?, date = ?, name = ?, age = ?, mail = ?, password = ? WHERE id = ?', [2, userData.date, userData.name, userData.age, userData.mail, userData.password, userData.id]);
    }
}

module.exports = UserModel;