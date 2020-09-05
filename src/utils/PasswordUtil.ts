import bcrypt from "bcrypt";

export async function encodePassword(password: string): Promise<String | any> {
  try {
    const encodedPassword = await bcrypt.hash(password, 10);
    return encodedPassword;
  } catch (err) {
    throw err;
  }
}
