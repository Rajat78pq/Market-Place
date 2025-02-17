import prisma from "../../config/db.config";
import { IProduct } from "../../models/Iproduct";

export default class ShopProductService {
  static async createProduct(product: IProduct) {
    try {
      const Response = await prisma.product.create({
        data: {
          product_name: product.product_name,
          description: product.description,
          category: product.category,
          brand: product.brand,
          price: product.price,
          discount_price: product.discount_price,
          stock: product.stock,
          image: product.image,
          color: product.color,
          size: product.size,
          slug: product.slug,
          tags: product.tags,
          shopId: product.shopId,
        },
      });
      return Response;
    } catch (error) {
      throw error;
    }
  }
}
