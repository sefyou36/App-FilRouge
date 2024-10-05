import React from "react";
import "./WorkWithUs.scss";
import Image from "next/image";
import Link from "next/link";

function WorkWithUs() {
  return (
    <section className="work-with-us">
      <div className="work-with-us__container">
        <h2 className="work-with-us__title">Work with us</h2>
        <div className="work-with-us__cards">
          <div className="work-with-us__card">
            <div className="work-with-us__card-image">
              <Image
                src="/images/online-food.jpg"
                alt="online-food"
                width={300}
                height={200}
              />
            </div>
            <h3 className="work-with-us__card-title">Submit Your Restaurant</h3>
            <p className="work-with-us__card-description">
              Start selling your food to customers online
            </p>
            <Link href="/restaurant-form">
              <button className="work-with-us__card-button">Submit Now</button>
            </Link>
          </div>
          <div className="work-with-us__card">
            <div className="work-with-us__card-image">
              <Image
                src="/images/online-food-delivery.jpg"
                alt="online-food"
                width={300}
                height={200}
              />
            </div>
            <h3 className="work-with-us__card-title">
              We are looking for drivers
            </h3>
            <p className="work-with-us__card-description">
              Earn money by delivering food to customers
            </p>
            <Link href="/driver-form">
              <button className="work-with-us__card-button">Submit Now</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkWithUs;
