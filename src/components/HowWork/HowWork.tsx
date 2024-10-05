import React from "react";
import "./HowWork.scss";
import Image from "next/image";

function HowWork() {
  return (
    <section className="how-work">
      <div className="how-work__container">
        <h2 className="how-work__title">How it works</h2>
        <div className="how-work__steps">
          <div className="how-work__step">
            <div className="how-work__step-number">1</div>
            <div className="how-work__step-icon">
              <Image
                src="/images/icons/signup.png"
                alt="Sign up"
                width={60}
                height={60}
              />
            </div>
            <h3 className="how-work__step-title">Sign up</h3>
            <p className="how-work__step-description">
              Create an account and start using our services
            </p>
          </div>
          <div className="how-work__step">
            <div className="how-work__step-number">2</div>
            <div className="how-work__step-icon">
              <Image
                src="/images/icons/menu.png"
                alt="Sign up"
                width={60}
                height={60}
              />
            </div>
            <h3 className="how-work__step-title">Choose a meals</h3>
            <p className="how-work__step-description">
              Browse the menu and choose your favorite meal
            </p>
          </div>
          <div className="how-work__step">
            <div className="how-work__step-number">3</div>
            <div className="how-work__step-icon">
              <Image
                src="/images/icons/pay.png"
                alt="Sign up"
                width={60}
                height={60}
              />
            </div>
            <h3 className="how-work__step-title">Pay by card or cash</h3>
            <p className="how-work__step-description">
              Pay for your order using a credit card or cash
            </p>
          </div>
          <div className="how-work__step">
            <div className="how-work__step-number">4</div>
            <div className="how-work__step-icon">
              <Image
                src="/images/icons/delivery-bike.png"
                alt="Sign up"
                width={60}
                height={60}
              />
            </div>
            <h3 className="how-work__step-title">Delivery - Takeway</h3>
            <p className="how-work__step-description">
              Wait for the delivery, Enjoy your meal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowWork;
