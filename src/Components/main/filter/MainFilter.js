import React, { useState, useEffect } from 'react'
import * as S from "./stylesFilter"
import Team from "./Team"

export default function MainFilter(){

    
      const [teamFilter, setTeamFilter] = useState([])

  useEffect(()=>{
    setTeamFilter(Team)
  }, [])
 
    return(
        <S.BoxEquipe>
            <S.Equipe>Equipe</S.Equipe>
            <S.BoxInput>
            <S.TeamInput type="text" placeholder="Pesquisar..." onChange={(e)=>{
            
            if(e.target.value !== "" || null){
              const NamesFilter = teamFilter.filter(item => {
              return item.name.toLowerCase().includes(e.target.value.toLowerCase())
            })
            setTeamFilter(NamesFilter)
          }else{
            setTeamFilter(Team)
          }
          }}/>
            </S.BoxInput>
            <S.BoxTeam>
                {teamFilter.map(item => (
                    <S.BoxImage>
                        <S.TeamImage src={item.image}/>
                        <S.ImageName>{item.name}</S.ImageName>
                        <S.TextFunction>{item.fuction}</S.TextFunction>
                        
                    </S.BoxImage>
                ))}
            </S.BoxTeam>
            
        </S.BoxEquipe>
    )
}