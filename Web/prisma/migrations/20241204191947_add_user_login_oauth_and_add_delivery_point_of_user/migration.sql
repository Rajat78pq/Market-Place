/*
  Warnings:

  - You are about to drop the column `userId` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[oauthId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `oauthId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_userId_fkey";

-- DropIndex
DROP INDEX "Location_userId_key";

-- AlterTable
ALTER TABLE "Location" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "password",
ADD COLUMN     "oauthId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "DeliveryPoint" (
    "id" SERIAL NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "address" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DeliveryPoint_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_oauthId_key" ON "User"("oauthId");

-- AddForeignKey
ALTER TABLE "DeliveryPoint" ADD CONSTRAINT "DeliveryPoint_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
