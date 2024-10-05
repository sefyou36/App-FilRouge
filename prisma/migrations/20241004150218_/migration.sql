-- AlterTable
ALTER TABLE `utilisateur` MODIFY `role` ENUM('client', 'livreur', 'admin', 'restaurant') NOT NULL;
