import { useState } from "react";
import Navbar from "../components/Navbar";
import "../Style.css";

export default function Personajes() {
  // Estado que guardará la lista de personajes recibidos desde la API
  const [personajes, setPersonajes] = useState([]);

  // Estado para mostrar si se está cargando la petición
  const [cargando, setCargando] = useState(false);

  // Función que se ejecuta cuando apretas el botón "Cargar Personajes"
  const cargarPersonajes = async () => {
    setCargando(true); // Activa el mensaje "Cargando..."

    try {
      // Llamamos a la API (ruta configurada en el backend o proxy)
      const respuesta = await fetch("/api/character");

      // Convertimos la respuesta en JSON
      const datos = await respuesta.json();

      // Guardamos los datos en el estado
      setPersonajes(datos);

    } catch (error) {
      // Si algo falla, lo mostramos en consola
      console.error("Error al cargar personajes:", error);
    }

    setCargando(false); // Oculta el mensaje "Cargando..."
  };

  return (
    <div>
      {/* Navbar visible en todas las páginas */}
      <Navbar />

      {/* Contenedor principal con imagen de fondo */}
      <div className="fondo">
        <img src="/logo2.jpg" alt="fondo" className="fondo-img" />

        {/* Título principal */}
        <h1 className="titulo">Personajes</h1>

        {/* Texto informativo */}
        <h2 className="parrafo">
          En The Binding of Isaac existen 28 personajes con mecánicas distintas 
          que se dividen en 2 tipos: los normales y los tainted.
        </h2>

        {/* Botón que ejecuta la carga desde la API */}
        <button onClick={cargarPersonajes}>Cargar Personajes</button>

        {/* Mensaje que aparece mientras se está cargando */}
        {cargando && <p>Cargando...</p>}

        {/* Lista de personajes obtenidos */}
        <ul>
          {personajes.map((p) => (
            // Cada item necesita un "key" único
            <li key={p.id}>
              {/* Se muestran los datos del objeto personaje */}
              {p.name} {p.health} {p.damage} {p.type}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


