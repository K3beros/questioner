import meetups from '../models/meetupModel';

class MeetupControllers {
  static createMeetup(req, res) {
    if (!req.body.location) return res.json({ status: 404, error: 'No location inputted' });
    if (!req.body.topic) return res.json({ status: 404, error: 'No topic inputted' });
    if (!req.body.tags) return res.json({ status: 404, error: 'No tags inputted' });
    if (!req.body.createdOn) return res.json({ status: 404, error: 'No happeningOn date inputted' });
    const {
      location, topic, tags,
    } = req.body;
    const day = new Date();
    const meetup = {
      id: meetups.length + 1,
      createdOn: day.getDate(),
      location,
      topic,
      happeningOn: day.setDate(),
      tags,
    };
    meetups.push(meetup);
    // eslint-disable-next-line no-console
    console.log(meetups);
    return res.json({
      status: 200,
      data: meetups,
    });
  }
}
export default MeetupControllers;
