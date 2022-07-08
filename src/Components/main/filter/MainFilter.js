import React, {useState,useEffect} from "react"
import * as S from "./stylesFilter"
import Photo1 from "./FotosEquipeTécnica/photo1.jpg"
import Photo2 from "./FotosEquipeTécnica/photo2.jpg"
import Photo3 from "./FotosEquipeTécnica/photo3.jpg"
import Photo4 from "./FotosEquipeTécnica/photo4.jpg"
import Photo5 from "./FotosEquipeTécnica/photo5.jpg"
import Photo6 from "./FotosEquipeTécnica/photo6.jpg"
import Photo7 from "./FotosEquipeTécnica/photo7.jpg"
import Photo8 from "./FotosEquipeTécnica/photo8.jpg"
import Photo9 from "./FotosEquipeTécnica/photo9.jpg"
import Photo10 from "./FotosEquipeTécnica/photo10.jpg"
import Photo11 from "./FotosEquipeTécnica/photo11.jpg"
import Photo12 from "./FotosEquipeTécnica/photo12.jpg"
import Photo13 from "./FotosEquipeTécnica/photo13.jpg"
import Photo14 from "./FotosEquipeTécnica/photo14.jpg"
import Photo15 from "./FotosEquipeTécnica/photo15.jpg"






export default function MainFilter(){

    const [team, setTeam] = useState()
    useEffect(()=>{
        setTeam([
            {
                name:"Dimitri Duque",
                fuction:"#Voluntários",
                image:`${Photo2}`
            },
            {
                name:"Hugo Sabino",
                fuction:"#Voluntários",
                image:`${Photo6}`
            },
            {
                name:"Karla De Melo",
                fuction:"#Voluntários",
                image:`${Photo10}`
            },
            {
                name:"Paula Misan",
                fuction:"#Voluntários",
                image:`${Photo4}`
            },
            {
                name:"Thais Brait",
                fuction:"#Voluntários",
                image:`${Photo12}`
            },
            {
                name:"Aline Fróes",
                fuction:"#CEO",
                image:`${Photo1}`
            },
            {
                name:"Aline Nogueira",
                fuction:"#Agente Socioemocional",
                image:`${Photo5}`
            },
            {
                name:"Andrea Marino",
                fuction:"#Pisicóloga",
                image:`${Photo9}`
            },
            {
                name:"Cris Dos Prazeres",
                fuction:"#Coordenadorea Executiva",
                image:`${Photo13}`
            },
            {
                name:"Karynne Moreira",
                fuction:"#Facilitadora Técnica",
                image:`${Photo14}`
            },
            {
                name:"Lizia Merlim",
                fuction:"#Agente Socioemocional",
                image:`${Photo3}`
            },
            {
                name:"Marina Correia",
                fuction:"#Coordenadorea Administrativa",
                image:`${Photo7}`
            },
            {
                name:"Marina Tiago",
                fuction:"#Agente de Estratégia",
                image:`${Photo11}`
            },
            {
                name:"Marlon Yuri",
                fuction:"#Instrutor Técnico",
                image:`${Photo15}`
            },
            {
                name:"Priscila Tufani",
                fuction:"#Agente de Estratégia",
                image:`${Photo8}`
            },
        ])
    }) 
    const [busca, setBusca] = useState()
    
    return(
        <S.BoxEquipe>
            <h2>Equipe</h2>
            <S.BoxInput>
                    <S.TeamInput value={busca} 
                    type="text" 
                    onChange={ (e)=> setBusca(e.target.value)}
                    placeholder="Pesquisar...">
                    </S.TeamInput>
            </S.BoxInput>
            <S.BoxTeam>
                {team.map(item => (
                    <div>
                        <S.TeamImage src={item.image}/>
                        <S.ImageText>{item.name}</S.ImageText>
                    </div>
                ))}
            </S.BoxTeam>
            
        </S.BoxEquipe>
    )
}