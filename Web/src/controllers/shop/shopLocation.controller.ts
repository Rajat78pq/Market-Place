import { IShopLocation } from "../../models/IshopLocation";
import ShopLocationService from "../../services/shop/shopLocation.service";
import { Request, Response } from "express";

export default class ShopLocationController {
  static async createShopLocation(req: Request, res: Response) {
    try {
      const shopLocation: IShopLocation = req.body;
      const result = await ShopLocationService.createShopLocation(shopLocation);
      return res.status(200).send(result);
    } catch (error) {
      return res.status(500).send(`Error from the backend ${error}`);
    }
  }

  static async getShopLocation(req: Request, res: Response) {
    const result = await ShopLocationService.getShopLocation();
    return res.status(200).send(result);
  }
}
