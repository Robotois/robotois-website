import React from 'react'

const NotFoundPage = () => (
  <div className="container">
    <div className="columns is-centered">
      <div className="column is-half-desktop" style={{ marginTop: 50, marginBottom: 50 }}>
        <article className="message is-warning">
          <div className="message-header">
            <p>Página no Encontrada</p>
          </div>
          <div className="message-body">
            La dirección URL que ingresaste no existe... <span className="icon"><i className="far fa-frown"></i></span>
          </div>
        </article>
      </div>
    </div>
  </div>
);

export default NotFoundPage
