import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("API driver-data appelée");

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  const session = await getSession({ req });
  console.log("Session:", session);

  if (!session || session.user.role !== 'livreur') {
    return res.status(401).json({ message: 'Non autorisé' });
  }

  // Simulons des données pour le test
  const mockData = {
    id: 1,
    nom: "John Doe",
    email: "john@example.com",
    role: "livreur"
  };

  res.status(200).json(mockData);
}