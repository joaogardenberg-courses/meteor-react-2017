import React from 'react';
import axios from 'axios';

import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };

  render() {
    return (
      <div className="container">
        <ImageList images={ this.state.images } />
      </div>
    );
  }

  componentDidMount() {
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0', {
      headers: {
        Authorization: 'Client-ID 3bc2d76ed162b2c'
      }
    })
      .then(({ data: { data } }) => this.setState({ images: data }));
  }
}

export default App;