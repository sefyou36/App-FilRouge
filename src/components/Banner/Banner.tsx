import React from "react";
import "./Banner.scss";
import Link from "next/link";

function Banner() {
  return (
    <section className="banner">
      <div className="banner__container">
        <div className="banner__container__top">
          <div className="banner__container__top__leftside">
            <h1 className="banner__container__top__title">
              Delicious food for you
            </h1>
            <p className="banner__container__top__subtitle">
              Discover the best food & drinks in your city
            </p>
          </div>
          <Link href="/services">
            <button className="banner__button">Order now</button>
          </Link>
        </div>

        <div className="banner__container__bottom">
          <h2>We also deliver to your office</h2>
          <p>
            You can make your employees happy by ordering food from our
            restaurant. We can deliver the food to your office.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Banner;
