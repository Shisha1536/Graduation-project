import React from "react"
import { Route, Routes } from "react-router-dom"
import './App.css';
import { BlockHeader } from "./pages/header";
import { BlockFooter } from "./pages/foooter";
import { BlockHome } from "./pages/main/index";
import InDevelopment from "./pages/inDevelopment";
import  Login  from "./pages/main/login";

function App() {
  return (
    <React.Fragment>
		<BlockHeader />
		<Routes>
			<Route path="/" element={<BlockHome />}/>
			<Route path="/login" element={<Login />}/>
			<Route path="/inDevelopment" element={<InDevelopment />}/>
		</Routes>
		<BlockFooter />
	</React.Fragment>
  );
}

export default App;
