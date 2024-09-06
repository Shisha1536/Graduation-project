import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import { BlockHeader } from "./pages/header";
import { BlockFooter } from "./pages/foooter";
import { BlockHome } from "./pages/main/index";
import  Test  from "./pages/main/login";

function App() {
  return (
    
	<BlockHeader />
	<Routes>
		<Route path="*" element={<BlockHome />} />
		<Route path="/login" element={<Test />} />
	</Routes>
	<BlockFooter />
  );
}

export default App;
