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
      console.log(product);
      const shopId = await findShopId();
      const result = await ShopProductService.createProduct(product, shopId);
      console.log(result);
      res.status(200).json({ success: true, result });
    } catch (error) {
      return res
        .status(500)
        .json({ message: `Error from the backend ${error}` });
    }
  }

  static async allProduct(req: CustomRequest, res: Response) {
    console.log("logged");
    // const getShopId = () => {
    //   const authHeader: any = req.headers.authorization;
    //   if (!authHeader) {
    //     throw new Error("unAuthorized Error");
    //   }
    //   const token = authHeader.split(" ")[1];
    //   const decode = jwt.decode(token) as any;
    //   console.log(decode.shopId);
    //   return decode.shopId;
    // };
    try {
      if (!req.user || !req.user.shopId) {
        res.send(401).send({ message: "Unauthorized ShopId not available." });
      }
      const shopId = req.user.shopId;
      const result = await ShopProductService.allProduts(shopId);
      console.log(result);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ success: false, error });
    }
  }
}
