import { useState } from "react";
import "../animations/certificates.css";
import { data } from "../mocks/certificates.json";
import { urlFirebasePath } from "../utils/constantes/constantes";
export const Certificates = () => {
  const [imgOnLoaded, setImgOnLoaded] = useState(false);
  const handleImageLoaded = () => {
    setImgOnLoaded(true);
  };
  return (
    <>
      <div className="w-full  flex flex-col items-center p-10 ">
        <p className="text-center text-3xl font-bold">Mis Certificados</p>
        <hr className="w-4/5 border-t-1 border-gray-500 my-2" />
        {data.map(({ url, name }) => {
          return (
            <div
              key={url}
              className=" rounded-md   hover:scale-105 duration-500 flex flex-col w-[300px] md:w-auto xl:w-[700px] border-4
               border-blue-950 mt-5 bg-blue-950 "
            >
              <div>
                <img
                  loading="lazy"
                  onLoad={() => {
                    handleImageLoaded();
                  }}
                  src={urlFirebasePath("certificates") + url}
                  alt={`Imagen ${name}`}
                  className="animate-fadeIn"
                />
                <p className="text-white font-bold text-2xl text-center">
                  {name}
                </p>
              </div>
              {!imgOnLoaded && (
                <div className="w-full h-full  bg-white flex justify-center items-center">
                  <p className="animate-spin border border-y-black w-20 h-20  rounded-full"></p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};
