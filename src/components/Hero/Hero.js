import React from 'react';
import images from '../../assets/images';

const Hero2 = () => (
  <section className="hero" style={{ backgroundColor: '#5764C6' }}>
    <div className="hero-body">
      <div className="container has-text-centered">
        <span className="title has-text-white is-size-1">
          aprende | programa | construye
        </span>
        <span className="subtitle is-size-2 has-text-white" style={{  marginTop: '25px' }}>
          Aprende electrónica y programación de una manera divertida
        </span>
      </div>
      <figure className="image">
        <img src={images.robotoisHero} />
      </figure>
    </div>
  </section>
);

const Hero = () => (
  <article className="tile is-child notification primary-bg has-text-white has-text-centered" style={{ padding: 0 }}>
    <div className="columns is-desktop is-centered">
      <div className="column is-6-desktop">
        <div style={{ position: 'relative', top: '25%', bottom: '25%' }}>
          <p className="title is-size-2">aprende | programa | construye</p>
          <p className="subtitle">Aprende electrónica y programación de una manera divertida</p>
        </div>
      </div>
      <div className="column is-6-desktop has-text-centered">
        <figure>
          <img src={images.robotoisHero} style={{ maxWidth: '80%' }}/>
        </figure>
      </div>
    </div>
  </article>
);

export default Hero;
