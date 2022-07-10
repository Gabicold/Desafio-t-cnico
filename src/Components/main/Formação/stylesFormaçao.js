import styled from "styled-components"

export const BoxFormaçao = styled.div`
display:flex;
justify-content:space-around;
weight:100%;
height:90vh;
`
export const BoxEfor = styled.section`

`
export const Formaçao = styled.h2`
font-size:3rem;
color:#0F2260;
display:flex;
margin-left:10vw;
`
export const BoxSubTitleImg = styled.section`
display:flex;
width:28vw;
height:20vh;
margin-left:11vw;
margin-top:3vh;
margin-bottom:5vh;
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
`
export const ImgPc = styled.img`
width:3.2vw;
height:5.6vh;
`
// <imagemPc/>
export const BoxSubTitle = styled.section`
margin-left:2vw;
width:80vw;

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
`
export const Paragraph = styled.p`
font-size:1.4rem;
margin-top:2vh;
@media (max-width:1440px){
    font-size:1rem;
    margin-top:2vh;
}
`
export const ImgFormaçao = styled.img`
width:49vw;
height:68vh;
margin-left:11vw;
`