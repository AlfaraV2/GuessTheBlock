import React from "react";
import GuessTheBlock from "../components/GuessTheBlock";
import { Link } from "react-router-dom";
import "../style/ItemCard.css";
import "../style/Home.css";

export default function Home() {

  return (
    <main>
      <h1>Guess The Block</h1>
      <GuessTheBlock />
      <Link to={"/gallery"} className="gallery-link">Gallery</Link>
    </main>
  );
}
