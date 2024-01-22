import { ErrorRequestHandler } from "express";
import httpStatus from "http-status";
import { TError } from "../globalTypes/errorType";

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const globalErrorHandler: ErrorRequestHandler = async (err, req, res, next) => {
  const error: TError = {
    success: false,
    statusCode: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
    name: "Error",
    message: err.message || "Something went wrong",
    errorDetails: {
      path: "",
      message: "",
    },
  };
  return res.status(error.statusCode).json({ error });
};

export default globalErrorHandler;
