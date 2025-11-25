// Importamos Express para crear el servidor
import express from "express";

// Importamos CORS para permitir peticiones desde el frontend
import cors from "cors";

// Creamos la aplicación Express
const app = express();

// Definimos el puerto donde correrá el servidor
const port = 3001;

// Habilitamos CORS para permitir peticiones desde React u otros dominios
app.use(cors());

/*
  Ruta GET /api/character
  Esta ruta sirve como "puente" entre tu frontend y la API de Xano.
  Tu frontend le pega a tu backend, y este backend pide los datos a Xano.
*/
app.get("/api/character", async (req, res) => {
  try {
    // Hacemos petición a la API de Xano (backend externo)
    const respuesta = await fetch(
      "https://x8ki-letl-twmt.n7.xano.io/api:76EojXIR/character"
    );

    // Convertimos la respuesta a JSON
    const datos = await respuesta.json();

    // Enviamos los datos al frontend
    res.json(datos);

  } catch (error) {
    // Si algo falla, lo mostramos en consola
    console.error("ERROR BACKEND:", error);

    // Enviamos mensaje de error al frontend
    res.status(500).json({ error: "No se pudo conectar a Xano" });
  }
});

// Iniciamos el servidor y escuchamos en el puerto definido
app.listen(port, () => {
  console.log(`Servidor corriendo en el port: ${port}`);
});

