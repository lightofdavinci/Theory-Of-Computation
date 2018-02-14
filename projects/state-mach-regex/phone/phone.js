var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// This code reads a line at a time from stdin

rl.on('line', function (line) {
    // Come up with the phone regex
    // Find matches
    // If match found, print number with no spaces, parens, or dashes
    const test = line.match(/(\d{3})[^0-9]+?(\d{3})[^0-9]+?(\d{4})$/g);
    if (test !== null) {
      console.log(test[0].replace(/[^0-9]/g, ''));
    } else {
      // Else print that no number was found
      console.log("no number was found")
    } 
});
