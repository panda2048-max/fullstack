import Navbar from "../components/Navbar";
import "../Style.css";


export default function Trincket() {
  return (
    <div>
    <Navbar />
        <div className="fondo">
            <img src="/logo2.jpg" alt="fondo" className="fondo-img" />
                <h1 className="titulo">
                trincket
            </h1>
            <h2 className="subtitulo">
                ¿Que son los trincket?
            </h2>
            <p className="parrafo">
                los trincket son objetos que puedes llevar equipados y que tienen efectos que se activan bajo ciertas condiciones o en todo momento <br />
                En los trincket no hay una variadad aparecen principalmente en cofres pero tambien pueden estar en salas secretas o aparecer cuando terminas una habitacion
            </p>
        </div>
    </div>
   );
}