const fs = require("fs");

// console.log(fs);

console.log("Starting");
// fs.writeFileSync("hello.txt", "Hello World!!!");


// Callback Hell
fs.writeFile("namaste.txt", "Namaste World!!!", ()=>{
    console.log("Done!!!");
    fs.readFile("namaste.txt", (error, data)=>{
        console.log(error);
        console.log(data.toString())
    })
})
console.log("Ending");