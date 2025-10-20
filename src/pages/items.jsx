import React from "react";
import Navbar from "../components/Navbar";
import "../Style.css";


export default function Items() {
  return (
    <div>
      <Navbar />
      <div className="fondo">
        <img src="/logo2.jpg" alt="fondo" className="fondo-img" />
        <h1 className="titulo">Items</h1>
        <h2 className="subtitulo">¿Qué hacen los items en The Binding of Isaac?</h2>
        <p className="parrafo">
          Los ítems son el núcleo del gameplay en The Binding of Isaac. Al recogerlos, 
          modifican de forma permanente las habilidades de Isaac o su apariencia durante la partida actual. <br />
          Las habilidades que modifican los items pueden ser velocidad de movimiento, velocidad de disparo,
          daño, rango, velocidad de lágrima, suerte, pactos, planetario y en otros casos variables del juego 
          como aparición de objetos al terminar una sala.
        </p>
        <h2 className="subtitulo">Tipos de items</h2>
        <p className="parrafo">
          {/* Aquí puedes listar los tipos de items o generar dinámicamente una lista con React */}
        </p>
      </div>
    </div>
  );
}
