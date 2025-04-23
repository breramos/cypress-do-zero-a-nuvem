# 🌲 Cypress, do Zero à Nuvem ☁️

Projeto realizado com fins didáticos para acompanhamento do curso **"Cypress, do Zero à Nuvem"** ministrado por Walmyr Filho da escola online *Talking About Testing*.

## Pré-requisitos

Os seguintes sistemas precisam estar instalados no computador:

- **git** (2.42.1 no momento da criação desse arquivo)
- **Node.js** (v20.13.1 no momento da criação desse arquivo)
- **npm** (10.8.1 no momento da criação desse arquivo)
- **Visual Studio Code** (v1.90.2 no momento da criação desse arquivo) ou alguma outra IDE de sua preferência

> **Obs.:** É recomendado usar as mesmas versões ou versões mais recentes de suporte de longo prazo (**LTS**) dos sistemas listados acima.

> **Obs. 2:** Ao instalar o Node.js, o npm é instalado junto. 🎉

> **Obs. 3:** Para verificar as versões do git, Node.js e npm instaladas em seu computador, execute o comando git `--version && node --version && npm --version` em seu terminal de linha de comando.


## Instalação

Digite `npm install` para instalar todas as depêndecias de desenvolvimento

## Testes

Esse projeto pode ser executado tanto em aplicações web com viewport *desktop* quanto *mobile*.

Segue abaixo o que deve ser feito em cada caso.

## Desktop

Para executar o projeto com viewport **desktop** utilizando *GUI*, é preciso digitar o comando abaixo:

    npx cypress open


Ou caso queira executar usando *scripts* que foram inseridos no *package.json* do projeto, digite o comando abaixo:

    npm run cy:open


Se preferir, também é possível executar as suítes de teste de modo *headless* com o comando:

    npx cypress run


Ou também é possível utilizar a implementação de scripts do *package.json*:

    npm run headless


## Mobile

Para executar o projeto com viewport **mobile** utilizando GUI com *npx*, digite o comando abaixo:

    npx cypress open mobile


Ou caso queira executar com GUI utilizando *npm*, digite esse comando:

    npm run mobile


Se preferir, também é possível executar as suítes de teste de modo *headless* utilizando *npx*:

    npx cypress run mobile_headless


Ou utilize *npm* com o seguinte comando:

    npm run mobile_headless

______


