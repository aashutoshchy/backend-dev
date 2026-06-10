import fs from "fs/promises"
import fsSync from "fs"
import path from "path"
import { json } from "stream/consumers";

let rootPath = "C:\\Users\\ASUS\\Desktop\\backend-dev\\projects\\01-clear-the-clutter";
let files = await fs.readdir(rootPath);

for (let file of files) {
    console.log(file);
    let folderName = path.extname(file).slice(1)
    if (!fsSync.existsSync(folderName) && (folderName != "js" || folderName != "json")) {
        fsSync.mkdirSync(folderName);
    }

    let srcDir = path.join(rootPath, file);
    
    let desDir = path.join(rootPath, folderName, file)
    console.log(desDir);

    await fs.rename(srcDir, desDir);
}