import { useState } from "react";
import Navbar from "../components/Navbar";
import "../Style.css";

export default function Personajes() {
  // ====== ESTADOS ======
  const [personajes, setPersonajes] = useState([]);
  const [cargando, setCargando] = useState(false);

  const [form, setForm] = useState({
    name: "",
    health: "",
    damage: "",
    type: ""
  });

  const [editandoId, setEditandoId] = useState(null);

  // ====== CARGAR PERSONAJES ======
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

  // ====== MANEJAR INPUTS ======
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // ====== AGREGAR / EDITAR ======
  const guardarPersonaje = async () => {
    const url = editandoId
      ? `/api/character/${editandoId}`
      : "/api/character";

    const method = editandoId ? "PUT" : "POST";

    try {
      await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      setForm({
        name: "",
        health: "",
        damage: "",
        type: ""
      });

      setEditandoId(null);
      cargarPersonajes();
    } catch (error) {
      console.error("Error al guardar:", error);
    }
  };

  // ====== EDITAR ======
  const editarPersonaje = (personaje) => {
    setForm({
      name: personaje.name,
      health: personaje.health,
      damage: personaje.damage,
      type: personaje.type
    });

    setEditandoId(personaje.id);
  };

  // ====== ELIMINAR ======
  const eliminarPersonaje = async (id) => {
    if (!window.confirm("¿Eliminar personaje?")) return;

    try {
      await fetch(`/api/character/${id}`, {
        method: "DELETE"
      });

      cargarPersonajes();
    } catch (error) {
      console.error("Error al eliminar:", error);
    }
  };

  // ====== JSX ======
  return (
    <div>
      <Navbar />

      <div className="fondo">
        <img src="/logo2.jpg" alt="fondo" className="fondo-img" />

        <h1 className="titulo">Personajes</h1>

        <h2 className="parrafo">
          En The Binding of Isaac existen 28 personajes con mecánicas distintas
          que se dividen en 2 tipos: los normales y los tainted.
        </h2>

        <button onClick={cargarPersonajes}>Cargar Personajes</button>
        {cargando && <p>Cargando...</p>}

        {/* ====== FORMULARIO ====== */}
        <h2>{editandoId ? "Editar personaje" : "Agregar personaje"}</h2>

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

        <button onClick={guardarPersonaje}>
          {editandoId ? "Guardar cambios" : "Agregar"}
        </button>

        {/* ====== LISTA ====== */}
        <ul>
          {personajes.map((p) => (
            <li key={p.id}>
              {p.name} | HP: {p.health} | DMG: {p.damage} | {p.type}

              <button onClick={() => editarPersonaje(p)}>Editar</button>
              <button onClick={() => eliminarPersonaje(p.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
