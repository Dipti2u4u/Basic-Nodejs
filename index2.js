//Creating a file in nodejs by writing the codes
const fs = require("fs");
//fs.writeFileSync("read.txt" , "Welcome to file system \n");

//Adding extra data to the existing files

fs.appendFileSync("read.txt" , "I am Dipti prasad das \n");
fs.appendFileSync("read.txt" , "From india");

//How to read the content of the file

//const buf_data = fs.readFileSync("read.txt");
//console.log(buf_data);

// The above code will return the data in binary format.
//lets convert this data to string

/*const new_data = buf_data.toString();
console.log(new_data);*/

//rename a file

//fs.renameSync("read.txt" , "read3.txt");

