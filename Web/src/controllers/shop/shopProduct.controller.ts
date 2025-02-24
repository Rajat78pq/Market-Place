import { Request, Response } from "express";
import ShopProductService from "../../services/shop/shopProduct.service";
import { IProduct } from "../../models/Iproduct";
import jwt from "jsonwebtoken";

interface CustomRequest extends Request {
  user?: any; // Type for decoded token
}

export default class ShopProductController {
  static async createProduct(req: Request, res: Response) {
    const findShopId = () => {
      const authHeader: any = req.headers.authorization;
      const oldToken = authHeader.split(" ")[1];
      const decode = jwt.decode(oldToken) as any;
      return decode.shopId;
    };
    try {
      const product: IProduct = req.body;
      if (!product || !product.productName) {
        return res.status(400).json({ error: "Invalid product data" });
      }
      const shopId = await findShopId();
      const result = await ShopProductService.createProduct(product, shopId);
      res.status(200).json({ success: true, result });
    } catch (error) {
      return res
        .status(500)
        .json({ message: `Error from the backend ${error}` });
    }
  }

  static async allProduct(req: CustomRequest, res: Response) {
    try {
      if (!req.user || !req.user.shopId) {
        res.send(401).send({ message: "Unauthorized ShopId not available." });
      }
      const shopId = req.user.shopId;
      const result = await ShopProductService.allProduts(shopId);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ success: false, error });
    }
  }
}
