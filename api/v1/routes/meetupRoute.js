import express from 'express';
import MeetupControllers from '../controllers/meetupController';
import MeetupValidation from '../middlewares/meetupValidation';

const meetupRoute = express.Router();
meetupRoute.get('/meetup/:id', MeetupValidation.getAMeetup, MeetupControllers.getAMeetup);
meetupRoute.get('/meetups/upcoming', MeetupControllers.getUpcomingMeetups);
meetupRoute.get('/meetup', MeetupControllers.getAllMeetups);
meetupRoute.post('/meetup', MeetupValidation.createMeetup, MeetupControllers.createMeetup);
meetupRoute.delete('/meetup/:id', MeetupValidation.deleteAMeetup, MeetupControllers.deleteMeetup);
meetupRoute.patch('/meetups/:id', MeetupValidation.deleteAMeetup, MeetupControllers.editMeetup);


export default meetupRoute;
