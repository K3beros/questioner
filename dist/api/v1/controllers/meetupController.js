'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _meetupModel = require('../models/meetupModel');

var _meetupModel2 = _interopRequireDefault(_meetupModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MeetupControllers = function () {
  function MeetupControllers() {
    _classCallCheck(this, MeetupControllers);
  }

  _createClass(MeetupControllers, null, [{
    key: 'createMeetup',
    value: function createMeetup(req, res) {
      var _req$body = req.body,
          id = _req$body.id,
          createdOn = _req$body.createdOn,
          location = _req$body.location,
          topic = _req$body.topic,
          happeningOn = _req$body.happeningOn,
          tags = _req$body.tags;

      var meetup = {
        id: id,
        createdOn: createdOn,
        location: location,
        topic: topic,
        happeningOn: happeningOn,
        tags: tags
      };
      _meetupModel2.default.push(meetup);
      return res.json({ message: meetup });
    }
  }]);

  return MeetupControllers;
}();

exports.default = MeetupControllers;