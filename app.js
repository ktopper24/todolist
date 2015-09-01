var express = require("express");
var bodyParser = require("body-parser");
var app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',function(req,res){
  res.sendfile("index.html");
});

app.post('/api/addToDo', function(req, res) {
    console.log(req.body);
});

app.use(express.static(__dirname + '/styles'));
app.use(express.static(__dirname + '/scripts'));

app.listen(3000,function(){
  console.log("Started on PORT 3000");
})
