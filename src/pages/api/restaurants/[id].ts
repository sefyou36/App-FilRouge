/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  switch (req.method) {
    case 'GET':
      return await getRestaurant(req, res, Number(id))
    case 'PUT':
      return await updateRestaurant(req, res, Number(id))
    case 'DELETE':
      return await deleteRestaurant(req, res, Number(id))
    default:
      return res.status(405).json({ message: 'Méthode non autorisée' })
  }
}

// Obtenir un restaurant spécifique
async function getRestaurant(req: NextApiRequest, res: NextApiResponse, id: number) {
  try {
    const restaurant = await prisma.restaurant.findUnique({
      where: { id_restaurant: id },
    })
    if (restaurant) {
      res.status(200).json(restaurant)
    } else {
      res.status(404).json({ message: 'Restaurant non trouvé' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération du restaurant' })
  }
}

// Mettre à jour un restaurant
async function updateRestaurant(req: NextApiRequest, res: NextApiResponse, id: number) {
  const { nom, adresse, type_cuisine, horaires } = req.body
  try {
    const updatedRestaurant = await prisma.restaurant.update({
      where: { id_restaurant: id },
      data: {
        nom,
        adresse,
        type_cuisine,
        horaires,
      },
    })
    res.status(200).json(updatedRestaurant)
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour du restaurant' })
  }
}

// Supprimer un restaurant
async function deleteRestaurant(req: NextApiRequest, res: NextApiResponse, id: number) {
  try {
    await prisma.restaurant.delete({
      where: { id_restaurant: id },
    })
    res.status(204).end()
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression du restaurant' })
  }
}