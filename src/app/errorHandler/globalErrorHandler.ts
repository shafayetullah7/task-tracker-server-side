import { ErrorRequestHandler } from "express";
import httpStatus from "http-status";
import { TError } from "../globalTypes/errorType";
import { ZodError } from "zod";
import config from "../config";

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const globalErrorHandler: ErrorRequestHandler = async (err, req, res, next) => {
  const error: TError = {
    success: false,
    statusCode: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
    name: "Error",
    message: err.message || "Something went wrong",
    errorDetails: [
      {
        path: "",
        message: "",
      },
    ],
    // error: err,
    stack: config.NODE_ENV === "development" ? err.stack : "",
  };

  if (err instanceof ZodError) {
    error.name = err.name;
    error.message = "Validation error";
    error.errorDetails = err.issues.map((issue) => {
      return {
        path: issue.path.join(" | "),
        message: issue.message,
      };
    });
    error.statusCode = httpStatus.BAD_REQUEST;
  }
  return res.status(error.statusCode).json({ error });
};

export default globalErrorHandler;
