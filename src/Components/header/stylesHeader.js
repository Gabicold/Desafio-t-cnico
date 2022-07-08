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
`
export const LogoUl = styled.section`
display:flex;
align-items:center;
height:10vh;
width:100%;
`
export const LogoHeader = styled.img`
position:fixed;
width: 4vw;
height: 6vh;
margin-left:5vw;
`
export const BoxUl = styled.ul`
display:flex;
list-style:none;
align-items:center;
height:10vh;
margin-left:28vw;

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

}
`
export const BoxElements = styled.section`
display:flex;
flex-direction:column;
width:80vw;
height:100vh;
align-items:start;
justify-content:center;
margin-left:10vw;
`
export const Title = styled.h1`
width:80vw;
height:container;
color:#FFAC2D;
font-size:4vw;
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
`
export const CircleBox = styled.section`
display:flex;
width:100%;
height:5vh;
align-items:center;
margin-left:1vw;
`
export const Circle = styled.div`
background-color:#00145D;
border-radius:50px;
width:1vw;
height:2vh;
margin-left:0.5vw;
`
export const Line = styled.div`
width:35vw;
height:1vh;
margin-left:1.5vw;
background-color:#00145D;
border-radius:50px;
`
export const SubTitle = styled.h2`
font-size:2.9vw;
margin-top:1vh;
margin-left:5vh;
color:#00145D;
`
export const SecondSubTitle = styled.p`
margin-top:2vh;
font-size:1.8vw;
margin-left:5vh;
color:black;
`
export const SubTitleInsc = styled.span`
font-weight:500;
`
export const TextForm = styled.h2`
font-size:1.5vw;
color:#FED5B2;
`
export const LinkForm = styled.span`
font-weight:400;
`