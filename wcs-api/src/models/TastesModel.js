const BaseModel = require("./BaseModel");

class TasteModel extends BaseModel {

    constructor() {
        super('tastes')
    }

    insert(tastesData) {
        return this.db.query('INSERT INTO tastes (color_id, terroir_id, cepage_id, user_id, aromas_id, intensity_id, flavors_id) VALUES ( ?, ?, ?, ?, ?, ?, ?)', [tastesData.color_id, tastesData.terroir_id, tastesData.cepage_id, tastesData.user_id, tastesData.aromas_id, tastesData.intensity_id, tastesData.flavors_id ]);
    }
}

module.exports = TasteModel;