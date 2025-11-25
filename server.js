import express from "express";
import cors from "cors";

const app = express();
const port = 3001;

app.use(cors());

app.get("/api/character", async (req, res) => {
  try {
    const respuesta = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:76EojXIR/character");
    const datos = await respuesta.json();
    res.json(datos);
  } catch (error) {
    console.error("ERROR BACKEND:", error);
    res.status(500).json({ error: "No se pudo conectar a Xano" });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el port: ${port}`);
});
