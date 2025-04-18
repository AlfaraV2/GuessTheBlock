import React from "react";
import itemsData from "../items/itemsByName.json";
import "../style/components-style/FilterButtons.css";

export default function FilterButton({ setFilter, activeFilter }) {
  const categories = {
    Nature: "grass",
    Wood: "oak wood plank",
    "Stones & Minerals": "stone",
    Utilities: "crafting table",
    "Redstone & Mechanics": "redstone block",
    "Building & Decoration": "bricks",
    "Oceans & Aquatic": "prismarine",
    Nether: "netherrack",
    End: "end stone",
    "Mystical & Magical": "enchantment table",
  };

  return (
    <div className="filter-buttons">
      {Object.entries(categories).map(([category, blockKey]) => {
        const icon = itemsData[blockKey]?.icon;
        const isActive = activeFilter === category;
        return (
          <div key={category} className="filter-btn-container">
            <button
              className={`filter-btn ${isActive ? "active" : ""}`}
              onClick={() => setFilter(category)}
            >
              {icon ? (
                <img
                  className="filter-icon"
                  src={`data:image/png;base64,${icon}`}
                  alt={category}
                />
              ) : (
                category
              )}
            </button>
            <div className="category-label">{category}</div>
          </div>
        );
      })}
      <div className="filter-btn-container">
        <button
          className={`filter-btn ${activeFilter === "" ? "active" : ""}`}
          onClick={() => setFilter("")}
        >
          {itemsData["barrier"]?.icon ? (
            <img
              className="filter-icon"
              src={`data:image/png;base64,${itemsData["barrier"].icon}`}
              alt="All"
            />
          ) : (
            "All"
          )}
        </button>
        <div className="category-label">All</div>
      </div>
    </div>
  );
}
