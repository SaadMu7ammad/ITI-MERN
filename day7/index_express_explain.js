const express = require('express');

const app = express(); //create factory fun >> create obj from express

app.use(express.urlencoded({ extended: true }));
// app.use(express.json())
let arr = [
  { name: 'ahmed', age: 22 },
  { name: 'saad', age: 11 },
  { name: 'zezo', age: 33 },
];
app.use(express.static('public'));
app.use((req, res, next) => {
  console.log(req);

  console.log('middlewares');
  next();
});
app.get('/', (req, res) => {
  // console.log(req.body);
  res.sendFile('E:/Pro/ITI-MERN/day7/index.html');
  //   res.send('hi post');
});
app.get('/students/:id', (req, res) => {
  const id = req.params.id;
  res.send(arr[id]);
});
app.get('/students', (req, res) => {
  // console.log(req.body);
  res.sendFile('E:/Pro/ITI-MERN/day7/index.html');
  //   res.send('hi post');
});
app.post('/students', (req, res) => {
  console.log(req.body);
  res.end();
});

app.delete('/students', (req, res) => {
  res.send('deleted res');
});
app.listen(8080, () => {
  console.log('service on');
});
