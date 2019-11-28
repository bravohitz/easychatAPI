var express = require('express');
var router = express.Router();
var chatHistory = [];
var nicknames = [];


router.get('/', function (req, res, next) {
  res.json({ message: 'fhschat-appapiworks...' });
});
router.get('/history', function (req, res, next) {
  res.send(chatHistory);
});
router.post('/history', function (req, res, next) {
  vardate = new Date();
  chatHistory.push({username: req.body.username, message: req.body.message, timestamp: req.body.timestamp}); res.json({ message: 'Historycreated!' });
});

module.exports = router;

