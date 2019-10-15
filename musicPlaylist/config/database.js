// import mongodb 
let MongoClient = require('mongodb').MongoClient;
// let Mongo = require('mongoose');
let url = "mongodb://0.0.0:27017/playlist";

// connect to mongodb database on local machine
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


// Add a new artist
addNewArtist = () => {
  MongoClient.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }, (err, db) => {
    if (err) throw err;
    let databaseObject = db.db("playlist");
    databaseObject.collection("studyPlaylist").insertOne(req.body.addArtist, (err, res) => {
      if (err) throw err;
      console.log("Playlist created!");
      db.close();
    });
  });
}

// edit artist by name
editArtist = () => {
  let objectID = require('mongodb').ObjectID;
  MongoClient.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }, (err, db) => {
    if (err) throw err.stack;

    let databaseObject = db.db('playlist');
    let updatedArtist = {
      $set: {
        artist: req.body.editArtist
      }
    };
    let artistID = req.body.editArtistID

    databaseObject.collection('studyPlaylist')
      .updateOne({
        '_id': objectID(artistID.delete)
      }, updatedArtist, (err, result) => {
        if (err) throw 'error updating artist';
        db.close()

      });
  });
};

// display all artists in database 
viewArtists = () => {
  let artistList = [];
  MongoClient.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }), (err, db) => {
    if (err) throw err.stack;
    let databaseObject = db.db('playlist');
    let allArtists = databaseObject.collection('studyPlaylist').find({})

    for (i in allArtists) {
      artistList.push(allArtists[i])
    }
    db.close()

  }
}

deleteArtistById = () => {
  let id = req.body.deleteArtist
  MongoClient.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }), (err, db) => {
    if (err) throw err.stack;
    let databaseObject = db.db('playlist');
    databaseObject.collection('studyPlaylist')
      .deleteOne({
        '_id': objectID(id.id)
      }, (err, res) => {
        if (err) throw err.stack
        db.close()
      })
  }
}

module.exports = {
  addNewArtist,
  editArtist,
  viewArtists,
  deleteArtistById
}