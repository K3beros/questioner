import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import meetups from '../api/v1/models/meetupModel';


chai.should();

const meetup = [
  {
    id: meetups.length + 1,
    createdOn: 'Mon Feb 18 2019',
    location: 'Berger 9-_',
    topic: 'All things javascript',
    happeningOn: 'Sun Jul 07 2019',
    tags: ['programming', 'javascript'],
  },
  {
    id: meetups.length + 1,
    createdOn: new Date(),
    location: '',
    topic: 'Python',
    happeningOn: 'Sat feb 3 2019',
    tags: ['web', 'development'],
  },
];
const value = {
  id: 3,
  createdOn: new Date(),
  location: '',
  topic: 'All things javascript',
  happeningOn: 'sun Jan 6 2019',
  tags: ['programming', 'javascript'],
};

const value1 = {
  id: 4,
  createdOn: new Date(),
  location: 'Berger 9-_',
  topic: 'All things javascript',
  happeningOn: '',
  tags: ['programming', 'javascript'],
};

chai.use(chaiHttp);

describe('Meetup Route', () => {
  describe('/POST meetup', () => {
    it('it should POST a meetup', (done) => {
      chai.request(app)
        .post('/api/v1/meetup')
        .send(meetup[0])
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('Object');
          done();
        });
    });
    it('it should not POST a meetup without location', (done) => {
      chai.request(app)
        .post('/api/v1/meetup')
        .send({
          id: meetups.length + 1,
          createdOn: new Date(),
          topic: 'The web',
          happeningOn: 'Sun May 5 2019',
          tags: ['intro'],
        })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('Object');
          res.body.should.have.property('message');
          done();
        });
    });
    it('it should not POST a meetup without location', (done) => {
      chai.request(app)
        .post('/api/v1/meetup')
        .send(value)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('Object');
          res.body.should.have.property('message');
          done();
        });
    });
    it('it should not POST a meetup without happeningOn date', (done) => {
      chai.request(app)
        .post('/api/v1/meetup')
        .send(value1)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('Object');
          res.body.should.have.property('message');
          done();
        });
    });
  });
  describe('/GET meetup', () => {
    it('should return all meetups', (done) => {
      chai.request(app)
        .get('/api/v1/meetup')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('data');
          done(err);
        });
    });
  });
});
