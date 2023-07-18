const BaseModel = require("./BaseModel");

class TastingSheetModel extends BaseModel {

    constructor() {
        super('TastingSheet')
    }

    // insert(tastingSheetData) {
    //     return this.db.query('INSERT INTO colors (date, cepages, notes, bottle_per_cepage_id, taste_id)  VALUES (?, ?, ?, ?, ?)', [tastingSheetData.date, tastingSheetData.cepages, tastingSheetData.notes]);
    // }
}

module.exports = TastingSheetModel;