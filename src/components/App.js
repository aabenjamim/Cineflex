import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topo from "./Topo";
import Inicio from "../pages/Inicio";
import Sessoes from "../pages/Sessoes";
import Assentos from "../pages/Assentos";
import Sucesso from "../pages/Sucesso";
import { useState } from "react";

export default function App() {

  const [cadeira, setCadeira] = useState([])
  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [numAssentos, setNumAssentos] = useState([])
  const [escolhidos, setEscolhidos] = useState([])


  return (
    <BrowserRouter>
    <Topo/>
    <Routes>
      <Route path="/" element={<Inicio/>}/>

      <Route path="/sessoes/:idFilme" element={<Sessoes/>}/>

      <Route path="/assentos/:idSessao" element={
      
      <Assentos
      nome={nome} setNome={setNome} cpf={cpf} setCpf={setCpf}
      numAssentos={numAssentos} setNumAssentos={setNumAssentos}
      cadeira={cadeira} setCadeira={setCadeira}
      escolhidos={escolhidos} setEscolhidos={setEscolhidos}
      />}/>

      <Route path="/sucesso" element={

      <Sucesso 
      nome={nome} cpf={cpf} numAssentos={numAssentos}
      cadeira={cadeira} setCadeira={setCadeira} setNome={setNome}
      setCpf={setCpf} setEscolhidos={setEscolhidos} setNumAssentos={setNumAssentos}
      />}/>

    </Routes>
  </BrowserRouter>
  );
}

