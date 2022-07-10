import React from "react"
import * as S from "./stylesHeader"
import Nav from "./ComponentsHeader/Nav"
import Description from "./ComponentsHeader/description"

export default function Header(){
  return(
    <S.HeaderBox>
      <Nav/>
      <Description/>
    </S.HeaderBox>
  )
}
