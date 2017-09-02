// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// Connect to the database
MongoClient.connect('mongodB://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    // Returns prevent the below message to run
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result.result);
  // })

  // deleteOne
  db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    console.log(result.result);
  })

  // findOneAndDelete
  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result);
  })

  // db.close();
});
