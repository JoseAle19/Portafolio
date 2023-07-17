import React, { useState } from "react";
import { Profle } from "./components/Profle";
import { Nav } from "./components/Nav";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Home, Certificates, About, Contact, Projects } from "./pages";
import { NotFound } from "./pages/NotFound";
import { SideBar } from "./components/SideBar";

export const App = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  const [isOpen, setIsOpen] = useState(false);
  return <>{
    pathname === '/404' ? <NotFound/> :<SideBar />} </>;
};
