import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { About, Certificates, Contact, Home, Projects } from "../pages";
import { NotFound } from "../pages/NotFound";
import { Nav } from "./Nav";
import { Profile } from "./Profile";

export const SideBar = () => {
  const [isOpen, setisOpen] = useState(true);
  const [isPc, setIsPc] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 425px)");

    const handleMediaQuery = (e) => {
      setIsPc(e.matches);
      setisOpen(!e.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQuery);
    handleMediaQuery(mediaQuery);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQuery);
    };
  }, []);

  return (
    <>
      <main className=" w-full sm:relative xl:flex md:flex  xl:w-screen md:w-screen  xl:h-screen overflow-hidden">
        <p
          className={`${!isOpen && "animate__animated animate__slideInLeft "}
          ${
            isOpen && "animate__animated animate__slideOutLeft"
          } bg-blue-950 w-full  absolute z-30 ${!isOpen && "h-12"}  `}
          onClick={() => setisOpen(true)}
        >
          <svg
            color="white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`${
              isOpen && "hidden"
            } h-8 m-2  scale hover:scale-125 transition duration-300 z-10 absolute top-0 left-0 xl:hidden md:hidden`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </p>
        <div
          className={`${!isOpen && "animate__animated animate__slideOutLeft "}
          ${isOpen && " animate__animated animate__slideInLeft"} 
          order-2 relative z-20 w-[70%]  min-h-screen 
        overflow-hidden bg-blue-950  xl:static xl:w-2/12 md:static md:w-2/6 md:order-1`}
        >
          <p
            onClick={() => setisOpen(false)}
            className="w-full text-white flex justify-end p-2 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 scale mr-2 hover:scale-125 transition duration-300 xl:hidden md:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </p>
          <div className="w-full  h-1/4 p-5 flex flex-col justify-between">
            <Profile />
          </div>
          <div className="w-3/4  ">
            <Nav
              setIsOpen={
                isPc
                  ? setisOpen
                  : () => {
                      return;
                    }
              }
            />
          </div>
          <p className=" md:block xl:block  text-center text-white text-sm  m-4">
            © 2023 José Alejandro Cruz Pérez. Todos los derechos reservados.
          </p>
        </div>

        {isOpen && (
          <div className="h-full w-full  top-0 left-0 absolute  z-10  backdrop-blur-sm bg-white/50 xl:hidden md:hidden"></div>
        )}
        <div
          className={` order-1 absolute z-0  top-0 left-0  h-screen w-screen   
        xl:static md:static xl:w-5/6 md:w-5/6 md:order-2 overflow-auto`}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="/*" element={<Navigate to={"/404"} />} />
          </Routes>
        </div>
      </main>
    </>
  );
};
