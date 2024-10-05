/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useSession } from "next-auth/react";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole: 'admin' | 'restaurant' | 'driver';
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredRole }) => {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && status !== "loading") {
      if (status === "unauthenticated") {
        router.push('/signin');
      } else if (status === "authenticated") {
        if (session?.user?.role !== requiredRole) {
          if (session?.user?.role === 'client') {
            router.push('/'); // Redirection vers la page d'accueil pour les clients
          } else {
            router.push('/signin');
          }
        }
      }
    }
  }, [mounted, session, status, requiredRole, router]);

  if (!mounted || status === "loading") {
    return <div>Chargement...</div>;
  }

  if (status === "unauthenticated" || session?.user?.role !== requiredRole) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;