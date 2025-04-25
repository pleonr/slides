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

## Sumário

- Introdução a IoT
- Definições
- Histórico
- Arquitetura em camadas
- Modelos de comunicação
- IoT, M2M, Fog/Edge
- Aplicações de IoT e limitações

---

## Internet

- Rede mundial que interconecta diversas redes de:
  - Países
  - Empresas
  - Organizações
- Suporta múltiplas aplicações
- Comunicação entre pessoas, empresas, objetos

---

<img class="m-auto -z-5 bottom-0 right-0 max-w-full max-h-full" style="background-color: white" src="/historyofinternet.png"/>

---
layout: two-cols
---

## Evolução da Internet e Web

- Web 1.0: read only web
  - Web do conhecimento
  - Conexão entre pessoas
  - Sem interatividade com os sites

- Web 2.0: read-write web
  - Web da comunicação
  - Web via de mão dupla
  - Grande interatividade pelas plataformas (redes sociais)

::right::

- Web 3.0
  - Cruzamento de dados
  - Informações lidas por dispositivos, fornecendo informações
  - semântica, Objetos interagem com pessoas e outros objetos


## Internet das Coisas (IoT)

- Conecta "coisas" (objetos físicos com sensores, controle e comunicação)
- Integra dispositivos com software embarcado e conectividade
- Permite trocas inteligentes de informações como um sistema nervoso digital

---

<img class="m-auto -z-5 bottom-0 right-0 max-w-full max-h-full" style="background-color: white" src="/webtimeline.jpg"/>

---
layout: two-cols
---

## Histórico e Definições

Kevin Ashton é às vezes chamado de "Inventor da IoT", pois usou o termo pela primeira vez em 1999 para descrever um sistema em que a internet se conecta ao mundo físico por meio de sensores onipresentes.

- **Termo IoT**: criado em 1999, uso de RFID para logística
- **Definições**:
  - Presença de objetos inteligentes conectados
  - Comunicação com base em padrões
  - Autonomia e interoperabilidade
- Exemplo: CASAGRAS, Atzori et al., Vermesan et al., Minerva et al.

::right::

<q>The Internet of Things has the potential to change the world, just as the Internet did. Maybe even more so.</q>

<q>A Internet das coisas tem o potêncial para mudar o mundo, bem como a internet fez. Talvez até mais.</q>

---

<img class="m-auto -z-5 bottom-0 right-0 max-w-full max-h-full" style="background-color: white" src="/kevinashton2.webp"/>


---
layout: piramede
---

::center::

## Arquitetura em Camadas

A arquitetura em camadas na IoT (Internet das Coisas) organiza os componentes de sistemas IoT de maneira hierárquica, facilitando a integração, gerenciamento e segurança. Existem modelos com 3 e 5 camadas, dependendo do nível de detalhamento desejado.

::left::

### 3 Camadas (básica)
- Sensores/Atuadores
- Comunicação
- Aplicações

::right::

### 5 Camadas (expandida)
- Percepção
- Rede
- Gerenciamento de recursos
- Processamento
- Aplicação

---

## Modelo de 3 Camadas

1. **Camada de Percepção (Perception Layer)**
   - Responsável por coletar dados do ambiente físico.
   - Inclui sensores, RFID, câmeras, atuadores etc.
   - Interface entre o mundo real e o mundo digital.

2. **Camada de Rede (Network Layer)**
   - Transmite os dados coletados para sistemas de processamento.
   - Utiliza tecnologias como Wi-Fi, 4G/5G, ZigBee, LoRa, etc.
   - Pode incluir gateways e roteadores.

3. **Camada de Aplicação (Application Layer)**
   - Processa e exibe os dados ao usuário final.
   - Ex: dashboards, aplicativos móveis, sistemas de controle.
   - Fornece serviços específicos conforme a aplicação (agro, saúde, indústria etc.).

---
layout: two-cols
---

## Modelo de 5 Camadas

1. **Camada de Percepção**
   - Coleta de dados físicos com sensores e atuadores.

2. **Camada de Rede**
   - Transmissão dos dados para camadas superiores.

3. **Camada de Processamento (Processing Layer)**
   - Processamento local ou na nuvem (edge, fog ou cloud computing).
   - Agrega, filtra e analisa os dados recebidos. Resposta rápida.

::right::

4. **Camada de Serviço (Service Layer)**
   - Gerencia os serviços oferecidos pelo sistema IoT.
   - Abstrai a lógica de negócio e direciona os dados para os aplicativos corretos.
   - Middleware e APIs estão presentes aqui.

