import express from 'express';
import bodyParser from 'body-parser';
import meetupRoute from './api/v1/routes/meetupRoute';
import questionRoute from './api/v1/routes/questionRoute'
// =============================
// CUSTOM MIDDELWARES
// =============================
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/v1', meetupRoute);
app.use('/api/v1', questionRoute);
// ERROR HANDLER MIDDELWARE
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = '404';
  next(err);
});
app.use((err, req, res, next) => {
//   console.log(err);
  res.status(err.status || 500);
  res.json({
    success: false,
    error: {
      message: err.message,
    },
  });
});
app.set('port', process.env.PORT || 8030);
app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log(`Action happening on port ${app.get('port')}`);
});
export default app;
