import prisma from "../../config/db.config";
import { IProduct } from "../../models/Iproduct";

export default class ShopProductService {
  static async createProduct(product: IProduct, shopId: string) {
    try {
      const Response = await prisma.product.create({
        data: {
          product_name: product.formData.product_name,
          description: product.description,
          category: product.formData.category,
          brand: product.formData.brand,
          price: product.formData.price,
          discount_price: product.formData.discount_price,
          stock: product.formData.stock,
          image: product.formData.image,
          color: product.formData.color,
          size: product.formData.size,
          slug: product.formData.slug,
          tags: product.formData.tags,
          shopId: shopId,
        },
      });
      return Response;
    } catch (error) {
      throw error;
    }
  }
}
