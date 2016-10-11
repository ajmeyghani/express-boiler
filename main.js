const express = require('express');
const logger = require('morgan');
const app = express();

const DB_NAME = 'auth-demo';
const MONGO_URL = `mongodb://localhost:27017/${DB_NAME}`;
const mongoose = require('mongoose');
mongoose.connect(MONGO_URL);

const User = require('./models/user');

app.use(logger('dev'));

User.findOne({name: 'tom'}, function(err, user) {
  if (err) {
    throw err;
  }
  console.log(user.name);
});

