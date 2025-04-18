import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ItemCard from "../components/ItemCard";
import SearchBar from "../components/SearchBar";
import FilterButton from "../components/FilterButtons";
import itemsData from "../items/itemsByName.json";

import "../style/Gallery.css";

export default function Gallery() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const transformedItems = Object.entries(itemsData).map(([key, value]) => ({
      id: key,
      name: value.name,
      icon: value.icon,
      category: value.category || "Autre",
    }));
    setItems(transformedItems);

    const handleFilterChange = () => setFilter(localStorage.getItem("filter"));
    window.addEventListener("filterChanged", handleFilterChange);
    return () =>
      window.removeEventListener("filterChanged", handleFilterChange);
  }, []);

  return (
    <main>
      <section id="header">
        <Link to={"/"} className="home-link">
          Guess The Block
        </Link>
        <SearchBar input={input} setInput={setInput} />
        <FilterButton setFilter={setFilter} activeFilter={filter} />
      </section>
      <section id="gallery">
        {items
          .filter((item) => filter === "" || item.category === filter)
          .filter((item) =>
            item.name.toLowerCase().includes(input.toLowerCase())
          )
          .map((item) => (
            <ItemCard key={item.id} name={item.name} icon={item.icon} />
          ))}
      </section>
    </main>
  );
}
