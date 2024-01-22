import httpStatus from "http-status";
import AppError from "../../errorHandler/AppError";
import catchAsync from "../../utils/catchAsync";
import { userServices } from "./user.services";
import { createToken } from "../../utils/jwt";

const createUser = catchAsync(async (req, res) => {
  const { user: userData } = req.body;
  const newUser = await userServices.createUserIntoDB(userData);
  if (!newUser) {
    throw new AppError(httpStatus.BAD_REQUEST, "Failed to create user");
  }
  return res
    .status(httpStatus.CREATED)
    .json({ success: true, message: "New user created", newUser });
});

const loginUser = catchAsync(async (req, res) => {
  const { credential } = req.body;
  const { email, password } = credential;
  const user = await userServices.loginUserFromDB(email, password);
  if (!user) {
    throw new AppError(httpStatus.BAD_REQUEST, "Failed to login.");
  }
  const token = createToken({ email: user.email, role: "user" });
  return res
    .status(httpStatus.OK)
    .json({ success: true, message: "User logged in", user, token });
});

export const userControllers = {
  createUser,
  loginUser,
};
