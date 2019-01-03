
// const data = [];
// const meetupModel = (req, res) => {
//   // const meetupDate = new Date();
//   // const meetupCreatedOn = new Date().getDay();
//   const meetup = {};
//   // const meetupId = `_id${Object.keys(meetup).length + 1}`;
//   meetup.id = req.body.meetupId;
//   meetup.topic = req.body.topic;
//   meetup.happeningOn = req.body.happeningOn;
//   meetup.location = req.body.location;
//   meetup.tags = req.body.tags;
//   meetup.createdOn = req.body.meetupCreatedOn;
//   meetup.happeningOn = req.body.meetupDate.setFullYear();
//   data.push(meetup);
//   res.json({ status: 200, data });
// };

const meetups = [{
  id: 1,
  createdOn: 12,
  location: 'abuja',
  topic: 'Javascript for beginners',
  happeningOn: 20,
  tags: ['javascript', 'beginner'],
},
{
  id: 2,
  createdOn: 2,
  location: 'lagos',
  topic: 'python for beginners',
  happeningOn: 0,
  tags: ['python', 'beginner'],
}];

export default meetups;
