import React, { useState, useEffect } from "react";

export default function EncuestaModal({ isOpen, onClose }) {
  const [mensajeVisible, setMensajeVisible] = useState(false);

  // Cambiar display según isOpen
  useEffect(() => {
    const modal = document.getElementById("formularioEncuesta");
    if (modal) {
      modal.style.display = isOpen ? "block" : "none";
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensajeVisible(true);
    e.target.reset();

    setTimeout(() => {
      setMensajeVisible(false);
      onClose();
    }, 3000);
  };

  return (
    <div id="formularioEncuesta" className="formulario">
      <div className="contenido_formulario">
        <span className="cerrar" onClick={onClose}>
          &times;
        </span>
        <h3 className="titulo_formulario">Encuesta página</h3>

        {mensajeVisible && (
          <div id="mensajeExito">¡Encuesta enviada con éxito!</div>
        )}

        <form onSubmit={handleSubmit}>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />

          <label>En una escala del 1 a 5, ¿qué opinas de la página?</label>
          <div>
            {["muy mal", "mal", "más o menos", "bien", "muy bien"].map(
              (texto, i) => (
                <span key={i}>
                  <input
                    type="radio"
                    id={`${i + 1}_estrella`}
                    name="valoracion"
                    value={`${i + 1}_estrella`}
                    required
                  />
                  <label htmlFor={`${i + 1}_estrella`}>{texto}</label>
                  <br />
                </span>
              )
            )}
          </div>

          <label htmlFor="comentario">Comentarios:</label>
          <textarea id="comentario" name="comentario" rows="4" />

          <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
}
