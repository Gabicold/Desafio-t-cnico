import React from "react"
import Header from "./Components/header/header"
import MainSobre from "./Components/main/Sobre/mainSobre"
import MainFormaçao from "./Components/main/Formação/mainFormaçao"
import styled from "styled-components"
import { createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
*{

  margin:0;
  padding:0;
  box-sizing:border-box;
}
`
export default function App(){

  return(
    <>
      <GlobalStyle/>
      <Header/>
      <MainSobre/>
      <MainFormaçao/>
    </>
  )
}
