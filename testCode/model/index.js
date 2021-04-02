let dataArray = {
    code: 200,
    data: [],
};
for (var i = 0; i < 10; i++) {
    dataArray.data.push("line" + i);
}
module.exports = dataArray;