//queries
//grades:[{score:2}]
// .find({'grades.score':2})
// .find({'grades.score':{$gte:2}})

//           filteration &            projection
// .find({'grades.score':{$gte:2}},{address:1})

// .find({$and:[{'x':'y'},{'address.zipcode':'10321'}]})//where x=y and zipcode=10321
// .find({$or:[{'x':'y'},{'address.zipcode':'10321'}]})//where x=y or zipcode=10321


// .find({$and:[{'country':'italy'},{year:{$gte:1990}}]})

// .find({pages:{$and:[{pages:{$gte:500}},{pages:{$lte:1000}}]}})


//.find('col':1).limit(5)
//.find('col':1).skip(5).limit(5)


// .find({'grades.score':{$gte:90}})

// .find({$and:[{cuisine:{$ne:"america"}},{'arr.0':90}]})
// .find({$and:[{booro:'bronox'},{$or:[{cuisine:'american},{cuisine:'korean}]}]})


// .find({$or:[{booro:'bronox'},{booro:'bronuy'}]},{id:0,age:1,address:1})

// .find({$nor:[{address:'usa'},{address:'uk'}]})//not uk or usa

//in for searching in array $in:{}
//.explain() tell u the time exec

//createIndx({borough:1})

//