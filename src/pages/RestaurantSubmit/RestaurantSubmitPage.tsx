"use client";

import RestaurantForm from "@/components/RestaurantForm/RestaurantForm";
import ShortBackground from "@/components/ShortBackground/ShortBackground";

function RestaurantSubmitPage() {
  return (
    <>
      <ShortBackground
        title="Submit Your Restaurant"
        background="/images/hero_restaurant.jpg"
      />
      <RestaurantForm
        onSubmit={(formData) => {
          console.log(formData);
        }}
      />
    </>
  );
}

export default RestaurantSubmitPage;
