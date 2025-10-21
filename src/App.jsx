import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Items from "./pages/items";
import Hero from "./components/Hero";
import Trincket from "./pages/trincket";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // incluye Popper


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/items" element={<Items />} />
        <Route path="/trincket" element={<Trincket/>}/>
      </Routes>
    </Router>
  );
}


