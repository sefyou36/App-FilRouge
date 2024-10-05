// eslint-disable-next-line @typescript-eslint/no-require-imports
const { PrismaClient } = require('@prisma/client');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function createSuperUser(): Promise<void> {
  const email = process.env.SUPER_USER_EMAIL;
  const password = process.env.SUPER_USER_PASSWORD;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.utilisateur.create({
      data: {
        email: email,
        mot_de_passe: hashedPassword,
        role: 'admin',
        nom: 'Super Admin',
        adresse: '', // Ajout du champ adresse requis
        // Ajoutez d'autres champs nécessaires selon votre modèle d'utilisateur
      },
    });

    console.log('SuperUser créé avec succès:', user);
  } catch (error) {
    console.error('Erreur lors de la création du SuperUser:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createSuperUser()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  .catch((error: any) => {
    console.error('Erreur non gérée:', error);
    process.exit(1);
  });