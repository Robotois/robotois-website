import React from 'react';
import ToisMenu from './ToisMenu';
import { tois } from '../MainContent/data';
import ToiDescription from './ToiDescription';

const Tois = ({ selected, changeSelected }) => (
  <div className="container is-desktop" style={{ marginTop: '75px', marginBottom: '75px' }}>
    <h1 className="title has-text-centered primary-color">¿Qué Incluye el Kit?</h1>
    <div className="columns is-desktop" style={{ margin: '0', padding: '0px' }}>
      <div className="column is-one-third-desktop">
        <ToisMenu
          toisList={tois}
          selected={selected}
          changeSelected={changeSelected}
        />
      </div>
      <div className="column is-two-thrids-desktop">
        <ToiDescription {...tois[selected]} />
      </div>
    </div>
  </div>
);

export default Tois;
