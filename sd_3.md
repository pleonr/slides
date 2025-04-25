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
title: Ubiquitous Computing, Clouds, IoT e Smart Environments
author: Pablo Leon Rodrigues
export:
  format: pdf
  timeout: 30000
  withClicks: false
---

---

# Sumário

- **Comunicação Direta x Indireta** {style="color: green;"}
  - Comunicação
  - Sockets
  - Representação (externa) de Dados
  - Concorrência em Sistemas Distribuídos

---

## Relembrando...

- **Middleware**
  - Sistema de comunicação
  - Responsável pelas trocas de mensagens
  - Pode funcionar como buffer para enfileiramento de mensagens
  - Pode atuar como sincronizador de processos
  - Armazena mensagens transmitidas

---

## Comunicação Direta

Na comunicação direta, os processos envolvidos na comunicação se referenciam explicitamente um ao outro.
Ou seja, um processo sabe exatamente para qual outro processo está enviando ou de quem está recebendo dados.

- Os processos se comunicam explicitamente, utilizando identificadores uns dos outros.
- Pode ser feita por meio de sockets, chamadas de procedimento remoto (RPC) ou invocações remotas de métodos (RMI).
- A comunicação pode ser síncrona (bloqueante) ou assíncrona (não bloqueante).
- Exige um nível maior de acoplamento entre os processos.

---

## Comunicação

- Trocas de informações
  - Cooperar e sincronizar aplicações
- Trocas de mensagens
  - Primitivas básicas: `send` e `receive`
  - Sobre canais de comunicação
- **Canais: fila de mensagens**
  - `Send`: adiciona
  - `Receive`: retira

---

## Canais

- Abstração da rede de comunicação
  - Conexão lógica entre os processos
- Existem entre 2 processos que trocam mensagens
- Limites de tempo:
  - Síncronos: com limite
  - Assíncronos: sem limite
- Fila de mensagens para enviadas e ainda não recebidas gerenciada pelo middleware
  - Mantém a ordem de envio do emissor
  - Emissores diferentes podem ter ordem de envio alteradas

---

## Tipos de Comunicação

### Persistente

- Mensagem armazenada até a entrega
  - O tempo necessário para a entrega ao receptor
  - Em vários recursos de armazenamento
- Emissor e receptor não precisam estar ativos simultaneamente
  - Não é necessário que a aplicação emissora continue executando após o envio
  - Aplicação receptora não necessita estar em execução no momento do envio da mensagem

### Transiente

- Mensagem armazenada apenas enquanto ambos estão ativos (interrupção)
- Descartada se middleware ou receptor não disponível

---
layout: two-cols
---

## Tipos de Comunicação

### Assíncrona

- Emissor continua sua execução logo após enviar a mensagem
  - Mensagem é imediatamente armazenada
  - Armazenamento temporário
- `Send` não bloqueante
- `Receive`: bloqueante ou não bloqueante
  - Buffer preenchido em background
  - Notificação por polling ou interrupção

::right::

### Síncrona

- `Send` e `Receive` sincronizam
- Emissor bloqueado até saber que sua mensagem foi recebida
- Emissor pode ser bloqueado por
  - Middleware assumir transmissão
  - Mensagem ser entregue ao receptor
  - Requisição ser processada
- **Discreta**: cada mensagem é uma unidade
- **Por fluxo**: várias mensagens relacionadas

---
layout: two-cols
---

## Sockets

- Ponto de comunicação entre processos (Unix BSD)
- Protocolos: **TCP** e **UDP**
- Comunicação entre o `socket` de um processo para o `socket` de outro
  - Presentes em Linux, Windows, MacOS, Android...
- Identificados por: IP, porta e protocolo
- APIs:
  - Java: `java.net`
  - Delphi: `TServerSocket`, `TClientSocket`
  - C: `socket.h`
  - Python: `socket`

::right::

Para realizar a comunicação

- Enviar: direcionar a IP e porta
- Receber: associar socket a uma porta local
- Servidores divulgam portas

---
layout: two-cols
---

## Representação Externa de Dados

