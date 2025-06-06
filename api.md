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

<Toc maxDepth="3"></Toc>


---

## Arquitetura de Software

A arquitetura de Software define a estrutura organizacional dos sistemas de software, definindo como os componentes
interagem e são desenvolvidos, com uma arquitetura bem definida podemos prever a escalabilidade, manutenção, flexibilidade e desempenho de uma aplicação.

![](/softwarearch.png)

---
layout: piramede
---

::center::

### Arquitetura Monolítica

Um sistema monolítico é aquele em que todos os componentes estão unidos em uma única aplicação. Todas as funcionalidades estão integradas em um único código-fonte.
Isso fornece o desenvolvimento e implantação centralizados, onde a aplicação inteira é construída, testada e implantada como uma única unidade.

::left::

##### Vantagens

- Simplicidade: Fácil de desenvolver e testar no início.
- Menos sobrecarga de comunicação: Não há necessidade de gerenciar muitas interações entre serviços diferentes.
- Ideal para projetos pequenos ou em fase inicial.

::right::

##### Desvantagens

- Dificuldade de escalabilidade: Difícil escalar partes específicas da aplicação.
- Manutenção complexa: À medida que a aplicação cresce, torna-se difícil de manter e modificar.
- Implantação mais arriscada: Pequenas mudanças requerem a reimplantação do sistema inteiro.

---
layout: piramede
---

::center::

### SOA - Arquitetura Orientada a Serviços

A SOA é uma abordagem arquitetural onde a funcionalidade é dividida em serviços reutilizáveis, que podem ser acessados de forma independente.
Esses serviços se comunicam usando protocolos padronizados, como SOAP ou REST.

Normalmente utiliza serviços independentes onde cada serviço desempenha uma função específica e pode ser reutilizado por diferentes aplicações, utilizando a rede para comunicação.

::left::

##### Vantagens

- Reutilização de serviços: A lógica pode ser usada em diferentes sistemas, reduzindo duplicação de código.
- Facilidade de integração: Permite integração com sistemas legados e heterogêneos.
- Escalabilidade: Componentes podem ser escalados individualmente.

::right::

##### Desvantagens

- Sobrecarga de comunicação: A comunicação entre serviços pode adicionar latência.
- Complexidade na governança: O gerenciamento centralizado e controle de versões de serviços podem ser difíceis.

---
layout: piramede
---

::center::

### Arquitetura de Microservices

A arquitetura de Microservices é uma evolução da SOA, mas com uma abordagem mais descentralizada.
Cada microserviço pode ser aplicação independente com seu próprio ciclo de vida, banco de dados e linguagem.

::left::

##### Vantagens

- Escalabilidade e Flexibilidade: Serviços podem ser escalados e desenvolvidos de forma independente.
- Resiliência: Se um microserviço falhar, o restante do sistema pode continuar funcionando.
- Ciclos de desenvolvimento mais rápidos: Cada equipe pode trabalhar em serviços independentes.

::right::

##### Desvantagens

- Complexidade: A comunicação entre microserviços, o monitoramento e a implantação de múltiplos serviços exigem ferramentas e práticas avançadas.
- Gerenciamento de dados: A coordenação entre diferentes bancos de dados pode ser problemática.

---

#### Resumo

|      **Aspecto**     |                 _Monolito_                 |               _SOA_              |          _Microservices_          |
|:--------------------:|:------------------------------------------:|:--------------------------------:|:---------------------------------:|
| **Tamanho da aplicação** | Única e grande aplicação                   | Serviços grandes e reutilizáveis | Serviços pequenos e independentes |
| **Escalabilidade**       | Limitada                                   | Média                            | Alta                              |
| **Desenvolvimento**      | Simples no início, difícil conforme cresce | Moderadamente complexo           | Complexo desde o início           |
| **Comunicação**          | Interna e direta                           | Protocolos padrão (SOAP, REST)   | APIs leves (REST, gRPC)           |
| **Governança**           | Centralizada                               | Controlada centralmente          | Descentralizada                   |


---
layout: two-cols
---

## API's

Uma API(*Application programming interface*) é uma forma de comunicação entre computadores e componentes.

Em 1940 os cientistas britânicos Maurice Wilkes e David Wheeler trabalhavam em um sistema de catálogo de bibliotecas
de notas, que eram perfuradas para montar um sistema(*punched cards*). Hoje em dia tal organização seria chamada de API.

