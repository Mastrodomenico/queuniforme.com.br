import React from 'react'

export default function PageNotFound() {
  return (
    <div>
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="jumbotron mt-3">
                    <h1 className="display-4">Ops, erro 404</h1>
                    <p className="lead">A página que você está procurando não foi encontrada</p>
                    <a className="btn btn-danger btn-lg shadow rounded-0" href="/" role="button"><i className="fa fa-chevron-left"></i> Ir para o Início</a>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
