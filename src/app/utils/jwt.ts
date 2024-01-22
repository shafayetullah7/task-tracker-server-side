import jwt from "jsonwebtoken";
import config from "../config";

export const createToken = (payload: object): string => {
  const token = jwt.sign(payload, config.JWT_ACCESS_SECRET as string);
  return token;
};
