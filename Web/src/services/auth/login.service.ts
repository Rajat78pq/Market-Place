import prisma from "../../config/db.config";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export default class LoginService {
  static async postLogin(email: string, password: string) {
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new Error("Invalid email or password");
    } else {
      const isPasswordValid = bcryptjs.compareSync(password, user.password);

      if (!isPasswordValid) {
        throw new Error("Invalid email or password");
      } else {
        const token = jwt.sign({ email: user.email }, "secret", {
          expiresIn: "7h",
        });
        return { token };
      }
    }
  }
}
