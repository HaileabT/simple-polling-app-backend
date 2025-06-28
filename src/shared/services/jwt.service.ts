import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRETE as string;

export const createToken = (id: string) => {
  const token = jwt.sign({ id: id }, JWT_SECRET, {
    expiresIn: 60 * 60,
  });
  return token;
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};
