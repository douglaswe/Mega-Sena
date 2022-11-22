import styled from "styled-components";

export const SorteioSld = styled.div`
       font-size:20px;
   
       margin-top:20px;
       
.dezena {
        height:50px;
        width:50px;
}       
.tamanho{   
        background:${props => props.theme.colors.backgroundCirculo};
        border-radius: 50%;
        align-items: center;
        display: inline-flex;
        justify-content:center;
        margin:5px;  
        color:  ${props => props.theme.colors.colorDezena};   
}
`;

