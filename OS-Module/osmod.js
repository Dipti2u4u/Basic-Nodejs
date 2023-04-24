const os = require("os");

//getting the architecture of the system

console.log(os.arch());

//Getting the free memory of the pc

const freeMemory = os.freemem();
console.log(`${freeMemory/1024/1024/1024}`);

//Total memory of the system

const totalMemory = os.totalmem();
console.log(`${totalMemory/1024/1024/1024}`);

//Getting the host name

console.log(os.hostname());

//which platform

console.log(os.platform());

//Temporary folder

console.log(os.tmpdir());

//which os

console.log(os.type());