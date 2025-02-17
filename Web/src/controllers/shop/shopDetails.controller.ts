import { Request, Response } from "express";
import ShopDetailsService from "../../services/shop/shopDetails.service";
import { IShopDetails } from "../../models/IshopDetails";

export default class ShopDetailsController {
  static async getShopDetails(req: Request, res: Response) {
    const id: string = req.params.id;
    const result = await ShopDetailsService.getShopDetails(id);
    return res.status(200).send(result);
  }

  static async postShopDetails(req: Request, res: Response) {
    try {
      const data: IShopDetails = req.body;
      const user = (req as any).user;
      if (!user) {
        return res
          .status(401)
          .send({ message: "Unauthorized inside of controller" });
      } else {
        const shopData = { ...data, ownerId: user.userId };
        const result = await ShopDetailsService.postShopDetails(shopData);
        return res.status(200).send(result);
      }
    } catch (error) {
      return res
        .status(500)
        .json({ message: `Internal server error from backend: ${error}` });
    }
  }
}
