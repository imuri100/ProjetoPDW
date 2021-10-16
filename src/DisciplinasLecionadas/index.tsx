import { Title, Container } from "../style/global";
import { Disciplinas } from "./style";

export function DisciplinasLecionadas() {
  return (
    <Container>
      <Title>
        <h1>Disciplinas Lecionadas</h1>
      </Title>

      <Disciplinas>
        <table>
        
          <tr>
          <caption>2021</caption>
          </tr>
          <tr/>
          <tr>
            <th>Programação Web</th>
            <td>Licenciatura Engenharia Informática, 2º Ano</td>
          </tr>
          <tr>
            <th>Lógica Computacional</th>
            <td>Licenciatura Engenharia Informática, 2º Ano</td>
          </tr>
          <tr>
            <th>Adminstração de Sistemas em Rede</th>
            <td>Licenciatura Engenharia Informática, 3º Ano</td>
          </tr>
          <tr>
            <th>Plataformas de desenvolvimento Web</th>
            <td>Licenciatura Informática Web, 3º Ano</td>
          </tr>
        </table>
      </Disciplinas>
    </Container>
  );
}
