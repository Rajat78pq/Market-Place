-- CreateTable
CREATE TABLE "ShopDetails" (
    "id" SERIAL NOT NULL,
    "shopOwnerImage" TEXT NOT NULL,
    "shopOwnerName" TEXT NOT NULL,
    "shopName" TEXT NOT NULL,
    "isOpen" BOOLEAN NOT NULL,

    CONSTRAINT "ShopDetails_pkey" PRIMARY KEY ("id")
);
