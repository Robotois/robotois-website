import React from 'react';
// import withToggle from './with-toggle';
import isItemActive from '../../../utils/isItemActive';

const Item = ({
  isActive,
  createLink,
  directory,
  item,
}) => (
  <li>
    {createLink({
      isActive,
      directory,
      item,
    })}
  </li>
);

const Section = ({
  section,
  location,
  createLink,
}) => (
  <div>
    <p className="menu-label">
      {section.title}
    </p>
    <ul className="menu-list">
      {section.items.map(item => (
        <Item
          isActive={isItemActive(location, item)}
          key={item.id}
          createLink={createLink}
          directory={section.directory}
          item={item}
        />
      ))}
    </ul>
  </div>
);

const Menu = ({
  activeSection,
  sectionList,
  location,
  createLink,
}) => (
  <aside className="menu">
    {sectionList.map(section => (
      <Section
        key={section.title}
        section={section}
        location={location}
        createLink={createLink}
      />
    ))}
  </aside>
);


class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: props.defaultActiveSection,
    };
    this.sectionToggle = this.sectionToggle.bind(this);
    this.onLinkClick = this.onLinkClick.bind(this);
  }

  onLinkClick(section) {
    return () => console.log('clickedSection:', section);
  }

  sectionToggle(section) {
    // console.log('toggleSection:', section);
    return () => {
      const { activeSection } = this.state;
      this.setState({ activeSection: activeSection === section ? null : section });
    }
  }

  render() {
    const {
      location,
      sectionList,
      createLink,
    } = this.props;
    const { activeSection } = this.state;
    return (
      <div className="box">
        <Menu
          sectionList={sectionList}
          activeSection={activeSection}
          location={location}
          createLink={createLink}
        />
      </div>
    );
  }
}


export default SideBar;
