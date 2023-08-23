// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('day8db');
// db.getCollection('users').find({"year": {$gt:2017}  })

// Create a new document in the collection.
db.getCollection('users').find();

//Retrieve the total number of delivery days, grouped by year &
//retrieve the results only after 2017;
//  (Hint: use aggregation pipelines)
db.getCollection('users').aggregate([
  { $group: { _id: '$year', total: { $sum: 1 } } },
  { $match: { _id: { $gt: 2017 } } },
]);

// //Retrieve the total number of delivery days, grouped by year;
// // retrieve the results only paid
db.getCollection('users').aggregate([
  {
    $match: { paid: 'Y' },
  },
  { $group: { _id: '$year', totalDeliveyDays: { $sum: '$delivery_days' } } },
]);

// //Retrieve the total number of price, grouped by currency

db.getCollection('users').aggregate([
  { $group: { _id: '$cost.currency', totalPrice: { $sum: '$cost.price' } } },
]);
// //Calc how many record have color black

db.getCollection('users').aggregate([
  { $match: { 'items.colours': 'black' } },
  { $group: { _id: null, totalCount: { $sum: 1 } } },
]);
// //Retrieve total all price from year 2017 to 2018

db.getCollection('users').aggregate([
  { $match: { year: { $in: [2017, 2018] } } },

  { $group: { _id: null, totalPrice: { $sum: '$cost.price' } } },
]);

// //How many product paid from 2018 to 2020?
db.getCollection('users').aggregate([
  { $match: { year: { $in: [2018,2019, 2020] } } },
  { $match: { paid: 'Y' } },
  { $group: { _id: null, count: { $sum: 1 } } },
]);

// //How many product currency nok and price greater than 20?

db.getCollection('users').aggregate([
  { $match: { 'cost.currency': 'NOK' } },
  { $match: { 'cost.price': { $gt: 20 } } },
  { $group: { _id: null, Prodcount: { $sum: 1 } } },
]);

// // what is average delivery in 2020
db.getCollection('users').aggregate([
  { $match: { year: 2020 } },
  { $group: { _id: null, avgDays: { $avg: '$delivery_days' } } },
]);

// // what is average price when delivery less than 4
db.getCollection('users').aggregate([
  { $match: { delivery_days: { $lt: 4 } } },
  { $group: { _id: null, avgPrice: { $avg: '$cost.price' } } },
]);
