import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { Link, useParams } from "react-router-dom";
import Baixo from "../components/Baixo";
import Carregando from "../components/Carregando";


export default function Sessoes(){

    const {idFilme} = useParams()

    const [programa, setPrograma] = useState([])

    useEffect(()=>{
        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`
        const promise = axios.get(URL)

        promise.then((f)=>setPrograma(f.data))
        promise.catch((erro)=>(console.log(erro.response.data)))
    }, [])

    if(programa===[]){
        return(
            <Carregando/>
        )
    }

    return(
        <>
        <Horarios>
            <h1>Selecione o horário</h1>
            {(programa.days)?.map((ds)=>
            (
                <Dia key={ds.id} data-test="movie-day">
                    <p>{ds.weekday} - {ds.date}</p>

                    <AlinharBotoes>
                        {(ds.showtimes)?.map((h)=>
                        (
                            <Link to={`/assentos/${h.id}`} key={h.id} data-test="showtime">
                                <button>{h.name}</button>
                            </Link>
                        ))}
                    </AlinharBotoes>
                </Dia>
            )
            )}
        </Horarios>
        <Baixo imagem={programa.posterURL} titulo={programa.title}/>
        </>
    )
}

const Horarios = styled.div`
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        color: #293845;
        font-weight: 400;
        height: 110px;
        font-size: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
const Dia = styled.div`
    width: 100%;
    padding-left: 24px;
    p{
        color: #293845;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        height: 35px;
        display: flex;
        align-items: center;
    }
    button{
        width: 82px;
        height: 43px;
        font-size: 18px;
        font-weight: 400;
        line-height: 21px;
        border-radius: 3px;
        background-color: #E8833A;
        border: none;
        color: #FFFFFF;
    }
`
const AlinharBotoes = styled.div`
    display: flex;
    min-height: 87px;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
`