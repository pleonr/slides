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
title: Design de Software
author: Pablo Leon Rodrigues
export:
  format: pdf
  timeout: 30000
  withClicks: false
---

---

<Toc maxDepth="2"></Toc>

---

## Design de Software

O design de software é a ponte entre a compreensão de um problema e a construção de uma solução de software. Trata-se 
de traduzir requisitos e ideias em um modelo que os desenvolvedores possam usar para codificar de maneira eficaz.

- Prever e definir: É o processo de conceituar como resolver um problema com software, definindo sua estrutura, 
componentes e interações.
- Equilibrar metas e restrições: envolve considerar fatores como funcionalidade, desempenho, escalabilidade, 
capacidade de manutenção e orçamento.
- Múltiplas abordagens: Existem diferentes abordagens de design, cada uma com seus próprios pontos fortes e fracos.
Os mais comuns incluem design orientado a objetos, design baseado em componentes e arquitetura de microsserviços.

---

## Etapas

As etapas mais comuns consistem em:

- Levantamento e análise de requisitos: Compreender o que o software precisa fazer e suas limitações.
- Design de alto nível: Criando uma visão geral da arquitetura e dos componentes.
- Projeto detalhado: Especificando o funcionamento interno de cada componente e suas interações.
- Implementação: os desenvolvedores traduzem o design em código.
- Teste e refinamento: Validação do design em relação aos requisitos e iteração com base no feedback.

---

## Benefícios

Existe vantagem em toda essa burocrácia?

- Desenvolvimento eficiente: O design claro e bem estruturado economiza tempo e esforço durante a codificação.
- Código sustentável: fácil de entender e modificar alterações futuras.
- Software escalável e confiável: pode lidar com demandas crescentes e situações inesperadas.
- Custos reduzidos: Desenvolvimento e manutenção eficientes economizam recursos.

---

## Arquitetura Tradicional

A arquitetura tradicional, também conhecida como monolítica ou de Cliente/Servidor, nesse modelo de arquitetur a maior 
parte do processamento é realizada no lado do servidor, normalmente usando o padrão MVC(model, view, controller).

![](/monolito.png)

---

## Arquitetura Multicamadas

Arquitetura de Multicamadas, baseada em Serviços ou de micro serviços, nesse modelo de arquitetura
o cliente incorpora parte do processamento. Regras de negócio no servidor. Comunicação HTTP. 
Aplicação no cliente e tráfego de dados no formato JSON, XML, possuí menor acoplamento e possibilita
a multiplataforma.

![](/multicamadas.png)

---

## Serverless

Uma abordagem de design de software em que você não gerencia a infraestrutura subjacente (servidores, 
sistemas operacionais, etc.). 

- Funções como serviço (FaaS): blocos de construção essenciais de aplicativos sem servidor.
Trechos de código escritos em várias linguagens (por exemplo, Python, Node.js) executados em resposta a eventos.
- Eventos: gatilhos que ativam funções, como solicitações HTTP, alterações no banco de dados ou eventos agendados.
- Microsserviços: As funções são frequentemente combinadas em microsserviços para aplicações maiores,
cada uma implantável e escalonável de forma independente.
- APIs sem servidor: APIs criadas usando funções sem servidor, oferecendo uma maneira escalonável e econômica
de expor funcionalidades.

<!-- 
- Benefits:
Faster Development: Focus on code, not infrastructure management.
Increased Scalability: Cloud providers handle scaling automatically, adapting to demand spikes.
Cost-Effective: Pay only for the resources used, avoiding idle server costs.
Improved Reliability: Cloud providers manage infrastructure for high availability and fault tolerance.
- Drawbacks:
Vendor Lock-in: Deep integration with specific cloud provider platforms.
Cold Starts: Functions may take longer to execute initially due to container spin-up.
Debugging Complexity: Debugging issues across distributed functions can be challenging.
-->

---

![](/tecnologias.png)

---

## Bibliografia


https://martinfowler.com/

- Clean Code: A Handbook of Agile Software Craftsmanship by Robert C. Martin: This classic text emphasizes writing clean, readable, and maintainable code, focusing on principles and best practices.
- Design Patterns: Elements of Reusable Object-Oriented Software by Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides: This influential book introduces the concept of design patterns, offering reusable solutions to common design problems.
- Head First Design Patterns by Eric Freeman and Elisabeth Robson: This visually engaging book uses diagrams and humor to explain design patterns, making them more accessible to beginners.
- Agile Software Development: Principles, Patterns, and Practices by Robert C. Martin: This book explores agile software development principles and how they impact design decisions.


https://docs.datadoghq.com/serverless/

https://www.serverless.com/blog/how-serverless-cloud-works-part-1
