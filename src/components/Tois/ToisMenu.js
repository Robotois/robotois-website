import React from 'react';

const activeStyle = {
  paddingTop: '35px',
  paddingBottom: '35px',
  margin: '0px',
  borderRadius: '10px',
  backgroundColor: '#5764C6',
};

const ActiveItem = ({ title }) => (
  <div
    className="notification is-size-5 has-text-centered has-text-weight-semibold has-text-white"
    style={activeStyle}
  >
    {title}
  </div>
);

const Item = ({ title, changeSelected }) => (
  <a
    className="panel-block tois-menu"
    onMouseOver={changeSelected}
    style={{ borderRadius: '10px', marginRight: '30px' }}
  >
    {title}
  </a>
);

const ToiItem = ({ title, isActive, changeSelected }) => (
  isActive ?
    <ActiveItem title={title} /> :
    <Item title={title} changeSelected={changeSelected} />
);

const ToisMenu = ({ toisList, selected, changeSelected }) => (
  <nav className="panel">
    {
      toisList.map((toiItem, index) => (
        <ToiItem
          key={toiItem.title}
          isActive={selected === index}
          title={toiItem.title}
          changeSelected={changeSelected(index)}
        />
      ))
    }
  </nav>
);

export default ToisMenu;
