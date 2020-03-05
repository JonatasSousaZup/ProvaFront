import React from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import GlobalStyle from './styles/global';
import Header from './Components/Header/index'
import Menu from './Components/Menu';
import Table from './Components/Table';
function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Table />
      <GlobalStyle />
      <Route exact path="/atendido" component={Atendido}/>

    </div>
    
  );
}

export default App;
