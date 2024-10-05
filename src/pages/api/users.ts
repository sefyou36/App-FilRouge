/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient, Role } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getUsers(req, res);
    case 'POST':
      return createUser(req, res);
    case 'DELETE':
      return deleteUser(req, res);
    default:
      res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
      res.status(405).end(`Méthode ${req.method} non autorisée`);
  }
}

// Récupérer tous les utilisateurs
async function getUsers(req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = await prisma.utilisateur.findMany({
      select: {
        id_utilisateur: true,
        nom: true,
        email: true,
        adresse: true,
        role: true,
      },
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des utilisateurs" });
  }
}

// Créer un nouvel utilisateur
async function createUser(req: NextApiRequest, res: NextApiResponse) {
  const { nom, email, mot_de_passe, adresse, role, phone, city, postal, vehicule, type_cuisine, horaires, website } = req.body;
  
  try {
    const hashedPassword = await bcrypt.hash(mot_de_passe, 10);
    
    // Utilisation d'une transaction pour s'assurer que toutes les opérations sont effectuées ou aucune
    const result = await prisma.$transaction(async (prisma) => {
      // Création de l'utilisateur de base
      const newUser = await prisma.utilisateur.create({
        data: {
          nom,
          email,
          mot_de_passe: hashedPassword,
          adresse: `${adresse}, ${city}, ${postal}`,
          role: role as Role,
        },
      });

      // Ajout des informations spécifiques au rôle
      switch (role) {
        case 'livreur':
          await prisma.livreur.create({
            data: {
              id_utilisateur: newUser.id_utilisateur,
              vehicule,
              statut_disponibilite: false,
            },
          });
          break;
        case 'restaurant':
          await prisma.restaurant.create({
            data: {
              id_utilisateur: newUser.id_utilisateur,
              nom,
              adresse: `${adresse}, ${city}, ${postal}`,
              type_cuisine,
              horaires,
              email,
              phone,
              website,
            },
          });
          break;
        // Vous pouvez ajouter d'autres cas ici si nécessaire
      }

      return newUser;
    });

    res.status(201).json({ message: 'Utilisateur créé avec succès', user: result });
  } catch (error) {
    console.error('Erreur lors de la création de l\'utilisateur:', error);
    res.status(400).json({ message: "Erreur lors de la création de l'utilisateur" });
  }
}

// Mettre à jour un utilisateur
async function updateUser(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const { nom, email, adresse, role } = req.body;
  try {
    const updatedUser = await prisma.utilisateur.update({
      where: { id_utilisateur: Number(id) },
      data: { nom, email, adresse, role },
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: "Erreur lors de la mise à jour de l'utilisateur" });
  }
}

// Supprimer un utilisateur
async function deleteUser(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  
  if (!id || Array.isArray(id)) {
    return res.status(400).json({ message: "ID d'utilisateur invalide" });
  }

  try {
    const userId = parseInt(id, 10);

    // Récupérer l'utilisateur pour connaître son rôle
    const user = await prisma.utilisateur.findUnique({
      where: { id_utilisateur: userId },
    });

    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    // Utiliser une transaction pour s'assurer que toutes les opérations sont effectuées ou aucune
    await prisma.$transaction(async (prisma) => {
      // Supprimer les entrées dans les tables spécifiques au rôle
      if (user.role === 'livreur') {
        const livreur = await prisma.livreur.findUnique({
          where: { id_utilisateur: userId },
        });
        if (livreur) {
          await prisma.livreur.delete({
            where: { id_utilisateur: userId },
          });
        }
      } else if (user.role === 'restaurant') {
        const restaurant = await prisma.restaurant.findUnique({
          where: { id_utilisateur: userId },
        });
        if (restaurant) {
          await prisma.restaurant.delete({
            where: { id_utilisateur: userId },
          });
        }
      }

      // Supprimer l'utilisateur de la table principale
      await prisma.utilisateur.delete({
        where: { id_utilisateur: userId },
      });
    });

    res.status(200).json({ message: "Utilisateur supprimé avec succès" });
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'utilisateur:', error);
    res.status(500).json({ message: "Erreur lors de la suppression de l'utilisateur" });
  }
}