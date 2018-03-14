//const MongoClient=require('mongodb').MongoClient
const{MongoClient,ObjectId}=require('mongodb')
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){return console.log('unable connect to mongo server')}

	console.log('connecting with mongo server')

/*db.collection('Todos').find({
	_id:new ObjectId('5aa7c2d4bacd16264c4bc35f')
}).toArray().then((docs)=>{
	console.log('Todos');
	console.log(JSON.stringify(docs,undefined,2))
},(err)=>{
	if(err){console.log('unable to fetchTodos',err)}
})
	//db.close()
})*/

/*db.collection('Todos').find().count().then((count)=>{
	console.log(`the count is:${count}`)
},(err)=>{
	if(err){console.log('unable to count todos'),err}
})
})*/
db.collection('Users').find({name:'sahar'}).toArray().then((docs)=>{
	console.log(JSON.stringify(docs,undefined,2))
},(err)=>{
	if (err){console.log('unable to count',err)}
})
})