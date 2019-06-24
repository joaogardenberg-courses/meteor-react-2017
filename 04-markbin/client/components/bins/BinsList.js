import React               from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Link }            from 'react-router-dom';

import { Bins } from '../../../imports/collections/bins';

class BinsList extends React.Component {
  render() {
    return (
      <ul className="list-group">
        { this.renderList() }
      </ul>
    );
  }

  renderList() {
    return this.props.bins.map((bin) => {
      return (
        <li key={ bin._id } className="list-group-item">
          <Link to={ `/bins/${bin._id}` }>
            Bin { bin._id }
          </Link>
          <span className="pull-right">
            <button
              className="btn btn-danger"
              onClick={ () => this.onBinRemove(bin) }
            >
              Remove
            </button>
          </span>
        </li>
      );
    });
  }

  onBinRemove = (bin) => {
    Meteor.call('bins.remove', bin);
  };
}

BinsList = createContainer(() => {
  Meteor.subscribe('bins');
  Meteor.subscribe('sharedBins');

  return { bins: Bins.find({}).fetch() };
}, BinsList);

export default BinsList;