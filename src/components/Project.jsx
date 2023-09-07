import React from "react";
import { useState } from "react";
import WebSvg from "../../public/assets/imges/web.png";
import "animate.css";
import { urlFirebasePath } from "../utils/constantes/constantes";
import { GitHubPerProject } from "../svgs/svgs";
import {
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiReact,
  DiBootstrap,
  DiNodejsSmall,
} from "react-icons/di";
import { BiLogoTailwindCss, BiLogoRedux, BiLogoStripe } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
// gif
export const Project = ({
  img,
  imgTitle,
  urlCodeProject,
  urlDemoProject,
  tecnologies,
}) => {
  const [imgLoaded, setimgLoaded] = useState(false);
  const [isStatic, setisStatic] = useState(false);

  const handleImgLoaded = () => {
    setimgLoaded(true);
  };
  return (
    <div
      onMouseEnter={() => {
        setisStatic(true);
      }}
      onMouseLeave={() => {
        setisStatic(false);
      }}
      className={`flex flex-wrap w-64 h-48 bg-white
       rounded-xl  m-5 drop-shadow-2xl  mb-40 border-2 border-blue-950/20`}
    >
      <div className="flex flex-col w-full items-center">
        <span className="text-center text-xl p-2 font-bold">{imgTitle}</span>
        <hr className="w-4/5 border-2 border-blue-950 my-2 " />
        <div className="flex w-full justify-around items-center ">
          <a
            className="text-center from-bold cursor-pointer flex gap-2 p-2 rounded-md bg-gray-200 scale hover:scale-125 transition duration-100"
            target="_blank"
            href={urlDemoProject}
          >
            Demo
            <img className="w-6 h-w-6" src={WebSvg} alt="logo" />
          </a>
          <a
            className="text-center from-bold cursor-pointer flex gap-2 p-2 rounded-md bg-gray-200 scale hover:scale-125 transition duration-100"
            target="_blank"
            href={urlCodeProject}
          >
            Codigo
            <GitHubPerProject />
          </a>
        </div>
      </div>

      {/* Caja que se desplaza hacia abajo */}
      <div
        className={`drop-shadow-2xl 
        w-full h-full transform absolute   rounded-xl ${
          isStatic ? " translate-y-32" : "-translate-y-0"
        } ${
          isStatic ? "transition duration-1000" : "transition duration-1000"
        }   `}
      >
        <div className="flex justify-center bg-white items-center p-1 rounded-full gap-2 ">
          {tecnologies.map((tecnologie) => {
            console.log(tecnologie);

            return (
              <div>
                {tecnologie === "js" ? (
                  <DiJavascript1
                    className="bg-yellow-400 m-2"
                    size={30}
                    colorInterpolation="yellow"
                    color="black"
                  />
                ) : tecnologie === "react" ? (
                  <DiReact color="3AC4FF" size={30} />
                ) : tecnologie === "html" ? (
                  <DiHtml5 size={30} color="red" />
                ) : tecnologie === "css" ? (
                  <DiCss3 color="blue" size={30} />
                ) : tecnologie === "tailwindcss" ? (
                  <BiLogoTailwindCss color="3AC4FF" size={30} />
                ) : tecnologie === "Bootstrap" ? (
                  <DiBootstrap color="purple" size={30} />
                ) : tecnologie === "node" ? (
                  <DiNodejsSmall size={30} color="green" />
                ) : tecnologie === "express" ? (
                  <SiExpress size={30} />
                ) : tecnologie === "stripe" ? (
                  <BiLogoStripe size={30} color="blue" />
                ) : tecnologie === "redux" ? (
                  <BiLogoRedux size={30} color="purple" />
                ) : (
                  ""
                )}{" "}
              </div>
            );
          })}
        </div>
        {!imgLoaded && (
          <div className="w-full h-full  bg-white flex justify-center items-center">
            <p className="animate-spin border border-y-black w-20 h-20  rounded-full"></p>
          </div>
        )}
        <img
          loading="lazy"
          className="animate-fadeIn rounded-xl object-cover w-full h-full animate__animated animate__slideInUp"
          src={urlFirebasePath("imgs") + img}
          alt={imgTitle}
          onLoad={() => {
            handleImgLoaded();
          }}
        />
      </div>
    </div>
  );
};
