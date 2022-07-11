import styled  from "styled-components"
import fundo from "./MidiaHeader/imagens/Fundo.png"

export const HeaderBox = styled.div`
display:flex;
flex-direction:column;
width:100%;
height:100vh;
background-image:url(${fundo});
background-repeat:no-repeat;
background-size:100%;
@media(max-width:1024px){
    background-size:100% 100%;
}
@media(max-width:720px){
   
    height:100vh;
}
`
export const LogoUl = styled.section`
display:flex;
align-items:center;
height:10vh;
width:100%;
@media(max-width:720px){
    display:none;
}
`
export const LogoHeader = styled.img`
position:fixed;
z-index:5;
width: 4vw;
height: 6vh;
margin-left:5vw;
cursor:pointer;

`
export const BoxUl = styled.ul`
display:flex;
list-style:none;
align-items:center;
height:10vh;
margin-left:28vw;
@media(max-width:720px){
    display:none;
}
`
export const BoxLi = styled.li`
display:flex;
align-items:center;
justify-content:center;
margin-right:3vw;
width:8vw;
&:hover{
    border: 3px solid #FFAC2D;
    border-radius: 50px;
`
export const BoxA = styled.a`
text-decoration:none;
font-weight:100;
color:white;
font-size:1.5vw;

`
export const BoxElements = styled.section`
display:flex;
flex-direction:column;
width:80vw;
height:100vh;
align-items:start;
justify-content:center;
margin-left:10vw;
@media(max-width:720px){
    height:70vh;
    width:79vw;
    margin-left:10vw;
    align-items:start;
}
`
export const Title = styled.h1`
width:80vw;
height:container;
color:#FFAC2D;
font-size:4vw;
@media(max-width:720px){
    width:79vw;
    font-size:5vw;
}
`
export const TitleDeco = styled.span`
color:#FF611E;

`
export const BoxSubTitle = styled.div`
display:flex;
flex-direction:column;
margin-top:8vh;
border-radius:1vw;
background-color:white;
width:40vw;
height:25vh;
@media(max-width:720px){
    width:79vw;
}
`
export const CircleBox = styled.section`
display:flex;
width:100%;
height:5vh;
align-items:center;
margin-left:1vw;
@media(max-width:720px){
    width:70vw;
}
`
export const Circle = styled.div`
background-color:#00145D;
border-radius:50px;
width:1vw;
height:2vh;
margin-left:0.5vw;
@media(max-width:720px){
    width:4vw;
    height:2vh; 
}
`
export const Line = styled.div`
width:35vw;
height:1vh;
margin-left:1.5vw;
background-color:#00145D;
border-radius:50px;
@media(max-width:720px){
    width:75vw;
    height:0.6vh;
}
`
export const SubTitle = styled.h2`
font-size:2.9vw;
margin-top:1vh;
margin-left:5vh;
color:#00145D;
@media(max-width:720px){
    margin-top:3vh;
    font-size:5vw;
    margin-left:4vh;
}
`
export const SecondSubTitle = styled.p`
margin-top:2vh;
font-size:1.8vw;
margin-left:5vh;
color:black;
@media(max-width:720px){
    font-size:4vw;
    margin-left:4vh;
    margin-top:5vh;
}
`
export const SubTitleInsc = styled.span`
font-weight:500;
@media(max-width:720px){
    font-weight:bold;
}
`
export const TextForm = styled.h2`
font-size:1.5vw;
color:#FED5B2;
@media(max-width:720px){
    font-size:4vw;
}
`
export const LinkForm = styled.span`
font-weight:400;
`