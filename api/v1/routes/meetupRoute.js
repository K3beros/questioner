import express from 'express';
import MeetupControllers from '../controllers/meetupController';

const meetupRoute = express.Router();
meetupRoute.post('/meetup', MeetupControllers.createMeetup);


export default meetupRoute;
