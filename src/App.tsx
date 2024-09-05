import React from 'react';
import './App.css';
import { BlockHeader } from "./components/header";
import { BlockFooter } from "./components/foooter";
import { BlockMain } from "./components/main/index";

function App() {
  return (
    <React.Fragment>
      <BlockHeader />
      <BlockMain />
      <BlockFooter />
    </React.Fragment>
  );
}

export default App;
