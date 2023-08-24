const express = require('express');
const router = express.Router();
const Users = require('../models/users');
router.get('/', (req, res, next) => {
  // res.send('logged successfully');
  // res.send("hello wfjs;a")
  Users.find({}, { firstName: 1, _id: 0 }).then((result) => {
    // console.log(result);
    res.send(result);
  });
});
router.post('/register', (req, res, next) => {
  Users.create(req.body).then(() => {
    console.log('added successfully');
    res.redirect('/users');
  });
  // console.log(object);
});
router.post('/login', (req, res, next) => {
  // console.log(req.body.password);
  Users.findOne({ username: req.body.username })
    .then((result) => {
      //   console.log(res);
      if (result.password == req.body.password) {
        console.log('login successfully');
        // res.send('hello '+req.body.username)
        res.redirect('/users');
      } else {
        console.log('not correct password');
        res.send('not correct password');
        res.redirect('/');
      }
    })
    .catch((err) => {
      console.log('not found such user');
      res.send('cant found');
    });
  // console.log(object);
});
router.get('/:username', (req, res, next) => {
  // res.send('logged successfully');
  // res.send("hello wfjs;a")
  Users.find({ username: req.params.username }).then((result) => {
    console.log(result);
    res.send(result);
  });
});
router.patch('/:username', (req, res, next) => {
  Users.updateOne({ username: req.params.username }, req.body).then(() => {
    console.log('edited successfully');
    res.redirect(`/users/${req.params.username}`);
  });
  // console.log(object);
});
router.delete('/:username', (req, res, next) => {
  Users.deleteOne({ username: req.params.username }).then(() => {
    console.log('deleted successfully');
    res.redirect(`/users`);
  });
  // console.log(object);
});
module.exports = router;
