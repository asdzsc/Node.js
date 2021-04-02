const fs = require("fs");
const zlip = require("zlib");

const gzip = zlip.createGzip();

const readStream = fs.createReadStream("./log.txt");
const writeStream = fs.createWriteStream("./log.gzip");

readStream.pipe(gzip).pipe(writeStream);

// writeStream.write(readStream);