import styled from 'styled-components';
import homeImage from '../assets/ubi.png';

export const Container = styled.div`
    background: white;
    height: 100vh;
    margin-left: 20%;

    @media (max-width: 1080px){
        margin-left: 30%;
    }
    @media (max-width: 720px){
        margin-left: 40%;
    }
`;

export const Header = styled.div`
    height: 50vh;
    padding: 0;
    background-image: url(${homeImage});
    background-repeat: no-repeat;
    background-size: 100% ;
    
    display: flex;
    min-width: 1000px;

    strong{
        font-weight: 400;
        color: white;
        
        margin:auto;
        font-size: 36px;
        display: flex;

        @media (max-width: 1080px){
            font-size: 20px;
            display: flex;
    }
        @media (max-width: 720px){
            font-size: 15px;
            display: block;

    }
    }
    @media (max-width: 1080px){
        display: flex;
        min-width: 500px;
    }
    @media (max-width: 720px){
        display: flex;
        min-width: 100px;
    }

`;

export const Body = styled.div`
    display: grid;
    text-align: justify;
    padding: 2rem;
    h2{
        color: var(--text-title);
        font-weight: 600;
        margin: auto;
        margin-top: 2rem;
    }

    p{
        color: black;
        width: 800px;
        margin: auto;
        margin-top: 2rem;
        font-weight: 400;
    }
    table{
        margin:auto;
    margin-top:2rem;
    display: grid;
    width: 800px;
    grid-template-columns: repeat(3, 1fr);
    height: 100%;
    padding: 1rem;
    gap: 1rem;

    }
    img{
        float:left;
    display: inline;
    height: 120px;
    }
`; 
