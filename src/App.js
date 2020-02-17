import React from 'react';

import GlobalStyle from './styles/global';
import Header from './Components/Header/index'
import Menu from './Components/Menu';
function App() {
  return (
    <div>
      <Menu/>
      <Header />
      <GlobalStyle />
    </div>
  );
}

export default App;
