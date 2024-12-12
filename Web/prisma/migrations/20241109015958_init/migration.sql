-- CreateTable
CREATE TABLE "Login" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Login_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShopDetails" (
    "id" SERIAL NOT NULL,
    "shopOwnerImage" TEXT NOT NULL,
    "shopOwnerName" TEXT NOT NULL,
    "shopName" TEXT NOT NULL,
    "isOpen" BOOLEAN NOT NULL,

    CONSTRAINT "ShopDetails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Login_email_key" ON "Login"("email");
