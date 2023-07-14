import React from 'react'
import { HashRouter } from 'react-router-dom'

export const SideBar = () => {
  return (
    <HashRouter>
    {/* <Router> */}
    <main className="flex  w-screen h-screen ">
      <div className="w-2/12 overflow-hidden  bg-blue-950 hidden xl:inline xl:w-2/12 md:inline md:w-2/6  ">
        <div className="w-full h-1/4 p-5  flex flex-col justify-between ">
          <Profle />
        </div>
        <div className="w-3/4 h-3/4">
          <Nav />
        </div>
      </div>
      {/* Informacion de opcion */}
      <div className="w-5/6 overflow-auto ">
        <Routes>
          <Route path="/app" element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Navigate to={"/home"} />} />
        </Routes>
      </div>
    </main>
  </HashRouter>
  )
}
