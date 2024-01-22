/* eslint-disable no-undef */
import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const config = {
  dbUri: process.env.DB_URI,
  port: process.env.PORT,
  bcryptSaltRounds: process.env.BCRYPT_SALT_ROUNDS,
  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
  NODE_ENV: process.env.NODE_ENV,
};

export default config;
