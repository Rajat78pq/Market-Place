/*
  Warnings:

  - You are about to drop the column `shopId` on the `Location` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[shop_id]` on the table `Location` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_shopId_fkey";

-- DropIndex
DROP INDEX "Location_shopId_key";

-- AlterTable
ALTER TABLE "Location" DROP COLUMN "shopId",
ADD COLUMN     "shop_id" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Location_shop_id_key" ON "Location"("shop_id");

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_shop_id_fkey" FOREIGN KEY ("shop_id") REFERENCES "Shop"("id") ON DELETE SET NULL ON UPDATE CASCADE;
