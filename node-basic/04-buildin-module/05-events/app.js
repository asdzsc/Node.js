const EventEmitter = require("events");

class myEvent extends EventEmitter {}

const event = new myEvent();

event.on("play", (value) => {
    console.log(value);
});

event.once("play1", (value) => {
    console.log(value);
});

event.emit("play", "movie");
event.emit("play1", "tv");
event.emit("play1", "tv");