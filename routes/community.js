var express = require('express');
var router = express.Router();

/* 设置 community 路由 */
router.get('/', function(req, res, next) {
  res.send('社区');
});

module.exports = router;
