import React from 'react';
import images from '../../assets/images';

const ToiDescription = ({ title, description, img }) => (
  <div className="tile is-parent" style={{ padding: '0px' }}>
    <article className="tile is-child box">
      <p className="subtitle is-size-4 primary-color">{title}</p>
      <figure className="has-text-centered">
        <img src={images[img]} alt="Placeholder image" />
      </figure>
      <div className="content" style={{ marginTop: 25 }}>
        <p>{description}</p>
      </div>
    </article>
  </div>
);

export default ToiDescription;
