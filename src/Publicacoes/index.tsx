import { Container, Title } from "../style/global";
import { Pub } from "./style";
import { Publica } from "./publicacoes";

export function Publicacoes() {
  return (
    <Container>
      <Title>
        <h1>Publicações</h1>
      </Title>
      {Publica.map((pub) => {
        return (
          <Pub>
            <table>
              <tr>
                <th>{pub.title}</th>
              </tr>
              <tr>
                <td>{pub.doc}</td>
                <td>{pub.authors}</td>
              </tr>
            </table>
          </Pub>
        );
      })}
    </Container>
  );
}
