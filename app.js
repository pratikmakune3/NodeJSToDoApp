var express = require('express');
var todoController = require('./controllers/todoController')

var app = express();

//set up template engine to ejs
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controller
todoController(app);

//listen to port 3000
app.listen(3000);
console.log('listening to port 3000');
//
