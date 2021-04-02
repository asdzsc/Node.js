const _ = require("lodash");

function myChunk(arr) {
    const arr2 = _.chunk(arr, 2);
    return arr2;
}
module.exports = myChunk;