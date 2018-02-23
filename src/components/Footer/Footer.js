import React from 'react';
import Colored from '../../components/ColoredSVG';
import logo from '../../assets/images/logo-footer.svg';

const Footer = () => (
  <footer className="footer">
    <div className="container is-desktop">
      <div className="columns">
        <div className="column is-one-third-desktop">
          <div>
            <p style={{ alignItems: 'center', display: 'flex' }}>
              <img src={logo} style={{ maxHeight: '3rem' }}/>
              <span className="title is-size-4" style={{ marginLeft: '10px', paddingTop: '1%' }}>Nuestro Equipo</span>
            </p>
          </div>
          <div style={{ marginLeft: 10, marginTop: 25 }}>
            <div style={{ marginTop: 10 }}>
              <p>
                <span className="has-text-grey-dark has-text-weight-bold">Armando González</span>
                <a
                  className="button is-small button-grey-light"
                  href="https://github.com/manduks"
                  style={{ marginLeft: 10 }}
                  target="_blank"
                >
                  <span className="icon">
                    <i className="fab fa-github fa-lg" />
                  </span>
                  <span className="has-text-weight-semibold is-size-6">follow</span>
                </a>
              </p>
            </div>
            <div style={{ marginTop: 10 }}>
              <p>
                <span className="has-text-grey-dark has-text-weight-bold">José Yovany</span>
                <a
                  className="button is-small button-grey-light"
                  href="https://github.com/yovany-lg"
                  style={{ marginLeft: 10 }}
                  target="_blank"
                >
                  <span className="icon">
                    <i className="fab fa-github fa-lg" />
                  </span>
                  <span className="has-text-weight-semibold is-size-6">follow</span>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="column is-one-third-desktop">
          <h1 className="title is-size-4">Síguenos</h1>
          <div className="buttons">
            <a
              className="link-hover"
              href="https://www.facebook.com/robotois/"
              style={{ alignItems: 'center', display: 'flex', paddingLeft: 10, paddingRight: 10 }}
              target="_blank"
            >
              <span className="icon">
                <i className="fab fa-facebook-square fa-lg" />
              </span>
            </a>
            <a
              className="link-hover"
              href="https://www.facebook.com/robotois/"
              style={{ alignItems: 'center', display: 'flex', paddingLeft: 15, paddingRight: 15 }}
              target="_blank"
            >
              <span className="icon">
                <i className="fab fa-twitter fa-lg" />
              </span>
            </a>
            <a
              className="link-hover"
              href="https://github.com/Robotois"
              style={{ alignItems: 'center', display: 'flex', paddingLeft: 10, paddingRight: 10 }}
              target="_blank"
            >
              <span className="icon">
                <i className="fab fa-github fa-lg" />
              </span>
            </a>
            <a
              className="link-hover"
              href="https://www.youtube.com/channel/UC1B5gv23Aw8tJaWnJQ8nnhQ"
              style={{ alignItems: 'center', display: 'flex', paddingLeft: 10, paddingRight: 10 }}
              target="_blank"
            >
              <span className="icon">
                <i className="fab fa-youtube fa-lg" />
              </span>
            </a>
          </div>
          <div className="buttons">
            <a
              className="button is-small button-grey-light"
              data-social-network="Twitter"
              data-social-action="tweet"
              data-social-target="http://robotois.com"
              target="_blank"
              href="https://twitter.com/intent/tweet?text=Robotois Aprende - Programa - Construye&amp;hashtags=robotois&amp;url=http://robotois.com&amp;via=robotois"
            >
              <span className="icon">
                <i className="fab fa-twitter fa-lg" />
              </span>
              <span className="has-text-weight-semibold is-size-6">
                Tuit
              </span>
            </a>
          </div>
        </div>
        <div className="column is-one-third-desktop">
          <h1 className="title is-size-4">Open Source</h1>
          <div className="buttons">
            <a
              className="button is-small button-grey-light"
              href="https://github.com/Robotois?utf8=%E2%9C%93&q=robotois"
              target="_blank"
            >
              <span className="icon">
                <i className="fab fa-github fa-lg" />
              </span>
              <span className="has-text-weight-semibold is-size-6">GitHub</span>
            </a>
            <a
              className="button is-small button-grey-light"
              href="https://www.npmjs.com/~robotois"
              target="_blank"
            >
              <span className="icon">
                <i className="fab fa-npm fa-lg" />
              </span>
              <span className="has-text-weight-semibold is-size-6">npm</span>
            </a>
          </div>
        </div>
      </div>
      <div className="content has-text-centered ">
        <p className="has-text-grey">
          <br />
          Código fuente bajo licencia <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
          <br />
          El contenido de este sitio web bajo licencia <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
