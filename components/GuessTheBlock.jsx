import React, { useState, useEffect, useRef } from "react";
import itemsData from "../items/itemsByName.json";
import "../style/components-style/GuessTheBlock.css";

const TOTAL_TIME = 30;
const MID_TIME = TOTAL_TIME / 2;

export default function GuessTheBlock() {
  const [currentBlock, setCurrentBlock] = useState(null);
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [score, setScore] = useState(0);
  const [hint, setHint] = useState("");
  const [attemptHint, setAttemptHint] = useState("");
  const timerRef = useRef(null);

  useEffect(() => {
    getRandomBlock();
    return () => clearInterval(timerRef.current);
  }, []);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setTimeLeft(TOTAL_TIME);

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          getRandomBlock();
          return TOTAL_TIME;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const getRandomBlock = () => {
    const itemsArray = Object.entries(itemsData).map(([key, value]) => ({
      id: key,
      name: value.name,
      icon: value.icon,
      category: value.category,
    }));
    const randomItem =
      itemsArray[Math.floor(Math.random() * itemsArray.length)];
    setCurrentBlock(randomItem);
    setMessage("");
    setInput("");
    setHint("");
    setAttemptHint("");
    startTimer();
  };

  const handleGuess = (e) => {
    if (e.key === "Enter") {
      if (input.toLowerCase() === currentBlock.name.toLowerCase()) {
        setMessage("Correct !");
        setScore((prev) => prev + 1);
        setAttemptHint("");
        setTimeout(getRandomBlock, 500);
      } else {
        setMessage("Retry");

        const matching = getMatchingLetters(
          input.toLowerCase(),
          currentBlock.name.toLowerCase()
        );
        setAttemptHint(
          `${matching} letter${matching !== 1 ? "s" : ""} well placed`
        );
      }
    }
  };

  useEffect(() => {
    if (timeLeft === MID_TIME && currentBlock) {
      generateHint();
    }
  }, [timeLeft, currentBlock]);

  const generateHint = () => {
    const name = currentBlock.name.toLowerCase();
    let revealed = "";

    for (let i = 0; i < name.length; i++) {
      const char = name[i];
      if (char === " ") {
        revealed += "  ";
      } else {
        revealed += Math.random() < 0.33 ? char : "_";
      }
    }

    setHint(revealed);
  };

  const getMatchingLetters = (guess, answer) => {
    let count = 0;
    for (let i = 0; i < Math.min(guess.length, answer.length); i++) {
      if (guess[i] === answer[i]) count++;
    }
    return count;
  };

  const interpolateColor = (start, end, factor) => {
    return start.map((startVal, i) =>
      Math.round(startVal + (end[i] - startVal) * factor)
    );
  };

  const colorStart1 = [62, 180, 137];
  const colorEnd1 = [255, 80, 80];

  const colorStart2 = [144, 238, 144];
  const colorEnd2 = [255, 150, 150];

  const progress = timeLeft / TOTAL_TIME;

  const gradientColor1 = interpolateColor(colorStart1, colorEnd1, 1 - progress);
  const gradientColor2 = interpolateColor(colorStart2, colorEnd2, 1 - progress);

  if (!currentBlock) return <p>Loading...</p>;

  return (
    <div className="guess-container">
      {currentBlock.category && (
        <p className="block-category">{currentBlock.category}</p>
      )}
      <div className="block-display">
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
      {hint && (
        <p className="hint-text">
          Hint : <span className="hint">{hint}</span>
        </p>
      )}
      <div className="timer-bar-container">
        <div
          className="timer-bar"
          style={{
            width: `${progress * 100}%`,
            background: `linear-gradient(159deg, 
              rgba(${gradientColor1.join(",")}, 1) 0%, 
              rgba(${gradientColor2.join(",")}, 1) 100%)`,
          }}
        />
      </div>
      <p className="score-text">Score : {score}</p>
      <div>
        <p
          className={`guess-message ${
            message === "Correct !" ? "success" : message ? "error" : ""
          }`}
        >
          {message}
        </p>
        {attemptHint && <p className="attempt-hint">{attemptHint}</p>}
      </div>
      <button onClick={getRandomBlock} className="skip-button">
        Skip
      </button>
    </div>
  );
}
