import express from "express";
import NearestShopController from "../../controllers/home/nearestShop.controller";

const router = express.Router();
router.post("/home", (req, res) => {
  NearestShopController.getNearestShop(req, res);
});

export default router;
