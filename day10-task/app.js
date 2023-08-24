const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const cors = require('cors');
const URL =
  'mongodb://127.0.0.1:27017/ITIProject?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1';
// const User = require('./models/Users');
// app.use(cors());

app.use(express.json()); //decode app/json
app.use(express.urlencoded({ extended: false })); //form
const usersRouter = require('./routes/users');
const todoRouter = require('./routes/todo');
// const movieRouter = require('./Routes/movie');
app.use('/users', usersRouter);
app.use('/todo', todoRouter);
// app.use('/movies', movieRouter);
mongoose.connect(URL).then(() => {
  console.log('litening on');
  app.listen(8080);
});
// const user = new User({
//   name: 'ibrahim',
//   age: 22,
//   address: 'alex',
// });
// user.save();
// app.get('/', (req, res) => {
//   res.send('hello world');
// });
