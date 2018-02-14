const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// Read file
const contents = fs.readFileSync(filename, 'utf8');

// Set up regex
const re = new RegExp("(https?:\/\/).+?(?=[\"|'])", 'g');

// Print all matches
console.log(contents.match(re));
console.log(contents.match(re).length)
