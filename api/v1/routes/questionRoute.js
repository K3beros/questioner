import express from 'express';
import QuestionControllers from '../controllers/questionController';

const questionRoute = express.Router;

questionRoute.route('/questions')
  .post(QuestionControllers.createQuestions);

export default questionRoute;
