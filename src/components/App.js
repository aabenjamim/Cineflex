import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topo from "./Topo";
import Inicio from "../pages/Inicio";
import Sessoes from "../pages/Sessoes";
import Assentos from "../pages/Assentos";

export default function App() {

  return (
    <BrowserRouter>
    <Topo/>
    <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/sessoes/:idFilme" element={<Sessoes/>}/>
      <Route path="/assentos/:idSessao" element={<Assentos/>}/>
    </Routes>
  </BrowserRouter>
  );
}

