const fs = require('fs');
const path = require("path");
const dirPath = path.join(__dirname, "./secret-folder/");

fs.readdir(dirPath, (err, files) => {
    if (err) {
        throw new Error(err);
    }
    files.forEach(file => {
        fs.stat(path.join(dirPath, file), (err, stats) => {
            if (err) {
                throw new Error(err);
            }
            if (stats.isFile()) console.log(file, `${stats.size}Kb`)
        })
    });
});
