/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient, Role } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import formidable from 'formidable'
import fs from 'fs/promises'
import path from 'path'
import crypto from 'crypto';
import bcrypt from 'bcryptjs';

// Fonction pour générer un mot de passe aléatoire
function generatePassword(length = 12) {
  return crypto.randomBytes(length).toString('hex').slice(0, length);
}

export const config = {
  api: {
    bodyParser: false,
  },
}

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return await getRestaurants(req, res)
    case 'POST':
      return await addRestaurant(req, res)
    default:
      return res.status(405).json({ message: 'Méthode non autorisée' })
  }
}

// Obtenir tous les restaurants
async function getRestaurants(req: NextApiRequest, res: NextApiResponse) {
  try {
    const restaurants = await prisma.restaurant.findMany()
    res.status(200).json(restaurants)
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des restaurants' })
  }
}

// Ajouter un nouveau restaurant
async function addRestaurant(req: NextApiRequest, res: NextApiResponse) {
  const uploadDir = path.join(process.cwd(), 'public', 'uploads')
  const options: formidable.Options = {
    uploadDir,
    keepExtensions: true,
    maxFileSize: 5 * 1024 * 1024, // 5MB
  }

  const form = formidable(options)

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ message: 'Erreur lors du traitement du formulaire' })
    }

    try {
      let imageUrl = null
      let iconUrl = null
      if (files.image) {
        const image = Array.isArray(files.image) ? files.image[0] : files.image
        const newPath = path.join(uploadDir, image.newFilename)
        await fs.rename(image.filepath, newPath)
        imageUrl = `/uploads/${image.newFilename}`
      }
      if (files.icon) {
        const icon = Array.isArray(files.icon) ? files.icon[0] : files.icon
        const newPath = path.join(uploadDir, icon.newFilename)
        await fs.rename(icon.filepath, newPath)
        iconUrl = `/uploads/${icon.newFilename}`
      }

      // Générer un mot de passe aléatoire
      const plainPassword = generatePassword();
      
      // Afficher le mot de passe généré dans les logs du serveur
      console.log('Mot de passe généré pour le restaurant:', plainPassword);

      // Hacher le mot de passe
      const hashedPassword = await bcrypt.hash(plainPassword, 10);

      // Créer l'utilisateur avec le rôle restaurant
      const newUser = await prisma.utilisateur.create({
        data: {
          nom: Array.isArray(fields.nom) ? fields.nom[0] : fields.nom ?? '',
          email: Array.isArray(fields.email) ? fields.email[0] : fields.email ?? '',
          mot_de_passe: hashedPassword, // Utiliser le mot de passe haché
          adresse: Array.isArray(fields.adresse) ? fields.adresse[0] : fields.adresse ?? '',
          role: 'restaurant' as Role,
        },
      })

      // Créer le restaurant
      const newRestaurant = await prisma.restaurant.create({
        data: {
          nom: Array.isArray(fields.nom) ? fields.nom[0] : fields.nom ?? '',
          adresse: Array.isArray(fields.adresse) ? fields.adresse[0] : fields.adresse ?? '',
          type_cuisine: Array.isArray(fields.type_cuisine) ? fields.type_cuisine[0] : fields.type_cuisine ?? '',
          horaires: Array.isArray(fields.horaires) ? fields.horaires[0] : fields.horaires ?? '',
          email: Array.isArray(fields.email) ? fields.email[0] : fields.email ?? '',
          phone: Array.isArray(fields.phone) ? fields.phone[0] : fields.phone ?? '',
          website: Array.isArray(fields.website) ? fields.website[0] : fields.website ?? '',
          image_url: imageUrl ?? '',
          icon_url: iconUrl ?? '',
          id_utilisateur: newUser.id_utilisateur, // Lier le restaurant à l'utilisateur créé
        },
      })

      res.status(201).json({ 
        message: `Restaurant créé avec succès. Mot de passe généré: ${plainPassword}`,
        user: { ...newUser, mot_de_passe: plainPassword }, // Renvoyer le mot de passe en clair
        restaurant: newRestaurant 
      })
    } catch (error) {
      console.error('Erreur lors de l\'ajout du restaurant:', error)
      res.status(500).json({ message: 'Erreur lors de l\'ajout du restaurant' })
    }
  })
}