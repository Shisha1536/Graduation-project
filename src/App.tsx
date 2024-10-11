import React from "react"
import { Route, Routes } from "react-router-dom"
import './App.css';
import { BlockHeader } from "./components/header";
import { BlockFooter } from "./components/foooter";
import { BlockHome } from "./pages/main/index";
import { SearchCounterpartyInformation } from "./pages/main/searchCounterpartyInformation";
import InDevelopment from "./pages/inDevelopment";
import  Login  from "./pages/main/login";
import { SearchReport } from "./pages/main/searchReport";

function App() {
  return (
    <React.Fragment>
		<BlockHeader />
		<Routes>
			<Route path="/" element={<BlockHome />}/>
			<Route path="/login" element={<Login />}/>
			<Route path="/inDevelopment" element={<InDevelopment />}/>
			<Route path="/searchCounterpartyInformation" element={<SearchCounterpartyInformation />}/>
			<Route path="/searchReport" element={<SearchReport />}/>
		</Routes>
		<BlockFooter />
	</React.Fragment>
  );
}
export default App;
