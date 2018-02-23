/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * @flow
 */

import slugify from './slugify';

const findSectionForPath = (pathname, sections) => {
  let activeSection;
  const slugId = pathname.split('/').slice(-1)[0];

  sections.forEach((section) => {
    const match = section.items.some(item =>
      slugId === slugify(item.id) ||
      (item.subitems &&
        item.subitems.some(subitem => slugId === slugify(subitem.id))));
    if (match) {
      activeSection = section;
    }
  });

  return activeSection;
};

export default findSectionForPath;
