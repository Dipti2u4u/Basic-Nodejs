const fs = require("fs");

//crreate an object
const biodata = {
    name : "Dipti",
    age : 26,
    Gender : "male",
}

//console.log(biodata);

//Converting objext to json
const jsonData = JSON.stringify(biodata);
//console.log(jsonData);

//Adding json data to another file
/*fs.writeFile("data.json" , jsonData, (err) => {
    console.log("done");
})*/


//Reading that file

fs.readFile("data.json", "utf-8", (err,data) => {
    console.log(data)
})

//converting json data to object

const orgData = JSON.parse(jsonData);
console.log(orgData);