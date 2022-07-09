import styled from "styled-components"
import Space from "./Midia/Espaço.png"

export const BoxFooter = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
background-image:url(${Space});
background-repeat:no-repeat;
background-size:100% 100%;
width:100%;
height:50vh;
margin-top:25vh;
`
export const BoxContato = styled.h2`
color: white;
font-size:3rem;
margin-left:12vw;
margin-bottom:15vh;
`
export const BoxTextImage = styled.section`
display:flex;
align-items:center;
margin-left:12vw;
height:10vh;
`
export const TextFooter = styled.p`
font-size:1.6rem;
width:15vw;
color:white;
@media (max-width:1440px){
    font-size:1.2rem;
}
`
export const ImageFooter = styled.img`
width:4.5vw;
height:9vh;
margin-left:2vw;
`