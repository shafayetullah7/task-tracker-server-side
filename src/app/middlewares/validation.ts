import { RequestHandler } from "express";
import { AnyZodObject } from "zod";

const validate = (schema: AnyZodObject): RequestHandler => {
  return async (req, res, next) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (error) {
      next(error);
    }
  };
};

export default validate;
