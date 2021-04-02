const https = require("https");

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World');
// });
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

https.get(
    "https://m.maoyan.com/ajax/topRatedMovies?token=&optimus_uuid=682A22D08AF311EBA4251F5DD3F4DF5C94FAEBE11FAA44D48BFB05E6B38D8A94&optimus_risk_level=71&optimus_code=10",
    (res) => {
        // console.log(res);
        let str = "";
        res.on("data", (chunk) => {
            str += chunk;
        });
        res.on("end", () => {
            console.log(str);
        });
    }
);