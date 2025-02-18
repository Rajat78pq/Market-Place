import { Request, Response } from "express";
import ShopProductService from "../../services/shop/shopProduct.service";
import { IProduct } from "../../models/Iproduct";

export default class ShopProductController {
  static async createProduct(req: Request, res: Response) {
    try {
      const product: IProduct = req.body;
      const shopId = req.params.shopId;
      const result = await ShopProductService.createProduct(product, shopId);
      res.status(200).json(result);
    } catch (error) {
      return res
        .status(500)
        .json({ message: `Error from the backend ${error}` });
    }
  }
}
