//passing argument while creating or firing an event

const EventEmitter = require("events");
const event = new EventEmitter();

//defining the event which is already created below

event.on("CheckPage" , (sc, msg) => {
    console.log(`Statuscode is ${sc} and message is ${msg}`);
})

//creating or firing an event
event.emit("CheckPage" , 200 , "ok");