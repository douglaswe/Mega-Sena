import { HTMLAttributes } from "react"
import { PremioSld } from "./styles"

type Props = HTMLAttributes<HTMLElement> & {
    valorEstimadoProximoConcurso:number;
    dataProximoConcurso:string,
}

export function Premio({valorEstimadoProximoConcurso,dataProximoConcurso}:Props) {
    return (
    <PremioSld> 
      Estimativa de prêmio 
      <br />do proximo concurso
      <br />
      { dataProximoConcurso} 
   
        <div className="estimado" >R${valorEstimadoProximoConcurso}</div>
     
        
    </PremioSld>
    )
}