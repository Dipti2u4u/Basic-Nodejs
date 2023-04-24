const EventEmitter = require("events");
const event = new EventEmitter();

//defining the event which is already created below

event.on("Display" , () => {
    console.log("my name is dipti prasad das");
})

//creating or firing an event
event.emit("Display");