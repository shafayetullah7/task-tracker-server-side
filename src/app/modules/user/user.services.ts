import AppError from "../../errorHandler/AppError";
import passwordMatch from "../../utils/passwordMatch";
import { Tuser } from "./user.interface";
import User from "./user.model";

const createUserIntoDB = async (payload: Tuser): Promise<Tuser | null> => {
  const user = await User.findOne({ email: payload.email });
  if (user) {
    throw new AppError(400, "User already exists wtih provided email");
  }
  const newUser = await User.create(payload);
  return newUser;
};

const loginUserFromDB = async (
  email: string,
  password: string
): Promise<Tuser | null> => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new AppError(404, "User not found");
  }
  if (!(await passwordMatch(password, user.password))) {
    throw new AppError(400, "Wrong password.");
  }
  return user;
};

export const userServices = {
  createUserIntoDB,
  loginUserFromDB,
};
