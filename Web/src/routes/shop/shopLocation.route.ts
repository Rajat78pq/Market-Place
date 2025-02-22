import express from "express";
import ShopLocationController from "../../controllers/shop/shopLocation.controller";

const router = express.Router();

router.post("/shop/location", (req, res) => {
  ShopLocationController.createShopLocation(req, res);
});

router.get("/temp/shop/location", (req, res) => {
  ShopLocationController.getShopLocation(req, res);
});

export default router;
