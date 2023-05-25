# Testes API
Cenários de Testes em APIs, validando o CRUD de usuários.

# Configuração do projeto

## Instalação do Node.js

Este é um guia rápido para ajudá-lo a instalar o Node.js no seu sistema. Certifique-se de seguir os passos abaixo:

1. Acesse o site oficial do Node.js: [https://nodejs.org/en](https://nodejs.org/en).
2. Faça o download da versão mais recente do Node.js para o seu sistema operacional.
3. Siga as instruções de instalação fornecidas pelo instalador.
4. Após a conclusão da instalação, abra o terminal.

## Verificar a instalação

Antes de prosseguir, verifique se o Node.js e o npm foram instalados corretamente. Digite o seguinte comando no terminal:

```sh
node --version && npm --version
```

O resultado exibirá as versões do Node.js e do npm instaladas no seu sistema.

## Criar uma pasta para o projeto

Crie uma nova pasta onde você deseja armazenar os arquivos do seu projeto. Você pode fazer isso usando o comando `mkdir` no terminal. Por exemplo:

```sh
mkdir nome-da-pasta
```

## Acessar a pasta do projeto

Após criar a pasta do projeto, acesse-a usando o comando `cd` no terminal. Por exemplo:

```sh
cd nome-da-pasta
```

A partir de agora, todos os comandos serão executados dentro dessa pasta.

## Executar o comando de instalação do Cypress e o Cypress Cucumber Preprocessor

Agora, você está pronto para instalar as dependências do seu projeto. Execute o seguinte comando no terminal:

```sh
npm install --save-dev cypress cypress-cucumber-preprocessor
```

Esse comando irá instalar o Cypress e o Cypress Cucumber Preprocessor como dependências de desenvolvimento no seu projeto.

Lembre-se de substituir `nome-da-pasta` pelo caminho real da pasta do seu projeto.

## Executar o Cypress pela primeira vez

Agora vamos rodar o Cypress, para terminar de criar os arquivos necessários:

Execute o seguinte comando no terminal para abrir o Cypress:

```sh
npx cypress open
```

Adicione o seguinte script ao arquivo `cypress/plugins/index.js`:

```javascript
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = (on, config) => {
  on('file:preprocessor', cucumber());
};
```

**ESTRUTURA DO PROJETO:**

- `integration`: Aqui ficarão os nossos cenários criados.

- `plugin/index.js`: Este arquivo é destinado para configuração de plugins, onde é configurado o Cucumber.

- `support`: Dentro desta pasta, ficarão as pastas que criamos para organização do código.

- `node_modules`: Aqui ficam os arquivos de funcionamento do Cypress e do Cucumber.

- `cypress.json`: Neste arquivo, podemos realizar configurações globais, como criar nossas variáveis de ambiente.

**PASTAS ADICIONAIS:**

- `steps`: Aqui ficarão os nossos scripts, relacionando Gherkin ao Cypress, para rodar os cenários.

- `pageobjects`: Aqui deixamos os scripts feitos em Cypress. A ideia do page objects é criar um arquivo `.js` para cada página ou fluxo do site. Dessa forma, mantemos a organização e facilitamos a manutenção do código, pois colocamos no arquivo os comandos que são executados na página/fluxo correspondentes ao nome do arquivo.

- `elements`: Possui o mesmo conceito de organização do código. Aqui armazenamos os seletores da página.

Dentro da pasta `package.json`, adicione o seguinte comando:

```json
{
  "scripts": {
    "test:chrome": "cypress run --browser chrome --no-exit",
    "test:firefox": "cypress run --browser firefox --no-exit"
  },
  "cypress-cucumber-preprocessor": {
    "step_definitions": "cypress/support/steps"
  }
}
```

Os scripts são facilitadores para executarmos o teste via terminal e podem ser separados por navegadores. Já a configuração de `step_definitions` permite definir o local do projeto onde estarão os steps do nosso cenário.

Dentro da pasta `cypress.json`, insira as seguintes configurações:

```json
{
  "viewportWidth": 1366,
  "viewportHeight": 768,
  "defaultCommandTimeout": 10000,
  "baseUrl": "https://cwi.com.br/"
}
```

Essas são configurações de tamanho de tela, URL base do projeto e de timeout.

Crie um arquivo com o cenário de teste escrito em Gherkin. Ele deve ficar dentro de `cypress/integration` e ter a extensão `.feature`.

Crie um arquivo com os passos do teste. Ele deve ficar dentro de `cypress/support/steps`.

Crie o arquivo para o script do Cypress. Ele deve ficar dentro de `cypress/support/pageobjects`.

Crie o arquivo para os elementos da página. Ele deve ficar dentro de `cypress/support/elements`.

Todos os arquivos acima devem ter a extensão `.js`.

Após ter salvo todos os arquivos, execute pelo terminal do próprio VS Code o comando: 

```sh
npm run test:chrome
```

Você também pode executar o comando completo: 

```sh
npx cypress run --browser chrome --no-exit
```

Caso queira rodar no modo interativo, pode optar por: 

```sh
npx cypress open
```

Quando rodar no modo interativo, você poderá escolher qual navegador você quer ver rodando os seus testes. Por padrão, o Electron já vem como opção.


