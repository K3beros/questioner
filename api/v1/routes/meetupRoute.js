import express from 'express';
import MeetupControllers from '../controllers/meetupController';

const meetupRoute = express.Router();
meetupRoute.route('/meetup')
  .post(MeetupControllers.createMeetup)
  .get(MeetupControllers.getAllMeetups);

meetupRoute.route('/meetup/:id')
  .get(MeetupControllers.getAMeetup)
export default meetupRoute;


