import prisma from "../../config/db.config";
import { IProduct } from "../../models/Iproduct";

export default class ShopProductService {
  static async createProduct(product: IProduct, shopId: string) {
    try {
      const Response = await prisma.product.create({
        data: {
          product_name: product.productName,
          description: product.description,
          category: product.category,
          brand: product.brand,
          price: product.price,
          discount_price: product.discountPrice,
          stock: product.stock,
          color: product.color,
          size: product.size,
          slug: product.slug,
          shopId: shopId,
        },
      });
      return Response;
    } catch (error) {
      throw error;
    }
  }

  static async allProduts(shopId: string) {
    try {
      const response = await prisma.product.findMany({
        where: {
          shopId: shopId,
        },
      });
      console.log(response);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