- Programas lidam com:
  - Estruturas de dados
  - Objetos
- Mensagens = sequência de bytes
- Necessário converter:
  - Dados → bytes (serializar)
  - Bytes → dados (desserializar)

::right::

## Representação de Dados (cont.)

Em geral transparente nos sistemas distribuídos

- Tipos primitivos com diferentes representações
  - Inteiros: big/little endian
  - Caracteres: ASCII, Unicode
- Convertidos para formatos conhecidos
  - Indicação do formato remetente

- Formatos comuns:
  - **CDR (Corba)**
  - **XML**
  - **JSON**

---

### Representação externa de dados

Em geral transparente nos sistemas distribuídos

- **Empacotamento (marshalling)**
  - Conjunto de dados → forma transmissível (antes da serialização)

- **Desempacotamento (unmarshalling)**
  - Dados transmitidos → estrutura original (após desserialização)

---

### Implementação de Sockets em python UDP

Implementação Servidor

```python
import socket

# Cria o socket UDP
servidor_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

# Associa o socket a um endereço e porta
servidor_socket.bind(("localhost", 12345))

print("Servidor UDP aguardando mensagens...")

while True:
    mensagem, endereco = servidor_socket.recvfrom(1024)
    print(f"Recebido de {endereco}: {mensagem.decode()}")

    resposta = "Mensagem recebida com sucesso!"
    servidor_socket.sendto(resposta.encode(), endereco)
```

---

### Implementação de Sockets em python UDP

Implementação Cliente

```python
import socket

# Cria o socket UDP
cliente_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

mensagem = "Olá, servidor UDP!"
cliente_socket.sendto(mensagem.encode(), ("localhost", 12345))

resposta, _ = cliente_socket.recvfrom(1024)
print("Resposta do servidor:", resposta.decode())

cliente_socket.close()
```

---

### Implementação de Sockets em python TCP

```python
import socket

servidor_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
servidor_socket.bind(("localhost", 12345))
servidor_socket.listen(1)
print("Servidor TCP aguardando conexão...")

conn, endereco = servidor_socket.accept()
print(f"Conectado por {endereco}")

mensagem = conn.recv(1024).decode()
print(f"Mensagem recebida: {mensagem}")
resposta = "Mensagem recebida com sucesso!"
conn.send(resposta.encode())

conn.close()
servidor_socket.close()
```

---

### Implementação de Sockets em python TCP

Implementação Cliente

```python
import socket

cliente_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
cliente_socket.connect(("localhost", 12345))

mensagem = "Olá, servidor TCP!"
cliente_socket.send(mensagem.encode())

resposta = cliente_socket.recv(1024).decode()
print("Resposta do servidor:", resposta)
cliente_socket.close()
```

---

🧠 Diferenças principais em relação ao TCP:
UDP não exige conexão: não há connect() ou listen()/accept().

UDP é não confiável: mensagens podem se perder, chegar fora de ordem ou duplicadas.

UDP é mais leve, rápido e ideal para transmissões em tempo real, como streaming, jogos online, etc.

| Característica      | TCP                                           | UDP                               |
|---------------------|-----------------------------------------------|------------------------------------|
| Conexão             | Orientado a conexão                           | Sem conexão                        |
| Confiabilidade      | Garante entrega, ordem e integridade          | Não garante entrega nem ordem      |
| Velocidade          | Mais lento (pela confiabilidade)              | Mais rápido                        |
| Uso típico          | Web, e-mail, transferência de arquivos, bancos de dados | Streaming, jogos online, VoIP |


---

## Comunicação Indireta
Na comunicação indireta, os processos não precisam conhecer diretamente uns aos outros.
A troca de informações ocorre por meio de um intermediário, como filas de mensagens, sistemas de publicação/assinatura ou middleware.


- Processos não precisam conhecer diretamente seus pares.
- Usa intermediários como filas de mensagens (Message Queues), tópicos (Publish/Subscribe) ou sistemas de armazenamento compartilhado.
- Reduz o acoplamento entre os processos, facilitando a escalabilidade.
- Pode ser assíncrona por natureza, permitindo maior flexibilidade e tolerância a falhas.

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

