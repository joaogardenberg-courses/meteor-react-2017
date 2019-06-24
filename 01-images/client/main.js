// Any JS in here is automatically ran for us

import React    from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('root'));
});
