const fs = require('fs');
const { rmdir, rm } = require('fs/promises');
const { mkdir } = require('node:fs/promises');
const path = require("path");
const dirPath = path.join(__dirname, "./copyDir/");
const srcPath = path.join(__dirname, "./files/");

async function removeFiles() {
    const dirDeleting = await rm(dirPath, { recursive: true });
    return dirDeleting;
}

async function makeDirectory() {
    const clearDir = removeFiles().catch(console.error);
    await clearDir;

    const dirCreation = await mkdir(dirPath, { recursive: true });

    return dirCreation;
}

fs.readdir(srcPath, async (err, files) => {
    const makeDir = makeDirectory().catch(console.error);
    await makeDir;
    if (err) {
        throw new Error(err);
    }
    files.forEach(file => {
        fs.stat(path.join(srcPath, file), (err, stats) => {
            if (err) {
                throw new Error(err);
            }
            if (stats.isFile()) {
                let name = path.basename(file);
                fs.copyFile(path.join(srcPath, name), path.join(dirPath, name), (err) => { return; })
            }
        })
    });
});