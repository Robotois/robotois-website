import React from 'react';
import Helmet from 'react-helmet';

import SideMenu from '../SideMenu';
import findSectionForPath from '../../../utils/findSectionForPath';

import createOgUrl from '../../../utils/createOgUrl';

const defaultDescription = 'La plataforma para aprender Robótica y Programación';

const TitleAndMetaTags = ({ title, ogDescription, ogUrl }) => (
  <Helmet title={title}>
    <meta property="og:title" content={title} />
    <meta property="og:type" content="website" />
    {ogUrl && <meta property="og:url" content={ogUrl} />}
    <meta property="og:image" content="/logo-og.png" />
    <meta
      property="og:description"
      content={ogDescription || defaultDescription}
    />
    <meta property="fb:app_id" content="623268441017527" />
  </Helmet>
);

const Content = ({ title, html }) => (
  <div className="markdown">
    <h1 className="title is-size-3">{title}</h1>
    <div
      dangerouslySetInnerHTML={{ __html: html }}
    />
  </div>
);

const DocsHero = () => (
  <section className="hero primary-bg">
    <div className="hero-body">
      <div className="container">
        <h1 className="title has-text-white">
          Documentación Oficial
        </h1>
        <h2 className="subtitle has-text-white">
          Librerías Open Source de módulos Software y Hardware de Robotois
        </h2>
      </div>
    </div>
  </section>
)

const MarkdownPage = ({
  createLink,
  location,
  sectionList,
  markdownRemark,
  titlePostfix = '',
  ogDescription,
}) => {
  const { frontmatter } = markdownRemark;
  return (
    <div>
      <TitleAndMetaTags
        ogDescription={ogDescription}
        ogUrl={createOgUrl(markdownRemark.path)}
        title={frontmatter.titlePrefix}
      />
      <DocsHero />
      <div className="container" style={{ marginTop: 25 }}>
        <div className="columns is-desktop is-centered">
          <div className="column is-one-quarter-desktop">
            <SideMenu
              createLink={createLink}
              defaultActiveSection={findSectionForPath(
                location.pathname,
                sectionList,
              )}
              location={location}
              sectionList={sectionList}
            />
          </div>
          <div className="column is-three-quarter-desktop">
            <Content
              title={frontmatter.title}
              html={markdownRemark.html}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkdownPage;
