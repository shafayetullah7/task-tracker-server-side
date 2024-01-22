import mongoose from "mongoose";
import { Tgender, Tuser } from "./user.interface";
import bcrypt from "bcrypt";
import config from "../../config";

const userSchema = new mongoose.Schema<Tuser>({
  firstname: {
    type: String,
    required: true,
    min: 1,
    max: 20,
  },
  lastname: {
    type: String,
    required: true,
    min: 1,
    max: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  phone: {
    type: String,
    unique: true,
  },
  gender: {
    type: String,
    enum: Object.values(Tgender),
    required: true,
  },
  dob: {
    type: String,
  },
});

userSchema.pre<Tuser>("save", async function (next) {
  if (!this.password) {
    next();
  }
  try {
    this.password = await bcrypt.hash(
      this.password,
      config.bcryptSaltRounds as string
    );
    next();
  } catch (error) {
    next(error as Error);
  }
});

userSchema.set("toObject", {
  transform: (doc, result) => {
    delete result.password;
    return result;
  },
});

userSchema.set("toJSON", {
  transform: (doc, result) => {
    delete result.password;
    return result;
  },
});

const User = mongoose.model<Tuser>("User", userSchema);

export default User;
