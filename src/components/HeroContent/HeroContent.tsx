import React from "react";
import "./HeroContent.scss";

function HeroContent({
  title,
  subtitle,
  backgroundImage,
}: {
  title: string;
  subtitle: string;
  backgroundImage: string;
}) {
  return (
    <section className="hero_about">
      <div
        className="hero_about_container"
        style={{
          background: `url(${backgroundImage}) center/cover no-repeat`,
        }}
      >
        <div className="hero_about_container_box">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    </section>
  );
}

export default HeroContent;
