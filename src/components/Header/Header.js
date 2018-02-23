import React from 'react';
import Link from 'gatsby-link';
import Robotois from './logo.svg';
import ColoredIcon from '../ColoredSVG';
import logo from '../../assets/images/logo-footer.svg';

import Hero from '../Hero';

const Logo = () => (
  <div className="navbar-brand">
    <a className="navbar-item inverted-link" href="/">
      <ColoredIcon style={{ maxHeight: '3.5rem' }} />
      <span className="is-size-5" style={{ marginLeft: '10px', marginTop: '5%' }}>Robotois</span>
    </a>
  </div>
);

const Menu = () => (
  <div className="navbar-menu hero-menu">
    <div className="navbar-end">
      <Link to="/docs/button.html" className="navbar-item inverted-link is-size-5">
        Docs
      </Link>
      <a
        className="navbar-item inverted-link is-size-5"
        href="https://cromosfera.io"
        style={{ alignItems: 'center', display: 'flex' }}
        target="_blank"
      >
        Ejemplos
      </a>
      <Social />
    </div>
  </div>
);

const Social = () => (
  <div className="field is-grouped">
    <a
      className="navbar-item inverted-link is-size-6"
      href="https://www.facebook.com/robotois/"
      style={{ alignItems: 'center', display: 'flex' }}
      target="_blank"
    >
      <span className="icon">
        <i className="fab fa-facebook-square fa-lg" />
      </span>
    </a>
    <a
      className="navbar-item inverted-link is-size-6"
      href="https://twitter.com/robotois"
      style={{ alignItems: 'center', display: 'flex' }}
      target="_blank"
    >
      <span className="icon">
        <i className="fab fa-twitter fa-lg" />
      </span>
    </a>
    <a
      className="navbar-item inverted-link is-size-6"
      href="https://github.com/Robotois"
      style={{ alignItems: 'center', display: 'flex' }}
      target="_blank"
    >
      <span className="icon">
        <i className="fab fa-github fa-lg" />
      </span>
    </a>
  </div>
);

const HeroBody = () => (
  <div
    className="hero-body"
    style={{
      paddingTop: 100,
      paddingBottom: 100,
      paddingLeft: 10,
      paddingRight: 10,
    }}
  >
    <Hero />
  </div>
);

const HeroHeader = () => (
  <div className="hero-head">
    <nav className="navbar">
      <div className="container">
        <Logo />
        <Menu />
      </div>
    </nav>
  </div>
);

const Header = ({ location }) => (
  <section className="hero primary-bg is-medium">
    <HeroHeader />
    { location.pathname === '/' && <HeroBody />}
  </section>
);

export default Header;
