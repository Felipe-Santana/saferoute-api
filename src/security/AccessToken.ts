import { createJwt, validateJwt } from "../utils/JwtUtil";
import { Error } from "mongoose";

export async function createAccessToken(
  id: string,
  user_type: string,
  isAdmin?: boolean
) {
  try {
    const tokenExpires = process.env.TOKEN_EXPIRE || "1h";
    const jwt = await createJwt(
      { payload: { id, user_type, isAdmin } },
      {
        expiresIn: tokenExpires,
        issuer: "saferoute-system",
        subject: id,
        audience: "saferoute-system",
        algorithm: "HS512",
      }
    );

    return jwt;
  } catch (err) {
    throw new Error(err);
  }
}

export async function validateAccessToken(token: string) {
  try {
    const payload = await validateJwt(token);

    return payload;
  } catch (err) {
    throw new Error(err);
  }
}
