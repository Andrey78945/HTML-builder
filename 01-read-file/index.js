const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "text.txt");
let result = "";

const stream = new fs.ReadStream(filePath);

stream.on("readable", () => {
    let data = stream.read();
    if (data != null) result += data.toString();
});

stream.on("end", () => console.log(result));