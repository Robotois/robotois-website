/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * @flow
 */

import slugify from 'slugify';

export default (string, directory) => {
  const filename = `${slugify(string)}.html`;

  return directory ? `/${directory}/${filename}` : filename;
};
