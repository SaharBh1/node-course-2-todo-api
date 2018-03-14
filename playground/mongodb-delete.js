const{MongoClient,ObjectId}=require('mongodb')
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){return console.log('unable to connect to mongo server')}
		console.log('connecting with mongo server')
	//db.collection('Todos').deleteMany({text:'eat lunch'}).then((result)=>{
	//})
	//db.collection('Todos').deleteOne({text:'eat lunch'}).then ((result)=>{
	//	console.log(result)
	//})
	//db.collection('Todos').findOneAndDelete({text:'eat lunch'}).then((result)=>{
	//	console.log(result)
	//})
	//db.collection('Users').deleteMany({name:'sahar'}).then((result)=>{
	//	console.log(result)
	//})
	//db.collection('Users').findOneAndDelete({name:'sahar'}).then((result)=>{
		//console.log(result)
	//})
	db.collection('Users').deleteOne({_id:new ObjectId('5aa7e7716756acf4ce7fd2a5')}).then((result)=>{
		console.log(JSON.stringify(result,undefined,2))
	})
})