var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.get('/',(req,res) =>{
    res.send('done');
})

app.get('/page1',(req,res) =>{
    res.send("page1");
})

app.listen(port,() => {
    console.log(`app is listening on port ${port}`)
})