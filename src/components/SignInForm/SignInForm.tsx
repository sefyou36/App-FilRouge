/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import "./SignInForm.scss"; // Assurez-vous de créer ce fichier pour le style

function SignInForm() {
  const [credentials, setCredentials] = useState({
    email: "",
    mot_de_passe: "",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    console.log("Status:", status);
    console.log("Session:", session);
    if (status === "authenticated" && session?.user?.role) {
      console.log("Session authentifiée, redirection...");
      console.log("Rôle de l'utilisateur:", session.user.role);
      redirectBasedOnRole(session.user.role);
    }
  }, [status, session]);

  const redirectBasedOnRole = (role: string) => {
    console.log("Redirection basée sur le rôle:", role);
    switch (role) {
      case 'restaurant':
        console.log("Tentative de redirection vers /dashboard/restaurant");
        router.push('/dashboard/restaurant');
        break;
      case 'livreur':
        router.push('/dashboard/driver');
        break;
      case 'admin':
        router.push('/dashboard/admin');
        break;
      default:
        console.log("Rôle non reconnu, redirection vers /dashboard");
        router.push('/');
    }
  };

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
      console.log("Tentative de connexion avec:", credentials.email);
      const result = await signIn("credentials", {
        redirect: false,
        email: credentials.email,
        password: credentials.mot_de_passe,
      });

      console.log("Résultat de la connexion:", result);

      if (result?.error) {
        throw new Error(result.error);
      }

      // La redirection sera gérée par l'effet useEffect
    } catch (err: any) {
      console.error("Erreur de connexion:", err);
      setError(err.message || "Une erreur s'est produite lors de la connexion");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login">
      <div className="login_container">
        <h1>Connexion</h1>
        <form onSubmit={handleSubmit}>
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
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Connexion en cours..." : "Se connecter"}
          </button>
          {error && <p className="error">{error}</p>}
          <Link href="/signup">
            Vous n&apos;avez pas de compte ? Inscrivez-vous
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignInForm;
