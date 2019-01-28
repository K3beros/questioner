import moment from 'moment';
import meetups from '../models/meetupModel';


class MeetupControllers {
  static createMeetup(req, res) {
    const data = [];
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
    console.log(meetup);
    meetups.push(meetup);
    data.push(meetup);
    return res.json({
      status: 201,
      data: meetups,
    });
  }

  static getAllMeetups(req, res) {
    console.log(meetups);
    res.status(200)
      .json(meetups);
  }

  static getAMeetup(req, res) {
    // eslint-disable-next-line radix
    const data = [];
    const id = parseInt(req.params.id, 10);
    const meet = meetups.find(meetup => meetup.id === id);
    if (meet) {
      data.push(meet);
      console.log(meet);
      return res.json({
        status: 200,
        data,
      });
    }
    console.log(meet);
    return res.status(400).send({ err: 'No meetup found' });
    // eslint-disable-next-line no-console
  }
}
export default MeetupControllers;
