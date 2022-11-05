const path = require("path");
const process = require("process");
const fs = require("fs");
const readline = require('readline');
//const { stdin, stdout } = require("process");

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
            process.exit(1)
        } else {
            outStream.write(`${answer}\n`)
        }
        ask()
    })
}
ask()

//const inStream = readLine.createInterface(stdin);

//inStream.on('data', () => outStream.write(inStream.read()))

// inStream.on('data', () => console.log("eeeee"))

// function finishScript() {
//     process.stdout.write("Good by!");
// }
/*
while (true) {
    let string = inStream.line;
    if (string === "exit") {
        finishScript();
        break;
    }
    outStream.write(string);
}
*/
// process.stdin.on("data", data => {
//     data = data.toString();

//     if (data.trim() === 'exit') {
//         process.exit();
//     } else {
//         outStream.write(data);
//     }
//     process.stdout.write(`${data} data\n`)
//     process.stdout.write(` ${typeof data} type\n`)
//     process.stdout.write(` ${data === 'exit'} bool\n`)
// })

if (process.platform === "win32") {
    require('readline').createInterface({ input: process.stdin, output: process.stdout }).on('SIGINT', () => process.emit('SIGINT'))
}

process.on('SIGINT', () => process.exit());
