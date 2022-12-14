import styled from "styled-components"

export default function Baixo(props){

    const {imagem, titulo, filme, foto, hora, dia} = props

    return(
        <BarraBaixo data-test="footer">
            <img src={foto? foto : imagem}/>
            <div>
                <p>{filme? filme : titulo}</p>
                {dia && 
                <p>{dia && dia} - {hora && hora}</p>}
            </div>
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
position: fixed;
bottom: 0;
left: 0;
img{
    width: 48px;
    height: 72px;
    border: 8px solid #FFFFFF;
    border-radius: 3px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    margin-left: 5px;
}
div{
    padding: 10px;
}
`