![](/punchcards.jpg)

::right::

![](/Sir-Maurice-Vincent-Wilkes.webp)


---
layout: two-cols
---

Porém, foi em 1990 que o termo API foi definido como "*um conjunto de serviços disponíveis para um programador executar
determinadas tarefas*", foi cunhado por Carl Malamud.

Em 2000 a dissertação de Roy Fielding "Estilos arquitetônicos e o design de arquiteturas de software baseadas em rede"
na Universidade Comunitária de Irvine delineou a transferência de estado representacional (REST) e descreveu a
ideia de uma "interface de programação de aplicativos baseada em rede" que Fielding contrastou com a tradicional
"baseada em biblioteca" APIs.

::right::

![](/CarlRoy.png)

---

### Web API's

Na década de 1990, a necessidade de comunicação entre diferentes sistemas online começou a aumentar. Empresas começaram a perceber que permitir a integração entre seus sistemas e os de terceiros era uma maneira de ampliar o alcance de seus serviços.

- SOAP (Simple Object Access Protocol): Criado em 1998, foi um dos primeiros protocolos para APIs baseadas na web. Ele usava XML para comunicação e permitia que diferentes sistemas pudessem se comunicar por meio da internet.

Nos anos 2000, o desenvolvimento web explodiu, e junto com isso, as APIs começaram a evoluir rapidamente para suportar a comunicação entre sistemas distribuídos. As APIs REST (Representational State Transfer), introduzidas por Roy Fielding em 2000, se tornaram um padrão devido à sua simplicidade, uso de HTTP e maior compatibilidade com a web moderna.

- REST: Ao contrário de SOAP, que era mais complexo e pesado, REST utilizava os métodos HTTP (GET, POST, PUT, DELETE) e URLs como identificadores de recursos.

<!--
Existem diversos tipos de API's, como sempre a melhor sulução é ... *depende*{style="color: green;"}.
Aqui vamos abordar os 6 estilos de arquitetura de API's mais utilizados e seus pontos fracos e fortes.

As APIs surgiram principalmente para atender às seguintes necessidades:

- Reutilização de Código: A reutilização de funcionalidades já existentes entre programas economiza tempo e esforço no desenvolvimento.
- Integração de Sistemas: Conforme os sistemas se tornaram mais complexos, as APIs foram necessárias para que diferentes plataformas pudessem se comunicar e colaborar.
- Escalabilidade e Modulação: Com a evolução das arquiteturas, como microserviços, as APIs permitiram que sistemas fossem construídos de maneira modular e escalável.
- Expansão de Negócios: Empresas perceberam que, ao oferecer APIs para terceiros, podiam criar ecossistemas que expandiam seu alcance e inovação.
-->


---
layout: piramede
---

::center::

### SOAP

SOAP(*Simple Object Access Protocol*) é baseado na troca de arquivos xml, utilizando protocolo HTTP. É muito utilizado
em sistemas bancários e gateways de pagamento, por ser robusto e seguro. Não depende de plataforma
e pode ser utilizado com qualquer linguagem ou sistema operacional.

::left::

#### Prós{style="color: green;"}

- Segurança: SOAP vai além de simples mecanismos de autenticação e oferece recursos de segurança robustos, como SSL/TSL
  e mensagens criptografadas e assinadas digitalmente. (*WS-Security, WS-Trust e WS-Policy*)
- Transações: SOAP permite transações compatíveis com ACID(*atomicity, consistency, isolation, durability*),
  garantindo consistência no caso de falha de serviço.

::right::

#### Cons{style="color: red;"}

- Os serviços SOAP requerem mais largura de banda e recursos devido à sua natureza detalhada.
- SOAP é menos adequado para integrações simples devido à sua complexidade.

<!--
ACID é um conceito que se refere às quatro propriedades de transação de um sistema de banco de dados: Atomicidade,
Consistência, Isolamento e Durabilidade.

- **Atomicidade**: Em uma transação envolvendo duas ou mais partes de informações discretas, ou a transação será
executada totalmente ou não será executada, garantindo assim que as transações sejam atômicas.
- **Consistência**: A transação cria um novo estado válido dos dados ou em caso de falha retorna todos os dados ao
seu estado antes que a transação foi iniciada.
- **Isolamento**: Uma transação em andamento mas ainda não validada deve permanecer isolada de qualquer outra operação,
ou seja, garantimos que a transação não será interferida por nenhuma outra transação concorrente.
- **Durabilidade**: Dados validados são registados pelo sistema de tal forma que mesmo no caso de uma falha e/ou
reinício do sistema, os dados estão disponíveis em seu estado correto.
-->

