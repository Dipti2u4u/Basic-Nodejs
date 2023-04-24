//defining an event multiple times

const EventEmitter = require("events");
const event = new EventEmitter();

//defining the event which is already created below

event.on("Display" , () => {
    console.log("my name is dipti prasad das");
})

event.on("Display" , () => {
    console.log("From bhubaneswar odisha");
})


event.on("Display" , () => {
    console.log("a software engineer");
})

//creating or firing an event
event.emit("Display");