import { Container, Title } from "../style/global";
import { Project } from "./style";
import  logo1  from '../assets/logo1.jpg';
import {NationalProjects, InternationalProjects} from './projetos';

export function Projetos(){
    return (
        <Container>
            <Title>
                <h1>International Projects</h1>
            </Title>

            {InternationalProjects.map(projeto => {
                return (
                    <Project>
                         <table>
                  <tr>
                      <th><img src={projeto.logo.default} alt="logo"/></th>
                      <td className="title">{projeto.title}</td>
                  </tr>
                  <tr>
                      <th>Duration</th>
                      <td>{projeto.duration}</td>
                  </tr>
                  <tr>
                      <th>Scope</th>
                      <td>{projeto.scope}</td>
                  </tr>
                  <tr>
                      <th>Description</th>
                      <td>{projeto.description}</td>
                  </tr>
                  <tr>
                      <th>Responsability</th>
                      <td>{projeto.responsability}</td>
                  </tr>
                </table>
                    </Project>
                )
            })}

            <Title>
                <h1>Nacional Projects</h1>
            </Title>

            {NationalProjects.map(projeto => {
                return (
                    <Project>
                         <table>
                  <tr>
                      <th><img src={projeto.logo.default} alt="logo"/></th>
                      <td className="title">{projeto.title}</td>
                  </tr>
                  <tr>
                      <th>Duration</th>
                      <td>{projeto.duration}</td>
                  </tr>
                  <tr>
                      <th>Scope</th>
                      <td>{projeto.scope}</td>
                  </tr>
                  <tr>
                      <th>Description</th>
                      <td>{projeto.description}</td>
                  </tr>
                  <tr>
                      <th>Responsability</th>
                      <td>{projeto.responsability}</td>
                  </tr>
                </table>
                    </Project>
                )
            })}



        </Container>
    )
}