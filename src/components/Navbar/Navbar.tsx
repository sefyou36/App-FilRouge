"use client";

import React, { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import "./Navbar.scss";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: session } = useSession();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSignOut = async () => {
    await signOut({ redirect: true, callbackUrl: '/' });
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <Image
            src="/images/icons/logo.png"
            alt="MealSwift"
            width={50}
            height={50}
          />
          <Link href="/">MealSwift </Link>
        </div>

        <div
          className={`navbar__menu ${
            isMobileMenuOpen ? "navbar__menu--open" : ""
          }`}
        >
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          {session ? (
            <>
              <span className="navbar__welcome">Bonjour, {session.user?.name}</span>
              <Link href="/" onClick={handleSignOut}>
                <button className="navbar__button">Sign-out</button>
              </Link>
            </>
          ) : (
            <Link href="/signin">
              <button className="navbar__button">Sign-in</button>
            </Link>
          )}
        </div>

        {/* Hamburger menu for mobile */}
        <div className="navbar__icon" onClick={toggleMobileMenu}>
          <Image
            src="/images/icons/menu_list.png"
            alt="Menu"
            width={30}
            height={30}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
