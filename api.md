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
title: API
author: Pablo Leon Rodrigues
download: true
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
de notas, que eram perfuradas para montar um sistema(*punched cards*). Hoje em dia tal organização seria chamada de API.

Porém, foi em 1990 que o termo API foi definido como "um conjunto de serviços disponíveis para um programador executar
determinadas tarefas", foi cunhado por Carl Malamud.

Em 2000 a dissertação de Roy Fielding "Estilos arquitetônicos e o design de arquiteturas de software baseadas em rede"
na Universidade Comunitária de Irvine delineou a transferência de estado representacional (REST) e descreveu a
ideia de uma "interface de programação de aplicativos baseada em rede" que Fielding contrastou com a tradicional
"baseada em biblioteca" APIs.

---

## Como funciona?

Imagine duas aplicações comunicando-se por um garçom em um restaurante. O garçom atua como API, retransmitindo 
seu pedido (pedido) para a cozinha (servidor) e trazendo sua comida (resposta). 

- Cliente: O aplicativo que solicita informações ou executa uma ação.
- Servidor: O sistema que fornece os dados ou funcionalidade.
- API: O intermediário que traduz a solicitação do cliente em um formato que o servidor entende e devolve a 
resposta ao cliente.

A comunicação geralmente acontece através de solicitações HTTP (como GET ou POST) e respostas (contendo dados 
como JSON ou XML). Pense nisso como uma conversa estruturada com comandos e respostas específicas.

---

## URL

Ao acessar um endereço de uma api utilizamos uma URL(*Uniform resource locator*) para fazer a solicitação essa URL 
utiliza partes que podemos identificar como "scheme", "authority, domain, path, query".  

<pre class="pre">          <span style="color:rgb(0, 76, 178)">userinfo</span>       <span style="color:rgb(0, 177, 17)">host</span>      <span style="color:rgb(178, 111, 0)">port</span>
          <span style="color:rgb(0, 76, 178)">┌──┴───┐</span> <span style="color:rgb(0, 177, 17)">┌──────┴──────┐</span> <span style="color:rgb(178, 111, 0)">┌┴┐</span>
  https://john.doe@api.example.com:123/forum/?tag=networking&amp;order=newest
  <span style="color:rgb(178, 111, 0)">└─┬─┘</span>   <span style="color:rgb(176, 0, 177)">└─────────────┬────────────┘</span><span style="color:rgb(0, 76, 178)">└──┬──┘</span> <span style="color:rgb(0, 178, 17)">└────────────┬────────────┘</span> <span style="color:rgb(178, 111, 0)">└┬┘</span>
  <span style="color:rgb(178, 111, 0)">scheme</span>     <span style="color:rgb(176, 0, 177)">authority/domain/host</span>     <span style="color:rgb(0, 76, 178)">path</span>              <span style="color:rgb(0, 178, 17)"><span style="color:rgb(0, 178, 17)">query</span></span>         <span style="color:rgb(178, 111, 0)">fragment</span>
</pre>

---
layout: two-cols
---

### Esquema (*scheme*)

A variável scheme também é chamado de protocol, com APIs da Web e geralmente é http(*HyperText Transfer Protocol*) ou 
https. Determina o protocolo em que os recursos são transferidos de um servidor para um cliente.


### Hosts e domínios

A variável api.example.com é o host do recurso que está sendo solicitado. Essa url vai ser resolvida pelo DNS e vai
fornecer o endereço de ip para acessar esse servidor. Também pode ser utilizado a autorização(*authority*) e a
porta(*port*) do serviço. Geralmente apis são executadas em subdomínios como, por exemplo, api.example.com ao invés
de www.example.com.

::right::

### Caminho (*path*)

O path para o recurso, */forum/* nosso exemplo geralmente representa pastas ou diretórios no servidor.
Assim como temos pastas ou diretórios em nossos computadores, também temos pastas em servidores para organizar conteúdo.

### Query

Query são os parâmetros que podemos enviar em uma chamada para obter determinado resultado, no nosso exemplo
utilizamos, *tag=networking&amp;order=newest*.

---
layout: two-cols
---

### Endpoints

Quando os programadores "usam" uma API da Web em seus programas, eles normalmente fazem solicitações para enviar ou 
receber recursos. A documentação da API geralmente lista "endpoints" para essas solicitações, 
por exemplo: *api.example.com:123/forum/*. Esse é o padrão ou "endpoint" específico da API de acesso a dados da 
plataforma.

::right::

### Métodos HTTP

Deve ficar claro que as APIs da Web fazem solicitações com padrões repetíveis para servidores. Uma solicitação é
enviada de um aplicativo de software para outro aplicativo de software que avalia a solicitação e, em seguida, 
responde devolvendo alguma informação conforme o endpoint e método utilizado.

---

#### GET

GET o método de solicitação é usado ao solicitar uma resposta que fornece um recurso. Utilizado para buscar .

POST

A variável POST O método envia dados com a solicitação. Pode parecer estranho que uma "solicitação" envie dados, mas a ideia é que fazer a solicitação da API é solicitar ao endpoint — o software receptor — que aceite a solicitação e, no caso de um POST, para também aceitar os dados que estão sendo enviados. Os dados enviados normalmente são gravados em um armazenamento de dados, como um banco de dados ou arquivo, para que possam ser salvos.

PUT

A variável PUT o método de solicitação é semelhante a POST como envia dados, mas se os dados que estão sendo enviados já existirem no endpoint, uma PUT atualizará os dados existentes substituindo-os. A POST não atualiza, ele simplesmente envia, então vários POST as solicitações podem criar vários registros dos dados enviados, em vez de atualizar qualquer registro existente.

PATCH

A variável PATCH O método de solicitação é usado para enviar dados que atualizam parte de um registro existente, como quando alteramos nosso endereço atualizando nosso perfil de conta. Com um POST solicitação, um perfil adicional pode ser criado e com uma PUT, o perfil existente pode ser substituído, mas usando o PATCH simplesmente atualizamos a parte relevante do registro existente, como nosso endereço.

DELETE

A variável DELETE o método de solicitação remove um recurso especificado na solicitação, como se clicássemos em um link para excluir totalmente nosso perfil de conta.

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
- Arquitetura cliente-servidor: separa claramente clientes (aplicativos que fazem solicitações)
e servidores (processamento de solicitações e envio de respostas).
- Armazenável em cache: as respostas podem ser armazenadas em cache para melhorar o desempenho.
- Sistema em camadas: os intermediários podem lidar com solicitações e respostas, adicionando flexibilidade.
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

https://experienceleague.adobe.com/pt-br/docs/platform-learn/data-collection/server-api/introduction