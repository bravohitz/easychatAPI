var express = require('express');
var router = express.Router();
var chatHistory = [];
var nicknames = [];
var msgamount = 0;

router.get('/', function (req, res, next) {
  res.json({ message: 'fhschat-appapiworks...' });
});
router.get('/history', function (req, res, next) {
  res.send(chatHistory);
});
router.get('/historyamount', function (req, res, next) {
  msgamount = chatHistory.length
  res.send(msgamount);
});
router.post('/history', function (req, res, next) {
  vardate = new Date();
  chatHistory.push({ username: req.body.username, content: req.body.content, timestamp: req.body.timestamp, color: req.body.color }); res.json({ message: 'Historycreated!' });
});

module.exports = router;