Vamos implementar um exemplo de pub/sub com o protocolo amqp usando a biblioteca `pika` e o `rabbitmq`

---
layout: two-cols
---

### Exemplo de distribuição

Em um sistema Pub/Sub (Publicador/Assinante), o padrão `fanout` é uma forma de distribuição de mensagens onde uma única mensagem publicada é enviada para múltiplos assinantes.

- O publicador envia uma mensagem para um tópico.
- Todos os assinantes daquele tópico recebem uma cópia da mensagem.
- Isso acontece independentemente do número de assinantes.

::right::

Por que o nome "fanout"?
Imagine um leque (fan) se abrindo: uma única origem (mensagem publicada) se espalha para vários destinos (assinantes). Por isso, chamamos de "fanout".

Por exemplo, um sensor de temperatura publica dados em um tópico sensores/temperatura. Mas três sistemas diferentes assinam esse tópico:

- Um para armazenar no banco de dados.
- Outro para gerar alertas.
- Outro para exibir em um painel.

---

### 📦 Publisher (Publicador)

```python
import pika

connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
channel = connection.channel()

channel.exchange_declare(exchange='logs', exchange_type='fanout')

mensagem = "Hello, assinantes!"
channel.basic_publish(exchange='logs', routing_key='', body=mensagem)

print(f"[x] Mensagem enviada: {mensagem}")
connection.close()
```

---

### 📦 Subscriber (Assinante)

```python
import pika

connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
channel = connection.channel()

channel.exchange_declare(exchange='logs', exchange_type='fanout')

result = channel.queue_declare(queue='', exclusive=True)
queue_name = result.method.queue

channel.queue_bind(exchange='logs', queue=queue_name)

def callback(ch, method, properties, body):
    print(f"[x] Recebido: {body.decode()}")

channel.basic_consume(queue=queue_name, on_message_callback=callback, auto_ack=True)
channel.start_consuming()
```

---

#### Testando localmente

- Suba o RabbitMQ com Docker:

```bash
docker run -d --name rabbitmq \
  -p 5672:5672 -p 15672:15672 \
  rabbitmq:3-management
```

- Execute o assinante:

```bash
python subscriber.py
```

- Envie mensagens com o publisher(algumas):

```bash
python publisher.py
```

- Acesse http://localhost:15672
🔑 Login padrão, user e senha: guest

---

#### Resumindo Direta x Indireta

| Comunicação         | Direta                                                  | Indireta                                                      |
|---------------------|---------------------------------------------------------|----------------------------------------------------------------|
| Dependência entre processos | Sim (os processos precisam se conhecer)              | Não (usam um intermediário)                                    |
| Exemplo de mecanismos      | Sockets, RPC, RMI                                   | Filas de mensagens, Publish/Subscribe, Middleware              |
| Acoplamento                | Alto                                               | Baixo                                                         |
| Escalabilidade             | Limitada                                           | Maior flexibilidade                                           |
| Tolerância a falhas        | Baixa (se um processo falhar, pode afetar outro)   | Alta (intermediários ajudam na resiliência)                   |


---
layout: two-cols
---

## Concorrência em Sistemas Distribuídos

- Cooperação: computação distribuída
- Competição: uso de recursos (CPU, rede, etc.)
- Paralelismo: vários usuários simultâneos
- Concorrência é parte dos SDs

::right::

## Threads em Sistemas Distribuídos

- Threads ajudam a tratar concorrência
- Permitem assincronismo e especialização
  - Cada thread faz uma tarefa

---
layout: two-cols
---

## Aplicações de Threads

- Aplicações multitarefa
- Exemplos:
  - Editor de texto (digitar, salvar)
  - Transferência de arquivos
  - Execução de mídia
  - Jogos

::right::

## Aplicações de Threads em SD

- Acesso a I/O: evita bloqueios
- Streaming de rede
- Múltiplos usuários:
  - Servidores multiusuário
  - Clientes com múltiplas conexões
  - Comunicação indireta


---


# Referências


Material adaptado do Professor Marcelo Trindade Rebonatto