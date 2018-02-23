// module.exports = ({ node, boundActionCreators, getNode }) => {
//   const { createNodeField } = boundActionCreators;
//
//   if (node.internal.type === 'MarkdownRemark') {
//     // console.log(node);
//     const { permalink } = node.frontmatter;
//     const { relativePath } = getNode(node.parent);
//
//     let slug = permalink;
//
//     if (!slug) {
//       slug = `/${relativePath.replace('.md', '.html')}`;
//     }
//     createNodeField({
//       node,
//       name: 'slug',
//       value: `/${slug}`,
//     });
//   }
// };
