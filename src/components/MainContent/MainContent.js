import React from 'react';

import Tois from '../Tois';
import Features from './Features';
import MoreInfo from './MoreInfo';
import images from '../../assets/images';

const PlatformInfo = () => (
  <article className="tile is-child notification primary-bg has-text-white has-text-centered">
    <p className="title">Conoce la Plataforma Robotois</p>
    <p className="subtitle">La herramienta para darle vida a tus Ideas</p>
    <div className="columns is-desktop is-centered">
      <div className="column is-four-fifths-desktop has-text-centered">
        <figure>
          <img src={images.robotoisPlatform} />
        </figure>
      </div>
    </div>
  </article>
);

class MainContent extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: 0,
    };
    this.changeSelected = this.changeSelected.bind(this);
  }

  changeSelected(toiIndex) {
    return () => {
      this.setState({ selected: toiIndex });
    };
  }

  render() {
    const { selected } = this.state;
    return (
      <div>
        <section>
          <div className="has-text-centered" style={{ marginTop: 50 }}>
            <span className="title primary-color">¿Qué es Robotois?</span>
            <div className="content is-size-5">
              <p>Robotois es una plataforma para aprender electrónica y crear tus propios robots.</p>
            </div>
          </div>
          <Tois selected={selected} changeSelected={this.changeSelected} />
          <PlatformInfo />
          <Features />
        </section>
        <MoreInfo />
      </div>
    );
  }
}

export default MainContent;
