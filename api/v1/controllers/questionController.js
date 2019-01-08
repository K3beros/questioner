import questions from '../models/questionModel';
import meetups from '../models/meetupModel';

class QuestionControllers {
  static createQuestions(req, res) {
    if (!req.body.createdby && !req.body.meetupid && !req.body.title && !req.body.questBody) {
      return res.status(400).send({ status: 400, error: 'Missing field' });
    }
    const meetupid = meetups.find((element) => {
      if (element.id === req.body.meetupid) {
        return element.id;
      }
    });
    if (meetups.length < 1 || req.body.meetupid !== meetupid) {
      return res.status(400).send({ status: 400, error: 'Invalid input' });
    }
    const {
      createdby, title, questBody,
    } = req.body;
    const day = new Date();
    const data = [];
    const question = {
      id: questions.length + 1,
      createdOn: day.getDate(),
      createdby,
      meetupid,
      title,
      questBody,
    };
    data.push(question);
    questions.push(question);
    return res.json({
      status: 200,
      data,
    });
  }
}

export default QuestionControllers;
