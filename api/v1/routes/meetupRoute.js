import express from 'express';
import MeetupControllers from '../controllers/meetupController';

const meetupRoute = express.Router();
meetupRoute.get('/meetup/:id', MeetupControllers.getAMeetup);
meetupRoute.get('/meetup', MeetupControllers.getAllMeetups);
meetupRoute.post('/meetup', MeetupControllers.createMeetup);


export default meetupRoute;
