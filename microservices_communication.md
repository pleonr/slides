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
title: Microservices Communication
author: Pablo Leon Rodrigues
export:
  format: pdf
  timeout: 30000
  withClicks: false
---

---

<Toc columns="1" maxDepth="3"></Toc>

---

## Comunicação entre microsserviços

Dentro da Arquitetura Web baseada em microserviços um dos pontos críticos é a comunicação entre eles.
Em uma arquitetura de microsserviços, cada serviço é projetado para ser independente, mas ainda precisam 
se comunicar para cumprir os requisitos da aplicação. Escolher uma estratégia de comunicação eficaz 
entre microsserviços é crucial, pois impacta o desempenho, a confiabilidade e a manutenibilidade do sistema.

A comunicação pode ser dividida em dois padrões principais:

- Comunicação Síncrona{style="color: green;"}
  
  Utilizado em APIS REST principalmente e outros protocolos como GRPC e Graphql, dependem de um `request` e um `response`.

- Comunicação Assíncrona{style="color: green;"}

  Utilizado quando o processamento de uma requisição pode ser ou precisa ser assíncrona. Para trabalhar com esse 
  tipo de comunicação são utilizados sistemas de mensageria, streaming de eventos ou outras técnicas.
  

---

### Desafios na Comunicação entre Microsserviços

A comunicação entre microsserviços apresenta alguns desafios devido à sua natureza distribuída. Esses desafios podem afetar o desempenho, a consistência e a resiliência do sistema como um todo. Abaixo, estão alguns dos principais desafios na comunicação entre microsserviços:

1. Latência e Desempenho{style="color: green;"}
Em uma arquitetura distribuída, a comunicação entre microsserviços pode introduzir latência, especialmente em comunicações síncronas (como HTTP/REST). Cada chamada entre serviços exige tempo de rede, processamento e pode acumular latência, especialmente em sistemas onde há muitas chamadas encadeadas.
Minimizar a latência exige otimizar a comunicação e, quando possível, utilizar métodos assíncronos para reduzir o tempo de espera entre serviços.
2. Consistência dos Dados{style="color: green;"}
Garantir consistência entre microsserviços é difícil, especialmente porque cada serviço gerencia seu próprio banco de dados. Diferentes serviços podem ter visões diferentes dos dados em um determinado momento.
Técnicas como o padrão Saga ou eventual consistency (consistência eventual) ajudam a mitigar esses problemas, mas exigem um planejamento cuidadoso para garantir que o sistema se comporte conforme esperado.

---

3. Gestão de Erros e Tolerância a Falhas{style="color: green;"}
Falhas de comunicação são comuns, se um serviço dependente falha ou fica temporariamente indisponível, isso pode afetar outros serviços.
Padrões como Circuit Breaker (Disjuntor), Retry (Re-tentativa) e Fallback (Retorno Alternativo) ajudam a lidar com falhas de maneira controlada. O Circuit Breaker, por exemplo, interrompe temporariamente chamadas para um serviço problemático, enquanto o Retry tenta repetir chamadas com falhas antes de desistir.
4. Gerenciamento de Segurança{style="color: green;"}
Cada microsserviço requer autenticação e autorização para garantir que dados e operações sejam acessados apenas por serviços autorizados. Ferramentas como OAuth, JSON Web Tokens (JWT), e autenticação de API ajudam na proteção, mas adicionar esses controles em cada serviço aumenta a complexidade.
5. Monitoramento e Observabilidade{style="color: green;"}
Em uma arquitetura de microsserviços, rastrear o caminho de uma requisição que passa por vários serviços é desafiador. É necessário monitorar e observar a saúde dos serviços, identificando onde ocorrem problemas e gargalos.
Ferramentas de rastreamento distribuído, como Graphana, Datadog, NewRelic e Prometheus, ajudam a monitorar o fluxo entre serviços e a identificar problemas de desempenho e falhas de comunicação.

<!--
6. Gerenciamento de Escalabilidade
7. Orquestração vs. Coreografia
8. Dependências de Tempo de Execução
9. Problemas de Versão e Compatibilidade
10. Problemas de Dependência e Acoplamento
-->

---
layout: image-right
image: /alexander-graham-bell.avif
---

## Why

Em 1876 Alexander Graham Bell fez a primeira chamada telefonica e registrou a patente do telefone. E a forma inicial
era através de uma conexão direta entre cada ponto de telefone para cada outro ponto.

Ou seja para cada ligação entre uma casa e outro precisava de um cabo entre elas, um ano depois em 1878, a confusão 
entre cabos passando por cima de postes, árvores e casas foi uma bagunça.

Para resolver esse problema Grambell utilizou de uma companhia telefonica a primeira desse tipo, onde cada casa era 
conectada a telefonica que fazia o redicionamento da chamada para o local correto.

<!--
Alexander Graham Bell was a Scottish-born Canadian-American inventor, scientist, 
and engineer who is credited with patenting the first practical telephone. 
He also co-founded the American Telephone and Telegraph Company in 1885.
-->

