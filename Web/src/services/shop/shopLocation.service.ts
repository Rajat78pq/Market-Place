import { IShopLocation } from "../../models/IshopLocation";
import prisma from "../../config/db.config";

export default class ShopLocationService {
  static async createShopLocation(location: IShopLocation) {
    try {
      return await prisma.location.create({
        data: {
          latitude: location.latitude,
          longitude: location.longitude,
          shopId: location.shopId,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
