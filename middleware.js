
/*
  Middleware functions are occur in between req and res 
  syntax-app.use(path(req,res,next))
  next() - next() function used for calling the next middleware function when the current middleware is not determined
*/


const express = require('express')
const app = express()

app.use((req,res,next)=>{
    console.log('first middleware')
    next()
})

app.use((req,res,next)=>{
    console.log('second middleware')
    next()
})

app.use((req,res,next)=>{
    console.log('third middleware')
    res.send('<h1>welcome Gayu</h1>')
})

app.listen(3000,()=>{
    console.log('server is running on the port')
})




/*const express = require('express');
const app = express();

app.use(function (req, res, next) {
    console.log('Welcome');
    console.log(`Request method is ${req.method} and ${req.url}`);
    next();
});

app.get('/', function (req, res, next) {
    console.log('first page');
    res.send('Welcome to first page');
    next()
});

app.get('/exit',function(req,res,next){
    console.log('second page')
    res.send('welcome to second page')
    next()
})

app.use(function(req,res){
    console.log('the end')
})
app.listen(8080, () => {
    console.log('Server is running on the port');
});
*/