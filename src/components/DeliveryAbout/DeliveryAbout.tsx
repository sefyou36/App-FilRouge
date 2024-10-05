import React from "react";
import "./DeliveryAbout.scss";
import Image from "next/image";

function DeliveryAbout() {
  return (
    <section className="delivery_about">
      <div className="delivery_about_container">
        <div className="delivery_about_container_left"></div>
        <div className="delivery_about_container_right">
          <h1>
            Free delivery 7 <br /> days a week
          </h1>
          <div className="delivery_about_container_right_content">
            <div className="delivery_about_container_right_content_box">
              <div className="delivery_about_container_right_content_box_icon">
                <Image
                  src="/images/icons/cheese-burger.png"
                  alt="Delivery"
                  width={60}
                  height={60}
                />
              </div>
              <div className="delivery_about_container_right_content_box_text">
                <h3>Choose Meal</h3>
                <p>Choose from a variety of meals and drinks</p>
              </div>
            </div>
            <div className="delivery_about_container_right_content_box">
              <div className="delivery_about_container_right_content_box_icon">
                <Image
                  src="/images/icons/delivery-bike2.png"
                  alt="Delivery"
                  width={60}
                  height={60}
                />
              </div>
              <div className="delivery_about_container_right_content_box_text">
                <h3>Delivery or Takeaway</h3>
                <p>Delivery in a fast way</p>
              </div>
            </div>
            <div className="delivery_about_container_right_content_box">
              <div className="delivery_about_container_right_content_box_icon">
                <Image
                  src="/images/icons/meal.png"
                  alt="Delivery"
                  width={60}
                  height={60}
                />
              </div>
              <div className="delivery_about_container_right_content_box_text">
                <h3>Enjoy Your Meal</h3>
                <p>Enjoy your delicious meal at home or at the office.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DeliveryAbout;
