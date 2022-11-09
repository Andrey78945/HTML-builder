const path = require("path");
const process = require("process");
const fs = require("fs");
const readline = require('readline');

const filePath = path.join(__dirname, "out.txt");

const outStream = fs.createWriteStream(filePath);

process.stdout.write(`Hi! Input your data to save it in the file out.txt
When you finish type 'exit' or press Ctrl + C\n`);

const rl = readline.createInterface({
    input: process.stdin,
})

function ask() {
    rl.question("", (answer) => {
        if (answer === "exit") {
            console.log("Buy");
            process.exit(1)
        } else {
            outStream.write(`${answer}\n`)
        }
        ask()
    })
}
ask()

if (process.platform === "win32") {
    require('readline').createInterface({ input: process.stdin, output: process.stdout }).on('SIGINT', () => process.emit('SIGINT'))
}

process.on('SIGINT', () => {
    console.log("Buy");
    process.exit()
});
