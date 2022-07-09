import React from "react"
import * as S from "./stylesEvento"
import Notebook from "./midiaEventos/Notebook.png"
export default function EventosMain(){

    
    return(
        <S.BoxEventos>
            <S.Eventos>Eventos</S.Eventos>
            <S.BoxImageText>
                <section>
                    <S.NotebookImage src={Notebook} alt="Notebook"/>
                </section>
                <S.BoxText>
                    <S.SubTitle>Tech Girls</S.SubTitle>
                    <S.Text>
                    Com o objetivo de promover network entre mulheres de tecnologia, conectar talentos femininos com oportunidades no mercado da tecnologia,
                    oferecer experiências de troca através de eventos com mulheres que já têm experiência no mercado da tecnologia,
                    acelerar os talentos com ajuda para custeio de luz e internet para facilitar o processo de estudo,
                    promover mentoria para as participantes do grupo.
                    </S.Text>
                </S.BoxText>  
            </S.BoxImageText>
            
        </S.BoxEventos>
        
    )
}