import express from 'express';
import validate from '../../middlewares/validation';
import { userValidation } from './user.validation';
import { userControllers } from './user.controllers';

const userRouter = express.Router();

userRouter.post('/create',validate(userValidation.createUserValidationSchema),userControllers.createUser);
userRouter.post('/login',validate(userValidation.loginUserValidationSchema),userControllers.loginUser)

export default userRouter;