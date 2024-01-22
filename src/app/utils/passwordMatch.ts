import bcrypt from "bcrypt";
const passwordMatch = async (
  plainText: string,
  hashedPassword: string
): Promise<boolean> => {
  const passwordMatch = await bcrypt.compare(plainText, hashedPassword);
  return passwordMatch ? true : false;
};

export default passwordMatch;
