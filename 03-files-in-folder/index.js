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
            if (stats.isFile()) {
                let ext = path.extname(file);
                let name = path.basename(file);
                let index = name.indexOf('.')
                name = index === -1 ? name : name.slice(0, index);
                console.log(name, ext.slice(1), `${stats.size / 1024}Kb`)
            }
        })
    });
});
