'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

var _meetupModel = require('../api/v1/models/meetupModel');

var _meetupModel2 = _interopRequireDefault(_meetupModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env  mocha */
var should = _chai2.default.should();

_chai2.default.use(_chaiHttp2.default);

describe('Meetup Route', function () {
  describe('/POST meetup', function () {
    it('it should POST a meetup', function (done) {
      _chai2.default.request(_index2.default).post('/api/v1/route/meetupRoute').send({
        id: _meetupModel2.default.length + 1,
        createdOn: new Date(),
        location: 'ikeja',
        topic: 'All things javascript',
        happeningOn: 'sun Jan 6 2019',
        tags: ['programming', 'javascript']
      }).end(function (err, res) {
        res.should.have.status(200);
        res.body.should.be.a('Object');
        done();
      });
    });
    it('it should not POST a mmetup without location, topic or happeningOn', function (done) {
      var meetup = {
        id: _meetupModel2.default.length + 1,
        createdOn: new Date(),
        location: 'island'
      };
      _chai2.default.request(_index2.default).post('/api/v1/meetupRoute').send(meetup).end(function (err, res) {
        res.should.have.status(400);
        res.body.should.be.a('Object');
        res.body.should.have.property('error');
        done();
      });
    });
  });
});