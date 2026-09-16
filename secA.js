const fs = require('fs');

fs.writeFileSync('new.txt', 'Hello World');
console.log('File created successfully.');

fs.unlinkSync('new.txt');
console.log('File deleted successfully.');

fs.mkdirSync('newFolder');
console.log('Folder created successfully.');

fs.rmdirSync('newFolder');
console.log('Folder deleted successfully.');

if (fs.existsSync('example.txt')) {
    console.log('File exists.');
} else {
    console.log('File not found, need to create it.');
}