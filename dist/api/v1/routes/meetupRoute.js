'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _meetupController = require('../controllers/meetupController');

var _meetupController2 = _interopRequireDefault(_meetupController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var meetupRoute = _express2.default.Router();
meetupRoute.post('/meetup', _meetupController2.default.createMeetup);

exports.default = meetupRoute;