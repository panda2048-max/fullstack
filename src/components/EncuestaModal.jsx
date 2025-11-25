import React, { useState, useEffect } from "react";

export default function EncuestaModal({ isOpen, onClose }) {
  // Estado para mostrar/ocultar el mensaje "Encuesta enviada con éxito"
  const [mensajeVisible, setMensajeVisible] = useState(false);

  // Este useEffect se ejecuta cuando cambia isOpen
  // Cambia el display del modal según si debe estar abierto o cerrado
  useEffect(() => {
    const modal = document.getElementById("formularioEncuesta");
    if (modal) {
      modal.style.display = isOpen ? "block" : "none"; // Muestra u oculta
    }
  }, [isOpen]);

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();        // Evita que la página recargue
    setMensajeVisible(true);   // Muestra mensaje de éxito
    e.target.reset();          // Limpia los campos del formulario

    // Oculta el mensaje y cierra el modal después de 3 segundos
    setTimeout(() => {
      setMensajeVisible(false);
      onClose();
    }, 3000);
  };

  return (
    // Contenedor general del modal
    <div id="formularioEncuesta" className="formulario">
      <div className="contenido_formulario">

        {/* Botón (X) para cerrar el modal */}
        <span className="cerrar" onClick={onClose}>
          &times;
        </span>

        {/* Título del modal */}
        <h3 className="titulo_formulario">Encuesta página</h3>

        {/* Mensaje dinámico que aparece cuando se envía el formulario */}
        {mensajeVisible && (
          <div id="mensajeExito">¡Encuesta enviada con éxito!</div>
        )}

        {/* Formulario */}
        <form onSubmit={handleSubmit}>
          
          {/* Input: Nombre */}
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />

          {/* Pregunta de valoración usando un map */}
          <label>En una escala del 1 a 5, ¿qué opinas de la página?</label>
          <div>
            {["muy mal", "mal", "más o menos", "bien", "muy bien"].map(
              (texto, i) => (
                <span key={i}>
                  {/* Radio button con ID dinámico */}
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

          {/* Área de comentario */}
          <label htmlFor="comentario">Comentarios:</label>
          <textarea id="comentario" name="comentario" rows="4" />

          {/* Botón enviar */}
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
}
