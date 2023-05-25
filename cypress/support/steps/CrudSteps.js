/* global Given, Then, When, And*/

import CrudPage from "../pageobject/CrudPage";
const crud = new CrudPage();

Given("que eu tenha os dados necessários para criar um novo usuário", () => {
  crud.criarUsuario.dados();
});

When("eu faço uma requisição POST para /usuarios com esses dados", () => {
  crud.criarUsuario.criandoUsuario();
});

Then("um novo usuário é criado com sucesso", () => {
  crud.criarUsuario.resultado();
});

Given("que eu tente criar um usuário com o email ja existente", () => {
  crud.criandoUsuarioExistente.dados();
});

When(
  "eu faço uma requisição POST para /usuarios com esse email entre os dados",
  () => {
    crud.criandoUsuarioExistente.criandoUsuario();
  }
);

Then("a API retorna um status 400 e mensagem de email ja existente", () => {
  crud.criandoUsuarioExistente.resultado();
});

Given("que eu tenho o ID de um usuário existente", () => {
  crud.consultaUsuario.obtendoId();
});

When("eu faço uma requisição GET para o id do usuário", () => {
  crud.consultaUsuario.consultandoUsuario();
});

Then(
  "a API retorna um status 200 e as informações do usuário no corpo da resposta",
  () => {
    crud.consultaUsuario.retornoInformações();
  }
);

Given("que eu tenho o ID e os novos dados de um usuário existente", () => {
  crud.AtualizarUsuario.obtendoDados();
});

When(
  "eu faço uma requisição PUT para o id especifico e com os novos dados",
  () => {
    crud.AtualizarUsuario.atualizandoUsuario();
  }
);

Then(
  "o usuário é atualizado com sucesso retornando status 200 e mensagem de sucesso",
  () => {
    crud.AtualizarUsuario.informacoesAtualizadas();
  }
);

Given("que eu tenho o ID de um usuário que ja existe", () => {
  crud.exclusaoUsuario.idExistente();
});

When("eu faço uma requisição DELETE para o id especifico", () => {
  crud.exclusaoUsuario.excluindoUsuario();
});

Then("o usuário é deletado com sucesso e retorna status 204", () => {
  crud.exclusaoUsuario.usuarioDeletado();
});

Given("que eu tenho um ID que não existe no sistema", () => {
  crud.ConsultarUsuarioInexistente.obtendoId();
});

When("eu faço uma requisição GET para o id", () => {
  crud.ConsultarUsuarioInexistente.consultandoUsuarios();
});

Then("a API retorna um status 400", () => {
  crud.ConsultarUsuarioInexistente.usuarioInexistente();
});

Given("que eu tenho um ID que não existe", () => {
  crud.atualizarUsuarioInexistente.obtendoInfo();
});

When("eu faço uma requisição PUT para o id", () => {
  crud.atualizarUsuarioInexistente.atualizandoUsuarioInexistente();
});

Then("a API retorna um status 201", () => {
  crud.atualizarUsuarioInexistente.usuarioInexistente();
});

Given("que eu tenho um ID de usuário que não existe no sistema", () => {
  crud.deletarUsuarioInexistente.obtendoId();
});

When("eu faço uma requisição DELETE para esse id", () => {
  crud.deletarUsuarioInexistente.excluindoUsuario();
});

Then("a API retorna um status 200", () => {
  crud.deletarUsuarioInexistente.usuarioInexistente();
});
