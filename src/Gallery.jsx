import React, { useState, useEffect } from "react";
import ItemCard from "../components/ItemCard";
import SearchBar from "../components/SearchBar";
import itemsData from "../items/itemsByName.json"; 
import "../style/ItemCard.css";

export default function Gallery() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const transformedItems = Object.entries(itemsData).map(([key, value]) => ({
      id: key,
      name: value.name,
      icon: value.icon,
    }));
    console.log(transformedItems);
    setItems(transformedItems); 
  }, []);

  return (
    <main>
      <SearchBar input={input} setInput={setInput}/>
      <div id="gallery">
        {items.map((item) => (
          item.name.toLowerCase().startsWith(input.toLowerCase()) &&
          <ItemCard key={item.id} name={item.name} icon={item.icon} />
        ))}
      </div>
    </main>
  );
}
