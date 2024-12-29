import express from "express";
import ShopDetailsController from "../../controllers/shop/shopDetails.controller";

const router = express.Router();
router.post("/shop", (req, res) => {
  ShopDetailsController.postShopDetails(req, res);
});

export default router;
