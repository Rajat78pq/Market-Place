import prisma from "../../config/db.config";
import bcryptjs from "bcryptjs";

export default class RegisterService {
  static async postRegister(email: string, password: string) {
    const hashPassword = bcryptjs.hashSync(password, 10);
    const result = await prisma.user.create({
      data: {
        email: email,
        password: hashPassword,
      },
    });
    return result;
  }
}
