//^ Fs module in node js
// !ReadFile Asynchonous

//  * const fs = require("node:fs");
// let readstream = fs.readFile("./data.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("data read successfully", data);
//   }
// });
//    ! ReadFile in synchorous
// * const fs = require("node:fs");
// let read = fs.readFileSync("./data.txt", "utf-8");
// console.log(read);

//  ! WriteFile Asynchorous
// * const fs = require("node:fs")
// let writefile = fs.writeFile("index.js", "Javascript File added by Aashif khan", (err, data) => {
//     if (err)
//         console.log(err)
// });
// let read = fs.readFile("./index.js", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     else {

//         console.log(data)
//     }
// })
//  ! Write file Synchronous
//  * const fs = require("node:fs")
// let wirite = fs.writeFileSync("./style.css", "Style File")

// let Read = fs.readFileSync("./style.css", "utf-8")
// console.log(Read)

// ^Append file
// *const fs = require("fs")
// fs.appendFileSync("./index.js", "Node js file");

//  ! Deleting File
/*
 * let fs=require("fs")
fs.unlink("./style.css", (err) => {
    if (err)
    {
        console.log(err)
        }
}) */
// ! Rename file
//* const fs = require("node:fs")
// fs.rename("./index.js", "main.js", (err) => {

//     if (err) {
//          console.log(err)
//      }
// });

// ! Creating new folder   Asynchorous

// * const fs = require("fs")
// fs.mkdir("Files", (err) => {

//     if (err) {
//         console.log(err)
//     }
// });

// ! Creating folder Asynchonous

// * const fs = require("node:fs")
// fs.mkdirSync("Nodefile");

// ! nested folder
// const fs = require("fs")
// fs.mkdirSync("./Nodefile/ExpressFile")
