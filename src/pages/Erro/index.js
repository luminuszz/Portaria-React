import React from "react";
import { Link } from "react-router-dom";
import "./erro.css";
// import { Container } from './styles';

const Erro = () => (
  <div>
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>Oops!</h1>
        </div>
        <h2>404 - Pagina não encontrada</h2>
        <p>
          Pagina atualmente indisponível, consulte o admistrador para mais
          informações.
        </p>
        <Link to="/home">Voltar para Pagina inicial</Link>
      </div>
    </div>
  </div>
);

export default Erro;
