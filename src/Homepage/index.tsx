import { Body, Container, Header, TrabalhosTable, Square } from "./style";

export function Homepage(){
    return (
        <Container>
            <Header>
              <strong>Universidade da Beira Interior</strong>
            </Header>

            <Body>
                <h2>Biografia</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Fusce a leo et leo consectetur blandit. Vestibulum 
                    congue tincidunt erat, et feugiat sem bibendum a. 
                    Praesent id metus consequat, dictum mauris et, vehicula 
                    sapien. Nam nisl dui, tristique ut semper id,
                     sagittis nec ex. Lorem ipsum dolor sit amet, 
                     consectetur adipiscing elit. Vivamus eget sem a nisi 
                     aliquam tempor. Ut semper vel nibh et porta. Donec 
                     euismod vitae mauris at maximus. Phasellus pharetra 
                     lobortis odio, quis egestas augue congue id. Suspendisse 
                     pretium accumsan mauris at fringilla. Etiam eu nunc diam. 
                     Class aptent taciti sociosqu ad litora torquent per conubia 
                     nostra, per inceptos himenaeos. Praesent tincidunt justo 
                     ipsum, sit amet dapibus eros sagittis in. Sed pharetra massa 
                     nunc, et varius ex gravida eu. Curabitur pharetra ex a ante 
                     commodo posuere.
                </p>

                <h2>Trabalhos Investigação</h2>

                <TrabalhosTable>
                    <Square/>
                    <Square/>
                    <Square/>
                </TrabalhosTable>
            </Body>
            
        </Container>
    )
}