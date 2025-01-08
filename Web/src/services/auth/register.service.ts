import prisma from "../../config/db.config";
import bcryptjs from "bcryptjs";

export default class RegisterService {
  static async postRegister(email: string, password: string) {
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    if (!user) {
      const hashPassword = bcryptjs.hashSync(password, 10);
      const result = await prisma.user.create({
        data: {
          email: email,
          password: hashPassword,
        },
      });
      return { message: "User Register successfully." };
    } else {
      return { message: "User already exits." };
    }
  }
}
