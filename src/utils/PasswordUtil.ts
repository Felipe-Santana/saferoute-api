import bcrypt from "bcrypt";

export async function encodePassword(password: string): Promise<String | any> {
  try {
    const encodedPassword = await bcrypt.hash(password, 10);
    return encodedPassword;
  } catch (err) {
    throw err;
  }
}

export async function validatePassword(
  password: string,
  encodedPassword: string
) {
  try {
    return await bcrypt.compare(password, encodedPassword);
  } catch (err) {
    console.error(err);
    return false;
  }
}
