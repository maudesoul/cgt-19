var http = require('http');
var express = require('express');
var path = require('path');
const mysql = require('mysql');

var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: true});

//running server Details.
var server = app.listen(8082, function() {
  var host = server.address().address
  var port = server.address().port
});

// Create MYSQL Connection
const connection = mysql.createConnection({
  host: '35.247.78.52',
  user: 'root',
  password: 'jIa5gudCv5j8bjAs',
  database: 'shellhacks20'
});

// Test mysql connection.
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

app.get('/', urlencodedParser, function (req, res) {
  res.sendFile(path.join(__dirname, '/views', 'subscribe.html'));
});

// Subscribe
app.get('/subscribe', urlencodedParser, function (req, res) {
  res.sendFile(path.join(__dirname, '/views', 'subscribe.html'));
});


app.post('/subscribe', urlencodedParser, function (req, res) {
  const user = {username:req.body.username, password:req.body.password, city:req.body.location}
  connection.query('INSERT INTO users SET ?', user, (err, res) => {
    if(err) throw err;
  });
  
  res.sendFile(path.join(__dirname, '/views', 'confirmation.html'))
});

app.get('/login', urlencodedParser, function (req, res) {
  res.sendFile(path.join(__dirname, '/views', 'login.html'));
});

app.post('/login', urlencodedParser, function (req, res) {
  // Login operation.
  // Select 
  // 
  res.sendFile(path.join(__dirname, '/views', 'login.html'));
});