//const MongoClient=require('mongodb').MongoClient
const {MongoClient,ObjectId}=require('mongodb')
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){return console.log('unable to connect to mongo server')}
		console.log('connecting with mongo server')
 /*db.collection('Todos').insertOne({
 	text:'something to do here',
 	completed:false
 },(err,result)=>{
 	if(err){console.log('unable to insert todo',err)}
 		console.log(JSON.stringify(result.ops,undefined,2))
 })
 db.collection('Users').insertOne({
 	name:'sahar',
 	age:30,
 	location:'tunis'
 },(err,result)=>{
 	if(err){return console.log('unable to insert user',err)}
 		console.log(result.ops)
 })
*/
	db.close()
})