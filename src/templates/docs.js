import React from "react";

import MarkdownPage from './components/MarkdownPage';
import { createLinkDocs } from '../utils/createLink';
import { sectionListDocs } from '../utils/sectionList';

const Docs = ({ data, location }) => {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  return (
    <MarkdownPage
      markdownRemark={markdownRemark}
      location={location}
      sectionList={sectionListDocs}
      createLink={createLinkDocs}
    />
  );
};

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        title
        path
      }
    }
  }
`;

export default Docs;
