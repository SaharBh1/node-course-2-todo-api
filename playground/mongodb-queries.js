const {mongoose}=require('./../server/db/mongoose')
const {Todo}=require('./../server/models/todo')
const {ObjectID}=require('mongodb')
const{user}=require('./../server/models/user')

/*var id='5aaaa45c357cb71ca8ab80da'
if(!ObjectID.isValid(id)){console.log('Id not valid')}
Todo.find({
	_id:id
}).then((todos)=>{
	console.log(todos)
})

Todo.findOne({
	_id:id
}).then((todo)=>{
	console.log(todo)
})
Todo.findById(id).then((todo)=>{
	if(!todo){return console.log('todo not found')}
	console.log(todo)
}).catch((e)=> console.log(e))*/
var id='5aa96590a663ce0744597b0b'
user.findById(id).then((user)=>{
	if(!user){return console.log('user not found')}
	console.log(JSON.stringify(user,undefined,2))
},(e)=>{console.log(e)})