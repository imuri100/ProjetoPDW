import { Title, Container } from "../style/global";
import { Orienta } from "./style";
import {BScOrient, MScOrientD, MScOrientP, PhDOrient} from './orientacoes';

export function Orientacoes() {
  return (
    <Container>
      <Title>
        <h1>Ph.D. Students</h1>
      </Title>
      <Orienta>
        <table>

        {PhDOrient.map((orientacao) => {
                return (
                    
          <tr>
            <th>{orientacao.orientacao}</th>
            <td>{orientacao.duration}</td>
          </tr>
          )
        })}
        </table>
      </Orienta>


      <Title>
        <h1>M.Sc. Students</h1>
      </Title>
      <Orienta>
        <table>
        <caption>M.Sc. Dissertations</caption>
        {MScOrientD.map((orientacao) => {
                return (
                    
          <tr>
            <th>{orientacao.orientacao}</th>
            <td>{orientacao.duration}</td>
          </tr>
          )
        })}
        </table>
      </Orienta>
      <Orienta>
        <table>
        <caption>M.Sc. Projects</caption>
        {MScOrientP.map((orientacao) => {
                return (
                    
          <tr>
            <th>{orientacao.orientacao}</th>
            <td>{orientacao.duration}</td>
          </tr>
          )
        })}
        </table>
      </Orienta>
      

      <Title>
        <h1>B.Sc. Students</h1>
      </Title>
      <Orienta>
        <table>
        {BScOrient.map((orientacao) => {
                return (
                    
          <tr>
            <th>{orientacao.orientacao}</th>
            <td>{orientacao.duration}</td>
          </tr>
          )
        })}
        </table>
      </Orienta>


    </Container>
  );
}
