import React from "react";
import "../style/components-style/ItemCard.css";

export default function ItemCard({ name, icon }) {
  const imageUrl = `data:image/png;base64,${icon}`;
  return (
    <div className="item-card">
      <img id="icon" src={imageUrl} alt={name} />
      <p className="title">{name}</p>
    </div>
  );
}
