/* eslint-disable react/react-in-jsx-scope */
'use client'

import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionProvider>
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
      </SessionProvider>
    </html>
  );
}
