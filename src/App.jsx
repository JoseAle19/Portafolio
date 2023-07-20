import React, { useState } from "react";
import {  useLocation } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { SideBar } from "./components/SideBar";

export const App = () => {
  const { pathname } = useLocation();
  return <>{
    pathname === '/404' ? <NotFound/> :<SideBar />} </>;
};
