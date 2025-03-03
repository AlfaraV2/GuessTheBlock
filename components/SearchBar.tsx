import React, {useState} from 'react'
import "../style/SearchBar.css";

export default function SearchBar({input, setInput, text}) {

  return (
      <input
        type="text"
        placeholder="Chercher un block"
        className="search-input"
        onChange={(e)=> setInput(e.target.value)}
        value={input}
      />
  );
}

