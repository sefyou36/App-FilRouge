/*
  Warnings:

  - Added the required column `category` to the `produit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `produit` ADD COLUMN `category` VARCHAR(191) NOT NULL;
