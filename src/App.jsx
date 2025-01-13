import React, { useState, useEffect } from "react";
import ItemCard from "../components/ItemCard";
import itemsData from "./itemsByName.json"; 
import "../style/ItemCard.css";


export default function App() {
  const [items, setItems] = useState([]); 

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
    <main id="gallery">
      {items.map((item) => (
        <ItemCard key={item.id} name={item.name} icon={item.icon} />
      ))}
    </main>
  );
}
