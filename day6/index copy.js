const calc = require('./calc');


const fs = require('fs');
fs.readFile('students.txt', 'utf-8', (err, data) => {
  if (err) console.log(err);
  else console.log('read before ' + data);
});
fs.appendFile('students.txt', 'salah', (err) => {
  if (err) console.log(err);
});
fs.readFile('students.txt', 'utf-8', (err, data) => {
  if (err) console.log(err);
  else console.log('read after append ' + data);
});
fs.writeFile('students.txt', 'hi from node js', (err) => {
  if (err) console.log(err);
});
fs.readFile('students.txt', 'utf-8', (err, data) => {
  if (err) console.log(err);
  else console.log('read after write ' + data);
});
