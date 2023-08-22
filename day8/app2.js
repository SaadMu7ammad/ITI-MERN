const { MongoClient } = require('mongodb');

// Connection URL
const url =
  'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1'; // Update with your MongoDB server URL

// Database Name
const dbName = 'FacultySystemDB'; // Update with your database name

// Create a new MongoClient
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect().then(() => {
  console.log('Connected to MongoDB');
  const db = client.db(dbName);
  db.collection('student')
    .find()
    .toArray()
    .then((res) => {
      // console.log(res);
    });
  // --------------
  db.collection('student')
    .find({ FirstName: 'ahmed' })
    .toArray()
    .then((res) => {
      // console.log(res);
    });
  // --------------
  db.collection('student')
    .find({ IsFired: true })
    .toArray()
    .then((res) => {
      // console.log(res);
    });
  // --------------
  db.collection('student')
    .find({ FirstName: 'salah' }, { FirstName: 1, LastName: 1, IsFired: 1 })
    .toArray()
    .then((res) => {
      // console.log(res);
    });
  // --------------
  db.collection('student')
    .updateOne({ FirstName: 'saad' }, { $set: { LastName: 'mohamed' } })
    // .toArray()
    .then((res) => {
      // console.log(res);
    });
  // --------------
  db.collection('student')
    .deleteMany({ IsFired: true } )
    // .toArray()
    .then((res) => {
      console.log(res);
    });
    // --------------
  db.collection('temp').drop()
   // --------------
// db.dropDatabase()
});
// Access a specific database
