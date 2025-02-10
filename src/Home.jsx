import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import GuessTheBlock from "../components/GuessTheBlock";
import { Link } from "react-router-dom";
import "../style/ItemCard.css";

export default function Home() {
  const [input, setInput] = useState("");

  return (
    <main>
      <GuessTheBlock />
      <Link to={"/gallery"}>Gallery</Link>
    </main>
  );
}
