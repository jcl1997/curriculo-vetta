import React, { Component } from 'react';

export default class Follow extends Component {
  render() {
    //  style="width: 20rem;"
    return (
      <div className="card">
        <div className="card-header card-header-text bg-primary">
          <div className="card-text">
            <h3 className="card-title text-white">Sobre mim</h3>
          </div>
        </div>
        <div className="card-body">
          <p className="card-text">
          Sou muito calmo, paciente, concentrado, pontual, gosto de aprender coisas novas e ajudar pessoas.
          </p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="d-flex w-100 justify-content-between">
                <p className="mb-1">
                  Data de Nascimento: 19/05/1997
                </p>
              </div>
            </li>
            <li className="list-group-item">
              <div className="d-flex w-100 justify-content-between">
                <p className="mb-1">
                  Cpf: 138.463.846-66
                </p>
              </div>
            </li>
            <li className="list-group-item">
              <div className="d-flex w-100 justify-content-between">
                <p className="mb-1">
                  RG: 20.245.312
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
