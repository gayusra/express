const express = require('express');
const app = express();
const path = require('path');
const cors = require(cors)

//middelwares
app.use(cors())
/* this is a third party middleware
*/
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(express.static(path.join(__dirname,'./public')))



app.get('/index(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'))
})

app.get('/newpage(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','newpage.html'))
})


/*
const one = (req,res,next)=>{
    console.log('one')
    next()
}

const two = (req,res,next)=>{
    console.log('two');
    next()
}
const three = (req,res)=>{
    console.log('three')
    res.send('finished')
}

app.get('/chain(.html)?',[one,two,three])
*/


app.get('/*',(req,res)=>[
    res.status(404).sendFile(path.join(__dirname,'views','error.html'))
    ])





app.listen(3500,()=>{
    console.log('server is running on the port')
})