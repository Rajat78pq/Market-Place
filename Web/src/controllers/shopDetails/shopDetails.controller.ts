import { ShopDetailsService } from "../../services/shopDetails/shopDetails.service";

export default class ShopDetailsController {
    static async getShopDetails(req: any, res: any) {
        const details = await ShopDetailsService.getShopDetails();
        return res.status(200).send(details);
    }

    static async postShopDetails(req: any, res: any) {
        const details = req.body;
        const result = await ShopDetailsService.postShopDetails(details);
        return res.status(200).send(result);
    }

    static async updateShopDetails(req: any, res: any) {
        const id = +req.params.id;
        const details = req.body;
        const result = await ShopDetailsService.updateShopDetails(details, id);
        return res.status(200).send(result);
    }
}