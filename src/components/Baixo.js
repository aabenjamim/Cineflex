import styled from "styled-components"

export default function Baixo(props){

    const {imagem, titulo} = props

    return(
        <BarraBaixo>
            <img src={imagem}/>
            <p>{titulo}</p>
        </BarraBaixo>
    )
}

const BarraBaixo = styled.div`
font-family: 'Roboto', sans-serif;
padding-inline: 10px;
width: 100%;
height: 117px;
background-color: #C3CFD9;
color: #293845;
font-size: 26px;
line-height: 30px;
display: flex;
align-items: center;
font-weight: 400;
border-top: 1px solid #9EADBA;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
gap: 14px;
img{
    width: 48px;
    height: 72px;
    border: 8px solid #FFFFFF;
    border-radius: 3px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
}
`