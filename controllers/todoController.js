var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connect to database
mongoose.connect('mongodb://test:test@ds123410.mlab.com:23410/todolist')

//Create a schema -it's a blueprint
var todoSchema = new mongoose.Schema({
  item: String
});

var Todo = mongoose.model('Todo', todoSchema);
var itemOne = Todo({item: 'buy flowers'}).save(function(err){
  if (err) throw err;
  console.log('item saved');
});

var urlencodedParser = bodyParser.urlencoded({extended:false});
var data = [{item : 'Learn NodeJS'},{item : 'Make Node ToDo app'},{item : 'Read Node blog on Medium'}];

module.exports = function(app){
  // Adding Request Handlers app.get, app.post, app.delete

  app.get('/todo', function(req, res){
    res.render('todo', {todos : data});
  });

  app.post('/todo', urlencodedParser, function(req, res){
    data.push(req.body);
    res.json(data);
  });

  app.delete('/todo/:item', function(req, res){
    data = data.filter(function(todo){
      return todo.item.replace(/ /g, '-') !== req.params.item;
    });
    res.json(data);
  });

};
