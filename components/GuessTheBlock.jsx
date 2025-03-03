import React, { useState, useEffect, useRef } from "react";
import itemsData from "../items/itemsByName.json";
import "../style/GuessTheBlock.css";

export default function GuessTheBlock() {
  const [currentBlock, setCurrentBlock] = useState(null);
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const timerRef = useRef(null);

  useEffect(() => {
    startTimer();
    getRandomBlock();
    return () => clearInterval(timerRef.current);
  }, []);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(getRandomBlock, 15000);
  };

  const getRandomBlock = () => {
    const itemsArray = Object.entries(itemsData).map(([key, value]) => ({
      id: key,
      name: value.name,
      icon: value.icon,
    }));
    const randomItem =
      itemsArray[Math.floor(Math.random() * itemsArray.length)];
    setCurrentBlock(randomItem);
    setMessage("");
    setInput("");
    startTimer();
  };

  const handleGuess = (e) => {
    if (e.key === "Enter") {
      if (input.toLowerCase() === currentBlock.name.toLowerCase()) {
        setMessage("Validé");
        setTimeout(getRandomBlock, 500);
      } else {
        setMessage("Réessayez");
      }
    }
  };

  if (!currentBlock) return <p>Loading...</p>;

  return (
    <div className="guess-container">
      <div>
        <img
          src={`data:image/png;base64,${currentBlock.icon}`}
          className="guess-image"
        />
      </div>
      <input
        type="text"
        placeholder="Guess the block..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleGuess}
        className="guess-input"
      />
      <p className="guess-message">{message}</p>
      <button onClick={getRandomBlock} className="skip-button">
        Skip
      </button>
    </div>
  );
}
