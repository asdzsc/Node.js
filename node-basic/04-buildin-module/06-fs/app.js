const fs = require("fs");

const fsPromises = require("fs").promises;

//文件夹创建
// fs.mkdir("logs", (err) => {
//     if (err) throw err;
//     console.log("文件创建成功！");
// });
// 文件夹修改
// fs.rename("./logs", "./log", () => {
//     console.log("文件修改成功！");
// });
// 文件夹删除
// fs.rmdir("./log", () => {
//     console.log("文件删除成功！");
// });
// 文件夹查询
// fs.readdir("./logs", (err, result) => {
//     console.log(result);
//     console.log("文件读取成功！");
// });

// 文件的创建
// fs.writeFile("./logs/log1.txt", "hello\nword", (err) => {
//     // console.log(err);
//     if (err) throw err;
//     console.log("文件创建成功");
// });
// 文件的修改
// fs.appendFile("./logs/log1.txt", "!!!", (err) => {
//     if (err) throw err;
//     console.log("文件追加成功");
// });
// 文件的删除
// fs.unlink("./logs/log1.txt", (err) => {
//     if (err) throw err;
//     console.log("文件删除成功");
// });
// 文件的读取 buffer转字符串
// fs.readFile("./logs/log1.txt", "utf-8", (err, content) => {
//     if (err) throw err;
//     console.log(content);
//     console.log("文件读取成功");
// });

// fs.readFile("./logs/log1.txt", (err, content) => {
//     if (err) throw err;
//     console.log(content.toString());
//     console.log("文件读取成功");
// });

//文件的读取中有箭头函数属于异步任务
// fs.readFile("./logs/log1.txt", (err, content) => {
//     if (err) throw err;
//     console.log(content.toString());
// });
// console.log("continue...");

// 通过readSync 改为同步读取文件
// const content = fs.readFileSync("./logs/log1.txt");
// console.log(content.toString());
// console.log("continue...");

// 使用node进行读取文件的promise操作
// (async() => {
//     let result = await fsPromises.readFile("./logs/log1.txt");
//     console.log(result.toString());
// })();
// console.log("continue...");

// 批量写文件
// for (var i = 0; i < 10; i++) {
//     fs.writeFile(`./logs/log-${i}.txt`, `log-${i}`, (err) => {
//         console.log("done.");
//     });
// }

// function readDir(dir) {
//     fs.readdir(dir, (err, result) => {
//         // console.log(result);
//         result.forEach((value, i) => {
//             let joinDir = `${dir}/${value}`;
//             // 获取文件的信息
//             fs.stat(joinDir, (err, stats) => {
//                 //stats.isDirector()判断是否是文件夹
//                 if (stats.isDirectory()) {
//                     readDir(joinDir);
//                 } else {
//                     fs.readFile(joinDir, (err, content) => {
//                         console.log(content.toString());
//                     });
//                 }
//             });
//         });
//     });
// }
// readDir("./");

fs.watch("./logs/log-0.txt", () => {
    console.log("content has changer");
});