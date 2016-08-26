var express = require('express'),
    fs = require('fs'),
    cars = fs.readFileSync('model/cars.json', { encoding: 'utf8' }),
    app = express();

app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/public/views');
app.use(express.static('public'));
app.use(express.static('public/lib'));

app.get('/', function(req, res){
  res.render('index.html');
});

app.get('/api/car/', function(req, res){
  res.send(cars);
});

app.get('/api/car/:id', function(req, res){
  var id = parseInt(req.params.id),
      data = JSON.parse(cars),
      len = data.length,
      car,
      i;

  car = data.find(function(item){
    return item.id === id;
  });

  if (!car){
    res.status(404).send('Car ' + id + ' not found.' );
  }

  res.send(JSON.stringify(car));
});

app.listen(3000, function(){
  console.log('Server running at port 3000');
});
