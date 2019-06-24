import React from 'react';

import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import Header   from './Header';
import BinsList from './bins/BinsList';
import BinsMain from './bins/BinsMain';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={ BinsList } />
      <Route path="/bins/:binId" component={ BinsMain } />
    </BrowserRouter>
  );
};

export default App;