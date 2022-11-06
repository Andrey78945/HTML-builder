const fs = require("fs");
const path = require("path");
const { rm } = require('node:fs/promises');
const process = require("process");
const readline = require('readline');

const srcPath = path.join(__dirname, "./styles/");
const filePath = path.join(__dirname, "./project-dist/bundle.css");

let result = [];

const outStream = fs.createWriteStream(filePath);

fs.readdir(srcPath, (err, files) => {
    if (err) {
        throw new Error(err);
    }
    files.forEach(file => {

        fs.stat(path.join(srcPath, file), (err, stats) => {
            if (err) {
                throw new Error(err);
            }

            if (stats.isFile() && path.extname(file) === '.css') {
                const srcFile = readline.createInterface({
                    input: fs.createReadStream(path.join(srcPath, file)),
                    output: process.stdout,
                    terminal: false
                });
                srcFile.on('line', (line) => {
                    result.push(line);
                    outStream.write(`${line}\n`);
                });
            }
        })
    });
});










