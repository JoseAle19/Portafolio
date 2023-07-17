import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { About, Certificates, Contact, Home, Projects } from "../pages";
import { NotFound } from "../pages/NotFound";
import { Nav } from "./Nav";
import { Profle } from "./Profle";
import { App } from "../App";

export const SideBar = () => {
  return (
    <>
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
            {/* <Route path="/" element={<App />} /> */}
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="/*" element={<Navigate to={'/404'} />} />
          </Routes>
        </div>
      </main>
    </>
  );
};
