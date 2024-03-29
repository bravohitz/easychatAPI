var express = require('express');
var router = express.Router();
var chatHistory = [];
var usernames = [];
var msgamount = 0;
var counter = 0;

router.get('/', function (req, res, next) {
  res.json({ message: 'fhschat-appapiworks...' });
});
router.get('/history', function (req, res, next) {
  res.send(chatHistory);
});
router.get('/historylength', function (req, res, next) {
  msgamount = chatHistory.length
  res.send({'historylength': msgamount});
});
router.post('/history', function (req, res, next) {
  vardate = new Date();
  chatHistory.push({ username: req.body.username, content: req.body.content, timestamp: req.body.timestamp, color: req.body.color }); res.json({ message: 'Historycreated!' });
});
router.get('/usernames', function (req, res, next) {
  res.send(usernames);
});
router.post('/usernames', function (req, res, next) {
  usernames.push({ username: req.body.username, id: counter, color: req.body.color}); 
  res.json({ message: 'Username added!' });
  counter++;
});
router.post('/changeusername', function (req, res, next) {
   var idOldUsername = usernames.indexOf(usernames.find(username => username.username === req.body.usernameold));
   usernames[idOldUsername].username = req.body.username;
   res.json({ message: "Username changed"});
});


module.exports = router;

