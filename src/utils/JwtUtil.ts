import jwt from "jsonwebtoken";

export async function createJwt(payload: object, options: object) {
  const secret = process.env.JWT_SECRET || "";

  try {
    const token = jwt.sign(payload, secret, options);
    return token;
  } catch (err) {
    throw err;
  }
}
export async function validateJwt(token: string) {
  const secret = process.env.JWT_SECRET || "";

  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (err) {
    throw err;
  }
}
