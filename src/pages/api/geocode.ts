/* eslint-disable @typescript-eslint/no-unused-vars */
// /pages/api/geocode.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type GeoCodeResponse = {
  location: {
    lat: number;
    lng: number;
  }
} | {
  error: string;
};

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse<GeoCodeResponse>
) {
  const { address } = req.query;

  if (!address || typeof address !== 'string') {
    return res.status(400).json({ error: 'Adresse manquante ou invalide' });
  }

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    if (data.results.length > 0) {
      const location = data.results[0].geometry.location;
      return res.status(200).json({ location });
    } else {
      return res.status(404).json({ error: 'Aucun résultat trouvé' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la récupération des données' });
  }
}
