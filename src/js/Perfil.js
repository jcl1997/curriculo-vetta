import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h3 className="card-title text-white">Perfil</h3>
        </div>
        <div className="pt-5 card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item list-group-item-action">
              <p className="mb-0 align-middle">
                Atuo com Jquery e React
              </p>
            </li>
            <li className="list-group-item list-group-item-action">
              <p className="mb-0 align-middle">
                <i className="fab fa-symfony fa-2x align-middle" />&nbsp;Symfony PHP 3.4
              </p>
            </li>
            <li className="list-group-item list-group-item-action">
              <p className="mb-0 align-middle">
                <i className="fab fa-react fa-2x align-middle" />&nbsp;React e React Native
              </p>
            </li>
            <li className="list-group-item list-group-item-action">
              <p className="mb-0 align-middle">
                <i className="fab fa-git-alt fa-2x align-middle" />&nbsp;Git
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
