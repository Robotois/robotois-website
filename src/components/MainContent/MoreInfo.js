import React from 'react';

const MoreInfo = () => (
  <section className="hero primary-bg">
    <div className="hero-body">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-three-quarters-desktop">
            <div className="has-text-centered">
              <h1 className="title is-size-2 has-text-white">
                Nuestros Servicios
              </h1>
              <h2 className="subtitle has-text-white">
                ¿Tienes una gran Idea y necesitas ayuda?
              </h2>
            </div>
            <br />
            <div className="content is-size-5 has-text-white-ter">
              <p>
                Nuestro equipo esta formado por Expertos en Ingeniería y Desarrollo de Software,
                hemos obtenido importantes logros en consultoría (
                  <a className="has-text-white has-text-weight-bold" href="https://cromosfera.io/" target="_blank">
                  Cromosfera.io
                </a>
              ).
              Aplicamos metodologías ágiles y usamos lo último en tecnología para crear productos a la medida
              enfocados en el usuario.
              </p>
              <p>
                Nuestro objetivo principal es proporcionar a nuestros clientes la ventaja competitiva que necesitan para crecer.
              </p>
            </div>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-half-desktop has-text-centered">
            <span className="subtitle is-size-4 has-text-white">Envíanos un Correo a:  </span>
            <span className="tag is-light is-medium is-size-5">hola@robotois.com</span>
          </div>

        </div>
      </div>
    </div>
  </section>
);

export default MoreInfo;
