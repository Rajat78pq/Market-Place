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
      if (user.password === null) {
      } else {
        const isPasswordValid = bcryptjs.compareSync(password, user.password);
        if (!isPasswordValid) {
          throw new Error("Invalid email or password");
        } else {
          const token = jwt.sign(
            {
              userId: user.id,
              email: user.email,
              role: user.role,
              shopId: user.shop_id,
            },
            "secret",
            {
              expiresIn: "1d",
            }
          );
          return { token };
        }
      }
    }
  }

  static async updateUser(data: any) {
    const user = await prisma.user.update({
      where: {
        id: data.user_id,
      },
      data: {
        shop_id: data.shop_id,
      },
    });
    console.log(user);
  }
}
