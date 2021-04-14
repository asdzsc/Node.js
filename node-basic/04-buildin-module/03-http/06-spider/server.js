const http = require("http");
const https = require("https");
const cheerio = require("cheerio");

// cheerio 操作dom
function filterData(data) {
    const $ = cheerio.load(data);
    // $("img").each((index, el) => {
    //     // console.log(index);
    //     console.log($(el).text());
    // });
    // console.log($(".children  img").attr("src"));
    $("img").each(() => {
        console.log($(this).attr("data-src"));
    });
    // console.log($("img"));
    // console.log($(".header-logo"));
}

const server = http.createServer((request, response) => {
    let data = "";
    https.get("https://www.mi.com", (res) => {
        res.on("data", (chunk) => {
            data += chunk;
        });
        res.on("end", () => {
            filterData(data);
        });
    });
});
server.listen(8080, () => {
    console.log("localhost:8080");
});