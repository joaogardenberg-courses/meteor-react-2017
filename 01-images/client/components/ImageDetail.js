import React from 'react';

import ImageScore from './ImageScore';

const ImageDetail = ({ image: { title, link, description, ups, downs } }) => {
  return (
    <li className="media list-group-item">
      <div className="media-left">
        <img src={ link } />
      </div>
      <div className="media-body">
        <h4 className="media-heading">
          { title }
        </h4>
        <p>{ description || 'No description' }</p>
        <ImageScore ups={ ups } downs={ downs } />
      </div>
    </li>
  );
};

export default ImageDetail;