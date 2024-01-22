export const Tgender = {
  male: "male",
  female: "female",
} as const;

export type Tuser = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  image?: string;
  phone?: string;
  gender: keyof typeof Tgender;
  address?: string;
  dob?: string;
};
