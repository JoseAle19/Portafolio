import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { About, Certificates, Contact, Home, Projects } from "../pages";
import { NotFound } from "../pages/NotFound";
import { Nav } from "./Nav";
import { Profle } from "./Profle";

export const SideBar = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <>
      <main className=" sm:relative xl:flex  md:flex w-screen h-screen">
        <p onClick={() => setisOpen(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 m-2  hover:rotate-90 transition duration-300 z-10 absolute top-0 left-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </p>
        <div
          className={`${!isOpen && "animate__animated animate__slideOutLeft " }
          ${isOpen && " animate__animated animate__slideInLeft"} 
          order-2 relative z-20  w-1/2   min-h-screen  sm:absolute sm:top-0 sm:left-0    
        overflow-hidden bg-blue-950   xl:static xl:w-2/12 md:static md:w-2/6`}
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
              className="w-8 h-8 scale hover:scale-125 transition duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </p>
          <div className="w-full h-1/4 p-5 flex flex-col justify-between">
            <Profle />
          </div>
          <div className="w-3/4 h-3/4">
            <Nav />
          </div>
        </div>

        {isOpen && (
          <div className="h-full w-full  top-0 left-0 absolute  z-10  backdrop-blur-sm bg-white/50"></div>
        )}
        <div
          className={` order-1 absolute z-0  top-0 left-0  h-screen w-screen   
        xl:static md:static xl:w-5/6 md:w-5/6 overflow-auto`}
        >
          <Routes>
            {/* <Route path="/" element={<App />} /> */}
            <Route path="/home" element={<Home />} />
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
