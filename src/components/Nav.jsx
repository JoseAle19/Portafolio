import React from "react";
import { LinkNav } from "./LinkNav";
import { hookGetImages } from "../hooks/hookGetImages";
// React Router
export const Nav = () => {
  const { images } = hookGetImages("svg");
  return (
    <>
      <div className="flex items-center  flex-col w-full h-full justify-between">
        <div className="  flex flex-col h-full justify-between w-full">
          <LinkNav
            ulr={"/"}
            svg={images === null ? <p>Cargando....</p> : images[8].url}
            description={"Inicio"}
          />
          <LinkNav
            ulr={"/about"}
            svg={images === null ? <p>Cargando....</p> : images[0].url}
            description={"Sobre mi"}
          />
          <LinkNav
            ulr={"/projects"}
            svg={images === null ? <p>Cargando....</p> : images[5].url}
            description={"Proyectos"}
          />
          <LinkNav
            ulr={"/certificates"}
            svg={images === null ? <p>Cargando....</p> : images[1].url}
            description={"Certificados"}
          />
          <LinkNav
            ulr={"/contact"}
            svg={images === null ? <p>Cargando....</p> : images[2].url}
            description={"Contacto"}
          />
        </div>
      
      </div>
    </>
  );
};
