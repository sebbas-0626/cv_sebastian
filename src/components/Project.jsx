import React from "react";
import CarritoCompras from "../assets/CarritoCompras.png";
import Pokemos from "../assets/Pokemos.png";
import TiendaJuegos from "../assets/TiendaJuegos.png";
import CarritoComprasVue from "../assets/CarritoComprasVue.jpg";

const Project = () => {
  return (
    <div className="pb-8  bg-gray-100 mx-w-[1040] m-auto md:pl-20 p-4 py-16" id="projectos">
      <h1 className="text-4xl font-bold text-center">Proyectos</h1>
      <p className="text-center py-6">
        Estos son algunos de mis proyectos que he elabarado en mi samino como desarrolador fronted
      </p>
      <div className="grid sm:grid-cols-2 gap-14 py-12 ">
        <div>
          <img className="w-9/12 h-80 border border-x-gray-900 rounded-3xl" src={CarritoCompras}></img>
          <h1 className="py-4 font-bold" >Carrito Compras Js</h1>
        </div>
        <div>
          <img className="w-9/12 h-80 border border-gray-900 rounded-3xl" src={Pokemos}></img>
          <h1 className="py-4 font-bold">App Pokemon</h1>
        </div>
        <div>
          <img className="w-9/12 h-80 border border-gray-900 rounded-3xl" src={TiendaJuegos}></img>
          <h1 className="py-4 font-bold">TiendaJuegos</h1>
        </div>
        <div>
          <img className="w-9/12 h-80 border border-gray-900 rounded-3xl" src={CarritoComprasVue}></img>
          <h1 className="py-4 font-bold">CarritoComprasVue</h1>
        </div>
      </div>
    </div>
  );
};

export default Project;
