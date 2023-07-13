import React from "react";
import { useState } from "react";
import GitSvg from "../../public/assets/svgs/git2.svg";
import WebSvg from "../../public/assets/imges/web.png";
export const Project = ({ img, imgTitle, urlCodeProject, urlDemoProject }) => {
  const [isStatic, setisStatic] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setisStatic(true);
      }}
      onMouseLeave={() => {
        setisStatic(false);
      }}
      className={`flex flex-wrap w-64 h-48 bg-white
       rounded-tr-xl rounded-tl-xl m-5 drop-shadow-2xl  mb-32  `}
    >
      <div className="flex flex-col w-full items-center">
        <span className="text-center text-xl p-2 font-bold">
            {imgTitle}
        </span>
        <hr className="w-4/5 border-t-2 border-blue-950 my-2 " />
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
            <img src={GitSvg} alt="" />
          </a>
        </div>
      </div>
      <div
        className={`border-2 border-slate-400  w-64 h-48 transform absolute ${
          isStatic ? " translate-y-32" : "-translate-y-0"
        } ${
          isStatic ? "transition duration-1000" : "transition duration-1000"
        }  border-2 border-slate-400`}
      >
        <img
          className="object-cover w-full h-full "
          src={img}
          alt={imgTitle}
        />
      </div>
    </div>
  );
};
