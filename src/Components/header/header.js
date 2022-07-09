import React from "react"
import * as S from "./stylesHeader"
import logo from "./MidiaHeader/imagens/logo.png"

export default function Header(){
  const goToSobre = ()=>{
    window.scrollTo({
      top: 1000,
      behavior: "smooth"
    })
  }
  const goToFormaçao = ()=>{
    window.scrollTo({
      top: 1000,
      behavior: "smooth"
    })
  }
  const goToEquipe = ()=>{
    window.scrollTo({
      top: 1000,
      behavior: "smooth"
    })
  }
  const goToEventos = ()=>{
    window.scrollTo({
      top: 1000,
      behavior: "smooth"
    })
  }
  const goToContatos = ()=>{
    window.scrollTo({
      top: 1000,
      behavior: "smooth"
    })
  }

  
  return(
    <S.HeaderBox>
      <S.LogoUl>
      <S.LogoHeader src={logo} alt="LogoVaiNaWeb"/>
      <nav>
        <S.BoxUl>
          <S.BoxLi><S.BoxA href="#" onClick={()=>{goToSobre()}}>Sobre</S.BoxA></S.BoxLi>
          <S.BoxLi><S.BoxA href="#">Formação</S.BoxA></S.BoxLi>
          <S.BoxLi><S.BoxA href="#">Equipe</S.BoxA></S.BoxLi>
          <S.BoxLi><S.BoxA href="#">Eventos</S.BoxA></S.BoxLi>
          <S.BoxLi><S.BoxA href="#">Contatos</S.BoxA></S.BoxLi>
        </S.BoxUl>
      </nav>
      </S.LogoUl>
      <S.BoxElements>
        <S.Title><S.TitleDeco>//</S.TitleDeco>Quer construir uma carreira de 
        sucesso como Desenvolvedor(a) Front-end?
        </S.Title>
        <S.BoxSubTitle>
          <S.CircleBox>
            <S.Circle></S.Circle>
            <S.Circle></S.Circle>
            <S.Circle></S.Circle>
          </S.CircleBox>
          <S.Line></S.Line>
          <S.SubTitle>Inscreva-se no Vai na Web!</S.SubTitle>
          <S.SecondSubTitle><S.SubTitleInsc>Inscrições </S.SubTitleInsc>02 a 21 de Agosto</S.SecondSubTitle>
        </S.BoxSubTitle>
        <S.TextForm>Link para o formulário: <S.LinkForm>bit.ly/CarreiraVaiNaWeb</S.LinkForm></S.TextForm>
      </S.BoxElements>
        
      
    </S.HeaderBox>
  )
}
