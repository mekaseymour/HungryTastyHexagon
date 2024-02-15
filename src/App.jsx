import React, { useState } from "react";

import HeaderCard from "./components/HeaderCard.jsx";

import "./App.css";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <main style={{ padding: isOpen ? "0px" : "20px" }}>
      <HeaderCard isOpen={isOpen} onToggle={handleToggle} />
    </main>
  );
}
