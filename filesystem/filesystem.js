var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});

// 


// Writing data to a file
fs.writeFile('example.txt', 'Hello, world!', (err) => {
  if (err) throw err;
  console.log('File created and data written.');
});

//reading from file//
// Reading data from a file
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('File content:', data);
});

// Appending data to a file
fs.appendFile('example.txt', '\nAppended text.', (err) => {
  if (err) throw err;
  console.log('Data appended to file.');
});





