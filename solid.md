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
title: S.O.L.I.D.
author: Pablo Leon Rodrigues
export:
  format: pdf
  timeout: 30000
  withClicks: false
---

---

<Toc maxDepth="2"></Toc>

---
layout: image-right
image: /RobertCMartin.jpg

---

## Contexto

Publicado em 2000 em um paper intitulado ["Design Principles and Design Patterns"](https://web.archive.org/web/20150906155800/http://www.objectmentor.com/resources/articles/Principles_and_Patterns.pdf) por Robert C. Martin **(Aka. Uncle Bob)**.

SOLID é um acrônimo para cinco princípios de design orientado a objetos que visam melhorar a legibilidade, manutenção e flexibilidade do código. 

![](/uncleBobBooks.png)


---

## S - Single Responsibility Principle (SRP) {style="color: blue;"}

O SRP define que uma classe ou módulo deve ter apenas uma razão para mudar, ou seja,
deve possuir uma única responsabilidade. 
Em termos simples, cada classe, função, ou módulo deve focar em realizar uma única tarefa ou propósito.

Se uma classe tem várias responsabilidades, ela pode ser afetada por mudanças em qualquer uma
dessas responsabilidades, tornando o código mais suscetível a falhas. 

- Manutenção facilitada:{style="color: green;"} Se uma classe faz apenas uma coisa, é mais fácil localizar e corrigir problemas quando algo der errado.
- Redução de acoplamento:{style="color: green;"} Classes com responsabilidades únicas tendem a ser menos dependentes umas das outras, o que facilita a refatoração e evolução do sistema.
- Reutilização de código:{style="color: green;"} Classes pequenas e especializadas são mais fáceis de reutilizar em diferentes contextos.
- Testabilidade:{style="color: green;"} Classes que cumprem apenas uma responsabilidade têm menos dependências e cenários a serem testados, facilitando a criação de testes unitários.


---
layout: two-cols
---

```typescript
class Report {
  generate() {
    // gerar o relatório
  }

  format() {
    //   formatar o relatório
  }

  sendByEmail() {
    // lógica para enviar
  }
}
```

::right::

```typescript
class ReportGenerator {
  generate() {
    //gerar o relatório
  }
}

class ReportFormatter {
  format() {
    //formatar o relatório
  }
}

class EmailSender {
  send(report: Report) {
    // lógica para enviar
  }
}

```

---

## O - Open/Closed Principle (OCP){style="color: blue;"}

O Open/Closed Principle afirma que uma classe, módulo ou função deve estar aberto para extensão,
mas fechado para modificação. Isso significa que o comportamento de um sistema deve poder ser estendido sem a 
necessidade de alterar o código-fonte existente.

A ideia principal é separar o código que pode mudar do que permanece estável. 
Para isso, você pode usar abstrações, como interfaces, herança e polimorfismo, dependendo da linguagem utilizada.

- Maior flexibilidade e extensibilidade:{style="color: green;"} Você pode adicionar novos comportamentos ao software sem alterar seu funcionamento atual, facilitando a evolução do código.
- Menos risco de bugs:{style="color: green;"} Como você não modifica o código que já está em produção, reduz-se o risco de introduzir novos problemas ao adicionar funcionalidades.
- Reutilização de código:{style="color: green;"} As abstrações utilizadas para aplicar o OCP incentivam a reutilização de componentes, o que torna o código mais eficiente.

---
layout: two-cols
---

```typescript
class Discount {
  calculate(type: string): number {
    if (type === 'regular') {
      return 0.1;
    } else if (type === 'vip') {
      return 0.2;
    } else {
      return 0;
    }
  }
}
```

::right::

```typescript
interface Discount {
  calculate(): number;
}

class Regular implements Discount {
  calculate(): number {
    return 0.1;
  }
}
class VIP implements Discount {
  calculate(): number {
    return 0.2;
  }
}
```

---
layout: image-right
image: /BarbaraLiskov.jpg
backgroundSize: fit
---

## L - Liskov Substitution Principle (LSP){style="color: blue;"}

O princípio de substituição de [Liskov](https://www.youtube.com/watch?v=-Z-17h3jG0A), proposto por [Barbara Liskov](https://pmg.csail.mit.edu/~liskov/), afirma que objetos de uma classe derivada (subclasse) devem poder ser substituídos por objetos da classe base (superclasse) sem alterar as propriedades corretas do programa.

Se você tem uma classe base e uma subclasse que herda dela, a subclasse deve preservar o comportamento esperado da classe base. Caso contrário, a herança não está sendo aplicada corretamente, e isso pode quebrar o código que utiliza a classe base.

<!--
## Importância do LSP:
- Consistência: Seguir o LSP garante que classes derivadas mantenham o comportamento esperado, o que promove consistência no código.
- Segurança: O princípio ajuda a prevenir erros em tempo de execução, pois você não precisará lidar com comportamento inesperado ao usar subclasses.
- Manutenibilidade: Quando o LSP é respeitado, fica mais fácil evoluir o sistema, adicionar novas classes e garantir que o comportamento das classes existentes permaneça correto.
## Aplicação do LSP:
- Evite criar subclasses que não respeitem a funcionalidade da superclasse: Se uma subclasse quebra a funcionalidade esperada da superclasse, o LSP está sendo violado. É melhor repensar a hierarquia de classes.
- Subclasses não devem introduzir restrições: As subclasses devem se comportar da mesma maneira ou estender o comportamento da classe base, nunca restringi-lo.
- Métodos substitutos devem seguir a semântica da classe base: Quando sobrescrevendo métodos, certifique-se de que a lógica ainda faça sentido para a classe base.
-->

---
layout: two-cols
---

```typescript{all|1-5|7|8-10|none}
class Bird {
  fly() {
    console.log("pássaro voando");
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error("Pinguins não voam");
  }
}
```

::right::

```typescript{none|1-3|5-9|11-16|all}
class Bird {
  // comportamentos de todos os pássaros
}

class FlyingBird extends Bird {
  fly() {
    console.log("pássaro voando");
  }
}

class Penguin extends Bird {
  // pinguins não podem voar
  swim() {
    console.log("O pinguim nada");
  }
}
```

---

## I - Interface Segregation Principle (ISP){style="color: blue;"}

O ISP afirma que os clientes não devem ser forçados a depender de interfaces que não utilizam. Em outras palavras, uma interface deve ser específica para as necessidades dos clientes que a utilizam, em vez de ser uma interface "inchada" com métodos que alguns clientes não precisam.

Isso significa que é melhor ter várias interfaces pequenas e especializadas, cada uma com métodos diretamente relacionados a um determinado comportamento, do que uma única interface grande e generalizada.

- Evita a implementação de métodos desnecessários:{style="color: green;"} As classes só implementam o que realmente precisam, reduzindo a complexidade.
- Menor acoplamento:{style="color: green;"} Cada cliente só depende de uma interface que faz sentido para ele, o que torna o código mais modular.
- Facilidade de manutenção:{style="color: green;"} Interfaces menores são mais fáceis de entender, modificar e manter, já que mudanças em uma parte do sistema não impactam outras desnecessariamente.

---
layout: two-cols
---

```typescript
interface MultiPrinter {
  print(): void;
  scan(): void;
  fax(): void;
}
```
```typescript
class Printer implements MultiPrinter {
  print(): void {
    console.log("Imprimindo...");
  }
  scan(): void {
  }
  fax(): void {
  }
}
```

::right::

Podemos refatorar o código e criar multiplas interfaces

```typescript
interface Printer {
  print(): void;
}

interface Scanner {
  scan(): void;
}

interface Fax {
  fax(): void;
}
```

---
layout: two-cols
---

```typescript
class SimplePrinter implements Printer {
  print(): void {
    console.log("Imprimindo...");
  }
}

class OfficePrinter 
  implements Printer, Fax {
    print(): void {
      console.log("Imprimindo...");
    }

    fax(): void {
      console.log("Enviando fax...");
    }
}
```

::right::

```typescript
class AdvancedPrinter 
  implements Printer, Scanner, Fax {
    print(): void {
      console.log("Imprimindo...");
    }

    scan(): void {
      console.log("Escaneando...");
    }

    fax(): void {
      console.log("Enviando fax...");
    }
}
```

---

## D - Dependency Inversion Principle (DIP){style="color: blue;"}

O DIP afirma que módulos de alto nível não devem depender de módulos de baixo nível, ele sugere que devemos depender de interfaces ou abstrações em vez de depender de implementações concretas. Isso reduz o acoplamento entre as diferentes partes de um sistema, tornando-o mais flexível e fácil de modificar.

- Desacoplamento:{style="color: green;"} O DIP reduz o acoplamento entre diferentes partes do sistema, permitindo que mudanças em uma parte não exijam mudanças em outra.
- Facilidade para testar:{style="color: green;"} Quando dependemos de abstrações, é mais fácil substituir implementações reais por mocks ou stubs em testes.
- Flexibilidade:{style="color: green;"} O sistema pode evoluir e adaptar-se a novos requisitos sem grandes refatorações, uma vez que as implementações podem ser alteradas sem impactar os módulos de alto nível.
- Reutilização de código:{style="color: green;"} Interfaces e abstrações bem definidas promovem a reutilização de módulos, já que eles podem trabalhar com diferentes implementações.

<!--
Módulos de alto e baixo nível:
Módulos de alto nível são aqueles que contêm lógica de negócios central e tomam decisões importantes no sistema.
Módulos de baixo nível são aqueles que implementam detalhes específicos, como acessos a banco de dados, APIs externas ou manipulação de arquivos.
O DIP sugere que os módulos de alto nível não devem depender diretamente dos de baixo nível. Em vez disso, ambos devem depender de abstrações (interfaces ou classes abstratas).
-->

---

Nesse caso, a classe `NotificationManager` (alto nível) depende diretamente da classe `EmailService` (baixo nível). Isso é uma violação do DIP, porque NotificationManager está fortemente acoplado a um serviço específico para enviar notificações. Se um dia for necessário mudar para um serviço de notificação por SMS, ou adicionar outros tipos de notificação, será necessário modificar o código de NotificationManager, o que quebra a flexibilidade e a modularidade.

```typescript
class EmailService {
  sendEmail(to: string, message: string): void {
    console.log(`Enviando e-mail para ${to}: ${message}`);
  }
}
class NotificationManager {
  private emailService: EmailService;
  constructor() {
    this.emailService = new EmailService();
  }
  notify(to: string, message: string): void {
    this.emailService.sendEmail(to, message);
  }
}
```

---

Para corrigir, podemos criar uma abstração (interface).

```typescript
interface NotificationService {
  send(to: string, message: string): void;
}
class EmailService implements NotificationService {
  send(to: string, message: string): void { ... }
}
class SMSService implements NotificationService {
  send(to: string, message: string): void { ... }
}
class NotificationManager {
  private notificationService: NotificationService;
  constructor(notificationService: NotificationService) {
    this.notificationService = notificationService;
  }
  notify(to: string, message: string): void {
    this.notificationService.send(to, message);
  }
}
```