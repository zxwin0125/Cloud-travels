var express = require('express');
var router = express.Router();

/* 设置 destination 路由 */
router.get('/', function(req, res, next) {
  res.send('目的地页面')
});


module.exports = router;
