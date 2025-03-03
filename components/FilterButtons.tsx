import React from "react";
import itemsData from "../items/itemsByName.json";

export default function FilterButton({ setFilter }) {

  const categories = {
    "Nature": "grass",
    "Bois": "oak wood plank",
    "Pierres & Minéraux": "stone",
    "Utilitaires": "crafting table",
    "Redstone & Mécaniques": "redstone block",
    "Bâtiments & Décoration": "bricks",
    "Souterrain & Grottes": "cobblestone",
    "Oceans & Aquatique": "prismarine",
    "Nether & End": "netherrack",
    "Mystique & Magique": "enchanting table"
  };

  return (
    <div className="filter-buttons">
      {Object.entries(categories).map(([category, blockKey]) => {
        const icon = itemsData[blockKey]?.icon;
        return (
          <button
            key={category}
            className="filter-btn"
            onClick={() => setFilter(category)}>
            {icon ? (
              <img className="filter-icon" src={`data:image/png;base64,${icon}`} />
            ) : (
              category
            )}
          </button>
        );
      })}
      <button className="filter-btn" onClick={() => setFilter("")}>🔄</button>
    </div>
  );
}
