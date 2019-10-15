const express = require('express');
// let bodyParser = require('body-parser');
const router = require('./api/api-routes')
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors')
let url = "mongodb://localhost:27017/playlist";
// initialize express app
let app = express();

// init mongoose
MongoClient.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }, (err, client) => {
    if (!err) console.log("Connected to Database");
    if (err) throw err
  })
  
  // create table(collection) -  create new playlist
  MongoClient.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }, function (err, db) {
    if (err) throw err;
    var databaseObject = db.db("playlist");
    databaseObject.createCollection("studyPlaylist"), (err, result) => {
      if (err) throw err.stack;
      console.log('Playlist created...');
      db.close();
    };
  });

//Create application
app.use(express.urlencoded({extended: false}));
app.use(express.json())

//state the path that express will follow to
app.use(express.static('public'));
app.use(router)

app.listen(3009, () => {
    let host = "http://127.0.0.1:3009"
    console.log('server running at: ', host);
})
