import express from "express";
import ShopDetailsController from "../../controllers/shop/shopDetails.controller";

const router = express.Router();
router.post("/shop", (req, res) => {
  ShopDetailsController.postShopDetails(req, res);
});

router.get("/shop/:id", (req, res) => {
  ShopDetailsController.getShopDetails(req, res);
});

router.post("/shop/login", (req, res) => {
  ShopDetailsController.loginShop(req, res);
});

export default router;
