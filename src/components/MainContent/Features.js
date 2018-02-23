import React from 'react';
import { features } from './data';
import images from '../../assets/images';

const FeatureImg = ({ img }) => (
  <div className="column is-7-desktop has-text-centered">
    <figure>
      <img src={images[img]} />
    </figure>
  </div>
);

const Description = ({ title, subtitle, description}) => (
  <div className="column is-4-desktop">
    <div className="content">
      <p className="title primary-color">{title}</p>
      <p className="subtitle primary-color">{subtitle}</p>
      <p>{description}</p>
    </div>
  </div>
);

const Feature = ({ title, subtitle, description, img, isEven }) => (
  <div style={{ marginTop: '60px' }}>
    <div className="tile is-child">
      {
        isEven ?
        (
          <div className="columns is-desktop is-centered">
            <FeatureImg img={img} />
            <Description title={title} subtitle={subtitle} description={description} />
          </div>
        ) :
        (
          <div className="columns is-desktop is-centered">
            <Description title={title} subtitle={subtitle} description={description} />
            <FeatureImg img={img} />
          </div>
        )
      }
    </div>
  </div>
);

const Features = () => (
  <div className="tile is-parent is-vertical">
    {
      features.map((feature, index) => (
        <Feature
          key={feature.title}
          {...feature}
          isEven={(index + 1) % 2 === 0}
        />
      ))
    }
  </div>
);

export default Features;
