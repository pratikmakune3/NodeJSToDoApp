module.exports = function(app){

  // Adding Request Handlers app.get, app.post, app.delete
  app.get('/todo', function(req, res){


  //Request Handler
  app.get('/todo', function(req, res){
    res.render('todo');
  });

  app.post('/todo', function(req, res){

  });

  app.delete('/todo', function(req, res){

  });

};
