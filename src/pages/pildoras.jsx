import Navbar from "../components/Navbar";
import "../Style.css";

export default function Pildoras(){
    return(
        <div>
            <Navbar />
            <div className="fondo">
            <img src="/logo2.jpg" alt="fondo" className="fondo-img" />
            <h1 className="titulo">Pildoras</h1>
            <h2 className="subtitulo">¿Qué hacen las pildoras en The Binding of Isaac</h2>
            <p className="parrafo">
            Las píldoras (pills) en The Binding of Isaac son consumibles que, al usarse, provocan efectos inmediatos y aleatorios —a veces buenos, a veces malos, y muchas veces caóticos. <br />
            A diferencia de las cartas, que siempre tienen efectos fijos, las píldoras dependen de la semilla (seed) de la partida: los colores son aleatorios, pero cada color tiene el mismo efecto durante toda la run
            </p>
            <h2 className="subtitulo">Tipos de Pildoras</h2>
            <p className="parrafo"></p>
            </div>
        </div>
    );

}