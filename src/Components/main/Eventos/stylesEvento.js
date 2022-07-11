import styled from "styled-components"

export const BoxEventos = styled.div`
display:flex;
align-items:center;
flex-direction:column;
width:100%;
height:80vh;
margin-top:15vh;
@media(max-width:720px){
   
    
}
`
export const Eventos = styled.h2`
font-size:3rem;
color:#0F2260;
display:flex;
margin-right:61.2vw;
font-family: 'Montserrat', sans-serif;
`
export const BoxImageText = styled.section`
display:flex;
position:relative;
align-items:center;
width:100%;
height:80vh;
@media(max-width:720px){
    flex-direction:column;
}
`
export const NotebookImage = styled.img`
width:70vw;
height:80vh;
margin-left:5vw;
`
export const BoxText = styled.section`
position:relative;
right:2vw;
width:15vw;
font-family: 'Montserrat', sans-serif;
`
export const SubTitle = styled.h2`
font-size:2rem;
font-weight:bold;
display:flex;
color:#0F2260;
margin-bottom:5vh;
@media (max-width:1440px){
    font-size:2rem;
}
`
export const Text = styled.p`
font-size:1.1rem;
font-weight:500;
@media (max-width:1440px){
    font-size:0.8rem;
}
@media(max-width:1024px){
    font-size:0.7rem;
}
`