import styled from "styled-components"
import Lupa from "./midia/pageview.png"
export const Equipe = styled.h2`
font-size:3rem;
color:#0F2260;
display:flex;
margin-right:61.2vw;
margin-bottom:5vh;
font-family: 'Montserrat', sans-serif;
`
export const BoxEquipe = styled.div`
display:flex;
width:100%;
height:container;
flex-direction:column;
align-items:center;

`
export const BoxInput = styled.div`
display:flex;
align-items:center;
width:70vw;
height:15vh;
background-color:#0F2260;

`
export const TeamInput = styled.input`
width:15vw;
height:4vh;
background-color:#0F2260;
border:solid 1px #FFFFFF;
border-radius:4px;
margin-left:10vw;
padding:1vw;
color:#BCE0FD;
font-weight:bold;
font-family: 'Montserrat', sans-serif;
background-image:url(${Lupa});
background-repeat:no-repeat;
background-position:right;
::placeholder{
    color: #BCE0FD;
    font-style:italic;
    font-family: 'Montserrat', sans-serif;
}
`
export const BoxTeam = styled.div`
display:flex;
justify-content:start;
flex-wrap:wrap;
width:82vw;
height:container;
margin-left:12vw;

`

export const BoxImage = styled.section`
display:flex;
position:relative;
flex-direction:column;
align-items:center;
margin-right:1vw;
margin-top:2vh;
background-color:#0F2260;
`
export const TeamImage = styled.img`
width:16.77vw;
height: 30vh;
z-index:1;
position:relative;
z-idex:1;
-webkit-mask-image: linear-gradient(to top, transparent 5%, black 50%);
@media(max-width:1024px){
    height:25vh;
}
`

export const ImageName = styled.p`
position:absolute;
bottom:1.5vw;
z-index:3;
font-weight:bold;
color:white;
font-size:1.5rem;
font-family: 'Montserrat', sans-serif;
margin-right:1vw;
@media (max-width:1440px){
    font-size:1rem;
}
`
export const TextFunction = styled.p`
position:absolute;
bottom:0.5vw;
z-index:3;
font-weight:500;
color:white;
font-size:1rem;
font-family: 'Montserrat', sans-serif;
margin-right:1vw;
@media (max-width:1440px){
    font-size:0.6rem;
}
`
