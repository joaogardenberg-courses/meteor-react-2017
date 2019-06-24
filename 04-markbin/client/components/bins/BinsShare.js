import React from 'react';

class BinsShare extends React.Component {
  render() {
    return (
      <footer className="bins-share">
        <div className="input-group">
          <input ref="email" className="form-control" />
          <div className="input-group-btn">
            <button
              className="btn btn-default"
              onClick={ this.onShareClick }
            >
              Share Bin
            </button>
          </div>
        </div>
        <div>
          Shared with:
        </div>
        <div className="btn-group">
          { this.renderShareList() }
        </div>
      </footer>
    );
  }

  renderShareList() {
    return this.props.bin.sharedWith.map((email) => {
      return (
        <button key={ email } className="btn btn-default">
          { email }
        </button>
      );
    });
  }

  onShareClick = () => {
    const email = this.refs.email.value;

    Meteor.call('bins.share', this.props.bin, email);
  };
}

export default BinsShare;