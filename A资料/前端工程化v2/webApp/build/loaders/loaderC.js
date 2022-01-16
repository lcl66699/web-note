const { getOptions } = require('loader-utils');
module.exports = function (content, map, meta) {
    const options = getOptions(this);

    console.log('loaderC' + options.name);

    return content;
}

module.exports.pitch = function () {
    console.log('pitch C');
}