import React from "react";
import { TypeAnimation } from "react-type-animation";
import { BsGithub, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1] "
        src="https://images.pexels.com/photos/4665064/pexels-photo-4665064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      ></img>
      <div className="w-full h-screen absolute top-0 left-0 bg-white/1">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-slate-200">Sebastian Tovar Chavez</h1>
          <h2 className="flex sm:text-xl text-xl pt-4 text-slate-200 font-bold">
              
            <TypeAnimation
              sequence={[
                "Desarrollador Web", // Types 'One'
                1000, // Waits 1s
                "Code - Sitios Web Resposive", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "2em", paddingleft: "5px" }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full text-slate-100" id="Inicio">
          <a href="https://github.com/sebbas-0626?tab=repositories" target =" _blank "> <BsGithub className="cursor-pointer" size={20} /></a>
          <a href="https://www.facebook.com/sebastian.tovarchavez/" target =" _blank "><BsFacebook className="cursor-pointer" size={20} /></a>
          <a href="https://www.instagram.com/sebbas626/" target =" _blank "><BsInstagram className="cursor-pointer" size={20} /></a>
          <a href="https://www.linkedin.com/in/sebastian-tovar-chavez-80476b239/" target =" _blank "><BsLinkedin className="cursor-pointer" size={20} /></a>

            
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
