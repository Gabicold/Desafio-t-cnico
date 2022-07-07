import React from "react"
import Header from "./Components/header/header"
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
    </>
  )
}
