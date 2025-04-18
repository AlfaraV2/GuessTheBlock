import React, { useState } from "react";
import "../style/components-style/SearchBar.css";

export default function SearchBar({ input, setInput, text }) {
  return (
    <input
      type="text"
      placeholder="Search a block..."
      className="search-input"
      onChange={(e) => setInput(e.target.value)}
      value={input}
    />
  );
}
