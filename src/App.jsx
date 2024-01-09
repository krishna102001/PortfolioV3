import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Contact from "./components/Contact";
import Index from "./Index";
import AdminControl from "./components/AdminControl";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Index />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/adminControl" element={<AdminControl />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