5. **Camada de Aplicação**
   - Interface com o usuário.
   - Exibe os resultados processados.
   - Adapta-se ao domínio de aplicação (smart home, saúde, cidades inteligentes etc.).

---

## Comparativo Rápido

| Camada                  | 3 Camadas       | 5 Camadas             |
|------------------------|-----------------|------------------------|
| Percepção              | ✅              | ✅                    |
| Rede                   | ✅              | ✅                    |
| Processamento          | ❌              | ✅                    |
| Serviço                | ❌              | ✅                    |
| Aplicação              | ✅              | ✅                    |


---

## Modelos de Comunicação IoT (RFC 7452)

A RFC 7452 descreve os principais modelos de comunicação usados em aplicações de IoT, considerando os desafios de dispositivos com recursos limitados. Esses modelos ajudam a guiar o projeto de sistemas eficientes e interoperáveis.

### 1. Comunicação Dispositivo para Dispositivo (Device-to-Device - D2D)

- Comunicação direta entre dois dispositivos IoT.
- Pode usar protocolos como CoAP ou MQTT.
- Exemplo: Um sensor de movimento aciona diretamente uma lâmpada inteligente.

#### Características:

- Baixa latência
- Sem necessidade de um servidor central
- Desafiador em termos de segurança e descoberta de serviços

---
layout: two-cols
---

### 2. Comunicação Dispositivo para Servidor (Device-to-Server - D2S)

<br>
- Dispositivos se comunicam com servidores na nuvem ou edge.
- Os dados são armazenados, processados ou analisados remotamente.

<br><br>

#### Características:
- Alta escalabilidade
- Centralização do processamento
- Ideal para análise de big data ou dashboards

::right::

### 3. Comunicação Servidor para Servidor (Server-to-Server - S2S)

<br>
- Troca de dados entre servidores que coletam informações de diferentes dispositivos ou regiões.
- Exemplo: integração entre sistemas de uma cidade inteligente (trânsito e energia).

<br><br>

#### Características:
- Integração de sistemas diversos
- Escalável e flexível
- Pode usar REST, HTTP, CoAP etc.

---
layout: two-cols
---

### 4. Comunicação Dispositivo para Interface do Usuário (Device-to-User Interface)

- Dispositivo envia dados diretamente a um cliente (aplicativo móvel, navegador etc.).
- Interface humana com o sistema IoT.

#### Características:
- Foco na interação com o usuário
- Pode ocorrer via web, apps móveis ou painéis embarcados
- Exemplo: sensor envia notificação para app de smartphone

::right::

## Considerações da RFC 7452

- **Eficiência de rede**: essencial para dispositivos com pouca energia e largura de banda.
- **Escalabilidade**: arquiteturas devem crescer conforme o número de dispositivos aumenta.
- **Segurança e privacidade**: fundamentais em qualquer modelo de comunicação.
- **Descoberta de serviços**: dispositivos devem ser capazes de encontrar e se conectar com outros facilmente.

---

## Protocolos Típicos em IoT

| Protocolo | Uso Típico             | Modelo Comum      |
|-----------|------------------------|-------------------|
| CoAP      | Comunicação leve (REST)| D2D, D2S          |
| MQTT      | Publish/Subscribe      | D2S, S2S          |
| HTTP/REST | Comunicação web        | D2S, S2S, UI      |

---
layout: two-cols
---

## Aplicações de IoT

- Residências
  - Segurança, climatização, sustentabilidade
- Transporte
  - Rastreamento, horários, detecção de falhas
- Automóveis
  - Direção autônoma, estacionamento automático
- Agronegócio
  - Monitoramento de clima, solo, rastreamento animal


### Limitações e Desafios
- Segurança e privacidade
- Interoperabilidade
- Evolução tecnológica rápida
- Critérios para adoção

::right::

### Novos Termos em IoT

- **IoMT**: Internet das Coisas Médicas / Multimídia / Militares
- **IIoT**: Industrial
- **AIoT**: Agricultura
- **IoCT**: Cidades
- **IoFT**: Finanças
- **IoG**: Bens
- **IoV**: Veículos
- **IoE**: Energia

### Dado vs Informação

- Um número isolado (ex: 38) não é informação útil
- Contextualizar: 38°C na pessoa X, armazenado, comunicado → **informação útil**
- Necessidade de coleta, armazenamento e análise

---












---

http://ahmadfaizar.blogspot.com/2018/08/evolution-of-web-web-10-web-20-web-30.html

https://www.giganet.uk/2022/03/18/a-brief-history-of-the-internet/




