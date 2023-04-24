//Create a folder and name it dipti inside the NodeChallenge2 folder

const fs = require("fs");

/*fs.mkdir("dipti" , (error) => {
    console.log("Folder is created");
});*/


//create a file inside dipti folder

/*fs.writeFileSync("dipti/read.txt" , "My name is dipti" , (error) => {
    console.log("file is created");
})*/


//Append or add extra data to the file
/*fs.appendFile("./dipti/read.txt" , "Wants to be a devopd engineer" , (error) => {
    console.log("new text is added successfully");
})*/

//Reading the data of the file

/*fs.readFile("./dipti/read.txt" , "utf-8" , (err, data) => {
    console.log(data)
})*/


//Rename read.txt to myread.txt

/*fs.rename("./dipti/read.txt" , "./dipti/myread.txt", (error) => {
    console.log("Rename successfully");
}) */


//Delete the file inside dipti folder

/*fs.unlink("./dipti/myread.txt" , (error) => {
    console.log("file is deleted")
})*/

//lets delete the dipti folder

/*fs.rmdir("./dipti" , (error) => {
    console.log("folder is deleted");
})*/
