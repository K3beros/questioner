class MeetupValidation {
  static createMeetup(req, res, next) {
    const {
      location, happeningOn,
    } = req.body;
    const inputHappeningOn = /^(20[0-9]{2})[-/](0|1[0-2])[-/](3[01]|2[0-9]|1[0-9]|0[1-9])$/g;
    if (typeof location !== 'string' || location.trim() === '') {
      return res.status(400).json({
        status: 400,
        message: 'Enter a valid format. e.g 9 Oba Akran, Lagos',
      });
    }
    if (typeof happeningOn !== 'string' || happeningOn.trim() === '' || inputHappeningOn.test(happeningOn)) {
      console.log(req.body.happeningOn);
      return res.status(400).json({
        status: 400,
        message: 'Enter a valid format YYYY-MM-DD e.g 2019/1/1, 2019/01/01',
      });
    }
    return next();
  }

  static getAMeetup(req, res, next) {
    // const id = parseInt(req.params.id, 10);
    const inputId = /^([0-9]{2})$/;
    if (typeof parseInt(req.params.id, 10) !== 'number' || inputId.test(parseInt(req.params.id, 10))) {
      return res.json({
        status: 400,
        message: 'Enter a valid format e.g 3, 22',
      });
    }
    return next();
  }

  static deleteAMeetup(req, res, next) {
    const id = parseInt(req.params.id, 10);
    const inputId = /^(\/D{2})$/;
    if (typeof id !== 'number' || inputId.test(id)) {
      return res.json({
        status: 400,
        message: 'Enter a valid format e.g 3, 22',
      });
    }
    return next();
  }
}
export default MeetupValidation;
