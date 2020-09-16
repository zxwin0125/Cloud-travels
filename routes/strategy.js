var express = require('express');
var router = express.Router();

/* 设置 strategy 路由 */
router.get('/', function(req, res, next) {
  res.send('攻略');
});

module.exports = router;
