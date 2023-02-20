var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/getWebSetting' , function(req, res, next) {
  res.send(req.body)
})

module.exports = router;
