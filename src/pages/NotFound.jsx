import { useEffect, useState } from "react";
import Astro from "../../public/assets/imges/notfound.png";
import "../animations/float.css";
import { Link } from "react-router-dom";
export const NotFound = () => {
  const [windowSize, setWindowSize] = useState({
    wWidth: window.innerWidth,
    wHeight: window.innerHeight,
  });

  useEffect(() => {
    // Al montar el componente, oculta el scroll del body
    document.body.style.overflow = "hidden";

    const handleWindowSize = () => {
      setWindowSize({
        wWidth: window.innerWidth,
        wHeight: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleWindowSize);
    // Al desmontar el componente, restaura el scroll del body
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("resize", handleWindowSize);
    };
  }, []);

  const generateRandomPosition = () => {
    const sizeDots = Math.floor(Math.random() * (14 - 1) + 2);
    const top = Math.floor(Math.random() * windowSize.wHeight);
    const left = Math.floor(Math.random() * windowSize.wWidth);
    return { top, left, sizeDots };
  };

  return (
    <>
      <div className="w-screen h-screen flex overflow-hidden items-center justify-center bg-black   ">
        {[...Array(30)].map((_, index) => {
          const position = generateRandomPosition();
          console.log(position.sizeDots);
          return (
            <span
              key={index}
              style={{
                top: position.top,
                left: position.left,
              }}
              className={`scale hover:scale-150 overflow-hidden transition duration-300 absolute 
              bg-gray-100 rounded-full  ${
                position.sizeDots === 2
                  ? "h-2 w-2"
                  : position.sizeDots === 3
                  ? "h-3 w-3"
                  : position.sizeDots === 4
                  ? "h-4 w-4"
                  : position.sizeDots === 5
                  ? "h-5 w-5"
                  : position.sizeDots === 7
                  ? "h-7 w-7"
                  : position.sizeDots === 14
                  ? "h-14 w-14"
                  : "h-6 w-6"
              } m-5 blur-sm  animate__animated animate__fadeIn `}
            ></span>
          );
        })}
        {/* <div className="h-full w-4/5 flex"> */}
        <div className="  w-4/5 flex flex-col justify-center items-center  xl:flex xl:flex-row md:flex md:flex-row ">
          <img
            className="  xl:w-1/2 xl:h-1/2 animate-float "
            src={Astro}
            alt="Imagen de astronauta"
          />
          <div className="w-full h-full flex flex-col items-center justify-center md:flex md:flex-col md:justify-center md:items-center ">
            <p className="text-3xl text-orange-400  xl:text-2xl font-extrabold md:text-center md:text-3xl">
              Tenemos un problema
            </p>
            <span className="text-white text-4xl  xl:text-9xl font-extrabold md:text-center  md:text-4xl">
              404
            </span>
            <p className="text-3xl text-orange-400 xl:text-3xl font-extrabold md:text-center md:text-3xl">
              Pagina no encontrada
            </p>
          </div>
        </div>
        <Link  to={'/about'}>
            <span className="text-white" >Regresar</span>
          </Link>
      </div>
    </>
  );
};
