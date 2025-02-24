/*
  Warnings:

  - A unique constraint covering the columns `[shop_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "shop_id" TEXT DEFAULT 'null';

-- CreateIndex
CREATE UNIQUE INDEX "User_shop_id_key" ON "User"("shop_id");
