import React from "react"
import * as S from "../stylesHeader"


export default function Description(){
  

  
  return(
      <S.BoxElements>
        <S.Title><S.TitleDeco>/ /</S.TitleDeco>Quer construir uma carreira de 
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
  )
}