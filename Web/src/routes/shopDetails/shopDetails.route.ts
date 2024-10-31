import express from 'express';
import ShopDetailsController from '../../controllers/shopDetails/shopDetails.controller';


const router = express.Router();


router.get('/shopDetails', ShopDetailsController.getShopDetails);
router.post('/shopDetails', ShopDetailsController.postShopDetails);
router.put('/shopDetails/:id', ShopDetailsController.updateShopDetails);

export default router