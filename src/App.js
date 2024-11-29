import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Home.css";
import Home from "./Home";
import PetDetails from "./PetDetails";
import Battle from "./Battle";
import Train from "./Train";
import Pull from "./Pull";
import Settings from "./Settings";
import Learn from "./tamoteach";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pet/:id" element={<PetDetails />} />
        <Route path="/battle" element={<Battle />} />
        <Route path="/train" element={<Train />} />
        <Route path="/pull" element={<Pull />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/learn" element={<Learn />} />
      </Routes>
    </Router>
  );
}

export default App;
