import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100">
    <div id="contacto" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
      <h1 className="py-4 text-4xl font-bold text-center text-black">
        Contactame
      </h1>
      <form action="" method="POST" encType="multipart/data">
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2 font-bold">Nombre</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-600"
              type="text"
              name="nombre"
            ></input>
          </div>
          <div className="flex flex-col ">
            <label className="uppercase text-sm py-2 font-bold">Telefono</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-600 bg-gray-100 "
              type="text"
              name="telefono"
            ></input>
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2 font-bold">Correo</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-600 "
            type="correo"
            name="correo"
          ></input>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2 font-bold">Lugar Residencia</label>
          <input className="border-2 rounded-lg p-3 flex border-gray-800" type="text" name="Lugar Residencia"></input>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2 font-bold">Mensaje</label>
          <textarea className="border-2 rounded-lg p-3 border-gray-800" rows="10" name="mensaje"></textarea>
        </div>
        <button className="bg-blue-600 text-white mt-4 w-full p-4 rounded-lg font-bold">Enviar</button>
      </form>
    </div>
    </div>
  );
};

export default Contact;
