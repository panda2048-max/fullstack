import Navbar from "../components/Navbar";
import "../Style.css";

export default function Personajes(){
    return(
        <div>
            <Navbar />
            <div className="fondo">
            <img src="/logo2.jpg" alt="fondo" className="fondo-img" />
            <h1 className="titulo">Personajes</h1>
            <h2 className="subtitulo">Cuales son los personajes en the Binding of Isaac</h2>
            <p className="parrafo">
                Cada personaje representa un aspecto del protagonista (Isaac) y tiene distintas estadísticas base, ítems iniciales y mecánicas únicas. <br />
                Al desbloquear logros, se consiguen más personajes y versiones alternativas (“Tainted”). <br />
                Cada personaje tiene una versión alternativa (Tainted) con mecánicas únicas y, en muchos casos, dificultad extra o estilo de juego totalmente distinto
            </p>
            <h2 className="subtitulo">Tipos de Personajes</h2>
            <p className="parrafo"></p>
            </div>
        </div>
    );

}