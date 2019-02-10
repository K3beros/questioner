import moment from 'moment';
import meetups from '../models/meetupModel';


class MeetupControllers {
  static createMeetup(req, res) {
    const data = [];
    if (!req.body.location && !req.body.topic && !req.body.tags && !req.body.happeningOn) {
      return res.status(400).send({ status: 400, error: 'Missing field' });
    }
    const {
      location, topic, tags,
    } = req.body;
    const meetup = {
      id: meetups.length + 1,
      createdOn: new Date().toDateString(),
      location,
      topic,
      happeningOn: new Date(req.body.happeningOn).toDateString(),
      tags,
    };
    console.log();
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
      .json({ data: meetups });
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

  static getUpcomingMeetups(req, res) {
    const data = [];
    const currentDate = new Date().getTime();
    const meetup = meetups.map((meet) => {
      console.log(typeof meet.happeningOn);
      const meetupDate = meet.happeningOn.getTime();
      console.log(meetupDate);
      if (meetupDate > currentDate) {
        data.push(meet);
      }
      return meet;
    });
    if (meetup) {
      return res.json({ status: 200, data });
    }
    return res.status(404).send({ err: 'No upcoming meetups' });
  }

  static editMeetup(req, res) {
    const id = parseInt(req.params.id, 10);
    const index = meetups.findIndex(meetup => meetup.id === id);
    console.log(index);
    const {
      location, topic, tags,
    } = req.body;
    const meet = {
      id,
      location,
      topic,
      happeningOn: new Date(req.body.happeningOn).toDateString(),
      tags,
    };
    console.log(meet);
    meetups.splice(index, 1, meet);
    if (index) {
      return res.json({ status: 200, data: meet });
    }
    return res.status(404).send({ err: 'No meetup found' });
  }

  static deleteMeetup(req, res) {
    const id = parseInt(req.params.id, 10);
    meetups.map((meetup, index) => {
      if (meetup.id === id);
      meetups.splice(index, 1);
      return res.json({ status: 200, message: 'Meetup deleted' });
    });
    return res.status(404).send({ status: 404, err: 'No meetups found' });
  }
}
export default MeetupControllers;
