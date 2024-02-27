const fs = require('fs');
const path = require('path');

const dataDir = path.resolve(__dirname, '..', '..', 'resources');

class DataLoader {
    constructor() {}

    loadData(fileName) {
        try {
            const filePath = path.join(dataDir, fileName);
            return JSON.parse(fs.readFileSync(filePath, 'utf8'));
        } catch (error) {
            console.error(`Error loading data file ${fileName}:`, error);
            return null;
        }
    }
}

module.exports = new DataLoader();
