import React from "react";
import { Link } from "react-router-dom";

export const LinkNav = ({ svg, ulr, description, onClick:closeSideBar}) => {
  return (
    <>
      <Link
      onClick={()=>{
        closeSideBar(false)  
      }}
        className="flex gap-4 p-5 hover:text-white scale hover:scale-110  transition duration-300 "
        to={ulr}
      >
        <img src={svg} alt={`Ir a ${description}`} />
        <p className="font-bold text-gray-300 text-xl hover:text-white">
          {description}
        </p>
      </Link>
    </>
  );
};
