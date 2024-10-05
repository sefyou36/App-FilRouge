/* eslint-disable react/react-in-jsx-scope */
"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import "./SignUpForm.scss";

function SignUpForm() {
  const [credentials, setCredentials] = useState({
    nom: "",
    email: "",
    mot_de_passe: "",
    adresse: "",
    role: "client", // ou un sélecteur pour choisir le rôle
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Échec de la création du compte");
      }

      // Connecter l'utilisateur après l'inscription
      const result = await signIn("credentials", {
        redirect: false,
        email: credentials.email,
        password: credentials.mot_de_passe,
      });

      if (result?.error) {
        throw new Error("Échec de la connexion");
      }

      // Rediriger vers le tableau de bord
      router.push("/");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message || "Une erreur s'est produite");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="register">
      <div className="register_container">
        <h1>Inscription</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nom"
            placeholder="Entrez votre nom"
            value={credentials.nom}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Entrez votre email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="mot_de_passe"
            placeholder="Entrez votre mot de passe"
            value={credentials.mot_de_passe}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="adresse"
            placeholder="Entrez votre adresse"
            value={credentials.adresse}
            onChange={handleChange}
            required
          />
          {/* <select
            name="role"
            value={credentials.role}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              handleChange(e as unknown as React.ChangeEvent<HTMLInputElement>)
            }
            required
          >
            <option value="client">Client</option>
            <option value="admin">Administrateur</option>
          </select> */}
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Inscription en cours..." : "Créer un compte"}
          </button>
          {error && <p className="error">{error}</p>}
          <Link href="/signin">Vous avez déjà un compte ? Connectez-vous</Link>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
