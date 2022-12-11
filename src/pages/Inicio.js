import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom";

export default function Inicio(){

    const [filme, setFilme] = useState([])

    useEffect(()=>{
        const promise = axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies')

        promise.then((filme)=>setFilme(filme.data))
        promise.catch((erro)=>(console.log(erro)))
    }, [])
  
    return(
        <FilmesEmCartaz>
            <h1>Selecione o filme</h1>
            <Filme>
                {filme.map((filmes)=>
                <Link to={`/sessoes/${filmes.id}`} key={filmes.id}  data-test="movie">
                    <img src={filmes.posterURL}/>
                </Link>
                )}
            </Filme>
        </FilmesEmCartaz>
    )
}

const FilmesEmCartaz = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        font-family: 'Roboto', sans-serif;
        color: #293845;
        font-weight: 400;
        height: 110px;
        font-size: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const Filme = styled.div`
    padding-inline: 25px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    row-gap: 11px;
    column-gap: 30px;
img{
    width: 129px;
    height: 193px;
    border: 8px solid #FFFFFF;
    border-radius: 3px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
}
`