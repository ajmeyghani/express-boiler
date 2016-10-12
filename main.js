const express = require('express');
const morgan = require('morgan');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const DB_NAME = 'auth-demo';
const MONGO_URL = `mongodb://localhost:27017/${DB_NAME}`;
const mongoose = require('mongoose');
mongoose.connect(MONGO_URL);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/login', (req, res) => {
  res.render('login.ejs', {message: ''});
});
















const User = require('./models/user');







// User.findOne({name: 'Tom'}, function(err, user) {
//   if (err) {
//     throw err;
//   }
//   console.log(user.name);
// });


app.listen(8189, a => console.log('running at port 8189'));
