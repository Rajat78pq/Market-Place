export interface IProduct {
  formData: {
    product_name: string;
    category: string;
    brand: string;
    price: number;
    discount_price: number;
    stock: number;
    image: [""];
    color: string;
    size: string;
    slug: string;
    tags: [""];
  };
  description: string;
}
