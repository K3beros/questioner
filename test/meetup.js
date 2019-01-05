/* eslint-env  mocha */
import chai from 'chai';
import chaiHttp from 'chai-http';
import index from '../index';
import meetups from '../api/v1/models/meetupModel';


const should = chai.should();

chai.use(chaiHttp);

describe('Meetup Route', () => {
  describe('/POST meetup', () => {
    it('it should POST a meetup', (done) => {
      chai.request(index)
        .post('/api/v1/route/meetupRoute')
        .send({
          id: meetups.length + 1,
          createdOn: new Date(),
          location: 'ikeja',
          topic: 'All things javascript',
          happeningOn: 'sun Jan 6 2019',
          tags: ['programming', 'javascript'],
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('Object');
          done();
        });
    });
    it('it should not POST a mmetup without location, topic or happeningOn', (done) => {
      const meetup = {
        id: meetups.length + 1,
        createdOn: new Date(),
        location: 'island',
      };
      chai.request(index)
        .post('/api/v1/meetupRoute')
        .send(meetup)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('Object');
          res.body.should.have.property('error');
          done();
        });
    });
  });
});
