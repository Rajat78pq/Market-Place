/*
  Warnings:

  - You are about to drop the column `image` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `tags` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "image",
DROP COLUMN "tags";
