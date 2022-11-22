import { type } from "@testing-library/user-event/dist/type";
import { HTMLAttributes } from "react";
import { ConcursoSld, ResultadoSld, WrapperSld } from "./styles";

type Props = HTMLAttributes<HTMLElement> & {
    numero:number,
    dataApuracao:String

}

export function Cabecalho({numero,dataApuracao}:Props){
   return <WrapperSld>
        <ResultadoSld>Resultado</ResultadoSld>
        <ConcursoSld>Concurso {numero} ({dataApuracao})</ConcursoSld>
    </WrapperSld>
}
