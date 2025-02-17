/*
  Warnings:

  - The primary key for the `DeliveryPoint` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Location` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Shop` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_shop_id_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_shopId_fkey";

-- AlterTable
ALTER TABLE "DeliveryPoint" DROP CONSTRAINT "DeliveryPoint_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "DeliveryPoint_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "DeliveryPoint_id_seq";

-- AlterTable
ALTER TABLE "Location" DROP CONSTRAINT "Location_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "shop_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Location_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Location_id_seq";

-- AlterTable
ALTER TABLE "Product" DROP CONSTRAINT "Product_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "shopId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Product_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Product_id_seq";

-- AlterTable
ALTER TABLE "Shop" DROP CONSTRAINT "Shop_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Shop_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Shop_id_seq";

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_shop_id_fkey" FOREIGN KEY ("shop_id") REFERENCES "Shop"("id") ON DELETE SET NULL ON UPDATE CASCADE;
