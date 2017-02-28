var express = require('express');

var app = express();

//set up template engine to ejs
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//listen to port 3000
app.listen(3000);
console.log('listening to port 3000');
//
