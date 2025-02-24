import { Request, Response } from "express";
import ShopDetailsService from "../../services/shop/shopDetails.service";
import { IShopDetails } from "../../models/IshopDetails";
import IloginShop from "../../models/IloginShop";

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

  static async loginShop(req: Request, res: Response) {
    try {
      const data: IloginShop = req.body;
      const authHeader: any = req.headers.authorization;
      const oldToken = authHeader.split(" ")[1];
      const token = await ShopDetailsService.loginShop(data, oldToken);
      return res.status(200).json({ success: true, token });
    } catch (error) {
      return res.status(500).send(error);
    }
  }
}
