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
title: Message Brokers
author: Pablo Leon Rodrigues
export:
  format: pdf
  timeout: 30000
  withClicks: false
---

---

<Toc columns="1" maxDepth="3"></Toc>

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
The main difference between them is that Kafka is a distributed event streaming platform designed to ingest and process
massive amounts of data, while ActiveMQ is a traditional message broker that supports multiple protocols and flexible
messaging patterns.
-->

---

## Why

Em 1876 Alexander Graham Bell fez a primeira chamada telefonica e registrou a patente do telefone. E a forma inicial
era através de uma conexão direta entre cada ponto de telefone para cada outro ponto.

Ou seja para cada ligação entre uma casa e outro precisava de um cabo entre elas, um ano depois em 1878, a confusão 
entre cabos passando por cima de postes, árvores e casas foi uma bagunça.

Para resolver esse problema Grambell utilizou de uma companhia telefonica a primeira desse tipo, onde cada casa era 
conectada a telefonica que fazia o redicionamento da chamada para o local correto.

Hoje utilizamos message brokers para resolver um problema similar.

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

