import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import {
  Navbar,
  Realisations,
  Education,
  Hero,
  Stack,
  Services,
  About,
  Experiences,
  Contact,
  Error,
  Footer,
} from "./components";
//import "./App.scss";
import { AppContext } from "./context/context";

function App() {
  const { openSidebar, toggleMenu } = useContext(AppContext);

  //console.log(openSidebar, toggleMenu);
  return (
    /*    <div className="app">
      <div className="app__iconmenu" onClick={toggleMenu}>
        {openSidebar ? (
          <AiOutlineClose className="icon" />
        ) : (
          <AiOutlineMenuUnfold className="icon" />
        )}
      </div>
      <div className="app__wrappe">
       
        <div
          className={
            openSidebar ? "app__content sidebar-active" : "app__content"
          }
        >
          <Routes>
            <Route exact path="/" element={<Apropos />} />
            <Route path="/realisations" element={<Realisations />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </div> */

    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Realisations />
      <Stack />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
