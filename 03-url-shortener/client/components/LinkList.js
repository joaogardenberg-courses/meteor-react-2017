import React               from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Links } from '../../imports/collections/links';

class LinkList extends React.Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>URL</th>
            <th>Address</th>
            <th>Clicks</th>
          </tr>
        </thead>
        <tbody>
          { this.renderRows() }
        </tbody>
      </table>
    );
  }

  renderRows() {
    return this.props.links.map(({ url, clicks, token }) => {
      const shortLink = `http://localhost:3000/${token}`;

      return (
        <tr key={ token }>
          <td>{ url }</td>
          <td>
            <a href={ shortLink } target="_blank">{ shortLink }</a>
          </td>
          <td>{ clicks }</td>
        </tr>
      );
    });
  }
}

LinkList = createContainer(() => {
  Meteor.subscribe('links');

  return { links: Links.find({}).fetch() }
}, LinkList);

export default LinkList;