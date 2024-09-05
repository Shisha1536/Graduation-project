import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import { BlockHeader } from "./pages/header";
import { BlockFooter } from "./pages/foooter";
import { BlockMain } from "./pages/main/index";
import  Test  from "./pages/main/test";

function App() {
  return (
    <BrowserRouter>
      <BlockHeader />
      <Routes>
        <Route path="/" element={<BlockMain />} />
        <Route path="/books" element={<Test />} />
      </Routes>
      
      <BlockFooter />
    </BrowserRouter>

  );
}

export default App;
