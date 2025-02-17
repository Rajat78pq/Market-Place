import { Request, Response } from "express";
import NearestShopService from "../../services/home/nearestShop.service";

export default class NearestShopController {
  static async getNearestShop(req: Request, res: Response) {
    try {
      const data = req.body;
      const result = await NearestShopService.getNearestShop(data);
      return res.status(200).send(result);
    } catch (error) {
      return res
        .status(500)
        .json({ message: `Internal server error from backend: ${error}` });
    }
  }
}
