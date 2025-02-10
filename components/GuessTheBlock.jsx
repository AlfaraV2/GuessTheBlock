import React, { useState, useEffect } from "react";
import itemsData from "../items/itemsByName.json";

export default function GuessTheBlock() {
  const [currentBlock, setCurrentBlock] = useState(null);
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

useEffect(() => {
  getRandomBlock();
}, []);

const getRandomBlock = () => {
  const itemsArray = Object.entries(itemsData).map(([key, value]) => ({
    id: key,
    name: value.name,
    icon: value.icon,
  }));
  const randomItem = itemsArray[Math.floor(Math.random() * itemsArray.length)];
  setCurrentBlock(randomItem);
  setMessage("");
  setInput("");
};

const handleGuess = (e) => {
  if (e.key === "Enter") {
    if (input.toLowerCase() === currentBlock.name.toLowerCase()) {
      setMessage("Validé");
      setTimeout(getRandomBlock, 1000);
    } else {
      setMessage("Réessayez");
    }
  }
};

if (!currentBlock) return <p>Loading...</p>;

  return (
    <div className="guess-container">
      <img src={`data:image/png;base64,${currentBlock.icon}`} className="guess-image" />
      <input
        type="text"
        placeholder="Guess the block..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleGuess}
        className="guess-input"
      />
      <p className="guess-message">{message}</p>
    </div>
  );

}
