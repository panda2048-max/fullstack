import React, { useState } from "react";
import EncuestaModal from "./EncuestaModal";
import Navbar from "../components/Navbar";
import "../Style.css";


export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
        <Navbar />
        <div className="fondo">
        <img src="/logo2.jpg" alt="fondo" className="fondo-img" />
        <h1 className="titulo">La Isaac</h1>
        <h2 className="subtitulo">Creador</h2>
        <p className="parrafo">
            Edmund McMillen es un diseñador de videojuegos, 
            artista y escritor estadounidense nacido en Santa Cruz, 
            California en 1980. Es conocido por su estilo oscuro, 
            provocador y autobiográfico, que mezcla temas como la religión, 
            el cuerpo humano, la infancia y lo grotesco.
        </p>
        <h2 className="subtitulo">Historia</h2>
        <p className="parrafo">
            El juego sigue a Isaac,
            un niño que huye al sótano de su casa para escapar de su madre, 
            quien afirma haber recibido un mensaje de Dios ordenándole sacrificar a su hijo. 
            Inspirado en la historia bíblica del mismo nombre, el juego mezcla temas oscuros, religiosos y psicológicos.
        </p>
        <h2 className="subtitulo">Jugabilidad</h2>
        <p className="parrafo">
            Es un roguelike con generación procedural: cada partida es única. 
            Controlas a Isaac (u otros personajes desbloqueables) y debes recorrer múltiples pisos llenos de enemigos, jefes, ítems y secretos.
            Tiene un enfoque de twin-stick shooter (moverse con un stick, disparar con otro).
            Puedes encontrar centenares de objetos que alteran las habilidades, aspecto y poderes del personaje.
            Altamente rejugable y con múltiples finales.
        </p>

        {/* Botón para abrir modal */}
        <button
            id="boton_derecha"
            onClick={() => setModalOpen(true)}
        >
            Encuesta
        </button>

        {/* Modal siempre renderizado, visibilidad controlada por CSS */}
        <EncuestaModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
    </div>
  );
}

