import nav from '../../content/docs/nav.yml';

exports.sectionListDocs = nav.map(item => ({
  ...item,
  directory: 'docs',
}));
