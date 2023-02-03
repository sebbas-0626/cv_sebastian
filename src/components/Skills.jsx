import React from "react";

const tecnology = [
  "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
  "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg",
  "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  "https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg",
  "https://upload.vectorlogo.zone/logos/javascript/images/239ec8a4-163e-4792-83b6-3f6d96911757.svg",
  "https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg",
  "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
  "https://upload.vectorlogo.zone/logos/github/images/47bfd2d4-712f-4dee-9315-f99c611b7598.svg",
  "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
  "https://www.vectorlogo.zone/logos/mysql/mysql-official.svg",
  "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
  "https://www.vectorlogo.zone/logos/nestjs/nestjs-icon.svg",
  "https://www.vectorlogo.zone/logos/postgresql/postgresql-vertical.svg",
  "https://www.vectorlogo.zone/logos/npmjs/npmjs-ar21.svg",
  "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
  "https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg",
  "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
];

const Skills = () => {
  return (
    <div className="habalidades bg-gray-100	" id="Habilidades">
      <div className="">
        <p className="text-center font-bold text-4xl text-black p-5 ">
          Experiencias
        </p>
        <p className="text-center text-black italic p-5">
          Estas son las tecnologías con las que he trabajado
        </p>
      </div>
      <div className="grid md:grid-cols-5 sm:grid-cols-4 grid-cols-2 place-items-center gap-y-10 pt-4">
        {tecnology.map((item, index) => (
          <div className="w-20 h-20 object-cover " key={index}>
            <img src={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
