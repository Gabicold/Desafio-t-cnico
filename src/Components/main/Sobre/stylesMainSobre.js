import styled from "styled-components"

export const BoxMainSobre = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
height:90vh;
font-family: 'Montserrat', sans-serif;
`
export const BoxSobre = styled.section`
display:flex;
flex-direction:column;
width:49vw;
height:70vh;
margin-left:10vw;
`
export const LogoMain = styled.img`
width:26vw;
height:37vh;
margin-left:10vw;
`
export const Sobre = styled.h2`
font-size:3rem;
color:#0F2260;
display:flex;
justify-content:center;

`
export const TextSobre = styled.p`
font-size:1.5rem;
font-weight:500;
margin-top:4vh;
@media (max-width:1280px){
    font-size:1rem;
}

`