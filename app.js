const express = require('express');
const app = express();
const mongoose = require('mongoose');
const postsRoute = require('./routes/posts');

// Env
require('dotenv/config');

// Middleware

app.use(express.json());

// app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: true }));

app.use('/posts', postsRoute);
// Routes
app.get('/', (req, res) => {
  res.send('Test');
});

// Port
app.listen(3000);

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log('connected to DB!')
);
