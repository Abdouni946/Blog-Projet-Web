/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Utilisateur` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `AUTHOR` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `articleId` to the `Commentaire` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `article` ADD COLUMN `AUTHOR` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `commentaire` ADD COLUMN `articleId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `_CategorieArticle` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_CategorieArticle_AB_unique`(`A`, `B`),
    INDEX `_CategorieArticle_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Utilisateur_email_key` ON `Utilisateur`(`email`);

-- AddForeignKey
ALTER TABLE `Article` ADD CONSTRAINT `Article_AUTHOR_fkey` FOREIGN KEY (`AUTHOR`) REFERENCES `Utilisateur`(`Id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Commentaire` ADD CONSTRAINT `Commentaire_articleId_fkey` FOREIGN KEY (`articleId`) REFERENCES `Article`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CategorieArticle` ADD CONSTRAINT `_CategorieArticle_A_fkey` FOREIGN KEY (`A`) REFERENCES `Article`(`Id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CategorieArticle` ADD CONSTRAINT `_CategorieArticle_B_fkey` FOREIGN KEY (`B`) REFERENCES `Categorie`(`Id`) ON DELETE CASCADE ON UPDATE CASCADE;
