import { Container, Menu, MenuButton, Profile } from "./style";
import  profileImage  from '../assets/avatar.png';
import { useState } from "react";
import { Link } from 'react-router-dom';


export function SideBar(){
    return (
        <Container>

            <Profile>
                <img src={profileImage} alt="ProfileImage"/>

                <h2>João Neves</h2>
                <h4>Professor Auxiliar Convidado</h4>
            </Profile>

            <Menu>
                <Link to="/">
                    <MenuButton>
                        Início
                    </MenuButton>    
                </Link>
                <Link to="/publicacoes">
                <MenuButton>
                        Publicações
                    </MenuButton>
                </Link>
                <Link to="/projetos">
                <MenuButton>
                        Projetos
                    </MenuButton>
                </Link>
                <Link to="/orientacoes">
                <MenuButton>
                       Orientações
                    </MenuButton>
                </Link>
                <Link to="/disciplinas_lecionadas">
                <MenuButton>
                        Disciplinas Lecionadas
                    </MenuButton>
                </Link>
            </Menu>
            
        </Container>
    )
}