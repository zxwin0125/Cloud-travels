var express = require('express');
var router = express.Router();

/* 设置 ticket 路由 */
router.get('/', function(req, res, next) {
  res.send('票务');
});

// 设置 ticket 二级路由
router.get('/buyTicket', function(req, res, next) {
    res.send('购买票务');
});

// 设置 ticket 二级路由
router.get('/sellTicket', function(req, res, next) {
    res.send('转让票务');
});

module.exports = router;
