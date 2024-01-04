import { HTMLAttributes } from "react";
import { PremioSld } from "./styles";

type Props = HTMLAttributes<HTMLElement> & {
  valorEstimadoProximoConcurso: number;
  dataProximoConcurso: string;
};

function formatarNumeroParaMoeda(numero: number): string {
  return numero.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function Premio({
  valorEstimadoProximoConcurso,
  dataProximoConcurso,
}: Props) {
  // Formate o valor estimado para moeda
  const valorFormatado = formatarNumeroParaMoeda(valorEstimadoProximoConcurso);

  return (
    <PremioSld>
      Estimativa de prêmio
      <br />
      do proximo concurso
      <br />
      {dataProximoConcurso}
      <br /></><div className="estimado">{valorFormatado}</div>
    </PremioSld>
  );
}
