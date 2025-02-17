/*
  Warnings:

  - You are about to drop the column `name` on the `Product` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - Added the required column `brand` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `color` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `discount_price` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_name` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stock` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "name",
ADD COLUMN     "brand" TEXT NOT NULL,
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "discount_price" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "image" TEXT[],
ADD COLUMN     "product_name" TEXT NOT NULL,
ADD COLUMN     "size" TEXT NOT NULL,
ADD COLUMN     "slug" TEXT NOT NULL,
ADD COLUMN     "stock" INTEGER NOT NULL,
ADD COLUMN     "tags" TEXT[],
ALTER COLUMN "price" SET DATA TYPE DECIMAL(65,30);
