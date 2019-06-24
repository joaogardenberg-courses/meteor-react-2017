import React    from 'react';
import ReactDOM from 'react-dom';

import { Links } from '../imports/collections/links';
import App from './components/App';

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('root'));
});