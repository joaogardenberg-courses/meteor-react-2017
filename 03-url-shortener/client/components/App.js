import React from 'react';

import Header     from './Header';
import LinkCreate from './LinkCreate';
import LinkList from './LinkList';

const App = () => {
  return (
    <div>
      <Header />
      <LinkCreate />
      <LinkList />
    </div>
  );
};

export default App;