import React    from 'react';

import {
  Link,
  withRouter
} from 'react-router-dom';

import Accounts from './Accounts';

class Header extends React.Component {
  render() {
    return (
      <nav className="nav navbar-default">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">MarkBin</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Accounts />
          </li>
          <li>
            <a href="#" onClick={ this.onCreateBinClick }>Create Bin</a>
          </li>
        </ul>
      </nav>
    );
  }

  onCreateBinClick = (event) => {
    event.preventDefault();

    Meteor.call('bins.insert', (error, binId) => {
      this.props.history.push(`/bins/${binId}`);
    });
  };
}

Header = withRouter(Header);

export default Header;