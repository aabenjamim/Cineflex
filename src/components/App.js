import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topo from "./Topo";
import Inicio from "./Inicio";

export default function App() {
  return (
    <BrowserRouter>
    <Topo/>
    <Routes>
      <Route path="/" element={<Inicio/>}/>
    </Routes>
  </BrowserRouter>
  );
}

