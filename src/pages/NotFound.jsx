import { useEffect, useState } from "react";
import Astro from "../../public/assets/imges/notfound.png";
import "../animations/float.css";
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
        wWidth:  window.innerWidth,
        wHeight: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleWindowSize);
    // Al desmontar el componente, restaura el scroll del body
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener('resize', handleWindowSize)
    };
  }, []);

  const generateRandomPosition = () => {
    const sizeDots = Math.floor(Math.random() * (8 - 2) + 1);
    const top = Math.floor(Math.random() * windowSize.wHeight);
    const left = Math.floor(Math.random() * windowSize.wWidth);
    return { top, left, sizeDots };
  };

  return (
    <>
      <div className="w-screen h-screen flex overflow-hidden items-center justify-center bg-black   ">
        {[...Array(60)].map((_, index) => {
          const position = generateRandomPosition();
          return (
            <span
              key={index}
              style={{
                top: position.top,
                left: position.left,
              }}
              className={`scale hover:scale-150 overflow-hidden transition duration-300 absolute bg-gray-300 rounded-full
                   h-${position.sizeDots} w-${position.sizeDots} m-2 animate__animated animate__fadeIn `}
            ></span>
          );
        })}
        {/* <div className="h-full w-4/5 flex"> */}
        <div className=" h-full w-4/5 flex flex-col justify-center items-center">
          <img
            className="xl:w-1/2 xl:h-full animate-float "
            src={Astro}
            alt="Imagen de astronauta"
          />
          <div className="w-full h-full flex flex-col items-center justify-center ">
            <p className="text-orange-400  xl:text-2xl font-extrabold">
              Tenemos un problema
            </p>
            <span className="text-white  xl:text-9xl font-extrabold">404</span>
            <p className="text-orange-400 xl:text-3xl font-extrabold">
              Pagina no encontrada
            </p>
          </div>
        </div>
        {/* <Link  to={'/home'}>
            <span className="text-white" >Regresar</span>
          </Link> */}
      </div>
    </>
  );
};
