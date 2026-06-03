import fs from "fs/promises"

let a = await fs.readFile("hello.txt")

// let b = await fs.writeFile("hello.txt", "Written using Promise");
let b = await fs.appendFile("hello.txt", "\nWritten using Promise");

console.log(a.toString());