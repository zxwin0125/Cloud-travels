var express = require('express');
var router = express.Router();

/* 设置 dataView 路由 */
router.get('/', function(req, res, next) {
  res.send('数据可视化');
});

module.exports = router;
