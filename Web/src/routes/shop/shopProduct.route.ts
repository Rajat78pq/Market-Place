import express from "express";
import ShopProductController from "../../controllers/shop/shopProduct.controller";

const router = express.Router();

router.post("/shop/product/create", (req, res) => {
  ShopProductController.createProduct(req, res);
});

export default router;
