import React, {useState} from 'react'
import "../style/SearchBar.css";

export default function SearchBar({input, setInput}) {

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Rechercher un item"
        className="search-input"
        onChange={(e)=> setInput(e.target.value)}
        value={input}
      />
    </div>
  );
}

