import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const count = await prisma.restaurant.count()
      res.status(200).json({ count })
    } catch (error) {
      console.error('Erreur lors de la récupération du nombre de restaurants:', error)
      res.status(500).json({ error: 'Erreur lors de la récupération du nombre de restaurants' })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Méthode ${req.method} non autorisée`)
  }
}