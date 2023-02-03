import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Project from "./components/Project";


function App() {
  return (
    <div>
      <Sidebar />
      <Main />
      <About />
      <Skills />
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
