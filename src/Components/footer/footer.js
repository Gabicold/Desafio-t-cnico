import React from "react"
import * as S from "./stylesFooter"
import Facebook from "./Midia/facebook.png"
import Instagram from "./Midia/insta.png"
import Linkrdin from "./Midia/linkrdin.png"
import Medium from "./Midia/medium.png"
import Youtube from "./Midia/youtub.png"
export default function Footer(){

return(
    <S.BoxFooter>
        <S.BoxContato>Contato</S.BoxContato>
        <S.BoxTextImage>
            <S.TextFooter>Siga nossas redes sociais e fique conectado com todas as novidades.</S.TextFooter>
            <S.ImageFooter src={Facebook} alt="Facebook Logo"/>
            <S.ImageFooter src={Instagram} alt="Instagram Logo"/>
            <S.ImageFooter src={Linkrdin} alt="Linkrdin Logo"/>
            <S.ImageFooter src={Medium} alt="Medium Logo"/>
            <S.ImageFooter src={Youtube} alt="Youtube Logo"/>
        </S.BoxTextImage>
    </S.BoxFooter>
)
}