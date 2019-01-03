import express from 'express';
import bodyParser from 'body-parser';
import meetupRoute from './api/v1/routes/meetupRoute';
// =============================
// CUSTOM MIDDELWARES
// =============================
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/v1', meetupRoute);
// ERROR HANDLER MIDDELWARE
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = '404';
  next(err);
});
app.use((err, req, res, next) => {
//   console.log(err);
  res.status(err.status() || 500).send();
  next();
});
app.listen(5300, () => {
  // console.log('server listening on port 5200');
});
export default app;
