import styled from "styled-components"; //importo la funzione styled dalla libreria styled-components

//definisco un componente a cui applicare lo stile attraverso il metodo styled,
//a cui aggancio il tag HTML da stilizzare con le proprietà CSS all'interno dei backtick (``)
//NB -> si può accedere anche alle props del componente
export const Button = styled.button`
    min-width: 160px;
    width: auto;
    height: 52px;
    letter-spacing: 0.3em;
    line-height: 52px;
    font-size: 15px;
    padding: 0 35px 0 35px;
    background-color: rgb(36, 36, 36);
    color: ${props => props.buttonTextColor || "white"};
    text-transform: uppercase;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bolder;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    justify-content: center;

    &:hover{
        background-color:rgb(252, 250, 250);
        color: rgb(36, 36, 36);
        border: 1px solid black;
    }
`

