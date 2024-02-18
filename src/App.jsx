import React from "react";

import { LayoutProvider } from './contexts/LayoutContext';

import PageWrapper from "./components/PageWrapper";
import Background from './components/Background'
import Foreground from "./components/Foreground";

import "./App.css";

export default function App() {
  return (
    <LayoutProvider>
      <PageWrapper>
        <Background />
        <Foreground />
      </PageWrapper>
    </LayoutProvider>
  );
}
