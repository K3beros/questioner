import meetups from '../models/meetupModel';

class MeetupControllers {
  static createMeetup(req, res) {
    if (!req.body.location && !req.body.topic && !req.body.tags && !req.body.happeningOn) {
      return res.status(400).send({ status: 400, error: 'Missing field' });
    }
    const {
      happeningOn, location, topic, tags,
    } = req.body;
    const day = new Date();
    const meetup = {
      id: meetups.length + 1,
      createdOn: day.getDate(),
      location,
      topic,
      happeningOn,
      tags,
    };
    meetups.push(meetup);
    return res.json({
      status: 200,
      data: meetup,
    });
  }

  static getAllMeetups(req, res) {
    return res.json({ status: 200, data: meetups })
  }
}
export default MeetupControllers;
