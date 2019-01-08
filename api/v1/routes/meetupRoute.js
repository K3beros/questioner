import express from 'express';
import MeetupControllers from '../controllers/meetupController';

const meetupRoute = express.Router();
meetupRoute.route('/meetup')
  .post(MeetupControllers.createMeetup)
  .get(MeetupControllers.getAllMeetups);
export default meetupRoute;
