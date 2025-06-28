import bcrypt from "bcryptjs";

export const hashPassword = async (password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
};

export const comparePassword = async (
  hashPassword: string,
  password: string
) => {
  const comparedPassword = await bcrypt.compare(hashPassword, password);
  return comparedPassword;
};
