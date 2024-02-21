class FileUtils {
    static convertJsonToCustomType(json) {
        if (Array.isArray(json)) {
            // If jsonData is an array, return it as is
            return json;
        } else {
            // If jsonData is not an array, return it as is
            return json;
        }
    }
}


module.exports = FileUtils;
