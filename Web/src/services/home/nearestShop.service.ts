import { ILocation } from "../../models/Ilocation";
import prisma from "../../config/db.config";

export default class NearestShopService {
  static async getNearestShop(data: ILocation) {
    try {
      const response =
        await prisma.$queryRaw`SELECT id, latitude, longitude, shop_id, ST_DistanceSphere (
            ST_MakePoint(${data.latitude}, ${data.longitude}),
            ST_MakePoint(latitude, longitude)
        ) AS distance_meters FROM "Location" ORDER BY distance_meters ASC`;
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
