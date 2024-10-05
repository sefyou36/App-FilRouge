-- AlterTable
ALTER TABLE `restaurant` ADD COLUMN `icon_url` VARCHAR(191) NULL,
    ADD COLUMN `image_url` VARCHAR(191) NULL;

-- Étape 1: Ajouter la colonne en tant que nullable
ALTER TABLE `restaurant` ADD COLUMN `id_utilisateur` INTEGER;

-- Étape 2: Créer des utilisateurs pour les restaurants existants
-- Remarque: Vous devrez ajuster cette requête en fonction de votre structure de données
INSERT INTO `utilisateur` (nom, email, mot_de_passe, adresse, role)
SELECT nom, email, 'mot_de_passe_temporaire', adresse, 'restaurant'
FROM `restaurant`
WHERE `restaurant`.`id_utilisateur` IS NULL;

-- Étape 3: Mettre à jour les restaurants avec les nouveaux id_utilisateur
UPDATE `restaurant` r
JOIN `utilisateur` u ON r.email = u.email
SET r.id_utilisateur = u.id_utilisateur
WHERE r.id_utilisateur IS NULL;

-- Étape 4: Rendre la colonne non nullable et ajouter la contrainte unique
ALTER TABLE `restaurant` MODIFY COLUMN `id_utilisateur` INTEGER NOT NULL;
ALTER TABLE `restaurant` ADD CONSTRAINT `restaurant_id_utilisateur_key` UNIQUE (`id_utilisateur`);

-- Étape 5: Ajouter la contrainte de clé étrangère
ALTER TABLE `restaurant` ADD CONSTRAINT `restaurant_id_utilisateur_fkey` FOREIGN KEY (`id_utilisateur`) REFERENCES `utilisateur`(`id_utilisateur`) ON DELETE RESTRICT ON UPDATE CASCADE;