---
layout: piramede
---

::center::

### GraphQL

[GraphQL](https://graphql.org/) é uma linguagem de consulta e manipulação de dados de código aberto para APIs. Ele permite que os clientes
especifiquem a estrutura dos dados necessários, permitindo que os servidores retornem com precisão os dados
solicitados.

::left::

#### Prós{style="color: green;"}

- GraphQL minimiza a sobrecarga de transferência de dados retornando apenas os dados solicitados.
- Permite buscar dados de vários recursos em uma única solicitação.

::right::

#### Cons{style="color: red;"}

- Complexidade: GraphQL tem uma curva de aprendizado acentuada devido à sua singularidade.
- Cache: as consultas GraphQL são mais difíceis de armazenar em cache no nível da rede devido à sua natureza não padronizada.

---
layout: piramede
---

::center::

### gRPC
[gRPC](https://grpc.io/)(*Google Remote Procedure Call*) é uma estrutura de código aberto de alto desempenho.
Ele usa buffers de protocolo (protobuf) como linguagem de definição de interface, permitindo serializar
dados estruturados.

::left::

#### Prós{style="color: green;"}

- Alto desempenho: o formato de dados binários e o suporte HTTP2 tornam o gRPC mais rápido e eficiente.
- Independente de linguagem: gRPC oferece suporte a várias linguagens de programação.

::right::

#### Cons{style="color: red;"}

- Complexidade: gRPC requer o uso de protobuf e ferramentas adicionais.
- Suporte ao navegador: ainda não é universalmente compatível com todos os navegadores.

---
layout: piramede
---

::center::

### WebSocket

[WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) é um protocolo que fornece canais de
comunicação full-duplex em uma única conexão TCP. Ele permite que os servidores enviem atualizações em tempo
real aos clientes, tornando-o ideal para aplicativos de bate-papo, jogos em tempo real e feeds ao vivo.

::left::

#### Prós{style="color: green;"}

- WebSocket fornece comunicação bidirecional em tempo real.
- Reduz a latência mantendo uma conexão aberta com o servidor.

::right::

#### Cons{style="color: red;"}

- WebSockets podem consumir muitos recursos, causando problemas de dimensionamento.
- Pode exigir salvaguardas adicionais, pois ignora o modelo de segurança HTTP padrão.

---
layout: piramede
---

::center::

### WebHooks

WebHooks são "retornos de chamada HTTP definidos pelo usuário". Eles fornecem um mecanismo para notificar
aplicativos ou serviços sobre eventos específicos.

::left::

#### Prós{style="color: green;"}

- Tempo real: WebHooks permitem a entrega de dados em tempo real.
- Simples de usar: A configuração e execução de WebHooks são diretas.

::right::

#### Cons{style="color: red;"}

- Segurança: WebHooks requerem manuseio cuidadoso para evitar a exposição de dados confidenciais.
- Não confiáveis: sem o tratamento adequado de erros, eles podem levar à perda de dados.


---
layout: piramede
---

::center::

### REST

REST(*Representational State Transfer*), não é uma tecnologia ou protocolo específico, mas sim um estilo
arquitetural para construção de serviços web.

Definido em 2000 por Roy Thomas Fielding, o REST define um conjunto de princípios que promovem simplicidade,
escalabilidade e interoperabilidade. Pense nisso como um conjunto de diretrizes que os desenvolvedores
seguem para criar APIs bem estruturadas e eficientes.

::left::

#### Prós{style="color: green;"}

- REST é fácil de implementar e usar, com um mapeamento direto para o protocolo HTTP.
- Os serviços RESTful funcionam automaticamente com proxies e gateways, melhorando a infraestrutura da Internet.

::right::

#### Cons{style="color: red;"}

- REST carece de um padrão definitivo, o que pode levar a ambigüidades no design da API.
- APIs REST podem resultar em busca excessiva ou insuficiente de dados.


---

<img class="m-auto -z-5 left-0 top-0 right-0 bottom-0 max-w-full max-h-full absolute" src="/restapi.png"/>


---

#### Princípios

O estilo REST(*REpresentational State Transfer*) é baseado em alguns princípios arquiteturais fundamentais, que devem ser seguidos para que uma API seja considerada "RESTful".
`Simplicity`, `Scalability`, `Interoperability`, `Maintainability`
Como analogia imagine que o REST é a planta de uma construção. RESTful é quando a construção é feita seguindo a planta.

- Simplicidade: fácil de entender e implementar devido à sua estrutura clara e uso de métodos padrão.
- Escalabilidade: o design sem estado permite que as APIs lidem com volumes de tráfego alto com eficiência.
- Interoperabilidade: promove a comunicação entre diversos aplicações e plataformas.
- Manutenção: a clara separação de preocupações facilita a atualização e a manutenção de APIs.

<!--
Simplicity: Easy to understand and implement due to its clear structure and use of standard methods.
Scalability: Stateless design allows APIs to handle high traffic volumes efficiently.
Interoperability: Promotes communication between diverse applications and platforms.
Maintainability: Clear separation of concerns makes APIs easier to update and maintain.
-->

---

<img class="m-auto -z-5 left-0 top-0 right-0 bottom-0 max-w-full max-h-full absolute" src="/apisPrinciples.webp"/>


---

#####  Stateless (Sem Estado)
A comunicação entre o cliente e o servidor em uma API RESTful deve ser stateless, ou seja, sem estado.  Cada requisição HTTP do cliente ao servidor deve conter todas as informações necessárias para que o servidor entenda e processe a requisição, sem depender de um contexto armazenado entre as requisições.

O servidor não mantém informações sobre requisições anteriores (sem sessões de estado). Toda requisição é independente e autossuficiente. Isso melhora a escalabilidade e a confiabilidade, já que o servidor não precisa se preocupar em gerenciar o estado do cliente, o que torna mais fácil distribuir as requisições entre vários servidores.

##### Cacheable (Cacheável)
As respostas de uma API REST devem ser cacheáveis. Ou seja, quando apropriado, as respostas das requisições podem ser armazenadas em cache pelos clientes (ou por intermediários Reddis*), para evitar requisições repetidas ao servidor.

O servidor deve informar através de cabeçalhos HTTP se a resposta pode ser armazenada em cache e por quanto tempo. O cache melhora a performance e reduz a carga no servidor. Ao permitir que as respostas sejam armazenadas em cache, reduz-se a latência da rede e a carga no servidor, tornando o sistema mais eficiente.

---

##### Layered System (Sistema em Camadas)
O REST permite que a arquitetura seja organizada em camadas. Isso significa que entre o cliente e o servidor podem existir intermediários (por exemplo, proxies, gateways, ou balanceadores de carga, sistemas de mensageria), que manipulam as requisições sem o cliente ou o servidor final estarem cientes dessas camadas intermediárias.

O cliente só se comunica com a "camada" imediatamente à sua frente e não precisa saber se há mais camadas no sistema.
Camadas intermediárias podem ser usadas para melhorar a escalabilidade, segurança e desempenho, promovendo uma arquitetura mais flexível e escalável, permitindo que o sistema seja dividido em várias partes, cada uma com sua função específica (como balanceamento de carga, autenticação, etc.).

##### Code on Demand (Código sob Demanda)
Esse é um princípio opcional no REST, onde o servidor pode fornecer código executável (como scripts JavaScript) para que o cliente execute. Isso permite que o comportamento do cliente seja estendido dinamicamente, sem precisar atualizar o próprio cliente.

---

##### Uniform Interface (Interface Uniforme)

A interface REST define uma interface uniforme entre o cliente e o servidor, o que significa que todas as interações com os recursos do sistema ocorrem de maneira padronizada. Esse princípio é o coração do estilo REST e é o que torna a API simples e previsível.

Os quatro principais elementos da interface uniforme são:

- Identificação de Recursos: Cada recurso é identificado por uma URL única. Uso consistente de verbo HTTP.
- Manipulação de Recursos através de Representações: Os clientes interagem com os recursos por meio de suas "representações" (por exemplo, JSON, XML), e não diretamente.
- Mensagens Auto-descritivas: Cada requisição e resposta contém informações suficientes para que o cliente ou servidor saiba como processá-las sem contexto adicional.
- HATEOAS (Hypermedia as the Engine of Application State): O cliente deve ser capaz de navegar entre os recursos da API dinamicamente através de links fornecidos nas respostas

---

#### Como funciona?

Imagine duas aplicações comunicando-se por um garçom em um restaurante. O garçom atua como API, retransmitindo
seu pedido (pedido) para a cozinha (servidor) e trazendo sua comida (resposta).

- Cliente: O aplicativo que solicita informações ou executa uma ação.
- Servidor: O sistema que fornece os dados ou funcionalidade.
- API: O intermediário que traduz a solicitação do cliente em um formato que o servidor entende e devolve a
resposta ao cliente.

A comunicação geralmente acontece através de solicitações HTTP (como GET ou POST) e respostas (contendo dados
como JSON ou XML). Pense nisso como uma conversa estruturada com comandos e respostas específicas.

---

#### URL

Ao acessar um endereço de uma api utilizamos uma URL(*Uniform resource locator*) para fazer a solicitação essa URL
utiliza partes que podemos identificar como "scheme", "authority, domain, path, query".

<pre class="pre">          <span style="color:rgb(0, 76, 178)">userinfo</span>       <span style="color:rgb(0, 177, 17)">host</span>      <span style="color:rgb(178, 111, 0)">port</span>
          <span style="color:rgb(0, 76, 178)">┌──┴───┐</span> <span style="color:rgb(0, 177, 17)">┌──────┴──────┐</span> <span style="color:rgb(178, 111, 0)">┌┴┐</span>
  https://john.doe@api.example.com:123/forum/?tag=networking&amp;order=newest
  <span style="color:rgb(178, 111, 0)">└─┬─┘</span>   <span style="color:rgb(176, 0, 177)">└─────────────┬────────────┘</span><span style="color:rgb(0, 76, 178)">└──┬──┘</span> <span style="color:rgb(0, 178, 17)">└────────────┬────────────┘</span>
  <span style="color:rgb(178, 111, 0)">scheme</span>     <span style="color:rgb(176, 0, 177)">authority/domain/host</span>     <span style="color:rgb(0, 76, 178)">path</span>              <span style="color:rgb(0, 178, 17)"><span style="color:rgb(0, 178, 17)">query</span></span>
</pre>

---
layout: two-cols
---

##### Esquema (*scheme*)

A variável scheme também é chamado de protocol, com APIs da Web e geralmente é http(*HyperText Transfer Protocol*) ou
https. Determina o protocolo em que os recursos são transferidos de um servidor para um cliente.


##### Hosts e domínios

A variável api.example.com é o host do recurso que está sendo solicitado. Essa url vai ser resolvida pelo DNS e vai
fornecer o endereço de ip para acessar esse servidor. Também pode ser utilizado a autorização(*authority*) e a
porta(*port*) do serviço. Geralmente apis são executadas em subdomínios como, por exemplo, api.example.com ao invés
de www.example.com.

::right::

##### Caminho (*path*)

O path para o recurso, */forum/* nosso exemplo geralmente representa pastas ou diretórios no servidor.
Assim como temos pastas ou diretórios em nossos computadores, também temos pastas em servidores para organizar conteúdo.

##### Query

Query são os parâmetros que podemos enviar em uma chamada para obter determinado resultado, no nosso exemplo
utilizamos, *tag=networking&amp;order=newest*.

---
layout: two-cols
---

#### Endpoints

Quando os programadores "usam" uma API da Web em seus programas, eles normalmente fazem solicitações para enviar ou
receber recursos. A documentação da API geralmente lista "endpoints" para essas solicitações,
por exemplo: *api.example.com:123/forum/*. Esse é o padrão ou "endpoint" específico da API de acesso a dados da
plataforma.

::right::

#### Métodos HTTP (aka Verbos)

Deve ficar claro que as APIs da Web fazem solicitações com padrões repetíveis para servidores. Uma solicitação é
enviada de um aplicativo de software para outro aplicativo de software que avalia a solicitação e, em seguida,
responde devolvendo alguma informação conforme o endpoint e método utilizado.

---

<img class="m-auto -z-5 left-0 top-0 right-0 bottom-0 max-w-full max-h-full absolute" src="/httpverbs.jpg"/>


---

- GET{style="color: green;"} esse método é usado ao solicitar uma resposta que fornece um recurso. Utilizado para buscar informações.
Pode ou não utilizar parâmetros para isso.

- POST{style="color: green;"} método utilizado para enviar dados com a solicitação. Pode parecer estranho que uma "solicitação" envie dados,
mas a ideia é que fazer a solicitação da API é solicitar ao endpoint — o software receptor — que aceite a solicitação e,
no caso de um POST, para também aceitar os dados que estão sendo enviados.
Os dados enviados são normalmente gravados em um armazenamento de dados, como um banco de dados ou arquivo.

- PUT{style="color: green;"} esse método também envia dados, mas se os dados que estão sendo enviados
já existirem no endpoint, uma PUT atualizará os dados existentes substituindo-os.

- DELETE{style="color: green;"} método utilizado para remover um recurso especificado na solicitação.

---

Idempotência é uma propriedade matemática que, em APIs REST, significa que uma mesma operação pode ser executada várias vezes com o mesmo efeito no recurso.

| Verbo | Finalidade                | Idempotente? | Exemplo de Uso               |
|-------|----------------------------|--------------|-------------------------------|
| `GET`    | **Ler** dados do recurso         | ✅ Sim        | `GET /usuarios/42` → busca usuário |
| `POST`   | **Criar** um novo recurso        | ❌ Não        | `POST /usuarios` → cria novo usuário |
| `PUT`    | **Atualizar** um recurso inteiro | ✅ Sim        | `PUT /usuarios/42` → atualiza completamente o usuário |
| `PATCH`  | **Atualizar parcialmente**       | ❌ Depende    | `PATCH /usuarios/42` → altera só o nome, por exemplo |
| `DELETE` | **Remover** um recurso           | ✅ Sim        | `DELETE /usuarios/42` → exclui o usuário |

---

#### [HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP) Status Code

Ao retornar uma response para uma requisição retornamos um [HTTP](https://http.dog/200) `Status Code` que é utilizado para identificar o que aconteceu com a requisição.

| Status code               | Meaning                                                                                   |
|---------------------------|-------------------------------------------------------------------------------------------|
| 200 OK                    | Request was successful.                                                                   |
| 301 Moved Permanently     | For SEO purposes when a page has been moved and all link equity should be passed through. |
| 401 Unauthorized          | Server requires authentication.                                                           |
| 403 Forbidden             | Client authenticated but does not have permissions to view resource.                      |
| 404 Not Found             | Page not found because no search results or may be out of stock.                          |
| 500 Internal Server Error | Server side error. Usually due to bugs and exceptions thrown on the server side code.     |
| 503 Server Unavailable    | Server side error. Usually due to a platform hosting, overload and maintenance issue.     |

---

<img class="m-auto -z-5 left-0 top-0 right-0 bottom-0 max-w-full max-h-full absolute" src="/httpstatuscode.png"/>

---
layout: two-cols
---

#### Pros

Quais os benefícios da utilização de uma API?

- Eficiência: APIs economizam tempo e recursos ao fornecer funcionalidades pré-construídas.
- Escalabilidade: os aplicativos podem ser facilmente ampliados ou reduzidos com base na demanda.
- Inovação: as APIs permitem que os desenvolvedores criem novos aplicativos e serviços.
- Flexibilidade: Permitem integração com diversos sistemas e plataformas.

::right::

#### Cons

Quais os contras?

- Segurança: APIs podem ser vulneráveis a ataques se não forem devidamente protegidas.
- Confiabilidade: os aplicativos dependem da disponibilidade e desempenho do servidor API.
- Complexidade: Compreender e usar APIs complexas pode exigir conhecimento técnico.
- Aprisionamento de fornecedor: os desenvolvedores podem se tornar dependentes de um provedor de API específico.

---
layout: two-cols
---

### OpenAPI

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

https://en.wikipedia.org/wiki/The_Preparation_of_Programs_for_an_Electronic_Digital_Computer

https://www.openapis.org/

https://spec.openapis.org/oas/latest.html

https://editor.swagger.io/

https://experienceleague.adobe.com/pt-br/docs/platform-learn/data-collection/server-api/introduction

https://www.linkedin.com/pulse/navigating-api-landscape-top-8-architectural-styles-2023-patel/

https://aws.amazon.com/pt/compare/the-difference-between-soap-rest/

https://www.saurabhmisra.dev/rest-architectural-constraints/

https://blog.devgenius.io/the-art-of-rest-apis-a-beginners-journey-through-api-space-1975dc954e54