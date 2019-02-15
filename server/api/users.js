/* eslint-disable no-console */
const router = require('express').Router();
const User = require('../models/user');

router.get('/:id', (req, res) => {
  User.findById(req.params.id).exec()
    .then(doc => res.send(doc))
    .catch(err => res.status(500).send(err));
});

router.post('/', (req, res) => {
  const user = new User(req.body);
  user.save((err, doc) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.send(doc);
    }
  });
});

router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, { isActive: req.body.isActive }, (err, doc) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.send(doc);
    }
  });
});

module.exports = router;
