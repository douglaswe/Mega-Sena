import { HTMLAttributes } from "react";
import { SorteioSld } from "./style";

type Props = HTMLAttributes<HTMLElement> & {
  listaDezenas: string[];
};

export function Sorteio({ listaDezenas }: Props) {
  return <SorteioSld>
    {listaDezenas?.map(dezena =>(
  <div className="dezena tamanho" key={dezena}>{dezena}</div>
    ))}
    
</SorteioSld>;

}
