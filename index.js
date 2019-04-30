import express from 'express';
import bodyParser from 'body-parser';
import meetupRoute from './api/v1/routes/meetupRoute';
import userRoute from './api/v1/routes/userRoute'
// =============================
// CUSTOM MIDDELWARES
// =============================
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/v1', meetupRoute);
app.use('/api/v1', userRoute);
// app.use('/api/v1', questionRoute);
// ERROR HANDLER MIDDELWARE
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use((err, req, res, next) => {
//   console.log(err);
  res.status(err.status || 500);
  return res.json({
    success: false,
    err: {
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
