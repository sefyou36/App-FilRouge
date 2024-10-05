'use client'
import React, { useState, useEffect } from "react";
import "./Restaurant.scss";
import Link from "next/link";

interface Restaurant {
  id_restaurant: number;
  nom: string;
  adresse: string;
  image_url: string;
  icon_url: string;
}

function Restaurant() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch('/api/restaurants');
      if (response.ok) {
        const data = await response.json();
        setRestaurants(data);
      } else {
        console.error('Erreur lors de la récupération des restaurants');
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  return (
    <section className="restaurant">
      <div className="restaurant__container">
        <h2 className="restaurant__title">Nos restaurants</h2>
        <h3 className="restaurant__subtitle">
          Nous proposons une large gamme de délicieux repas de différents restaurants
        </h3>
        <div className="restaurant__content">
          {restaurants.map((restaurant) => (
            <Link
              href={`/restaurant/${restaurant.id_restaurant}`}
              className="restaurant__box"
              key={restaurant.id_restaurant}
            >
              <div className="restaurant__image">
                <img src={restaurant.icon_url || '/default-icon.png'} alt={restaurant.nom} />
              </div>
              <div className="restaurant__info">
                <div className="restaurant__rating">
                  <span className="restaurant__rating-icon">★</span>
                  <span className="restaurant__rating-value">
                    {/* Vous pouvez ajouter une note ici si vous en avez une */}
                    4.5
                  </span>
                </div>
                <h3 className="restaurant__name">{restaurant.nom}</h3>
                <address className="restaurant__address">
                  {restaurant.adresse}
                </address>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Restaurant;
