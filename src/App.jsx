import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Items from "./pages/items";
import Hero from "./components/Hero";
import Trincket from "./pages/trincket";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // incluye Popper
import Cartas from "./pages/cartas";
import Personajes from "./pages/personajes";
import Pildoras from "./pages/pildoras";


// Exporta el componente principal de la aplicación
export default function App() {
  return (
    // Router envuelve toda la aplicación y permite usar rutas
    <Router>
      {/* Routes contiene todas las rutas disponibles */}
      <Routes>

        {/* Ruta principal (home) → muestra el componente Hero */}
        <Route path="/" element={<Hero />} />

        {/* Ruta /items → muestra el componente Items */}
        <Route path="/items" element={<Items />} />

        {/* Ruta /trincket → muestra Trincket */}
        <Route path="/trincket" element={<Trincket />} />

        {/* Ruta /cartas → muestra Cartas */}
        <Route path="/cartas" element={<Cartas />} />

        {/* Ruta /personajes → muestra Personajes */}
        <Route path="/personajes" element={<Personajes />} />

        {/* Ruta /pildoras → muestra Pildoras */}
        <Route path="/pildoras" element={<Pildoras />} />

      </Routes>
    </Router>
  );
}



