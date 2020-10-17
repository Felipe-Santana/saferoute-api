import { Request, Response } from "express";
import { Deliveryman } from "../model/Deliveryman";
import { createAccessToken } from "../security/AccessToken";
import { encodePassword } from "../utils/PasswordUtil";

export async function create(request: Request, response: Response) {
  try {
    const { deliveryman } = request.body;

    if (deliveryman.password === '' || deliveryman.password.trim() === '') {
      throw new Error('Password cannot be blank')
    }

    deliveryman.password = await encodePassword(deliveryman.password);

    const deliverymanObj = new Deliveryman({ ...deliveryman });
    await deliverymanObj.save();

    const accessToken = await createAccessToken(
      deliverymanObj.id,
      "DELIVERYMAN"
    );

    return response.status(201).json({
      id: deliverymanObj.id,
      access_token: accessToken,
      user_type: "DELIVERYMAN",
    });
  } catch (err) {
    return response
      .status(400)
      .json({ code: "create_deliveryman_error", error: err.message || err });
  }
}

export async function login(request: Request, response: Response) {}
