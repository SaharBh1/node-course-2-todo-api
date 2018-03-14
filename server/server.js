var{mongoose}=require('./db/mongoose')
var{user}=require('./models/user')
var{Todo}=require('./models/todo')
var express=require('express')
var bodyParser=require('body-parser')
var app=express()
app.use(bodyParser.json())
app.post('/todos',(req,res)=>{
	var todo=new Todo({text:req.body.text})

todo.save().then((doc)=>{
	res.send(doc)
},(err)=>{
	res.status(400).send(err)
})
})

app.listen(3000,()=>{
	console.log('started on port 3000')
})
/*	var Todo=mongoose.model('Todo',{text:{type:String,
		required:true,
		minlength:1,
		trim:true
	},
	completed:{type:Boolean,default:false},
	completedAt:{type:Number,default:null}})

	//var newTodo=new Todo({text:"cooking the dinner"})

	//newTodo.save().then((docs)=>{
    //console.log('saved is',docs)
	//},(err)=>{
	//console.log('unable to save todo')
	//})


	var otherTodo=new Todo({text:' true   ',
	completed:true,
	completedAt:123})

	otherTodo.save().then((doc)=>{
		console.log('saved todo',doc)
	},(err)=>{
		console.log('unable to save  Todo')
	})


   var user=mongoose.model('user',{email:{
   	type:String,
   	required:true,
   	minlength:1,
   	trim:true
   }
	
})
   var newUser=new user({email:'saharbh50@gmail.com'})

   newUser.save().then((doc)=>{
   	console.log('user saved',doc)
   },(err)=>{console.log('unable to save user',err)})*/
