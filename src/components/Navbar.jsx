import React from "react";
import { Link } from "react-router-dom";
import "../Style.css";
export default function Navbar() {
  return (
    // Barra de navegación con clases de Bootstrap
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">

        {/* Logo / nombre de la página que redirige al inicio */}
        <Link className="navbar-brand" to="/">La Isaac</Link>

        {/* Botón que aparece en pantallas pequeñas (responsive) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"    // Activa el menú plegable
          data-bs-target="#navbarNav"  // Indica qué menú se despliega
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Contenedor del menú colapsable (responsive) */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

            {/* Enlaces de navegación usando Link de React Router */}

            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/items">Items</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/personajes">Personajes</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/cartas">Cartas</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/trincket">Trincket</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/pildoras">Pildoras</Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}



