const path = require('path');

// Example paths
const directory = '/home/user/dir';
const fileName = 'file.txt';

// Join paths
const filePath = path.join(directory, fileName);
console.log('Joined Path:', filePath); // Output: /home/user/dir/file.txt

// Resolve path
const absolutePath = path.resolve('file.txt');
console.log('Resolved Path:', absolutePath); // Output: Absolute path to file.txt

// Directory name
console.log('Directory Name:', path.dirname(filePath)); // Output: /home/user/dir

// Base name
console.log('Base Name:', path.basename(filePath)); // Output: file.txt

// Extension name
console.log('Extension Name:', path.extname(filePath)); // Output: .txt

// Parse path
const parsed = path.parse(filePath);
console.log('Parsed Path:', parsed);
/*
Output:
{
  root: '/',
  dir: '/home/user/dir',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
}
*/

// Format path
const formatted = path.format(parsed);
console.log('Formatted Path:', formatted); // Output: /home/user/dir/file.txt
