import { useState } from "react";
import Navbar from "../components/Navbar";
import "../Style.css";

export default function Personajes() {
  const [personajes, setPersonajes] = useState([]);
  const [cargando, setCargando] = useState(false);

  const cargarPersonajes = async () => {
    setCargando(true);

    try {
      const respuesta = await fetch("/api/character");
      const datos = await respuesta.json();
      setPersonajes(datos);
    } catch (error) {
      console.error("Error al cargar personajes:", error);
    }

    setCargando(false);
  };

  return (
    <div>
      <Navbar />

      <div className="fondo">
        <img src="/logo2.jpg" alt="fondo" className="fondo-img" />
        <h1 className="titulo">Personajes</h1>

        <h2 className="parrafo">En the binding of isaac existen 28 personajes con mecanicas distiantas que se diveden wn 2 tipos los normales y los tainted</h2>

        <button onClick={cargarPersonajes}>Cargar Personajes</button>

        {cargando && <p>Cargando...</p>}

        <ul>
          {personajes.map((p) => (
            <li key={p.id}>{p.name} {p.health} {p.damage} {p.type}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

