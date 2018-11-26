let express =  require('express');
let cors = require('cors');
let https = require('https');
let fs = require('fs');
let path = require('path');
let bodyParer = require('body-parser');

/* eslint-disable no-console */

const app = express();
app.use(cors());
app.use(bodyParer.json({limit: '5000mb'}));

// check nessasary env var

if (process.env.JWT_SECRET == null) {
  console.log('please check env var JWT_SECRET. Default will be used.');
  process.env.JWT_SECRET = "abc";
}

if (process.env.MONGO_URI == null) {
  console.log('please check env var MONGO_URI. Default will be used.');
  process.env.MONGO_URI = "mongodb://localhost:27017/best-buddhists-sites";
}

// if in production, serve the static file at client/build

if (process.env.NODE_ENV == "production") {
  app.use('/', express.static('client/build'))
}


app.use((req, res, next) => {
  req.JWT_SECRET = process.env.JWT_SECRET;
  next();
});

let MongoClient = require('mongodb').MongoClient;
MongoClient.connect(process.env.MONGO_URI).then((db) => {
  require('./routes/auth/registration')(app, db);
  require('./routes/auth/login')(app, db, process.env.JWT_SECRET);
  require('./routes/sites')(app, db, process.env.JWT_SECRET);
  require('./routes/user')(app, db);
});

let PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`HTTP server is running at port ${PORT}`);
});
