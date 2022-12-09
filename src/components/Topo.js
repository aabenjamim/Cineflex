import styled from "styled-components"

export default function Topo(){
    return(
        <BarraTopo>
            <p>CINEFLEX</p>
        </BarraTopo>
    )
}

const BarraTopo = styled.div`
font-family: 'Roboto', sans-serif;
width: 100%;
height: 67px;
background-color: #C3CFD9;
color: #E8833A;
font-size: 34px;
line-height: 39px;
display: flex;
justify-content: center;
align-items: center;
font-weight: 400;
`