import questions from '../models/questionModel';
import meetups from '../models/meetupModel'
;
class QuestionControllers {
  static createQuestions(req, res) {
    if (!req.body.createdby && !req.body.meetupid && !req.body.title && !req.body.questBody) {
      return res.status(400).send({ status: 400, error: 'Missing field' });
    }
    let meetupid = meetups.find((element) => {
      if (element.id === req.body.meetupid) { 
        return element.id;
      }
    });
    if (meetups.length < 1 || req.body.meetupid !== meetupid) {
      return res.status(400).send({ status: 400, error: 'Invalid input' });
    }
    let {
      createdby, meetupid, title, questBody
 } = req.body;
  }

  static getAMeetup(req, res) {
    
  }
}

export default QuestionControllers;
