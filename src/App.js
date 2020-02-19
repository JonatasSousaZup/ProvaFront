import React from 'react';

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
    </div>
  );
}

export default App;
