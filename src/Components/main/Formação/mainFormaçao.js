import React from "react"
import * as S from "./stylesFormaçao"
import Pc from "./midiaFormaçao/Pc.png"
import ImagemFormaçao from "./midiaFormaçao/ImagemFormaçao.png"
export default function Formaçao(){

    return(
        <S.BoxFormaçao>
            <S.BoxEfor>
            <S.Formaçao>Formação</S.Formaçao>
                <S.BoxSubTitleImg>
                    <S.BoxImg><S.ImgPc src={Pc} alt="Png de computador"/></S.BoxImg>
                    <S.BoxSubTitle>
                    <S.SubTitle>front-end</S.SubTitle>
                        <S.Paragraph>Quem trabalha com Front End é responsável por desenvolver por meio do código uma interface gráfica e,
                        normalmente, com as tecnologias base da Web: HTML, CSS e JavaScript.</S.Paragraph>
                    </S.BoxSubTitle>
                </S.BoxSubTitleImg>
                <S.BoxSubTitleImg>
                    <S.BoxImg><S.ImgPc src={Pc} alt="Png de computador"/></S.BoxImg>
                    <S.BoxSubTitle>
                    <S.SubTitle>front-end</S.SubTitle>
                        <S.Paragraph>O Back-End trabalha em boa parte dos casos fazendo a ponte entre os dados que vem do navegador rumo ao banco de dados e vice-versa,
                        sempre aplicando as devidas regras de negócio,
                        validações e garantias num ambiente restrito ao usuário final 
                        (ou seja, onde ele não consegue acessar ou manipular algo).</S.Paragraph>
                    </S.BoxSubTitle>
                </S.BoxSubTitleImg>
            </S.BoxEfor>
            
            <section>
                <S.ImgFormaçao src={ImagemFormaçao} alt="Imagem representando um codigo"/>
            </section>
        </S.BoxFormaçao>
    )
}