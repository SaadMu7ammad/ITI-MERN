const calc = require('./calc');

// fs.writeFile("test.txt", 'hi from node js', (err) => {
//     if(err)console.log(err);
// })

//path,encoding ,cb
// fs.readFile('test.txt', 'utf-8', (err, data) => {
//     if (err) console.log(err);
//     else console.log(data);

// })

const fs = require('fs');

let res = fs.readFileSync('students.txt', 'utf-8');
console.log('before appending ', res);

res = fs.appendFileSync('students.txt', 'Ahmed');
res = fs.readFileSync('students.txt', 'utf-8');
console.log('after appending ' + res);

fs.writeFileSync('students.txt', 'salah');
res = fs.readFileSync('students.txt', 'utf-8');
console.log('after writing ', res);
// console.log('first');
