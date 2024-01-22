import { z } from "zod";
import { Tgender } from "./user.interface";

const userValidationSchema = z.object({
  firstname: z
    .string({
      required_error: "Firstname is required",
      invalid_type_error: "Firstname must be a string",
    })
    .min(1, "Firstname must be provided")
    .max(20, "Firstname cannot be more than 20 characters"),

  lastname: z
    .string({
      required_error: "Lastname is required",
      invalid_type_error: "Lastname must be a string",
    })
    .min(1, "Lastname must be provided")
    .max(20, "Lastname cannot be more than 20 characters"),

  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email("Invalid email format"),

  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string",
    })
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}$/,
      "Password must contain at least one number, one uppercase, one lowercase and one special character"
    ),

  image: z
    .string({ invalid_type_error: "Invalid image url format" })
    .url()
    .optional(),

  phone: z
    .string({ invalid_type_error: "Phone number must be string" })
    .optional(),

  gender: z.enum(Object.values(Tgender) as [string, ...string[]]),

  address: z
    .string({ invalid_type_error: "Address must be string" })
    .optional(),
  dob: z
    .string({ invalid_type_error: "Date must be string" })
    .regex(
      /^(?:(?:19|20)\d\d|2100)-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
      "Invalid date format. valid format is YYYY-MM-DD."
    )
    .optional(),
});

const createUserValidationSchema = userValidationSchema;

export const userValidation = {
  createUserValidationSchema,
};
