import { IShopLocation } from "../../models/IshopLocation";
import prisma from "../../config/db.config";

export default class ShopLocationService {
  static async createShopLocation(location: IShopLocation) {
    try {
      return await prisma.location.create({
        data: {
          latitude: location.latitude,
          longitude: location.longitude,
          shop_id: location.shop_id,
        },
      });
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
