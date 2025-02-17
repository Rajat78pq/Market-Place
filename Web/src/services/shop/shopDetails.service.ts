import { IShopDetails } from "../../models/IshopDetails";
import prisma from "../../config/db.config";

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
}
