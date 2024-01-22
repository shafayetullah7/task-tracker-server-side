import { RequestHandler } from "express";

const catchAsync = (func: RequestHandler): RequestHandler => {
  return (req, res, next) => {
    Promise.resolve(func(req, res, next)).catch((err) => next(err));
  };
};
export default catchAsync;
