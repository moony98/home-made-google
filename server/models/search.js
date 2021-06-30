const resultsData = require('../data');

class Result {
    constructor(data) {
        this.query = data.query;
        this.id = data.id;
        this.path = data.path;
        this.title = data.title;
        this.date = data.date;
        this.description = data.description;
    }
    
    static get all() {
        const results = resultsData.map((oneRes) => new Result(oneRes));
        return results;
    }


    
    static find(query) {
        try {
            const resultsFiltered = resultsData.filter((Rslt) => Rslt.query === query);
            return resultsFiltered;
        } catch (err) {
            throw new Error('That querey does not exist!');
        }      
    }
}

module.exports = Result;