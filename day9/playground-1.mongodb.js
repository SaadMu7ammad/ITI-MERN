
use('FacultySystemDB');
db.getCollection('faculty').createIndex({facultyName:1})
// db.getCollection('faculty').getIndexes()
db.getCollection('faculty').find({ facultyName: "pharmacy" }).explain('executionStats')
db.getCollection('student').find({ 'name': "saad" }, { course: 1, _id: 0 })


db.getCollection('student').find({ 'name': "ahmed" }, { "faculty":1,_id:0})
// db.getCollection('student').aggregate([$unwind:'$faculty'])

  