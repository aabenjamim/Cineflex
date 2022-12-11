import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { useParams, useNavigate} from "react-router-dom";
import Baixo from "../components/Baixo";
import Carregando from "../components/Carregando";


export default function Assentos(props){

    const {nome, setNome, cpf, setCpf, numAssentos, setNumAssentos, cadeira, setCadeira,
    escolhidos, setEscolhidos} = props

    const {idSessao} = useParams()

    const navigate = useNavigate()
    

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
        return(
            <Carregando/>
        )
    }


    function escolher(c){
        if(!escolhidos.includes(c.id)){
            if(c.isAvailable === true){
                setEscolhidos([...escolhidos, c.id])
                setNumAssentos([...numAssentos, c.name])
            }
            if(c.isAvailable === false){
                alert('Esse assento não está disponível')
                return
            }
        }
        if(escolhidos.includes(c.id)){
            const remover = escolhidos.indexOf(c.id)
            const novaLista = [...escolhidos]
            const novosAssentos = [...numAssentos]
            novosAssentos.splice(remover, 1)
            novaLista.splice(remover, 1)
            setEscolhidos([...novaLista])
            setNumAssentos([...novosAssentos])
        }
    }

    function reservarAssentos (event) {
		event.preventDefault();

        if(escolhidos.length>0){
            const url = 'https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many'
            const requisicao = axios.post(url , {
                ids: escolhidos,
                name: nome,
                cpf: cpf
            });
    
            requisicao.then(() => navigate("/sucesso")) 
        }
        if(escolhidos.length===0){
            alert('você não escolheu o assento!')
        }
    }

    return(
        <Alinhamento>
            <EscolhaCadeiras>
                <h1>Selecione o(s) assento(s)</h1>
                <Cadeiras>
                    {(cadeira.seats)?.map((c)=>
                        <Botao onClick={()=>escolher(c)}
                        cor={c.isAvailable?  (escolhidos.includes(c.id)? 
                        '#1AAE9E' : '#C3CFD9') : '#FBE192'}
                        >{c.name}</Botao>
                    )}
                </Cadeiras>
                <Tipos>
                    {lista.map((nomes)=>
                    <Tipo>
                        <BotaoExemplo cor={nomes.cor} borda={nomes.borda}/>
                        <p>{nomes.status}</p>
                    </Tipo>)}
                </Tipos>
            </EscolhaCadeiras>
            <Formulario onSubmit={reservarAssentos}>
                <p>Nome do comprador:</p>
                <Input type='text' placeholder="Digite seu nome..." value={nome} 
                onChange={e => setNome(e.target.value)} required/>
                <p>CPF do comprador:</p>
                <Input type="number" name="cpf" value={cpf} placeholder="Digite seu CPF..." 
                onChange={e => setCpf(e.target.value)} required/>
                
                <Selecionar type="submit">
                    Reservar assento(s)
                </Selecionar>
            </Formulario>
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

`
const Botao = styled.button`
    height: 25px;
    width: 26px;
    border-radius: 12px;
    border: 1px solid #808F9D;
    background-color: ${props => props.cor};
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
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
const BotaoExemplo = styled.button`
    height: 25px;
    width: 26px;
    border-radius: 12px;
    border: 1px solid #808F9D;
    background-color:${props => props.cor};
    margin-bottom: 10px;
    border-color: ${props => props.borda};
`

const Formulario = styled.form`
    margin-top: 27px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    input{
        box-sizing: border-box;
        width: 327px;
        height: 51px;
        border: 1px solid #D5D5D5;
        display: flex;
        justify-content: start;
        padding: 15px;
        font-size: 18px;
        font-family: 'Roboto';
    }

    input::placeholder{
        color: #AFAFAF;
        font-size: 18px;
        font-style: italic;
    }

    p{
        color: #293845;
        font-family: 'Roboto';
        font-size: 18px;
        font-weight: 400;
        line-height: 21px;
        margin-top: 10px;
        display: flex;
        justify-content: start;
    }
`
const Input = styled.input`

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
    margin-bottom: 147px;
    margin-top: 57px;
    margin-left: 15%;
`
const Alinhamento = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`