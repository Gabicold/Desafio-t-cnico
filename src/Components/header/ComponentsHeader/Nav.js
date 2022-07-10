import React from "react"
import * as S from "../stylesHeader"
import logo from "../MidiaHeader/imagens/logo.png"

export default function Nav(){
    const goToSobre = ()=>{
        window.scrollTo({
          top: 1000,
          behavior: "smooth"
        })
      }
      const goToFormaçao = ()=>{
        window.scrollTo({
          top: 1700,
          behavior: "smooth"
        })
      }
      const goToEquipe = ()=>{
        window.scrollTo({
          top: 2600,
          behavior: "smooth"
        })
      }
      const goToEventos = ()=>{
        window.scrollTo({
          top: 4200,
          behavior: "smooth"
        })
      }
      const goToContatos = ()=>{
        window.scrollTo({
          top: 4800,
          behavior: "smooth"
        })
      }
      const goToTop = ()=>{
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
      }
      return(
        <S.LogoUl>
      <S.LogoHeader onClick={()=>{goToTop()}} src={logo} alt="LogoVaiNaWeb"/>
      <nav>
        <S.BoxUl>
          <S.BoxLi><S.BoxA href="#" onClick={()=>{goToSobre()}}>Sobre</S.BoxA></S.BoxLi>
          <S.BoxLi><S.BoxA href="#" onClick={()=>{goToFormaçao()}}>Formação</S.BoxA></S.BoxLi>
          <S.BoxLi><S.BoxA href="#" onClick={()=>{goToEquipe()}}>Equipe</S.BoxA></S.BoxLi>
          <S.BoxLi><S.BoxA href="#" onClick={()=>{goToEventos()}}>Eventos</S.BoxA></S.BoxLi>
          <S.BoxLi><S.BoxA href="#" onClick={()=>{goToContatos()}}>Contatos</S.BoxA></S.BoxLi>
        </S.BoxUl>
      </nav>
      </S.LogoUl>
      )
}
