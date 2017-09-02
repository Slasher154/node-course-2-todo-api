// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// Connect to the database
MongoClient.connect('mongodB://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    // Returns prevent the below message to run
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // Insert new doc into Users (name, age, location);
  // db.collection('Todos').find({
  //   _id: new ObjectID('59aad9461d539a91deb411c8')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({ name: 'Joe' }).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  // db.close();
});
