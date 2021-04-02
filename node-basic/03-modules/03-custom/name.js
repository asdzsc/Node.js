// 定义模块
const name = {
    surName: "zhang",
    sayName() {
        console.log(this.surName);
    },
};

const age = {
    age: 100,
};
// 暴露模块
// module.exports = {
//     name,
//     age,
// };

exports.name = name;
exports.age = age;