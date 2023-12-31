import React from 'react'
import { Navbar } from './components/Navbar'
import {Routes, Route} from "react-router-dom"
import {Home} from "./components/Home"
import {About} from "./components/About"
import {Projects} from "./components/Projects"
function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Navbar />} />
    </Routes>
    </>
  )
}

export default App
