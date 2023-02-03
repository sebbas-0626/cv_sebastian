import React from "react";

function Sobre() {
  return (
    <div nombre="sobre" className="w-full bg-gray-100" id="acerca">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justificar-centro w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold text-center">Acerca de</p>
        </div>

        <p className="texto-xl pt-20">
          Desarrollador de software con experiencia en diseño. Dominio de varias
          plataformas, consumo de api, lenguajes y sistemas integrados.
          Experiencia en las herramientas y procedimientos del desarrollo.
          Buenas habilidades de colaboración dentro del equipo productivo.
          
        </p>

        <br />
        <p className="texto-xl">
          Contribuir a fortalecer las habilidades blandas para mejorar como
          persona y desarrollador, me gusta aceptar retos y estar dispuesto a
          prender en los aspectos necesarios, Adaptabilidad, trabajo en equipo,
          Capacidad de aceptar críticas constructivas, Empatía, Accesibilidad,
          Perseverancia.
        </p>
      </div>
    </div>
  );
}

export default Sobre;
