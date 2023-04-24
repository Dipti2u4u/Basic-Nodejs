//crreate an object

const biodata = {
    name : "Dipti",
    age : 26,
    Gender : "male",
}

console.log(biodata);

//converting object to JSON

const jsonData = JSON.stringify(biodata);
console.log(jsonData);

//converting json data to object

const orgData = JSON.parse(jsonData);
console.log(orgData);