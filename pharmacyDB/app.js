var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route.js')


mongoose.connect('mongodb://localhost:27017/Products');

mongoose.connection.on('connected', function(){
    console.log('Connection successfully established to mongodb @ 27017');
});

mongoose.connection.on('error', function(err){
    if(err){
        console.log('Error in connecting to mongodb @ 27017: ' + err)
    }
});

const port = 3000;

app.get('/', function(req, res){
    res.send();
});
//adding middleware - cors
app.use(cors());
//body-parser
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, 'public')));


//routes

app.use('/api', route);
// background.checkStock();

app.listen(port, function(){
    console.log('Server started at port: ' + port);
    
});