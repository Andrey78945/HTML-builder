const fs = require('fs');
const path = require("path");
const dirPath = path.join(__dirname, "./secret-folder/");

console.log(dirPath);

fs.readdir(dirPath, (err, files) => {
    files.forEach(file => {
        fs.stat(path.join(dirPath, file), (err, stats) => {
            if (err) {
                console.error(err)
                return
            }
            if (stats.isFile()) console.log(file, `${stats.size}Kb`)
        })
    });
});
