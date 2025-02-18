import { IShopLocation } from "../../models/IshopLocation";
import prisma from "../../config/db.config";
import jwt from "jsonwebtoken";

export default class ShopLocationService {
  static async createShopLocation(location: IShopLocation) {
    try {
      await prisma.location.create({
        data: {
          latitude: location.latitude,
          longitude: location.longitude,
          shop_id: location.shop_id,
        },
      });

      const updateData = await prisma.user.update({
        where: {
          id: location.user_id,
        },
        data: {
          role: "seller",
        },
      });
      console.log(updateData);

      const updateUser = await prisma.user.findUnique({
        where: {
          id: location.user_id,
        },
      });
      const NewToken = jwt.sign(
        {
          userId: updateUser?.id,
          email: updateUser?.email,
          role: updateUser?.role,
        },
        "secret"
      );

      return { token: NewToken };
    } catch (error) {
      throw error;
    }
  }

  static async getShopLocation() {
    try {
      const Response = await prisma.location.findMany();
      return Response;
    } catch (error) {
      throw error;
    }
  }
}
