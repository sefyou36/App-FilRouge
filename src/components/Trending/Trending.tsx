import React from "react";
import "./Trending.scss";
import Image from "next/image";

function Trending() {
  return (
    <section className="trending">
      <div className="trending__container">
        <h1 className="trending__title">Trending</h1>
        <div className="trending__cards">
          <div className="trending__card">
            <h4 className="trending__card-category">Vegan</h4>
            <h3 className="trending__card__title ">ShroomBacon Burger</h3>
            <div className="trending__card__image">
              <Image
                src="/images/food/product_01.jpg"
                alt="Trending"
                width={150}
                height={150}
              />
            </div>
            <div className="trending__card-info">
              <span className="trending__card-price">$12.99</span>
              <button className="trending__card-button">+</button>
            </div>
          </div>

          <div className="trending__card">
            <h4 className="trending__card-category">Chicken</h4>
            <h3 className="trending__card__title ">CrazyBeefTuna Burger</h3>
            <div className="trending__card__image">
              <Image
                src="/images/food/product_02.jpg"
                alt="Trending"
                width={150}
                height={150}
              />
            </div>
            <div className="trending__card-info">
              <span className="trending__card-price">$13.99</span>
              <button className="trending__card-button">+</button>
            </div>
          </div>

          <div className="trending__card">
            <h4 className="trending__card-category">Meals</h4>
            <h3 className="trending__card__title ">Double Cheeseburger</h3>
            <div className="trending__card__image">
              <Image
                src="/images/food/product_03.jpg"
                alt="Trending"
                width={150}
                height={150}
              />
            </div>
            <div className="trending__card-info">
              <span className="trending__card-price">$8.99</span>
              <button className="trending__card-button">+</button>
            </div>
          </div>

          <div className="trending__card">
            <h4 className="trending__card-category">Beef</h4>
            <h3 className="trending__card__title ">Bacon Cheeseburger</h3>
            <div className="trending__card__image">
              <Image
                src="/images/food/product_04.jpg"
                alt="Trending"
                width={150}
                height={150}
              />
            </div>
            <div className="trending__card-info">
              <span className="trending__card-price">$6.99</span>
              <button className="trending__card-button">+</button>
            </div>
          </div>

          <div className="trending__card">
            <h4 className="trending__card-category">Beef</h4>
            <h3 className="trending__card__title ">Bacon Cheeseburger</h3>
            <div className="trending__card__image">
              <Image
                src="/images/food/product_04.jpg"
                alt="Trending"
                width={150}
                height={150}
              />
            </div>
            <div className="trending__card-info">
              <span className="trending__card-price">$6.99</span>
              <button className="trending__card-button">+</button>
            </div>
          </div>

          <div className="trending__card">
            <h4 className="trending__card-category">Beef</h4>
            <h3 className="trending__card__title ">Bacon Cheeseburger</h3>
            <div className="trending__card__image">
              <Image
                src="/images/food/product_04.jpg"
                alt="Trending"
                width={150}
                height={150}
              />
            </div>
            <div className="trending__card-info">
              <span className="trending__card-price">$6.99</span>
              <button className="trending__card-button">+</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trending;
