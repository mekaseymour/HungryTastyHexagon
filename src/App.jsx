import React, { useState } from "react";

import BioCard from "./components/BioCard";

import "./App.css";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <main style={{ padding: isOpen ? "0px" : "20px" }}>
      <BioCard isOpen={isOpen} onToggle={handleToggle} />
    </main>
  );
}
