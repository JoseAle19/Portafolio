import React from "react";
import { Profle } from "./components/Profle";
import { Nav } from "./components/Nav";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
  HashRouter,
} from "react-router-dom";
import { Home, Certificates, About, Contact, Projects } from "./pages";
export const App = () => {
  return (
    <>
      <Router>
        <main className="flex  w-screen h-screen ">
          <div className="w-2/12 overflow-hidden  bg-blue-950">
            <div className="w-full h-1/4 p-5  flex flex-col justify-between ">
              <Profle />
            </div>
            <div className="w-3/4 h-3/4">
              <Nav />
            </div>
          </div>
          {/* Informacion de opcion */}
          <div className="w-5/6 overflow-auto ">
            <HashRouter>
              <Routes>
                <Route path="/app" element={<App />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/*" element={<Navigate to={"/home"} />} />
              </Routes>
            </HashRouter>
          </div>
        </main>
      </Router>
    </>
  );
};
