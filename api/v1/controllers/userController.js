import users from '../models/usersModel';

class UserController {
  static signUp(req, res) {
    // eslint-disable-next-line max-len
    const data = [];
    if (!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.password || !req.body.phoneNumber || !req.body.userName ||!req.body.isAdmin) {
      return res.status(400).send({ status: 400, error: 'Misiing field' });
    }
    const {
      firstName, lastName, otherName, email, password, phoneNumber, userName,
    } = req.body;
    const user = {
      id: users.length + 1,
      firstName,
      lastName,
      otherName,
      email,
      password,
      phoneNumber,
      userName,
      registered: new Date().toDateString(),
      isAdmin: JSON.parse(req.body.isAdmin),
    };
    data.push(user);
    users.push(user)
    console.log(users);
    return res.status(201).json({
      data: users,
    });
  }

  static signIn(req, res) {
    if (!req.body.email || !req.body.password) {
      return res.status(400).send({ status: 400, err: 'Missing field' });
    }
    const tempUserId = async () => {

    }
  }

  static geAlltUsers(req, res) {
    return res.status(200).send({ data: users });
  }
}


export default UserController;
