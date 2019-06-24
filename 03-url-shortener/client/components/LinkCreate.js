import React from 'react';

class LinkCreate extends React.Component {
  state = { error: '' };

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <div className="form-group">
          <label>Url to shorten</label>
          <input ref="input" className="form-control" />
        </div>
        <div className="text-danger">{ this.state.error }</div>
        <button className="btn btn-primary">Shorten!</button>
      </form>
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();

    Meteor.call('links.insert', this.refs.input.value, (error) => {
      if (error) {
        this.setState({ error: 'Enter a valid URL' });
      } else {
        this.setState({ error: '' });
        this.refs.input.value = '';
      }
    });
  };
}

export default LinkCreate;