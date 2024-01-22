import { RequestHandler } from "express";
import httpStatus from "http-status";

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const apiNotFound: RequestHandler = (req, res, next) => {
  return res
    .status(httpStatus.NOT_FOUND)
    .json({ success: false, message: "API not found" });
};

export default apiNotFound;
