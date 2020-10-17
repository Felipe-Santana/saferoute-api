import { Request, Response } from "express";
import { Business } from "../model/Business";
import { Address } from "../model/Address";
import { encodePassword, validatePassword } from "../utils/PasswordUtil";
import { createAccessToken } from "../security/AccessToken";

export async function create(request: Request, response: Response) {
  const { business } = request.body;
  const { addresses } = business;

  delete business.addresses;

  business.password = await encodePassword(business.password);

  const businessObj = new Business({ ...business });

  try {
    await businessObj.save();

    await createBusinessAddress(businessObj.id, addresses);

    const accessToken = await createAccessToken(businessObj.id, "BUSINESS");

    return response.status(201).json({
      id: businessObj.id,
      access_token: accessToken,
      user_type: "BUSINESS",
    });
  } catch (err) {
    businessObj.remove();

    return response
      .status(400)
      .json({ code: "create_business_error", error: err });
  }
}

export async function createBusinessAddress(
  businessId: String,
  addresses: Array<any>
) {
  try {
    addresses.map((address: any) => {
      const addressObj = new Address({ ...address });

      addressObj.save().catch((err) => {
        throw err;
      });

      Business.findByIdAndUpdate(businessId, {
        $push: { addresses: addressObj.id },
      }).catch((err) => {
        throw err;
      });
    });
  } catch (err) {
    console.log("error_creating_address");
    console.log(err);
    throw err;
  }
}

export async function getById(request: Request, response: Response) {
  const id = request.params.id;

  try {
    const business = await Business.findById(id);

    if (!business) {
      return response.status(404).json({ code: "business_not_found", id: id });
    }

    return response.status(200).json({ business });
  } catch (err) {
    return response
      .status(400)
      .json({ code: "get_business_error", error: err });
  }
}

export async function login(request: Request, response: Response) {
  const { email, password } = request.body;

  if (!email) {
    return response
      .status(400)
      .json({ code: "required_email", message: "Email is required" });
  }
  if (!password) {
    return response
      .status(400)
      .json({ code: "required_password", message: "Password is required" });
  }

  try {
    const business = await Business.findOne({ email: email });

    if (!business) {
      return response
        .status(404)
        .json({ code: "business_not_found", email: email });
    }

    const validPassword = await validatePassword(password, business.password);

    if (!validPassword) {
      return response
        .status(401)
        .json({ code: "incorrect_password", message: "Incorrect password" });
    }

    const accessToken = await createAccessToken(business.id, "BUSINESS");

    return response.status(200).json({
      id: business.id,
      access_token: accessToken,
      user_type: "BUSINESS",
    });
  } catch (error) {
    console.error(error);
    return response.status(400);
  }
}
