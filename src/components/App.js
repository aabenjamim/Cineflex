import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topo from "./Topo";
import Inicio from "../pages/Inicio";
import Sessoes from "../pages/Sessoes";
import { useState } from "react";

export default function App() {

  return (
    <BrowserRouter>
    <Topo/>
    <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/sessoes/:idFilme" element={<Sessoes/>}/>
    </Routes>
  </BrowserRouter>
  );
}

