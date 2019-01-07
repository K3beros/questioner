import chai from 'chai';
import chaiHttp from 'chai-http';
import index from '../index';
import meetups from '../api/v1/models/meetupModel';


chai.should();

const test = [
  {
    id: meetups.length + 1,
    createdOn: new Date(),
    location: 'ikeja',
    topic: 'All things javascript',
    happeningOn: 'sun Jan 6 2019',
    tags: ['programming', 'javascript'],
  },
  {
    id: meetups.length + 1,
    createdOn: new Date(),
    topic: 'Python',
  },
];

chai.use(chaiHttp);

describe('Meetup Route', () => {
  describe('/POST meetup', () => {
    it('it should POST a meetup', (done) => {
      chai.request(index)
        .post('/api/v1/meetup')
        .send(test[0])
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('Object');
          done();
        });
    });
    it('it should not POST a meetup without location, topic or happeningOn', (done) => {
      chai.request(index)
        .post('/api/v1/meetup')
        .send(test[1])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('Object');
          console.log(`body out----> ${res.body}`);
          res.body.should.have.property('error');
          done();
        });
    });
  });
});
