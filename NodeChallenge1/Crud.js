//crete a folder named dipti inside NodeChallenge1 folder
const fs = require("fs");
//fs.mkdirSync("dipti");

//create a file inside the folder

//fs.writeFileSync("bio.txt" , "I am dipti prasad Das");

//Adding the extra content to the file

//fs.appendFileSync("dipti/bio.txt" , "wants to be a DevOps Engineer");

//Read the data without getting thw buffer data

//const data = fs.readFileSync("dipti/bio.txt" , "utf-8");
//console.log(data);


//Rename the file

//fs.renameSync("dipti/bio.txt" , "dipti/myBio.txt");


//delete the file anmd folder

//fs.unlinkSync("dipti/myBio.txt");


fs.rmdirSync("dipti");
