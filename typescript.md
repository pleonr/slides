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
title: Typescript
author: Pablo Leon Rodrigues
export:
  format: pdf
  timeout: 30000
  withClicks: false
---

---

<Toc maxDepth="2"></Toc>

---
layout: two-cols
---

## Introdução

Pense em JavaScript com super poderes... TypeScript é uma linguagem de software de alto nível
gratuíta e de código aberto desenvolvida pela Microsoft e teve sua primeira versão publicada em 2012. 
Sua principal característica é a inferência de tipos, fornecendo uma detecção em tempo de escrita de erros de tipagem.

```ts
type Result = "pass" | "fail"
function verify(result: Result) {
  if (result === "pass") {
    console.log("Passed")
  } else {
    console.log("Failed")
  }
}
```

::right::

![](/typeScript.svg)

O TypeScript possuí um compilador, ao gerar código usando o TypeScript o compilador remove a inferência de tipos gerando
código JavaScript.

```js
function verify(result) {
  if (result === "pass") {
    console.log("Passed")
  } else {
    console.log("Failed")
  }
}
```

---
layout: two-cols
---

## Instalação

Utilizando o npm podemos instalar o TypeScript com o comando:

```shell
npm install -g typescript
```

Então podemos criar arquivos `.ts` que é o formato padrão. Por exemplo `Hello.ts`

```ts
function greet(name: string) {
  console.log("Hello, " + name);
}

greet("Alice");
```

Aqui definimos que o parâmetro de `greet` deve ser uma string. 

::right::

Para compilar esse arquivo usando o commando `tsc`, que vai interpretar o arquivo e remover a inferência de tipos. 

```shell
tsc Hello.ts
```

O resultado desse comando é um arquivo javascript chamado `Hello.js`. Podemos instalar a lib `ts-node`, essa lib
executa o arquivo `ts` sem a necessidade de compilar primeiro.

```shell
npm install -g ts-node
```

Depois podemos executar:

```shell
ts-node Hello.ts
```
---

## Interfaces

Aqui usamos uma `interface` que descreve objetos que possuem um campo `firstName` e `lastName`. No TypeScript, dois tipos 
são compatíveis se sua estrutura interna for compatível. Isso nos permite implementar uma interface apenas tendo o 
formato que a interface exige, sem uma cláusula implements explícita.

```ts
interface Person {
  firstName: string;
  lastName: string;
}
 
function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName
}
 
let user = { firstName: "Jane", lastName: "User" }
 
document.body.textContent = greeter(user)
```

---

## Classes

TypeScript oferece suporte a novos recursos em JavaScript, como suporte para programação orientada a objetos baseada
em classes. Aqui vamos criar uma `classe` Student com um `construtor` e alguns campos públicos. Observe que classes e 
interfaces funcionam bem juntas, permitindo que o programador decida o nível correto de abstração. Também digno de 
nota, o uso de `public` nos argumentos do construtor é uma abreviatura que nos permite criar automaticamente 
propriedades com esse nome.

Criando o arquivo greeter.ts >>>

---

```ts
class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}
interface Person {
  firstName: string;
  lastName: string;
}
function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}
 
let user = new Student("Jane", "M.", "Snow");
document.body.textContent = greeter(user);
```

---

Para executar nosso webapp vamos compilar o código usando ``tsc greeter.ts`` vai gerar o `greeter.js` que vai ser
chamado na página:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>TypeScript Greeter</title>
  </head>
  <body>
    <script src="greeter.js"></script>
  </body>
