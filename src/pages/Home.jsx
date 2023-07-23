import React from "react";
import Portada from "../../public/assets/imges/portada.jpg";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="relative  h-screen overflow-hidden">
      <div className="absolute h-full w-full blur-sm ">
        <img
          className="object-cover w-full h-full "
          src={Portada}
          alt=""
        />
      </div>
      <div className=" w-full flex flex-col items-center justify-center  absolute top-0 left-0 bottom-0 ">
        <span className="text-gray-200 text-3xl font-semibold  text-center">
          Bienvenid@s
        </span>
        <p className="text-white text-4xl font-black text-center m-2">
        José Alejandro Cruz Pérez
        </p>
        <span className="text-3xl text-white font-semibold">Desarrollador junior</span>
        <Link to={"/about"}>
          <button className=" rounded-full border-2 border-indigo-950 p-2 w-32 m-2 text-white font-bold ">
            Sobre mí
          </button>
        </Link>
      </div>
    </div>
  );
};