---
layout: two-cols
---

## Load Balancer

O balanceamento de carga é a técnica usada para distribuir com eficiência solicitações de rede recebidas em um grupo de servidores e microsserviços na web.
Ele funciona como um "gerenciador", para dividir a carga entre diversos serviços garantindo nenhum fique sobrecarregado ou ocioso.

Diversos softwares existem para fazer o trabalho de Load Balancer dentre eles podemos destacar o Apache e o NGINX.

Para isso algum algoritmo de loadbalance é aplicado, dentre eles podemos destacar...

::right::

<img class="m-auto -z-5 top-0 left-0 right-0 max-w-full absolute" style="background-color: white" src="/apache.png"/>

<img class="m-auto -z-5 left-0 bottom-0 right-0 max-w-full absolute" style="background-color: white" src="/nginx.png"/>

<!-- Beneficios do load balance
Reduced downtime
Scalable
Efficiency
Redundancy
Flexibility
-->

---
layout: two-cols
---

- Round Robin:{style="color: green;"} As solicitações do cliente são distribuídas em todo o grupo de servidores disponíveis em ordem seqüencial.
- Sticky Round Robin:{style="color: green;"} Este é um algoritmo de melhoria do Round-Robin. 
Se o usuário envia uma primeira solicitação e esta for atendida pelo Serviço A, as seguintes solicitações desse usuário vão para o Serviço A também.
- Least Connections:{style="color: green;"} Uma nova solicitação é enviada ao servidor com o menor número de conexões abertas.
A capacidade de computação relativa de cada servidor é considerada para determinar qual deles tem as menos conexões.
Esse algoritmo assume que todas as conexões requerem potência de processamento quase igual.

::right::

- Least Time:{style="color: green;"} envia solicitações ao servidor selecionado por uma fórmula que combina o tempo de 
resposta mais rápido e o menor número de conexões ativas.
- Hash:{style="color: green;"} distribui solicitações com base em uma chave que você define, como o endereço IP do cliente ou o URL da solicitação.
- IP Hash:{style="color: green;"} o endereço IP do cliente é usado para determinar qual servidor recebe a solicitação.Este método suporta a persistência da sessão.
- Random two choices:{style="color: green;"} escolhe dois servidores aleatoriamente e envia a solicitação para os de servidores selecionados e, em seguida, aplica o algoritmo de menos conexões.

---
layout: piramede
---


::center::

## Forward Proxy x Reverse Proxy

Proxies são elementos essenciais em redes de computadores e desempenham papéis importantes em segurança, desempenho e controle de acesso.

::left::

#### Forward proxy

Um forward proxy atua como um intermediário entre os clientes e a internet, direcionando as requisições dos clientes para os servidores externos. 
É usado principalmente para controle de acesso à internet, cache de conteúdo, segurança e anonimização.

- Proteger clientes
- Controlar acessos
- Bloquear conteúdo
- Cache


::right::

#### Reverse proxy

O reverse proxy atua como um intermediário entre os clientes e os servidores. 
Ele recebe as requisições dos clientes e as encaminha para o servidor correto na rede interna.
Ele é muito utilizado para balanceamento de carga, roteamento de requisições, cache de conteúdo e segurança.

- Proteger servidores
- Aumentar o desempenho
- Balanceamento de carga
- Cache
- Criptografar e descriptografar as comunicações SSL


<!-- 
Mais utilizado quando se tem um cluster de serviços em uma intranet
Utilizado para fazer a comunicação entre uma rede fechada e a internet

Nginx, apache, haproxy
-->

---

<img class="m-auto -z-5 left-0 right-0 top-0 bottom-0 max-w-full max-h-full absolute" style="background-color: white"  src="/reverseproxy.webp"/>

---
layout: two-cols
---

## API Gateway

Um Gateway da API é um componente de rede que funciona entre o cliente e os serviços de backend.
Em vez de se comunicar diretamente com seu backend, os clientes enviam suas chamadas apenas para o gateway da API.

Lá, as solicitações recebidas podem ser processadas diretamente ou encaminhadas para os serviços subjacentes.

Um API pode implementar os serviços de Reverse Proxy e Load Balance, além de outras funcionalidades.

