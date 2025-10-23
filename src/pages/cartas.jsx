import React from "react";
import Navbar from "../components/Navbar";
import "../Style.css";


export default function Cartas(){
    return(
        <div>
            <Navbar />
            <div className="fondo">
            <img src="/logo2.jpg" alt="fondo" className="fondo-img" />
            <h1 className="titulo">Cartas</h1>
            <h2 className="subtitulo">¿Qué hacen las cartas en The Binding of Isaac?</h2>
            <p className="parrafo">
                En The Binding of Isaac, las cartas (o cards) son objetos consumibles inspirados en las cartas del tarot. Al usarlas, provocan efectos inmediatos que pueden ser beneficiosos, perjudiciales o estratégicos, dependiendo de la carta <br />
                Las cartas son ítems de un solo uso que Isaac puede recoger y guardar en su inventario (solo una a la vez, salvo efectos especiales). <br />
                Hay 3 tipos de cartas las normales, las de fortuna y las malditas.
            </p>
            <h2 className="subtitulo">Tipos de cartas</h2>
            <p className="parrafo"></p>
            </div>
        </div>
    );

}