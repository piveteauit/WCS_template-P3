const BaseModel = require("./BaseModel");

class TastingSheetModel extends BaseModel {

    constructor() {
        super('TastingSheet')
    }

    insert(tastingSheetData) {
        return this.db.query('INSERT INTO tasting_sheet (date, cepages, notes)  VALUES (?, ?, ?)', [tastingSheetData.date, tastingSheetData.cepages, tastingSheetData.notes]);
    }
}

module.exports = TastingSheetModel;