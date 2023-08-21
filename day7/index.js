const express = require('express');

const app = express(); //create factory fun >> create obj from express

app.use(express.urlencoded({ extended: true }));
// app.use(express.json())
let arr = [
  { name: 'ahmed', age: 22 },
  { name: 'saad', age: 11 },
  { name: 'zezo', age: 33 },
];
let globalId,globalName,globalAge;
app.use(express.static('public'));
// app.use((req, res, next) => {
  // console.log(req.body.userName);
  // console.log(req.body.age); //false coz its empty
  // if (req.body.age) {
  //   console.log('true');
  // }
  // console.log(req.id);
  // globalId = (+req.id)
  // globalName = (req.userName)
  // globalAge = (+req.age)
  // console.log(typeof(globalId));
  // console.log('middlewares');
  // next();
// });

app.get('/welcome', (req, res) => {
  res.sendFile('E:/Pro/ITI-MERN/day7/index.html');
});
app.post('/login', (req, res) => {
  if (req.body.userName && req.body.age) {
    arr.push({ name: req.body.userName, age: req.body.age });
    res.redirect('/');
  } else {
    res.send(`<h2>welcome ${req.body.userName} </h2>`);
  }
});

app.listen(8080, () => {
  console.log('service on');
});
////////////////////////sec task

app.get('/', (req, res) => {
  res.send(arr);
});
app.get('/push', (req, res) => {
  res.sendFile('E:/Pro/ITI-MERN/day7/index.html');
});
app.get('/delete/:id', (req, res) => {
  const id = req.params.id;
  if (isFinite(id)) {
    arr.splice(id, 1);
    res.redirect('/');
  } else {
    res.send('Failed To delete');
  }
});
app.get('/get/:id', (req, res) => {
  const id = req.params.id;
  if (isFinite(id)) {
    res.send(arr[id]);
  } else {
    res.send('Failed To show');
  }
});
 
app.get('/update/:id', (req, res) => {
  const id = req.params.id;
  if (isFinite(id)) {
    console.log(id);
    globalId = id;
    // req.id = id;
    // console.log("name "+globalName);
    res.sendFile('E:/Pro/ITI-MERN/day7/edit.html');
  } else {
    res.send('Failed To show1');
  }
});

app.post('/update', (req, res) => {
  // const id = req.params.id;
  // console.log(globalId );
  if (isFinite(globalId)) {
    arr[globalId].name=req.body.userName
    arr[globalId].age=req.body.age
    res.redirect('/');
  } else {
    res.send('Failed To show1');
  }
});
// app.post('/login', (req, res) => {
//  res.send(`<h2>welcome ${req.body.userName} </h2>`)
// })
