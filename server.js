// ===============================
// IMPORTACIONES
// ===============================
import express from "express";
import cors from "cors";

// ===============================
// CONFIGURACIÓN BÁSICA
// ===============================
const app = express();
const port = 3001;

// ===============================
// MIDDLEWARES
// ===============================
app.use(cors()); // Permite peticiones desde React
app.use(express.json()); // Permite leer JSON desde req.body

// URL BASE DE XANO
const XANO_URL =
  "https://x8ki-letl-twmt.n7.xano.io/api:76EojXIR/character";

// ===============================
// GET → OBTENER PERSONAJES
// ===============================
app.get("/api/character", async (req, res) => {
  try {
    const respuesta = await fetch(XANO_URL);
    const datos = await respuesta.json();
    res.json(datos);
  } catch (error) {
    console.error("ERROR GET:", error);
    res.status(500).json({ error: "No se pudo obtener personajes" });
  }
});

// ===============================
// POST → CREAR PERSONAJE
// ===============================
app.post("/api/character", async (req, res) => {
  try {
    const respuesta = await fetch(XANO_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(req.body)
    });

    const datos = await respuesta.json();
    res.status(201).json(datos);
  } catch (error) {
    console.error("ERROR POST:", error);
    res.status(500).json({ error: "No se pudo crear personaje" });
  }
});

// ===============================
// PUT → EDITAR PERSONAJE
// ===============================
app.put("/api/character/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const respuesta = await fetch(`${XANO_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(req.body)
    });

    const datos = await respuesta.json();
    res.json(datos);
  } catch (error) {
    console.error("ERROR PUT:", error);
    res.status(500).json({ error: "No se pudo editar personaje" });
  }
});

// ===============================
// DELETE → ELIMINAR PERSONAJE
// ===============================
app.delete("/api/character/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await fetch(`${XANO_URL}/${id}`, {
      method: "DELETE"
    });

    res.json({ mensaje: "Personaje eliminado correctamente" });
  } catch (error) {
    console.error("ERROR DELETE:", error);
    res.status(500).json({ error: "No se pudo eliminar personaje" });
  }
});

// ===============================
// INICIAR SERVIDOR
// ===============================
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});


