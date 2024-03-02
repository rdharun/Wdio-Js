const XpathUtil = {

    getPlaceholderReplaced(xpath, replacement) {
        let resultStr = '';
        try {
            resultStr = xpath.replace(/##PLACEHOLDER##/g, replacement);
        } catch (error) {
            console.error(error.stack);
            throw new Error(error);
        }
        return resultStr;
    }
};

module.exports = { XpathUtil };