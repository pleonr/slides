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

- Cloud Computing
  - Tipos de serviços
  - Modelos de implementação
- Fog Computing
- Edge Computing

---

## Cloud computing

O National Institute of Standards and Technology
(NIST) possui um definição


A computação em nuvem é um modelo que permite acesso conveniente e sob demanda à rede, a um conjunto compartilhado de recursos computacionais configuráveis ​​(por exemplo, redes, servidores, armazenamento, aplicativos e serviços) que podem ser provisionados e liberados rapidamente com o mínimo esforço de gerenciamento ou interação com o provedor de serviços. Este modelo de nuvem promove a disponibilidade e é composto por cinco características essenciais, três modelos de serviço e quatro modelos de implantação.

https://csrc.nist.gov/projects/cloud-computing

<!-- Veras, M. Computação em Nuvem: Nova Arquitetura de TI. Brasport, 2015. Figura 2.6 -->

---
layout: two-cols
---

### On-Demand Self Service

Um consumidor pode fornecer unilateralmente capacidades de computação, automaticamente sem exigir interação humana com cada provedor do serviço.

#### Amplo acesso à rede

- disponível na rede
- acessado através de mecanismos padrão
- plataformas heterogêneas de clientes finos ou grossos

#### Elasticidade rápida

Os recursos podem ser provisionados de forma rápida e elástica, recursos virtuais ilimitados prever um teto é difícil

::right::

#### Multilocação/pool de recursos

Os recursos computacionais do provedor são agrupados para servir múltiplos consumidores.

- armazenamento de recursos de computação, processamento, memória, largura de banda de rede e
máquinas virtuais

- independência de localização sem controle sobre a localização exata dos recursos
  - tem implicações importantes em desempenho, escalabilidade, segurança


#### Segurança
A preocupação maior está na disponibilidade e não tanto na segurança, se os dados são armazenados na nuvem, sempre
haverá riscos riscos

---
layout: two-cols
---

### Grid Computing

A computação em grade utiliza vários computadores, geralmente distribuídos geograficamente, para trabalhar juntos como um supercomputador virtual e lidar com tarefas grandes e complexas que seriam impraticáveis ​​para uma única máquina.

- Combinação de recursos computacionais de vários domínios administrativos
- Aplicações:
  - Computação paralela distribuída
  - “Supercomputador” virtual

::right::

### Utility Computing

A computação utilitária é um modelo de negócio de computação em que
o provedor possui, opera e gerencia a infraestrutura e os recursos de computação, e os assinantes os acessam
conforme e quando necessário, mediante aluguel ou medição.

- Computação sob demanda com cobrança conforme uso
- Provedor gerencia infraestrutura, assinante paga por uso
- Modelo de negócio da computação

---

### Peopleware in cloud

Quem são os participantes em cloud

#### Provedores
- Fornecedores
- Empresas que prestam serviço (vendem/alugam) recursos computacionais, Capacidade de armazenamento ou processamento

#### Contratantes
- Desenvolvedores
- Empresas que contratam provedores para disponibilizar serviços aos seus clientes

#### Consumidores
- Usuários
- Pessoas ou empresas que utilizam serviços

---

### Modelos de serviço

- **SaaS** (Software as a Service)
Tudo é gerenciado pelos provedores de serviço

- **PaaS** (Platform as a Service)
Provedor fornece alto nível de integração

- **IaaS** (Infrastructure as a Service)
Contratante responsável pelo gerenciamento
“Aluga” Hardware para o serviço

<!--
• TaaS: Information Tecnology as a Service
• GaaS: Game as a Service
• CaaS: Communication as a Service
• XaaS: Everything as a Service
• Dbaas: Data Base as a Service
• SECaaS: Security as a Service
• MbaaS: Mobile "backend" as a Service
• MaaS: Mainframe as a Service
-->

---
layout: two-cols
---


### SaaS

- Provedor gerencia tudo
- Usuário apenas acessa via browser
- Exemplos:
  - Google Workspace
  - Microsoft 365
  - Cisco WebEx

::right::

### PaaS

- Infraestrutura + ferramentas de desenvolvimento
- Usuário desenvolve e disponibiliza apps
- Vantagens:
  - Rápido desenvolvimento e deploy
