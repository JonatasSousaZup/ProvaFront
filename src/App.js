import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import GlobalStyle from './styles/global';
import Header from './Components/Header/index'
import Menu from './Components/Menu';
import Table from './Components/Table';
import Atendidos from './Components/Atendidos'
import Perfil from './Components/Perfil'
import Lixeira from './Components/Lixeira'
import { MainGrid } from './Components/style';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <MainGrid>
        <Menu />
        <Switch>
          <Route exact path="/" >
            <Table />
          </Route >
          <Route path="/atendidos">
            <Atendidos />
          </Route>
          <Route path="/perfil">
            <Perfil />
          </Route>
          <Route path="/lixeira">
            <Lixeira />
          </Route>
        </Switch>
        </MainGrid>
        <GlobalStyle />
      </BrowserRouter>
    </div>

  );
}

export default App;
