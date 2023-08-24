const express = require('express');
const { model } = require('mongoose');
const router = express.Router()
const User = require('../models/Users');


router.get('/', async (req, res, next) => {
    const data = await User.find();
    console.log(data);
    res.json(data);
  });
  router.get('/:name', async (req, res, next) => {
    const data = await User.find({ name: req.params.name });
    console.log(data);
    res.json(data);
  });
  router.post('/', (req, res, next) => {
    console.log(req.body);
    User.create(req.body);
    res.send('data is saved');
  });
  router.delete('/:name', (req, res, next) => {
    console.log(req.params.name);
    // User.create(req.body)
    User.deleteOne({ name: req.params.name })
      .then(() => {
        res.redirect('/');
      })
      .catch((err) => {
        console.log(err);
      });
    // res.send("data is del")
  });
  router.patch('/:name', (req, res, next) => {
    console.log(req.params.name);
    // User.create(req.body)
    console.log(req.body);
    User.updateOne({ name: req.params.name }, { $set: req.body })
      .then(() => {
        res.redirect('/');
      })
      .catch((err) => {
        console.log(err);
      });
    // res.send("data is del")
  });
  
  module.exports=router