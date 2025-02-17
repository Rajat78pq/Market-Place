export interface IProduct {
  product_name: string;
  description: string;
  category: string;
  brand: string;
  price: number;
  discount_price: number;
  stock: number;
  image: string[];
  color: string;
  size: string;
  slug: string;
  tags: string[];
  shopId: string;
}
