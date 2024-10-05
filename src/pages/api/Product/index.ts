/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import formidable from 'formidable';
import fs from 'fs/promises';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return await getProducts(req, res);
    case 'POST':
      return await addProduct(req, res);
    default:
      return res.status(405).json({ message: 'Méthode non autorisée' });
  }
}

async function getProducts(req: NextApiRequest, res: NextApiResponse) {
  try {
    const products = await prisma.produit.findMany();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des produits' });
  }
}

async function addProduct(req: NextApiRequest, res: NextApiResponse) {
  const uploadDir = path.join(process.cwd(), 'public', 'uploads');
  const options: formidable.Options = {
    uploadDir,
    keepExtensions: true,
    maxFileSize: 5 * 1024 * 1024, // 5MB
  };

  const form = formidable(options);

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ message: 'Erreur lors du traitement du formulaire' });
    }

    try {
      let photoUrl = null;
      if (files.photo) {
        const photo = Array.isArray(files.photo) ? files.photo[0] : files.photo;
        const newPath = path.join(uploadDir, photo.newFilename);
        await fs.rename(photo.filepath, newPath);
        photoUrl = `/uploads/${photo.newFilename}`;
      }

      const newProduct = await prisma.produit.create({
        data: {
          nom: Array.isArray(fields.nom) ? fields.nom[0] : fields.nom ?? '',
          description: Array.isArray(fields.description) ? fields.description[0] : fields.description ?? '',
          prix: parseFloat(Array.isArray(fields.prix) ? fields.prix[0] : fields.prix ?? '0'),
          id_restaurant: parseInt(Array.isArray(fields.id_restaurant) ? fields.id_restaurant[0] : fields.id_restaurant ?? '0'),
          category: Array.isArray(fields.category) ? fields.category[0] : fields.category ?? '',
          photo: photoUrl ?? '',
        },
      });

      res.status(201).json({ 
        message: 'Produit créé avec succès',
        product: newProduct 
      });
    } catch (error) {
      console.error('Erreur lors de l\'ajout du produit:', error);
      res.status(500).json({ message: 'Erreur lors de l\'ajout du produit' });
    }
  });
}