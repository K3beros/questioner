import meetups from '../models/meetupModel';

class MeetupControllers {
  static createMeetup(req, res) {
    const {
      id, createdOn, location, topic, happeningOn, tags,
    } = req.body;
    const meetup = {
      id,
      createdOn,
      location,
      topic,
      happeningOn,
      tags,
    };
    meetups.push(meetup);
    return res.json({ message: meetup });
  }
}
export default MeetupControllers;
