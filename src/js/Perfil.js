import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h3 className="card-title text-white">Perfil</h3>
        </div>
        <div className="pt-5 card-body">
          <p>
            Atuo com desenvolvedor desde novembro de 2017. 
          </p>
          <p>
            Comecei com o Jquery criando plugins com Javascript e adicionando novos recursos ao sistema WebCal da Engecal.
          </p>
          <p>
            Em janeiro de 2019, participei da criação de um projeto no React, adicionando pequenos recursos e até mesmo o CRUD completo.
          </p>
          <p>
            Independente da ferramenta utilizada para criação de interface Web, sempre busco entrega qualidade, usabilidade e beleza para o melhor aproveitamento do usuário final.
          </p>
        </div>
      </div>
    );
  }
}
