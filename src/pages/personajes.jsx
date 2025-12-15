// Importamos useState para manejar estados en React
import { useState } from "react";

// Importamos el componente Navbar
import Navbar from "../components/Navbar";

// Importamos los estilos CSS
import "../Style.css";

// Componente principal Personajes
export default function Personajes() {

  // ====== ESTADOS ======

  // Guarda la lista de personajes obtenidos desde la API
  const [personajes, setPersonajes] = useState([]);

  // Indica si se está cargando la información
  const [cargando, setCargando] = useState(false);

  // Estado del formulario (crear y editar personajes)
  const [form, setForm] = useState({
    name: "",
    health: "",
    damage: "",
    type: ""
  });

  // Guarda el ID del personaje que se está editando
  // Si es null, estamos creando uno nuevo
  const [editandoId, setEditandoId] = useState(null);

  // ====== CARGAR PERSONAJES ======

  // Función que obtiene los personajes desde el backend
  const cargarPersonajes = async () => {
    setCargando(true); // Muestra el mensaje "Cargando..."

    try {
      // Llamada al backend (Express)
      const respuesta = await fetch("/api/character");

      // Convertimos la respuesta a JSON
      const datos = await respuesta.json();

      // Guardamos los personajes en el estado
      setPersonajes(datos);

    } catch (error) {
      // Mostramos el error en consola si falla la petición
      console.error("Error al cargar personajes:", error);
    }

    setCargando(false); // Oculta el mensaje "Cargando..."
  };

  // ====== MANEJAR INPUTS ======

  // Actualiza el estado del formulario cuando el usuario escribe
  const handleChange = (e) => {
    setForm({
      ...form, // Mantenemos los valores anteriores
      [e.target.name]: e.target.value // Actualizamos el campo modificado
    });
  };

  // ====== AGREGAR / EDITAR PERSONAJE ======

  // Función que sirve tanto para crear como para editar
  const guardarPersonaje = async () => {

    // Si editandoId tiene valor → editar
    // Si es null → crear
    const url = editandoId
      ? `/api/character/${editandoId}`
      : "/api/character";

    const method = editandoId ? "PUT" : "POST";

    try {
      // Enviamos los datos del formulario al backend
      await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      // Limpiamos el formulario
      setForm({
        name: "",
        health: "",
        damage: "",
        type: ""
      });

      // Salimos del modo edición
      setEditandoId(null);

      // Recargamos la lista de personajes
      cargarPersonajes();

    } catch (error) {
      console.error("Error al guardar:", error);
    }
  };

  // ====== EDITAR PERSONAJE ======

  // Carga los datos del personaje seleccionado en el formulario
  const editarPersonaje = (personaje) => {
    setForm({
      name: personaje.name,
      health: personaje.health,
      damage: personaje.damage,
      type: personaje.type
    });

    // Guardamos el ID para saber qué personaje editar
    setEditandoId(personaje.id);
  };

  // ====== ELIMINAR PERSONAJE ======

  // Elimina un personaje por su ID
  const eliminarPersonaje = async (id) => {

    // Confirmación antes de eliminar
    if (!window.confirm("¿Eliminar personaje?")) return;

    try {
      // Llamada al backend para eliminar
      await fetch(`/api/character/${id}`, {
        method: "DELETE"
      });

      // Actualizamos la lista después de eliminar
      cargarPersonajes();

    } catch (error) {
      console.error("Error al eliminar:", error);
    }
  };

  // ====== JSX (INTERFAZ) ======
  return (
    <div>
      {/* Barra de navegación */}
      <Navbar />

      {/* Contenedor principal */}
      <div className="fondo">
        <img src="/logo2.jpg" alt="fondo" className="fondo-img" />

        {/* Título */}
        <h1 className="titulo">Personajes</h1>

        {/* Texto descriptivo */}
        <h2 className="parrafo">
          En The Binding of Isaac existen 28 personajes con mecánicas distintas
          que se dividen en 2 tipos: los normales y los tainted.
        </h2>

        {/* Botón para cargar personajes */}
        <button onClick={cargarPersonajes}>Cargar Personajes</button>

        {/* Mensaje de carga */}
        {cargando && <p>Cargando...</p>}

        {/* ====== FORMULARIO ====== */}
        <h2 className="subtitulo">
          {editandoId ? "Editar personaje" : "Agregar personaje"}
        </h2>

        {/* Inputs del formulario */}
        <input
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="health"
          placeholder="Vida"
          value={form.health}
          onChange={handleChange}
        />

        <input
          name="damage"
          placeholder="Daño"
          value={form.damage}
          onChange={handleChange}
        />

        <input
          name="type"
          placeholder="Tipo"
          value={form.type}
          onChange={handleChange}
        />

        {/* Botón crear / editar */}
        <button onClick={guardarPersonaje}>
          {editandoId ? "Guardar cambios" : "Agregar"}
        </button>

        {/* ====== LISTA DE PERSONAJES ====== */}
        <ul>
          {personajes.map((p) => (
            <li key={p.id}>
              {p.name} | HP: {p.health} | DMG: {p.damage} | {p.type}

              {/* Botones de acción */}
              <button onClick={() => editarPersonaje(p)}>Editar</button>
              <button onClick={() => eliminarPersonaje(p.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
