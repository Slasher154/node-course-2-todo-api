// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// Connect to the database
MongoClient.connect('mongodB://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    // Returns prevent the below message to run
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // update
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('59aad9461d539a91deb411c8')
  // }, {
  //   $set: {
  //     completed: false
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  // inc
  // update
  db.collection('Users').findOneAndUpdate({
    name: 'Jen'
  }, {
    $inc: {
      age: 3
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});
