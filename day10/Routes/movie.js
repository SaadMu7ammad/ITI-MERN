const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

router.post('/', async (req, res) => {
  const m = await Movie.create(req.body);
  res.send('movie is saved');
});
router.get('/', async (req, res) => {
  const m = await Movie.find();
  res.send(m);
});
router.get('/:title', async (req, res) => {
  const m = await Movie.findOne({ title: req.params.title });
  res.send(m);
});
router.delete('/:title', async (req, res) => {
  const m = await Movie.deleteOne({ title: req.params.title });
  res.send('movie is deleted');
});

router.patch('/:title', async (req, res) => {
  const m = await Movie.updateOne({ title: req.params.title }, req.body);
  res.send('movie is updated');
});
module.exports=router