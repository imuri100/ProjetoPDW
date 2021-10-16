import { BrowserRouter, Route } from "react-router-dom";
import { DisciplinasLecionadas } from "./DisciplinasLecionadas";
import { Homepage } from "./Homepage";
import { Orientacoes } from "./Orientacoes";
import { Projetos } from "./Projetos";
import { Publicacoes } from "./Publicacoes";
import { SideBar } from "./SideBar";
import { GlobalStyle } from "./style/global";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar/>

        <Route path="/" exact component={Homepage}/>
          
        <Route path="/publicacoes" component={Publicacoes}/>

        <Route path="/projetos" component={Projetos}/>

        <Route path="/orientacoes" component={Orientacoes}/>

        <Route path="/disciplinas_lecionadas" component={DisciplinasLecionadas}/>
      
        </BrowserRouter>
      <GlobalStyle/>
    </div>
  );
}

export default App;
