import express from 'express';
import UserController from '../controllers/userController';


const userRoute = express.Router();


userRoute.post('/user', UserController.signUp);
userRoute.get('/users', UserController.geAlltUsers);


export default userRoute;
