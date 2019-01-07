'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _meetupRoute = require('./api/v1/routes/meetupRoute');

var _meetupRoute2 = _interopRequireDefault(_meetupRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// =============================
// CUSTOM MIDDELWARES
// =============================
var app = (0, _express2.default)();
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());
app.use('/api/v1', _meetupRoute2.default);
// ERROR HANDLER MIDDELWARE
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = '404';
  next(err);
});
app.use(function (err, req, res, next) {
  //   console.log(err);
  res.status(err.status() || 500).send();
  next();
});
app.listen(5300, function () {
  // console.log('server listening on port 5200');
});
exports.default = app;
//# sourceMappingURL=index.js.map