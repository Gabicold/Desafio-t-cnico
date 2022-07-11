import styled from "styled-components"

export const BoxFormaçao = styled.div`
display:flex;
justify-content:space-around;
weight:100%;
height:90vh;
font-family: 'Montserrat', sans-serif;
@media(max-width:720px){
    align-items:center;
    flex-direction:column;
    margin-top:5vh;
}
`
export const BoxEfor = styled.section`
@media(max-width:720px){
    width:80vw;
    height:80vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    border:solid red 1px;
}
`
export const Formaçao = styled.h2`
font-size:3rem;
color:#0F2260;
display:flex;
margin-left:10vw;
@media(max-width:720px){
    font-size:4rem;
    margin-left:0vw;
    
}
`
export const BoxSubTitleImg = styled.section`
display:flex;
width:28vw;
height:20vh;
margin-left:11vw;
margin-top:3vh;
margin-bottom:5vh;
@media(max-width:720px){
    margin-left:0vw;
    justify-content:center;
    margin-top:8vh;
}
`
// <imagemPc>
export const BoxImg = styled.div`
display:flex;
align-items:center;
justify-content:center;
border-radius:50%;
background-color:#FDE7A9;
width:25vw;
height:13vh;
border:dashed 6px #FFAC2D ;
@media(max-width:720px){
    display:none;
}
`
export const ImgPc = styled.img`
width:3.2vw;
height:5.6vh;

@media(max-width:1024px){
    width:3.2vw;
    height:4.2vh;
}
@media(max-width:720px){
    display:none;
}
`
// <imagemPc/>
export const BoxSubTitle = styled.section`
margin-left:2vw;
width:80vw;
@media(max-width:720px){
    margin-left:0vw;
    
}
`
export const SubTitle = styled.p`
font-size:1.5rem;
font-weight:bold;
display:flex;
color:#0F2260;
text-transform:uppercase;
@media (max-width:1440px){
    font-size:2rem;
}
@media(max-width:720px){
    display:flex;
    justify-content:center;
    font-size:2.5rem;
    width:80vw;
}
`
export const Paragraph = styled.p`
font-size:1.4rem;
margin-top:2vh;
@media (max-width:1440px){
    font-size:1rem;
    margin-top:2vh;
}
@media(max-width:1024px){
    font-size:0.8rem;
}
@media(max-width:720px){
    font-size:2rem;
}
`
export const ImgFormaçao = styled.img`
width:49vw;
height:68vh;
margin-left:9vw;
@media(max-width:720px){
    display:none;
}
`