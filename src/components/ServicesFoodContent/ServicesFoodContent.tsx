import React from "react";
import "./ServicesFoodContent.scss";
import Image from "next/image";
import { FoodItem } from "@/constants/index";

interface ServicesFoodProps {
  foodItems: FoodItem[];
}

function ServicesFoodContent({ foodItems }: ServicesFoodProps) {
  return (
    <section className="services_food">
      <div className="services_food__container">
        {foodItems.map((item) => (
          <div className="services_food__item" key={item.id}>
            <div className="services_food__item__image">
              <Image
                src={item.image}
                alt={item.title}
                width={200}
                height={150}
              />
              <div className="services_food__item__body">
                <div className="services_food__item__body__top">
                  <h3 className="services_food__item__title">{item.title}</h3>
                  <h5 className="services_food__item__category">
                    {item.category}
                  </h5>
                </div>
                <div className="services_food__item__body__bottom">
                  <div className="services_food__item__body__bottom__stars">
                    <div className="services_food__item__body__bottom__stars__icon">
                      <Image
                        src="/images/icons/star.png"
                        alt="Star"
                        width={20}
                        height={20}
                      />
                    </div>
                    <p>{item.rating}</p>
                  </div>
                  <div className="services_food__item__body__bottom__price">
                    <p>${item.price}</p>
                  </div>
                </div>
                <button className="services_food__item__button">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesFoodContent;
