const fs = require("fs");
const path = require("path");

//Create Folder

// console.log(currentFileUrl);

// fs.mkdirSync(currentFileUrl);
// console.log("Folder is Created!!!");

fs.mkdir(currentFileUrl, (err) => {
  if (err) console.log("Error ", err);
  console.log("Folder Created");
});

//Write File
// fs.writeFile(currentFileUrl, "Black Widow ", (err) => {
//   if (err) console.log("Error", err);
//   console.log("File Created");
// });

//ReadFile
// fs.readFile(currentFileUrl, "utf8", (err, data) => {
//   if (err) console.log("Error ", err);
//   console.log("---", data);
// });

//Rename
const currentFileUrl = path.join(__dirname, "test", "greet.txt");
const newFileUrl = path.join(__dirname, "test", "newgreet.txt");
fs.rename(currentFileUrl, newFileUrl, (err) => {
  if (err) console.log("Error", err);
  console.log("File Renamed");
});
