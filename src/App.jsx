import React from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Achievements } from "./components/Achievements";
import { Blog } from "./components/Blog";
import { Projects } from "./components/Projects";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Achievements />
      <Blog />
    </>
  );
}

export default App;
