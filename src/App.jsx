import React, { useState } from "react";
import { Profle } from "./components/Profle";
import { Nav } from "./components/Nav";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import { Home, Certificates, About, Contact, Projects } from "./pages";
import { NotFound } from "./pages/NotFound";
export const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <HashRouter>
        <div className="fixed overflow-hidden top-0 right-0  left-0 py-3 shadow-md  xl:hidden md:hidden">
          <button
            onClick={() => {
              setIsOpen(true);
            }}
            className="p-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="35"
              height="35"
              viewBox="0 0 50 50"
            >
              <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
            </svg>
          </button>
          {/* Fondo con algo opaco */}
          <div className="fixed min-h-screen w-full overflow-auto ">
            <div onClick={() => setIsOpen(false)} className="h-screen">
              <Routes>
                <Route path="/app" element={<App />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/not-found" element={<NotFound />} />
                <Route path="/*" element={<Navigate to={'/not-found'}/>} />
              </Routes>
            </div>
          </div>
          <div
            className={` ${
              isOpen && " bg-gray-200/50  backdrop-blur-sm"
            } w-full  min-h-screen  top-0 left-0 right-0 `}
          ></div>
          {/* Mueno de opciones */}
          <div
            className={`min-h-screen ${
              isOpen ? "inline" : "hidden"
            } transition-all duration-300  w-2/3 fixed bg-blue-950  top-0 right-0 left-0 overflow-hidden`}
          >
            <button
              onClick={() => {
                setIsOpen(false);
              }}
              className="w-full flex justify-end p-2 "
            >
              <svg
                className="scale hover:scale-125 transition duration-300"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="35"
                height="35"
                viewBox="0 0 50 50"
              >
                <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
              </svg>
            </button>
            <Profle />
            <nav>
              <Nav />
            </nav>
          </div>
        </div>
        {/* para computadoras */}
        <main className="xl:flex  md:flex w-screen h-screen">
          <div className="w-2/12 overflow-hidden bg-blue-950 hidden xl:inline xl:w-2/12 md:inline md:w-2/6">
            <div className="w-full h-1/4 p-5 flex flex-col justify-between">
              <Profle />
            </div>
            <div className="w-3/4 h-3/4">
              <Nav />
            </div>
          </div>
          {/* Informacion de opcion */}
          <div className="w-full  hidden xl:inline md:inline xl:w-5/6 md:w-5/6 overflow-auto">
            <Routes>
              <Route path="/app" element={<App />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/*" element={<NotFound  />} />
            </Routes>
          </div>
        </main>
      </HashRouter>
    </>
  );
};
