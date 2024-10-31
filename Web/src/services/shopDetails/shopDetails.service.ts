import prisma from "../../config/db.config";
import { IShopDetails } from "../../models/IshopDetails";

export class ShopDetailsService {
    static async getShopDetails() {
        const result: IShopDetails | null = await prisma.shopDetails.findFirst();
        if (result === null) {
            return "Shop details not found";
        } else {
            return result;
        }
    }

    static async postShopDetails(details: IShopDetails) {
        const result = await prisma.shopDetails.create({
            data: { ...details }
        })
        return result;
    }

    static async updateShopDetails(details: IShopDetails, id: number) {
        const result = await prisma.shopDetails.update({
            where: { id: id },
            data: { ...details }
        })
        return result;
    }

}