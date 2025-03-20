import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "./pages/Home";
import Aretsalmebodabo from "./pages/Aretsalmebodabo";
import Upplev from "./pages/Upplev";
import Levaochbo from "./pages/Levaochbo";
import Handelser from "./pages/Handelser";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/aretsalmebodabo" element={<Aretsalmebodabo />}/>
				<Route path="/upplev" element={<Upplev />}/>
				<Route path="/levaochbo" element={<Levaochbo />}/>
				<Route path="/handelser" element={<Handelser />}/>
			</Routes>
	  		<Footer />
		</Router>
  )
}

export default App;
