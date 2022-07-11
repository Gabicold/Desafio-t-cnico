import styled from "styled-components"

export const BoxMainSobre = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
height:90vh;
font-family: 'Montserrat', sans-serif;
@media(max-width:720px){
    flex-direction:column;
    margin-top:10vh;
    height:80vh;
}
`
export const BoxSobre = styled.section`
display:flex;
flex-direction:column;
align-items:center;
width:49vw;
height:70vh;
margin-left:10vw;
@media(max-width:720px){
    margin-left:0vw;
    margin-top:5vh;
}
`
export const LogoMain = styled.img`
width:26vw;
height:37vh;
margin-left:10vw;
@media(max-width:720px){
    width:45vw;
    height:20vh;;
    margin-left:0vw;
}
`
export const Sobre = styled.h2`
font-size:3rem;
color:#0F2260;
display:flex;
justify-content:center;
@media(max-width:1440px){
    font-size:2rem;
}
@media(max-width:720px){
    font-size:2.5rem;
    width:60vw;
}
`
export const TextSobre = styled.p`
font-size:1.5rem;
font-weight:500;
margin-top:4vh;
@media (max-width:1440px){
    font-size:1rem;
}
@media(max-width:720px){
    font-size:1.5rem;
    width:90vw;
}

`