- Desvantagens:
  - Escolhas limitadas de tecnologia
- Exemplos:
  - Google App Engine
  - Windows Azure

---
layout: two-cols
---


### IaaS

- Recursos básicos: computação, armazenamento, rede
- Usuário controla SO e aplicações
- Escalabilidade, custo-benefício
- Exemplos:
  - Amazon EC2
  - Google Compute Engine

::right::

#### Modelos de Implementação

- **Privada**
  - Uso exclusivo de uma organização
- **Comunitária**
  - Compartilhada por organizações com objetivos comuns
- **Pública**
  - Disponível ao público via terceiros
- **Híbrida**
  - Combinação de duas ou mais nuvens

---

<img class="m-auto -z-5 bottom-0 right-0 max-w-full max-h-full" style="background-color: white" src="/cloud_services.jpg"/>


<!--on promise em casa tu faz tudo
iaas é uma pizza congelada a pizza vem pronta
pass delivery
saas restaurante-->

---
layout: piramede
---

::center::

### Fog Computing

**Fog Computing** (ou Computação em Névoa) é um modelo intermediário entre o Edge e a Nuvem. Os dados são processados em **nós intermediários** — chamados de *fog nodes* — que podem estar em roteadores, gateways, ou servidores locais próximos ao edge.

- **Exemplo**:
  Câmeras de segurança enviam vídeos para um gateway local, que faz análise de movimento antes de enviar só o que for relevante para a nuvem.

::left::

- **Vantagens**:
  - ✅ Distribuição do processamento
  - ✅ Melhor gerenciamento de dados (pré-processamento antes de ir à nuvem)
  - ✅ Maior escalabilidade em sistemas distribuídos
  - ✅ Complementa a Edge e a Cloud

::right::

- **Desvantagens**:
  - ⚠️ Privacidade e segurança
  - ⚠️ Autenticação frágil


---
layout: piramede
---

::center::

### Edge Computing

**Edge Computing** (ou Computação de Borda) é um modelo de computação em que o processamento de dados ocorre **próximo da fonte de dados**, ou seja, nos **dispositivos ou servidores locais** (a "borda" da rede), em vez de depender de data centers centralizados.

- **Exemplo**:
  Um carro autônomo processa em tempo real os dados dos sensores (câmeras, radar, etc.) no próprio veículo, sem enviar tudo para a nuvem.

::left::

- **Vantagens**:
  - ✅ Menor latência (respostas mais rápidas)
  - ✅ Redução de tráfego de rede
  - ✅ Maior confiabilidade (funciona mesmo com conexão instável)
  - ✅ Privacidade (dados podem ser processados localmente)

::right::

- **Desvantagens**:
  - ⚠️ Limitação de Hardware
  - ⚠️ Segurança
  - ⚠️ Complexidade
  - ⚠️ Custo

---

## Diferença Principal

| Conceito    | Onde processa?                  | Finalidade principal                    |
|-------------|----------------------------------|------------------------------------------|
| **Edge**    | No dispositivo ou borda da rede | Respostas rápidas e locais               |
| **Fog**     | Em nós próximos, mas não no edge| Intermediário entre borda e nuvem        |
| **Cloud**   | Data centers centralizados      | Processamento pesado e armazenamento     |





---

Prasad, Anand R.; Buford, John F. Future Internet Services and Service
Architectures. 2011.

Botta, A; De Donato, W; Persico, V; et al. Integration of Cloud computing
and Internet of Things[J]. Future Generation Computer Systems, 2016,
56(C): 684-700.

Chiang, M; Zhang, T. Fog and IoT: An Overview of Research
Opportunities[J]. IEEE Internet of Things Journal, 2016, 3: 854-864.

Waters, Ira. Introduction to cloud Computing. University of Waterloo.
https://silo.tips/download/introduction-to-cloud-computing-3

Venkatasubramanian, Nalini . Cloud Computing. University of California.
https://www.ics.uci.edu/~cs237/lectures/cloudcomputing.pptx

Rizzardi, Giovani. PPGCA – UPF. Slides da disciplina de estágio de
docência. 2018.