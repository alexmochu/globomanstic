const router = require('express').Router();
const mongoose = require('mongoose');
const Transaction = require('../models/transaction');

router.get('/:year/:month', (req, res) => {
  const userId = req.get('userId');
  const { year, month } = req.params; // months are zero based [like in indexes]
  const startDate = new Date(Date.UTC(year, month - 1, 1, 0, 0, 0, 0));
  const endDate = new Date(Date.UTC(year, month, 1, 0, 0, 0, 0));

  const query = {
    userId,
    transactionDate: { $gte: startDate, $lt: endDate },
  };

  Transaction.find(query)
    .sort({ transactionDate: 1 })
    .exec()
    .then(docs => res.send(docs))
    .catch(err => res.status(500).send(err));
});

router.get('/balance/:year/:month', (req, res) => {
  const userId = req.get('userId');
  const { month, year } = req.params;
  const endDate = new Date(Date.UTC(year, month - 1, 1));
  const pipeline = [
    {
      $match: {
        userId: mongoose.Types.ObjectId(userId),
      },
    },
    {
      $match: {
        transactionDate: { $lt: endDate },
      },
    },
    {
      $group: {
        _id: null,
        charges: { $sum: '$charge' },
        deposits: { $sum: '$deposit' },
      },
    },
  ];

  Transaction.aggregate(pipeline).exec()
    .then(docs => res.send(docs))
    .catch(err => res.status(500).send(err));
});

router.post('/', (req, res) => {
  const userId = req.get('userId');
  const transaction = new Transaction(Object.assign(req.body, { userId }));
  transaction.save((err, doc) => {
    if (err) return res.status(400).send(err);
    return res.send(doc);
  });
});

module.exports = router;
