/* eslint-disable no-console */

// import modules
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const { PORT, DB_PATH } = require('./config');

// setup express app
const app = express();
app.use(cors());
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// setup routes
app.use('/api/users/', require('./api/users'));
app.use('/api/transactions/', require('./api/transactions'));

// connect to db and start listening
mongoose.connect(DB_PATH, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log('couldn\'t connect to mongodb');
    console.log(err);
    return;
  }
  console.log('connected to mongodb');
  // start listening
  app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
});
