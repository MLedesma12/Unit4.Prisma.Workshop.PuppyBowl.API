-- CreateEnum
CREATE TYPE "Status" AS ENUM ('bench', 'field');

-- CreateTable
CREATE TABLE "Player" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "breed" TEXT NOT NULL,
    "status" "Status" NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Player_breed_key" ON "Player"("breed");
