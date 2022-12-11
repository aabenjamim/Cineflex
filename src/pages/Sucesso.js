import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Sucesso(props){

    const {nome, cpf, numAssentos, cadeira, setCadeira, setNome, setCpf,
    setEscolhidos, setNumAssentos} = props

    const navigate = useNavigate()

    function voltar(){
        setCadeira([])
        setCpf([])
        setNome([])
        setNumAssentos([])
        setEscolhidos([])
        navigate("/")
    }

    return(
        <Parabens>
            <div>
                <h1>Pedido feito com sucesso!</h1>
            </div>
            <div data-test="movie-info">
                <h2>Filme e sessão</h2>
                <p>{cadeira.movie && cadeira.movie.title}</p>
                <p>{cadeira.day && cadeira.day.date}  { cadeira.name && cadeira.name}</p>
            </div>
            <div data-test="seats-info">
                <h2>Ingressos</h2>
                {numAssentos.map((n) => 
                <p>Assento {n}</p>)}
            </div>   
            <div data-test="client-info">
                <h2>Comprador</h2>
                <p>Nome: {nome}</p>
                <p>CPF: {cpf && cpf[0]}{cpf && cpf[1]}{cpf && cpf[2]}.
                {cpf && cpf[3]}{cpf && cpf[4]}{cpf && cpf[5]}.
                {cpf && cpf[6]}{cpf && cpf[7]}{cpf && cpf[8]}-
                {cpf && cpf[9]}{cpf && cpf[10]}</p>
            </div>
            <Centro>
                <Home onClick={voltar} data-test="go-home-btn">Voltar pra Home</Home>
            </Centro>
        </Parabens>
    )
}

const Parabens = styled.div`
    font-family: 'Roboto';
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 30px;
    div{
        height: 110px;
    }
    h1{
        display: flex;
        height: 110px;
        justify-content: center;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #247A6B;
    }  
    h2{
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        color: #293845;
    }
    p{
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        display: flex;
        align-items: center;
        color: #293845;
    }
`
const Home = styled.button`
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
`

const Centro = styled.div`
    display: flex;
    justify-content: center;
`