</html>
```

---
layout: iframe
url: /greeter.html
---

---

## Tipos Primitivos

Usamos os tipos primitivos do JavaScript `string`, `number` e `boolean` que podem ser obtidos
com o operador `typeof` do JavaScript.

Para identificar `arrays` usamos a sintaxe tipo do valor e `[]` como por exemplo `number[]`, também podemos
usar `Array<number>`.

O TypeScript também possui um tipo especial, `any`, que você pode usar sempre que não quiser que um valor específico 
cause erros de verificação de digitação. Se você não definir um tipo o TS vai utilizar o any.
Você pode passar a flag `noImplicitAny` para o compilador(`tsc`) para tratar casos com `any` como erro.

Ao declarar uma variável usando `const`, `var` ou `let`, você pode opcionalmente adicionar uma 
anotação de tipo para especificar explicitamente o tipo da variável

```ts
let myName: string = "Alice";
```

---

## Funções

Funções são o principal meio de transmissão de dados em JavaScript. TypeScript permite que você especifique os 
tipos de valores de entrada e saída das funções.

Ao declarar uma função, você pode adicionar anotações de tipo após cada parâmetro para declarar quais tipos de
parâmetros a função aceita. As anotações de tipo de parâmetro vêm após o nome do parâmetro:

```ts
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
```

Você também pode adicionar anotações de tipo de retorno. As anotações do tipo de retorno aparecem após a 
lista de parâmetros:

```ts
function getFavoriteNumber(): number {
  return 26;
}
```

---

Se você quiser anotar o tipo de retorno de uma função que retorna uma promessa, você deve usar o tipo `Promise`:

```ts
async function getFavoriteNumber(): Promise<number> {
  return 26;
}
```

Funções anônimas são um pouco diferentes das declarações de funções. Quando uma função aparece em um local onde o 
TypeScript pode determinar como ela será chamada, os parâmetros dessa função recebem tipos automaticamente.

```ts
const names = ["Alice", "Bob", "Eve"];
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});
// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUpperCase());
});
```

---

## Objetos

Além dos primitivos, o tipo mais comum que você encontrará é um tipo de objeto. Refere-se a qualquer valor 
JavaScript com propriedades, que são quase todos eles! Para definir um tipo de objeto, simplesmente listamos
suas propriedades e seus tipos.

```ts
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
```

Aqui, anotamos o parâmetro com um tipo com duas propriedades - x e y - que são ambas do tipo número. Você pode 
usar `,` ou `;` para separar as propriedades, e o último separador é opcional de qualquer maneira.

---

Os tipos de objeto também podem especificar que algumas ou todas as suas propriedades são opcionais. 
Para fazer isso, adicione um `?` após o nome da propriedade:

```ts
function printName(obj: { first: string; last?: string }) {/*...*/}
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
```

Em JavaScript, se você acessar uma propriedade que não existe, obterá o valor indefinido em vez de um erro de
tempo de execução. Por causa disso, ao ler uma propriedade opcional, você terá que verificar se há indefinido 
antes de usá-la.

```ts
function printName(obj: { first: string; last?: string }) {
  // Error - might crash if 'obj.last' wasn't provided!
  console.log(obj.last.toUpperCase());
  if (obj.last !== undefined) { //'obj.last' is possibly 'undefined'.
    console.log(obj.last.toUpperCase());
  }
  // A safe alternative using modern JavaScript syntax:
  console.log(obj.last?.toUpperCase());
}
```

---
layout: two-cols
---

## ORM

ORM significa(*Object-Relational Mapping*) Mapeamento Objeto-Relacional. É uma técnica de programação que atua como 
ponte entre bancos de dados relacionais (como MySQL ou Postgresql) e linguagens de programação orientadas a objetos. 
Em termos mais simples, traduz-se entre o formato estruturado dos bancos de dados e o código orientado a objetos.


Aqui está um cenário típico: Tradicionalmente, você interagiria com um banco de dados usando SQL, uma linguagem 
de consulta especial. Com o ORM, você pode interagir com o banco de dados utilizando a sintaxe da sua 
linguagem de programação, trabalhando com objetos que representam seus dados.

::right::

![](/typeorm.png)

---

Mapeamento: você define classes em seu código que correspondem às tabelas em seu banco de dados. 
As propriedades da classe são mapeadas para as colunas da tabela. O ORM essencialmente cria um modelo de como 
seus objetos de dados e tabelas de banco de dados se relacionam entre si, permitindo que você execute operações 
CRUD (Criar, Ler, Atualizar, Excluir) em seus dados usando métodos em sua linguagem de programação. 

Por exemplo, para criar um novo registro, você criaria um objeto da classe correspondente, preencheria suas 
propriedades e usaria um método ORM para persisti-lo no banco de dados.

```ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    firstName: string
    @Column()
    age: number
}
```
---
layout: two-cols
---

### Prós

- **Desenvolvimento rápido**: ao usar objetos e métodos em vez de escrever SQL bruto.
- **Código mais simples**: o código se torna mais limpo e fácil de entender.
- **Independência do banco de dados**: como o ORM cuida da tradução entre objetos e SQL, seu código se torna menos 
dependente do banco de dados específico que está sendo usado. Isso facilita a troca de bancos de dados no futuro. 
- **Erros reduzidos**: ORMs podem ajudar a evitar erros que podem ocorrer ao escrever consultas SQL complexas manualmente.

::right::

### Cons

- **Curva de aprendizado**: Há uma curva de aprendizado envolvida na compreensão de como usar um ORM de maneira eficaz.
Embora simplifiquem a interação com o banco de dados, eles introduzem uma nova camada de complexidade
à sua base de código. 
- **Sobrecarga de desempenho**: a camada ORM pode adicionar alguma sobrecarga em comparação com consultas SQL otimizadas 
e escritas à mão. 
- **Controle limitado**: os ORMs podem não fornecer acesso a todas as funcionalidades de um banco de dados específico.

---

## TypeOrm

TypeORM é uma biblioteca ORM que utiliza JavaScript ou TypeScript. Ele preenche a lacuna entre o mundo orientado
a objetos do seu código e o formato estruturado dos bancos de dados relacionais. 

Você define classes em seu código, decoradas com anotações especiais, para representar suas 
tabelas de banco de dados. Essas classes são chamadas de “entidades” em TypeORM. As propriedades da classe são mapeadas
para as colunas na tabela do banco de dados. TypeORM essencialmente cria um mapeamento entre seus objetos de código 
e o esquema do banco de dados.

---

- Suporte TypeScript: TypeORM foi desenvolvido com TypeScript em mente, permitindo que você aproveite a segurança de
tipo para suas entidades e interações de banco de dados. 
- Suporte a vários bancos de dados: TypeORM funciona com uma variedade de bancos de dados relacionais populares, 
incluindo MySQL, PostgreSQL, SQL Server entre outros. 
- Construtor de consultas: TypeORM fornece um construtor de consultas que permite construir consultas complexas de
banco de dados de forma programática, oferecendo uma alternativa ao SQL bruto. 
- Padrão de repositório: TypeORM suporta o padrão de repositório, onde cada entidade pode ter sua própria classe de 
repositório encapsulando a lógica de acesso a dados. 
- Migrações: TypeORM ajuda a gerenciar alterações no esquema do banco de dados ao longo do tempo por meio de um 
sistema de migrações.

---

### Quickstart

```shell
npx typeorm init --name MyProject --database postgres
```

```
MyProject
├── src                   // place of your TypeScript code
│   ├── entity            // place where your entities (database models) are stored
│   │   └── User.ts       // sample entity
│   ├── migration         // place where your migrations are stored
│   ├── data-source.ts    // data source and all connection configuration
│   └── index.ts          // start point of your application
├── .gitignore            // standard gitignore file
├── package.json          // node module dependencies
├── README.md             // simple readme file
└── tsconfig.json         // TypeScript compiler options
```

---

### Migrations















---

https://www.typescriptlang.org/

https://www.typescriptlang.org/play

https://www.typescriptlang.org/docs

https://www.typescriptlang.org/docs/handbook/intro.html

https://www.typescriptlang.org/cheatsheets

https://typeorm.io/