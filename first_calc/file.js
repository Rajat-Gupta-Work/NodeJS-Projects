const fs = require("fs")

//Sync...
//fs.writeFileSync("./text.txt", "hello world");

//Async...
//fs.writeFile("./text.txt", "hello world again", (err) => {});

//const result = fs.readFileSync("./contact.txt", "utf8")
//console.log(result);

/*fs.readFile("./contact.txt", "utf8", (err, result) => {
    if (err) {
        console.log("error", err);
    } else {
        console.log(result)
    }
})*/

fs.appendFileSync("./text.txt", "Hello \n")