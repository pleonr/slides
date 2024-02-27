---
layout: image-right
theme: default
class: text-center
highlighter: shiki
mdc: true
drawings:
  persist: false
title: Design de Software
image: /side-logo.png
selectable: true
colorSchema: dark
export:
  format: pdf
  timeout: 30000
  dark: false
  withClicks: false
---
<br><br>
# Design de Software
<br><br>
##### Pablo Leon Rodrigues

<div class="abs-br m-6 opacity-50 display: flex">
	<a href="https://github.com/pleonr" target="_blank" >
    	<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4.44c-.32-.07-.33-.68-.33-.89l.01-2.47c0-.84-.29-1.39-.61-1.67c2.01-.22 4.11-.97 4.11-4.44c0-.98-.35-1.79-.92-2.42c.09-.22.4-1.14-.09-2.38c0 0-.76-.23-2.48.93c-.72-.2-1.48-.3-2.25-.31c-.76.01-1.54.11-2.25.31c-1.72-1.16-2.48-.93-2.48-.93c-.49 1.24-.18 2.16-.09 2.38c-.57.63-.92 1.44-.92 2.42c0 3.47 2.1 4.22 4.1 4.47c-.26.2-.49.6-.57 1.18c-.52.23-1.82.63-2.62-.75c0 0-.48-.86-1.38-.93c0 0-.88 0-.06.55c0 0 .59.28 1 1.32c0 0 .52 1.75 3.03 1.21l.01 1.53c0 .21-.02.82-.34.89H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" fill="currentColor"/></svg>
    </a>
    <a href="mailto:pablo.leonrodrigues@gmail.com" target="_blank" >
    	<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm1.4 3.5h11.2c.77 0 1.4.62 1.4 1.4v8.2a1.4 1.4 0 0 1-1.4 1.4H6.4c-.77 0-1.4-.63-1.4-1.4V7.9c0-.78.62-1.4 1.4-1.4M6 8v2l6 4l6-4V8l-6 4z"/></svg>
    </a>
    <a href="https://www.linkedin.com/in/pablo-leon-rodrigues-9b47a824/" target="_blank" >
    	<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg>
    </a>
    <a href="https://leon.dev.br" target="_blank" >
    	<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M8.95 13.4H6.58a5.5 5.5 0 0 1 0-2.8h2.37a11.56 11.56 0 0 0-.1 1.4a11.56 11.56 0 0 0 .1 1.4M7.16 9.2H9.2a12.06 12.06 0 0 1 .98-2.49A5.55 5.55 0 0 0 7.16 9.2m9.68 0a5.59 5.59 0 0 0-3.03-2.49a10.95 10.95 0 0 1 .97 2.49M12 17.57a9.5 9.5 0 0 0 1.34-2.77h-2.68A9.5 9.5 0 0 0 12 17.57m0-11.15a9.53 9.53 0 0 0-1.34 2.78h2.68A9.53 9.53 0 0 0 12 6.42M7.16 14.8a5.61 5.61 0 0 0 3.02 2.49a12.06 12.06 0 0 1-.98-2.49M21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2m-2 7a7 7 0 1 0-7 7a7 7 0 0 0 7-7m-3.85 0a11.56 11.56 0 0 1-.1 1.4h2.37a5.5 5.5 0 0 0 0-2.8h-2.37a11.56 11.56 0 0 1 .1 1.4m-1.34 5.29a5.62 5.62 0 0 0 3.03-2.49h-2.06a10.95 10.95 0 0 1-.97 2.49m-3.45-6.69a8.81 8.81 0 0 0 0 2.8h3.28a10.3 10.3 0 0 0 .11-1.4a10.21 10.21 0 0 0-.11-1.4Z"/></svg>
    </a>
</div>

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
