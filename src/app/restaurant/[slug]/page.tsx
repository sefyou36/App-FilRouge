import React from "react";
import ServicesFoodContent from "@/components/ServicesFoodContent/ServicesFoodContent";
import ServicesOptions from "@/components/ServicesOptions/ServicesOptions";
import ShortBackground from "@/components/ShortBackground/ShortBackground";
import { restaurants, Restaurant } from "@/constants/index";
import { notFound } from "next/navigation"; // Used for handling 404

interface RestaurantPageProps {
  params: { slug: string };
}

export default function RestaurantPage({ params }: RestaurantPageProps) {
  const restaurant = restaurants.find(
    (r: Restaurant) => r.slug === params.slug
  );

  if (!restaurant) {
    notFound(); // Show 404 page if restaurant not found
  }

  return (
    <section>
      <ShortBackground
        title={restaurant?.name}
        background={restaurant?.image}
      />
      <ServicesOptions />
      <ServicesFoodContent
        foodItems={
          restaurant && restaurant.products
            ? restaurant.products.map((product, index) => ({
                ...product,
                id: index,
              }))
            : []
        }
      />
    </section>
  );
}
