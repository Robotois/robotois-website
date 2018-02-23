const path = require('path');

module.exports = async ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const docsTemplate = path.resolve('src/templates/docs.js');
  // console.log(docsTemplate);

  const allMarkdown = await graphql(`
   {
     allMarkdownRemark(limit: 1000) {
       edges {
         node {
           frontmatter {
             path
           }
         }
       }
     }
   }
  `);

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors);
    throw Error(allMarkdown.errors);
  }

  allMarkdown.data.allMarkdownRemark.edges.forEach(({ node }) => {
    // console.log('Node:', node);
    createPage({
      path: node.frontmatter.path,
      component: docsTemplate,
      context: {
        // slug,
      }, // additional data can be passed via context
    });
  });
};
