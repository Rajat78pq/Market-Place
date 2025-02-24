import { IShopDetails } from "../../models/IshopDetails";
import prisma from "../../config/db.config";
import IloginShop from "../../models/IloginShop";
import jwt from "jsonwebtoken";
import LoginService from "../../services/auth/login.service";

export default class ShopDetailsService {
  static async getShopDetails(id: string) {
    try {
      const shop = await prisma.shop.findUnique({
        where: {
          id: id,
        },
      });
      return shop;
    } catch (error) {
      throw error;
    }
  }
  static async postShopDetails(shopData: IShopDetails) {
    try {
      const shop = await prisma.shop.create({
        data: {
          name: shopData.name,
          ownerName: shopData.ownerName,
          email: shopData.email,
          password: shopData.password,
          category: shopData.category,
          radius: shopData.radius,
          ownerId: shopData.ownerId,
        },
      });
      return shop;
    } catch (error) {
      throw error;
    }
  }

  static async loginShop(data: IloginShop, oldToken: string) {
    try {
      const user = await prisma.shop.findUnique({
        where: {
          email: data.email,
        },
      });
      if (!user) {
        throw new Error("user is not available");
      } else {
        if (user.password !== data.password) {
          throw new Error("Incorrect Password.");
        }
        // return { shopId: user.id };
        const decode = jwt.decode(oldToken) as any;

        await LoginService.updateUser({
          user_id: decode.userId,
          shop_id: user.id,
        });

        const NewToken = jwt.sign(
          {
            userId: decode.userId,
            email: decode.email,
            role: decode.role,
            shopId: user.id,
          },
          "secret",
          { expiresIn: "1d" }
        );
        return NewToken;
        // return { message: "Incorrect password" };
      }
    } catch (error) {
      throw error;
    }
  }
}
