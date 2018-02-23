import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './index.scss';
import '../styles/prism/prism.scss';
import '../assets/icons/fontawesome-all.min';

import Header from '../components/Header';
import Footer from '../components/Footer';

const MyHelmet = () => (
  <Helmet
    title="Robotois Aprende Programa Construye"
    meta={[
      { name: 'description', content: 'Sample' },
      { name: 'keywords', content: 'sample, something' },
    ]}
  />
);

const TemplateWrapper = ({ children, location }) => (
  <div>
    <MyHelmet />
    <Header location={location} />
    <div>
      {children()}
    </div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
