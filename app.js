
const express=require('express');
const mongoose=require('mongoose');
const app=express();
const dotenv=require('dotenv');
const bodyParser=require('body-parser');
dotenv.config();
app.use(bodyParser.json());
/*
require('dotenv/config');
*/
//import routes
const postRoute=require('./routes/post');
app.use('/posts',postRoute);


//routes
app.get('/',(req,res)=>{

	res.send('We are on home');


});


/*

//middleware
app.use(auth);


app.use('/posts',()=>{

	console.log('middleware running');
});
//routes

app.get('/',(req,res)=>{

	res.send('we are on home');
});

app.get('/posts',(req,res)=>{

	res.send('we are on posts');
});*/

//connect to db

mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true},()=>console.log('connected to db'));

app.listen(4000,()=>console.log('Server in up and running'));





/*
//in codepen


fetch('http://localhost:3000/posts')
.then(result => {
	console.log(result);
})

//or

fetch('http://localhost:3000/posts')
.then(result => {
	return result.json();
})
.then(data => {
	console.log(data);
})





//cors policy
npm install cors
>app.js
const cors=require('cors');
//middlewares
app.use(cors());
*/