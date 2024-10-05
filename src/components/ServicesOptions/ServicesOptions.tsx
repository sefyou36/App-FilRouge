import React from "react";
import "./ServicesOptions.scss";
import Image from "next/image";

function ServicesOptions() {
  return (
    <section className="services-options">
      <div className="services-options__container">
        <div className="services-options__item">
          <Image
            src="/images/icons/all-you-can-eat.png"
            alt="All you can eat icon"
            width={50}
            height={50}
          />
          <h3>All</h3>
        </div>

        <div className="services-options__item">
          <Image
            src="/images/icons/hamburger.png"
            alt="hamburger"
            width={50}
            height={50}
          />
          <h3>Hamburger</h3>
        </div>

        <div className="services-options__item">
          <Image
            src="/images/icons/taco.png"
            alt="Mexican"
            width={50}
            height={50}
          />
          <h3>Mexican</h3>
        </div>

        <div className="services-options__item">
          <Image
            src="/images/icons/salad.png"
            alt="Salad"
            width={50}
            height={50}
          />
          <h3>Salad</h3>
        </div>

        <div className="services-options__item">
          <Image
            src="/images/icons/pizza.png"
            alt="Pizza"
            width={50}
            height={50}
          />
          <h3>Pizza</h3>
        </div>

        <div className="services-options__item">
          <Image src="/images/icons/bbq.png" alt="BBQ" width={50} height={50} />
          <h3>BBQ</h3>
        </div>

        <div className="services-options__item">
          <Image
            src="/images/icons/food.png"
            alt="Sandwich"
            width={50}
            height={50}
          />
          <h3>Sandwitch</h3>
        </div>

        <div className="services-options__item">
          <Image
            src="/images/icons/steak.png"
            alt="Meat"
            width={50}
            height={50}
          />
          <h3>Meat</h3>
        </div>

        <div className="services-options__item">
          <Image
            src="/images/icons/chicken.png"
            alt="Chicken"
            width={50}
            height={50}
          />
          <h3>Chicken</h3>
        </div>

        <div className="services-options__item">
          <Image
            src="/images/icons/fish.png"
            alt="Fish"
            width={50}
            height={50}
          />
          <h3>Fish</h3>
        </div>

        <div className="services-options__item">
          <Image
            src="/images/icons/ramen.png"
            alt="Ramen"
            width={50}
            height={50}
          />
          <h3>Ramen</h3>
        </div>
      </div>
    </section>
  );
}

export default ServicesOptions;
