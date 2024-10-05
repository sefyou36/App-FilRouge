import React from "react";
import "./ShortBackground.scss";

interface ShortBackgroundProps {
  background: string;
  title?: string; // Notez le '?' qui rend cette prop optionnelle
}

function ShortBackground({ background, title }: ShortBackgroundProps) {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      {title && <h1>{title}</h1>}
    </div>
  );
}

export default ShortBackground;
