import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

export default function EsqueciSenha() {
  return (
    <Container>
      <form>
        <section className="container">
          <h1>Digite um e-mail para recuperar sua senha</h1>

          <label htmlFor="email">E-mail</label>
          <input type="text" />

          <div className="acoes">
            <button type="submit">Enviar</button>
            <Link to="/">Voltar ao login</Link>
          </div>
        </section>
      </form>
    </Container>
  );
}
