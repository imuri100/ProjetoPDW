import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --sidebar: #0D2340;
        --grey: #DADADA;
        --text-title: #0D2340;
        --text-color: #FFFFFF;
    }

    *{ 
        margin: 0;
        padding:0;
        
    }

    html{
            @media (max-width: 1080px){
                font-size: 93.75%;
            }

            @media (max-width: 720px){
                font-size: 87.5%;
            }
        }

    body{
        font-family: "Open Sans", sans-serif;
        font-weight: 400;
    }

`;

export const Container = styled.div`
    background: white;
    height: 100vh;
    margin-left:300px;
`;

export const Title = styled.div`
    
    display:flex;
    margin: auto;
    h1{
        color: var(--text-title);
        font-weight: 600;
        margin-left: 60px;
        margin-top: 40px;
        opacity: 0.7;
        font-size: 40px;
        
    }
`;