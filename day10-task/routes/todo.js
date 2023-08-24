const express = require('express');
const router = express.Router();
const todo = require('../models/todo');
const User = require('../models/users'); // Replace with your model paths

router.get('/:userId', (req, res, next) => {
  todo
    .find({ userId: req.params.userId })
    .populate('userId')
    .exec()
    .then((result) => {
      // console.log(result);
      res.send(result);
    });
});

router.post('/', (req, res, next) => {
  todo
    .create(req.body)
    .then(() => {
      console.log('added successfully');
      res.redirect('added successfully');
    })
    .catch((err) => {
      console.log(err);
    });
  // console.log(object);
});
router.patch('/:todoId', (req, res, next) => {
    todo
      .updateOne({ _id: req.params.todoId },req.body)
      .then((result) => {
        // console.log(result);
        res.send(result);
      });
});
  
router.delete('/:todoId', (req, res, next) => {
    todo
      .deleteOne({ _id: req.params.todoId })
      .then((result) => {
        // console.log(result);
        res.send("deleted successfully");
      });
  });
// router.post('/login', (req, res, next) => {
//   // console.log(req.body.password);
//   todo.findOne({ username: req.body.username })
//     .then((result) => {
//       //   console.log(res);
//       if (result.password == req.body.password) {
//         console.log('login successfully');
//         // res.send('hello '+req.body.username)
//         res.redirect('/todo');
//       } else {
//         console.log('not correct password');
//         res.send('not correct password');
//         res.redirect('/');
//       }
//     })
//     .catch((err) => {
//       console.log('not found such user');
//       res.send('cant found');
//     });
//   // console.log(object);
// });
// router.get('/:username', (req, res, next) => {
//   // res.send('logged successfully');
//   // res.send("hello wfjs;a")
//   todo.find({ username: req.params.username }).then((result) => {
//     // console.log(result);
//     res.send(result);
//   });
// });
// router.patch('/:username', (req, res, next) => {
//   todo.updateOne({ username: req.params.username }, req.body).then(() => {
//     console.log('edited successfully');
//     res.redirect(`/todo/${req.params.username}`);
//   });
//   // console.log(object);
// });
// router.delete('/:username', (req, res, next) => {
//     todo.deleteOne({ username: req.params.username }).then(() => {
//       console.log('deleted successfully');
//       res.redirect(`/todo`);
//     });
//     // console.log(object);
//   });
module.exports = router;