Dentre as alternativas recomendo o Kong e o [express gateway](https://www.express-gateway.io/)

::right::

<img class="m-auto -z-5 left-0  max-w-full max-h-full absolute" style="background-color: white" src="/kong.png"/>
<img class="m-auto -z-5 left-0  bottom-0 max-w-full max-h-full absolute" style="background-color: white"  src="/expressgateway.png"/>

<!--
 Autenticação
 Controle de acesso
 Roteamento
 Monetização
 Rate Limit
 Load balance
 Caching
 Monitoring, loging
 Monetizing
 -->

---

<img class="m-auto -z-5 left-0 right-0 top-0 bottom-0 max-w-full max-h-full absolute"  src="/apigatway.png"/>

---
layout: two-cols
---

## Message Broker

Message brokers também conhecidos como sistemas de messageria, são sistemas desenhados para facilitar a troca de
mensagens entre diferentes aplicações, serviços ou 
sistemas. Eles desacoplam o remetente (producer) de uma mensagem do receptor (consumer), permitindo sistemas mais 
escaláveis, confiáveis e de fácil manutenção.

[![](/Kafka.png)](https://kafka.apache.org/)
<br><br>
[![](/rabbitmq-logo-with-name.svg)](https://www.rabbitmq.com/)

::right::

<br>
<br>

[![](/amazonsqs.png)](https://aws.amazon.com/pt/sqs/)

<br><br>
<div style="background-color: white">
    <a href="https://activemq.apache.org/" target="_blank"><img src="/activemq.svg"/></a>
</div>


<!--
Message brokers são uma espécie de Load Balancer
The main difference between them is that Kafka is a distributed event streaming platform designed to ingest and process
massive amounts of data, while ActiveMQ is a traditional message broker that supports multiple protocols and flexible
messaging patterns.
-->

---

Por que usamos sistemas de messageria

- **Dissociação**: Produtores e consumidores não precisam se conhecer ou estar online simultaneamente.
- **Escalabilidade**: Eles permitem expandir produtores e consumidores de forma independente. 
- **Confiabilidade**: Eles podem persistir mensagens para garantir a entrega mesmo que o consumidor esteja temporariamente indisponível. 
- **Balanceamento de carga**: distribui mensagens uniformemente entre os consumidores. 
- **Comunicação assíncrona**: suporta comunicação sem bloqueio entre serviços.

---

## Funcionamento

- **producers**: aplicativos ou serviços que enviam mensagens para um agente de mensagens.
- **brokers**: sistemas que recebem, armazenam e encaminham mensagens. 
- **consumers**: aplicativos ou serviços que recebem mensagens de um agente de mensagens.

Sendo o fluxo geralmente dessa forma

* Um produtor envia uma mensagem para uma fila ou tópico específico no intermediário de mensagens. 
* O agente de mensagens armazena a mensagem no queuetopic especificado. 
* Um consumidor se inscreve no queuetopic para receber e processar mensagens.

---

## Protocolo AMQP

Dentre vários protocolos que podem ser utilizados para message brokers, vou falar um pouco do
Advanced Message Queuing Protocol (AMQP )... Protocolo Avançado de Enfileiramento de Mensagens em português, 
é um protocolo aberto e padronizado de camada de aplicação para Middleware Orientado a Mensagens (MOM).

Ele foi projetado para envio e recebimento de mensagens assíncronas ou seja que talvez e normalmente não tenham uma 
resposta imediata, o objetivo dele é ser altamente confiável, flexível e seguro para utilização em sistemas distribuídos.

<br> <br> <br>
<a href="https://www.amqp.org/" target="_blank">
    <img class="m-auto" src="/amqp-logo.png"/>
</a>

---

Características principais do AMQP:

- Orientação a mensagens: A comunicação no AMQP é feita por meio da troca de mensagens, que são unidades de dados autodescritivas que podem conter diversos tipos de informações.
- Roteamento: As mensagens podem ser roteadas para diferentes destinos com base em critérios predefinidos, como chaves de roteamento ou tópicos. Isso permite que os aplicativos publiquem mensagens e assinem tópicos específicos para receber apenas as mensagens relevantes para eles.
- Confiabilidade: O AMQP oferece vários mecanismos para garantir a entrega confiável de mensagens, incluindo confirmações de entrega, retransmissão automática e armazenamento persistente.
- Segurança: O AMQP suporta autenticação, autorização e criptografia para proteger as mensagens contra acesso não autorizado e adulteração.

---

Componentes principais do AMQP:

- Cliente: Um cliente AMQP é qualquer aplicativo que se conecta a um broker AMQP para enviar ou receber mensagens.
- Broker: Um broker AMQP é um servidor central que gerencia o roteamento e a entrega de mensagens entre clientes.
- Exchange: Uma exchange é um componente do broker que roteia mensagens para filas ou tópicos com base em critérios predefinidos.
- Fila: Uma fila é um armazenamento temporário para mensagens que aguardam serem consumidas por um cliente.
- Tópico: Um tópico é um tipo especial de exchange que publica mensagens para todos os clientes que assinaram esse tópico.


---

## pub/sub

O padrão Pub/Sub (Publicação/Assinatura) é um modelo de comunicação assíncrona amplamente utilizado para desacoplar
os produtores e consumidores de mensagens.

Ele permite que os aplicativos publiquem mensagens em um tópico central e que outros aplicativos se inscrevam
para receber essas mensagens. 

As mensagens são entregues aos assinantes de forma assíncrona, o que significa que o editor e os assinantes não
precisam estar disponíveis ao mesmo tempo para que a comunicação ocorra.




---

https://medium.com/@dinubhagya97/load-balncing-f9e5a120a402

https://www.umlboard.com/design-patterns/api-gateway

https://ngrok.com/blog-post/reverse-proxy-vs-api-gateway

https://www.youtube.com/watch?v=0frGo7vJV30&t=2s
