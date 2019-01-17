import moment from 'moment';
import meetups from '../models/meetupModel';

const data = [];
class MeetupControllers {
  static createMeetup(req, res) {
    if (!req.body.location && !req.body.topic && !req.body.tags && !req.body.happeningOn) {
      return res.status(400).send({ status: 400, error: 'Missing field' });
    }
    const {
      happeningOn, location, topic, tags,
    } = req.body;
    const date = moment();
    const meetup = {
      id: meetups.length + 1,
      createdOn: date.format('YYYY-MM-DD'),
      location,
      topic,
      happeningOn,
      tags,
    };
    data.push(meetup);
    return res.json({
      status: 200,
      data,
    });
  }

  static getAllMeetups(req, res) {
    return res.json({ status: 200, data: meetups });
  }
}
export default MeetupControllers;
