import React, { useState } from "react";

import PageWrapper from "./components/PageWrapper";
import Background from './components/Background'
import Foreground from "./components/Foreground";

import "./App.css";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <PageWrapper isFullScreen={isOpen}>
      <Background />
      <Foreground handleBlockToggle={handleToggle} isOpen={isOpen} />
    </PageWrapper>
  );
}
