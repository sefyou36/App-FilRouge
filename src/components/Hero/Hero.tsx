/* eslint-disable react/react-in-jsx-scope */
// /components/Hero.tsx
"use client";

import "./Hero.scss";
import Link from "next/link";
import { useState, useEffect } from 'react';
import LocationForm from '../LocationForm';

function Hero() {
  const [, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [restaurantCount, setRestaurantCount] = useState<number>(0);

  useEffect(() => {
    async function fetchRestaurantCount() {
      try {
        const response = await fetch('/api/restaurants/restaurant-count');
        const data = await response.json();
        setRestaurantCount(data.count);
      } catch (error) {
        console.error('Erreur lors de la récupération du nombre de restaurants:', error);
      }
    }

    fetchRestaurantCount();
  }, []);

  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">Delicious Food, Delivered To You</h1>
          <p className="hero__description">
            Choose your favorite meal from our broad selection of available
            meals and enjoy a delicious lunch or dinner at home
          </p>

          {/* Ajouter le formulaire de localisation ici */}
          <div className="hero__location">
            <LocationForm onLocationSelect={setLocation} />
          </div>

          {/* Bouton Order Now */}
          <Link href="/services">
            <button className="hero__button">Order Now</button>
          </Link>
        </div>

        <div className="hero__bottom">
          <div className="hero__bottom__content">
            <div className="hero__bottom__content__box">
              <span>{restaurantCount}</span>
              <p>Restaurant</p>
            </div>
            <div className="hero__bottom__content__box">
              <span>5350</span>
              <p>People Served</p>
            </div>
            <div className="hero__bottom__content__box">
              <span>12350</span>
              <p>Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
