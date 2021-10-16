import styled from "styled-components";


export const Project = styled.div`
    
    display:flex;
    margin:auto;
    margin-top: 3rem;
    width: 750px;
    height: auto;
    overflow: hidden;
    border-radius: 25px;
    background: var(--text-title);
    padding: 1rem;
    padding-right: 10rem;
    color: var(--text-color);
    max-width: 1000px;
    margin-bottom:1rem;

    table{
        border-spacing: 20px;
    }
    tr{
        
        margin-top: 1rem;
        text-align: left;
        vertical-align: top;
    }

    td{
        padding-left: 1rem;
        font-weight: 400;
        font-size: 15px;  
    }

    .title{
        font-weight: 600;
        font-size: 30px;
    }
`;

export const Header = styled.div`
    display:grid;
    border:1px solid white;
    
    h4, img {
        color: var(--text-color);
        float:left;
        display:inline;
        font-weight: 600;
    }

`;