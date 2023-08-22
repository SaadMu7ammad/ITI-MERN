const { MongoClient } = require('mongodb');

// Connection URL
const url =
  'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1'; // Update with your MongoDB server URL

// Database Name
const dbName = 'day8db'; // Update with your database name

// Create a new MongoClient
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect().then(() => {
    console.log('Connected to MongoDB');
    const db = client.db(dbName);
    db.collection('users')
      .find()
      .toArray()
      .then((res) => {
        // console.log(res);
      });
     "----------------"
      db.collection('users')
      .find({paid:'Y'})
      .toArray()
      .then((res) => {
        // console.log(res);
      });
      "----------------"
      db.collection('users')
      .find({'cost.currency': 'NOK'})
      .toArray()
      .then((res) => {
        // console.log(res);
      });
      "----------------"
      db.collection('users')
      .find({'items.product': 'p2'})//not sure
      .toArray()
      .then((res) => {
        console.log(res);
      });
  });
// Access a specific database
