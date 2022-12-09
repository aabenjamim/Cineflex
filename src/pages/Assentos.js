import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { Link, useParams } from "react-router-dom";
import Baixo from "../components/Baixo";


export default function Assentos(){

    const {idSessao} = useParams()

    const [cadeira, setCadeira] = useState([])

    const lista = [{status:'Selecionado', cor:'#1AAE9E', borda: '#0E7D71'}, 
    {status:'Disponível', cor:'#C3CFD9', borda:'#7B8B99'},
    {status:'Indisponível', cor:'#FBE192', borda: '#F7C52B'}]

    useEffect(()=>{
        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`
        const promise = axios.get(URL)

        promise.then((s)=>setCadeira(s.data))
        promise.catch((erro)=>(console.log(erro.response.data)))
    }, [])

    if(cadeira===[]){
        <div>Carregando...</div>
    }

    return(
        <Alinhamento>
            <EscolhaCadeiras>
                <h1>Selecione o(s) assento(s)</h1>
                <Cadeiras>
                    {(cadeira.seats)?.map((c)=>
                        <button>{c.name}</button>
                    )}
                </Cadeiras>
                <Tipos>
                    {lista.map((nomes)=>
                    <Tipo>
                        <Botao cor={nomes.cor} borda={nomes.borda}/>
                        <p>{nomes.status}</p>
                    </Tipo>)}
                </Tipos>
            </EscolhaCadeiras>
            <Formulario>
                <p>Nome do comprador:</p>
                <input type='text' placeholder="Digite seu nome..." required/>
                <p>CPF do comprador:</p>
                <input type="text" name="cpf" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
			    placeholder="Digite seu CPF..." required/>
            </Formulario>
            <Selecionar>
                Reservar assento(s)
            </Selecionar>
            <Baixo foto={cadeira.movie && cadeira.movie.posterURL}
            filme={cadeira.movie &&  cadeira.movie.title}
            dia={cadeira.day && cadeira.day.weekday}
            hora={cadeira.name && cadeira.name}/>
        </Alinhamento>
    )
}

const EscolhaCadeiras = styled.div`
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        color: #293845;
        font-weight: 400;
        height: 90px;
        font-size: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
const Cadeiras = styled.div`
    display: flex;
    padding-left: 24px;
    padding-right: 24px;
    flex-wrap: wrap;
    justify-content: center;
    gap: 7px;
   button{
        height: 25px;
        width: 26px;
        border-radius: 12px;
        border: 1px solid #808F9D;
        background-color: #C3CFD9;
        margin-bottom: 10px;
    }
`
const Tipo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p{
        font-size: 13px;
        color: #4E5A65;
    }
`

const Tipos = styled.div`
    display: flex;
    height: 75px;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
`
const Botao = styled.button`
    height: 25px;
    width: 26px;
    border-radius: 12px;
    border: 1px solid #808F9D;
    background-color:${props => props.cor};
    margin-bottom: 10px;
    border-color: ${props => props.borda};
`

const Formulario = styled.form`
    padding: 25px;
    height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Roboto';
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    text-align: left;
    color: #293845;
    gap: 8px;
    margin-bottom: 57px;
    input{
        width: 327px;
        height: 51px;
        border: 1px solid #D5D5D5;
        ::placeholder{
            font-family: 'Roboto';
            font-style: italic;
            font-weight: 400;
            font-size: 18px;
            line-height: 21px;
            display: flex;
            align-items: center;
            color: #AFAFAF;
            padding: 18px;
        }
    }

`
const Selecionar = styled.button`
    width: 225px;
    height: 42px;
    border-radius: 3px;
    background-color: #E8833A;
    border: none;
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
`
const Alinhamento = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`