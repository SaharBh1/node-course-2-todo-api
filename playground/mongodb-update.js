const {MongoClient,ObjectId}=require('mongodb')
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){return console.log('unable to connect with mongo server')}
		console.log('connecting to mongo server')
	//db.collection('Todos').findOneAndUpdate({_id:new ObjectId('5aa7c2d4bacd16264c4bc35f')},
	//	{$set:{completed:true}},{returnOriginal:false}).then((result)=>{
	//		console.log(result)
	//	})

	db.collection('Users').findOneAndUpdate({_id:new ObjectId('5aa7e7b16756acf4ce7fd2ba')},
		{$set:{name:'mohamed'},
		$inc:{age:30}},
		{returnOriginal:false}).then((result)=>{
		console.log(result)
	})
})