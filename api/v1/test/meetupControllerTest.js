/* eslint-env mocha */
import chai from 'chai';
import chaiHttp from 'chai-http';

/*
==============
Custom route and mode
==============
*/
import meetupRoute from '../routes/meetupRoute';
import meetupModel from '../models/meetupModel';

const should = chai.should();

chai.use(chaiHttp);

describe('Meetups Route', () => {
  describe('/POST meetup', () => {
    it ()
  });
});
