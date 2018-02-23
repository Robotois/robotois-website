import Link from 'gatsby-link';
import React from 'react';
import slugify from './slugify';

const linkCss = {
  fontSize: 14,
};

const activeLinkCss = {
  fontWeight: 700,
  fontSize: 14,
};

exports.createLinkDocs = ({
  isActive,
  item,
  directory,
}) => (
  <Link
    className={`${isActive ? 'is-active' : ''}`}
    to={slugify(item.id, directory)}
  >
    {item.title}
  </Link>
);
