import React from "react";
import GuessTheBlock from "../components/GuessTheBlock";
import { Link } from "react-router-dom";
import "../style/Home.css";

export default function Home() {
  return (
    <main>
      <header>
        <h1>Guess The Block</h1>
      </header>
      <GuessTheBlock />
      <Link to={"/gallery"} className="gallery-link">
        Go to Gallery
      </Link>
      <footer className="game-footer">
        <section className="footer-column">
          <h3>About the Game</h3>
          <p>
            <strong>Guess The Block</strong> is a mini-game where you have 30
            seconds to guess the name of a Minecraft block based on its icon.
            <br />
            All block names must be typed in <strong>English</strong>, just like
            in the game !
          </p>
        </section>

        <section className="footer-column">
          <h3>How It Works</h3>
          <ul>
            <li>
              The block’s <strong>category</strong> is shown above the image
            </li>
            <li>
              A <strong>score</strong> tracks your correct answers
            </li>
            <li>
              A <strong>timer bar</strong> indicates remaining time
            </li>
            <li>
              A <strong>text hint</strong> appears halfway through
            </li>
            <li>
              Wrong guesses show how many
              <strong> letters are well placed</strong>
            </li>
            <li>
              You can <strong>skip</strong> the current block anytime
            </li>
            <li>
              The <strong>Gallery</strong> lets you browse & filter all blocks
            </li>
            <li>
              Everything is based on <strong>real Minecraft block names</strong>
            </li>
          </ul>
        </section>

        <section className="footer-column">
          <h3>Credits</h3>
          <p>
            Developed using <strong>React</strong> by{" "}
            <strong>Léo De Santis</strong>.
            <br />
            View the code on{" "}
            <a href="https://github.com/AlfaraV2/GuessTheBlock" target="_blank">
              GitHub
            </a>
            .
          </p>
        </section>
      </footer>
    </main>
  );
}
