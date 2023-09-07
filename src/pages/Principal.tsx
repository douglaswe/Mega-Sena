import { useEffect, useState } from "react";
import { Acumulado } from "../components/Acumulado";
import { Cabecalho } from "../components/Cabecalho";
import { Loading } from "../components/Carregando";
import { Local } from "../components/Local";
import { Premio } from "../components/Premio";
import { Sorteio } from "../components/Sorteio";
import services from "../services";
import { Props } from "../types";
import ligth from "../styles/themes/ligth";
import dark from "../styles/themes/dark";
import { WrapperStyle } from "./styles";
import { ThemeProvider } from "styled-components";



export default function Principal() {
    const[concurso,setConcurso] = useState({} as Props);
    const [isLoading, setIsLoading] = useState(true);
    const [theme, setTheme] = useState(ligth);
    useEffect(
        function(){
        (
            async function () {
                const numero = Math.floor(Math.random() * 2533);
                const concurso: Props = await services.get(numero); 
                
                 setIsLoading(false);
                 setConcurso(concurso);
                setTheme(parseInt(concurso.listaDezenas[0]) % 2 === 0 ? ligth : dark);
    
               
            }
        )()
        },
        []
    );

    if(isLoading){
        return (<Loading />);
      };
      
    return (
        <ThemeProvider theme={theme}>
      <WrapperStyle>
    <>
        <Cabecalho numero={concurso.numero} dataApuracao={concurso.dataApuracao} />
        {concurso.acumulado && <Acumulado /> }
        <Local localSorteio={concurso.localSorteio} nomeMunicipioUFSorteio={concurso.nomeMunicipioUFSorteio} />
        <Sorteio listaDezenas={concurso.listaDezenas} />
        <Premio valorEstimadoProximoConcurso = {concurso.valorEstimadoProximoConcurso}  dataProximoConcurso = {concurso.dataProximoConcurso}/>
        
    </>
    </WrapperStyle>
    </ThemeProvider>
);
}