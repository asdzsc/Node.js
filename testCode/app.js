const express = require("express");

const app = express();
const path = require("path");
const router = require("./routes/index");

// view engine setup
app.engine("art", require("express-art-template"));
app.set("view options", {
    debug: process.env.NODE_ENV !== "production",
    escape: false,
});
app.set("views", path.join(__dirname, "view"));
app.set("view engine", "art");

app.use("/public", express.static("public"));
app.use("/", router);

app.listen(8080, () => {
    console.log("localhost:8080");
});