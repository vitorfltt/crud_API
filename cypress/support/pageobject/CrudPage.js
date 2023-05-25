/// <reference types="Cypress" />

import { randEmail, randFullName, randPassword } from "@ngneat/falso";

const url = Cypress.config("baseUrl");
const nome = randFullName();
const email = randEmail();
const password = randPassword();
let result = "";
let id = "";
let id_inexistente = "";

class CrudPage {
  criarUsuario = {
    dados() {
      const dados = {
        nome: nome,
        email: email,
        password: password,
        administrador: "true",
      };
      return dados;
    },

    criandoUsuario() {
      cy.request({
        method: "POST",
        url: "/usuarios",
        body: this.dados(),
      }).then((resp) => {
        result = resp;
        id = result.body._id;
      });
    },

    resultado() {
      cy.wrap(result).then((value) => {
        expect(value.status).be.eq(201);
        expect(value.body.message).be.eq("Cadastro realizado com sucesso");
        expect(value.body._id).not.empty;
      });
    },
  };

  criandoUsuarioExistente = {
    dados() {
      const dados = {
        nome: nome,
        email: email,
        password: password,
        administrador: "true",
      };
      return dados;
    },

    criandoUsuario() {
      cy.request({
        method: "POST",
        url: "/usuarios",
        body: this.dados(),
        failOnStatusCode: false,
      }).then((resp) => {
        result = resp;
      });
    },

    resultado() {
      cy.wrap(result).then((value) => {
        expect(value.status).be.eq(400);
        expect(value.body.message).be.eq("Este email já está sendo usado");
      });
    },
  };

  consultaUsuario = {
    obtendoId() {
      expect(id).not.empty;
    },

    consultandoUsuario() {
      cy.request({
        method: "GET",
        url: `/usuarios/${id}`,
      }).then((resp) => {
        result = resp;
      });
    },

    retornoInformações() {
      cy.wrap(result).then((value) => {
        expect(value.status).be.eq(200);
        expect(value.body.nome).be.eq(nome);
        expect(value.body.email).be.eq(email);
        expect(value.body._id).be.eq(id);
      });
    },
  };

  AtualizarUsuario = {
    obtendoDados() {
      const novos_dados = {
        nome: randFullName(),
        email: randEmail(),
        password: randPassword(),
        administrador: "true",
      };
      return novos_dados;
    },

    atualizandoUsuario() {
      cy.request({
        method: "PUT",
        url: `/usuarios/${id}`,
        body: this.obtendoDados(),
      }).then((resp) => {
        result = resp;
      });
    },

    informacoesAtualizadas() {
      cy.wrap(result).then((value) => {
        expect(value.status).be.eq(200);
        expect(value.body.message).be.eq("Registro alterado com sucesso");
      });
    },
  };

  exclusaoUsuario = {
    idExistente() {
      cy.request({
        method: "GET",
        url: "/usuarios",
      }).then((resp) => {
        result = resp;
        id_inexistente = id;
      });
    },

    excluindoUsuario() {
      cy.request({
        method: "DELETE",
        url: `/usuarios/${id}`,
      }).then((resp) => {
        result = resp;
      });
    },

    usuarioDeletado() {
      cy.wrap(result).then((ret) => {
        expect(ret.status).be.eq(200);
        expect(ret.body.message).be.eq("Registro excluído com sucesso");
      });
    },
  };

  ConsultarUsuarioInexistente = {
    obtendoId() {
      expect(id_inexistente).not.be.empty;
    },

    consultandoUsuarios() {
      cy.request({
        method: "GET",
        url: `/usuarios/${id_inexistente}`,
        failOnStatusCode: false,
      }).then((resp) => {
        result = resp;
      });
    },

    usuarioInexistente() {
      cy.wrap(result).then((ret) => {
        expect(ret.status).be.eq(400);
        expect(ret.body.message).be.eq("Usuário não encontrado");
      });
    },
  };

  atualizarUsuarioInexistente = {
    obtendoInfo() {
      expect(id_inexistente).not.be.empty;
      const infos = {
        nome: randFullName(),
        email: randEmail(),
        password: randPassword(),
        administrador: "true",
      };
      return infos;
    },

    atualizandoUsuarioInexistente() {
      cy.request({
        method: "PUT",
        url: `/usuarios/${id_inexistente}`,
        body: this.obtendoInfo(),
      }).then((resp) => {
        result = resp;
      });
    },

    usuarioInexistente() {
      cy.wrap(result).then((ret) => {
        expect(ret.status).be.eq(201);
        expect(ret.body.message).be.eq("Cadastro realizado com sucesso");
        expect(ret.body._id).not.be.empty;
      });
    },
  };

  deletarUsuarioInexistente = {
    obtendoId() {
      expect(id_inexistente).not.be.empty;
    },

    excluindoUsuario() {
      cy.request({
        method: "DELETE",
        url: `/usuarios/${id_inexistente}`,
      }).then((resp) => {
        result = resp;
      });
    },

    usuarioInexistente() {
      cy.wrap(result).then((ret) => {
        expect(ret.status).be.eq(200);
        expect(ret.body.message).be.eq("Nenhum registro excluído");
      });
    },
  };
}

export default CrudPage;
