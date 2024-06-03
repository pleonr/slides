---
src: ./cover.md
theme: default
class: text-center
highlighter: shiki
mdc: true
drawings:
  persist: false
image: /side-logo.png
selectable: true
colorSchema: dark
title: Git
author: Pablo Leon Rodrigues
export:
  format: pdf
  timeout: 30000
  withClicks: false
---

---

<Toc maxDepth="2"></Toc>

---

## Origem

Uma API(*Application programming interface*) é uma forma de comunicação entre computadores e componentes.

Em 1940 os cientistas britânicos Maurice Wilkes e David Wheeler trabalhavam em um sistema de catálogo de bibliotecas 
de notas, que eram perfuradas para montar um sistema.(punched cards) Hoje em dia tal organização seria chamada de API.

Porém, foi em 1990 que o termo API foi definido como "um conjunto de serviços disponíveis para um programador executar
determinadas tarefas", foi cunhado por Carl Malamud.

Em 2000 a dissertação de Roy Fielding "Estilos arquitetônicos e o design de arquiteturas de software baseadas em rede"
na Universidade Comunitária de Irvine delineou a transferência de estado representacional (REST) e descreveu a
ideia de uma "interface de programação de aplicativos baseada em rede" que Fielding contrastou com a tradicional
"baseada em biblioteca" APIs.

---

## Como funciona?

Imagine duas aplicações comunicando-se através de um garçom em um restaurante. O garçom atua como API, retransmitindo 
seu pedido (pedido) para a cozinha (servidor) e trazendo sua comida (resposta). 

- Cliente: O aplicativo que solicita informações ou executa uma ação.
- Servidor: O sistema que fornece os dados ou funcionalidade.
- API: O intermediário que traduz a solicitação do cliente em um formato que o servidor entende e devolve a 
resposta ao cliente.

A comunicação geralmente acontece através de solicitações HTTP (como GET ou POST) e respostas (contendo dados 
como JSON ou XML). Pense nisso como uma conversa estruturada com comandos e respostas específicas.

---

## Pros

Quais os benefícios da utilização de uma API?

- Eficiência: APIs economizam tempo e recursos ao fornecer funcionalidades pré-construídas.
- Escalabilidade: os aplicativos podem ser facilmente ampliados ou reduzidos com base na demanda.
- Inovação: as APIs permitem que os desenvolvedores criem novos aplicativos e serviços.
- Flexibilidade: Permitem integração com diversos sistemas e plataformas.

---

## Cons

Quais os contras?

- Segurança: APIs podem ser vulneráveis a ataques se não forem devidamente protegidas.
- Confiabilidade: os aplicativos dependem da disponibilidade e desempenho do servidor API.
- Complexidade: Compreender e usar APIs complexas pode exigir conhecimento técnico.
- Aprisionamento de fornecedor: os desenvolvedores podem se tornar dependentes de um provedor de API específico.

---
layout: two-cols
---

## OpenAPI

A especificação OpenAPI fornece um padrão formal para descrever APIs HTTP.
Isso permite que as pessoas entendam como funciona uma API, gerem código de cliente e criem testes.

- Informações: detalhes sobre a API, como nome, versão e informações de contato. 
- Caminhos: define os diferentes endpoints (URLs) disponíveis e as operações permitidas (GET, POST,
PUT, etc.) para cada endpoint. 
- Parâmetros: especifica os dados que podem ser enviados ou recebidos da API
- Respostas: especifica as respostas para cada operação, códigos de status e estruturas de dados.
- Segurança: autenticação e autorização

::right::

<img class="m-auto -z-5 left-0 top-0 right-0 bottom-0 max-w-full max-h-full absolute" src="/openapi.png"/>

---

## REST

REST(*Representational State Transfer*), não é uma tecnologia ou protocolo específico, mas sim um estilo
arquitetônico para construção de serviços web. 

Definido em 2000 por Roy Thomas Fielding, o REST define um conjunto de princípios que promovem simplicidade,
escalabilidade e interoperabilidade. Pense nisso como um conjunto de diretrizes que os desenvolvedores
seguem para criar APIs bem estruturadas e eficientes.

---

<img class="m-auto -z-5 left-0 top-0 right-0 bottom-0 max-w-full max-h-full absolute" src="/restapi.png"/>


---

#### Conceitos
<br>

- Baseado em recursos: tudo o que é acessível por meio da API é considerado um recurso, 
identificado por URLs exclusivos.
- Métodos padrão: usa métodos HTTP como GET, POST, PUT e DELETE para interagir com recursos.
- Stateless: Cada solicitação contém todas as informações necessárias para o servidor processá-la,
evitando gerenciamento complexo de sessões.
- Arquitetura cliente-servidor: Separa claramente clientes (aplicativos que fazem solicitações)
e servidores (processamento de solicitações e envio de respostas).
- Armazenável em cache: as respostas podem ser armazenadas em cache para melhorar o desempenho.
- Sistema em camadas: Os intermediários podem lidar com solicitações e respostas, adicionando flexibilidade.
- Código sob demanda: os servidores podem enviar código executável aos clientes (opcional).

<!--
Simplicity: Easy to understand and implement due to its clear structure and use of standard methods.
Scalability: Stateless design allows APIs to handle high traffic volumes efficiently.
Interoperability: Promotes communication between diverse applications and platforms.
Maintainability: Clear separation of concerns makes APIs easier to update and maintain.
-->

---

## RESTful

Você pode definir uma API como RESTful quando ela segue as especificações do REST.

Como analogia imagine que o REST é a planta de uma construção. RESTful é quando a construção
é feita seguindo a planta.













---

https://en.wikipedia.org/wiki/The_Preparation_of_Programs_for_an_Electronic_Digital_Computer

https://www.openapis.org/

https://spec.openapis.org/oas/latest.html

https://editor.swagger.io/