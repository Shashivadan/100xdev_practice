/*
  Warnings:

  - You are about to drop the column `doem` on the `Todos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Todos" DROP COLUMN "doem",
ADD COLUMN     "doen" BOOLEAN NOT NULL DEFAULT false;
