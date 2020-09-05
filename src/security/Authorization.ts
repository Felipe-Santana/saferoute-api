import { Request, Response, NextFunction } from "express";
import { validateAccessToken } from "./AccessToken";

export async function authorize(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    const header = request.headers["authorization"];

    if (!header) {
      return response.status(401).json({ message: "unauthorized" });
    }

    const payload = await validateAccessToken(header);

    next();
  } catch (error) {
    return response.status(401).json({ message: "unauthorized" });
  }
}
