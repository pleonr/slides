---
layout: image-right
theme: default
class: text-center
highlighter: shiki
mdc: true
drawings:
  persist: false
title: Cascading Style Sheets
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
# CSS
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
layout: two-cols-header
---

## CSS

Cascading Style Sheets (**CSS**) é uma linguagem de estilos, que ao ser incorporada ao HTML permite alterar a aparência
gráfica dos componentes da página. Atualmente o CSS está na versão 3, porém foi apresentada em 1994.

Podemos classificar os recursos da linguagem em diferentes módulos, cada qual com finalidade específica.

::left::

- Selectors
- Box Model
- Backgrounds
- Image Values and Replaced Content
- Text Effects

::right::

- 2D Transformations
- 3D Transformations
- Animations
- Multiple Column Layout
- User Interface

---

## Sintaxe

A linguagem CSS3 fornece, basicamente, um vasto conjunto de propriedades de estilo, funções e outras construções que
podemos utilizar para modificar algum aspecto da aparência dos elementos HTML5.

Uma propriedade de estilo é definida por um nome e um valor. Por exemplo, se desejamos justificar determinado texto, 
podemos escrever o seguinte trecho de código:

<pre class="pre">
  text-align: justify;
  <span style="color:rgb(178, 111, 0)">└────┬────┘</span> <span style="color:rgb(0, 76, 178)">└──┬──┘</span>
  <span style="color:rgb(178, 111, 0)">propriedade</span>  <span style="color:rgb(0, 76, 178)">valor</span>
</pre>

A propriedade chama-se text-align e seu valor foi configurado para justify, o qual indica que o texto deve ser
justificado. Ao final, é necessário colocar `;`. Um mesmo elemento pode receber diversas configurações de estilo 
através do uso de diferentes propriedades.

---

## Incorporar

A incorporação de código CSS3 a documentos HTML5 pode ser realizada de três formas distintas: 
- arquivo externo
- elemento`<style>`
- atributo style (inline)

Estilos inline são aqueles que acompanham o elemento, sendo definidos no atributo style. Devem ser utilizados com 
cautela, pois são difíceis de alterar quando aparecem em grande quantidade no documento. É o caso do elemento `h1`
do documento apresentado na sequência. Perceba que o estilo se aplica somente ao elemento.

```html {all|4|all}
<!DOCTYPE html>
<html>    
    <body>
        <h1 style="color:blue;text-align:center;">Titulo</h1>
    </body>
</html>
```

---

Quando utilizamos o elemento `<style>` temos maior flexibilidade na aplicação dos estilos, diferentemente do modo 
inline, podemos aplicar o mesmo estilo a vários elementos do documento por meio de regras. O elemento `<style>` deve
ser adicionado dentro de `<head>` e todas as regras de estilo devem ser escritas como conteúdo do elemento.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Minha primeira página Web</title>
    <style>
      body {
        background-color: rgb(159, 169, 170);
      }
      h1, h2, h3, h4, h5, h6 {
        color: black;
        text-transform: uppercase;
      }
    </style>
  </head>
</html>
```

---

A terceira forma, em que utilizamos a vinculação de um arquivo com regras de estilo ao documento é a mais utilizada. 
Isso porque, quando pensamos em um site, devemos considerar a existência de muitos documentos e, todos eles
compartilhamento da mesma apresentação. Logo, ao deixarmos as regras de estilo em um único local, podemos facilmente 
compartilhá-las em todos os documentos sem a necessidade de repetir código.

Para realizar a vinculação de um arquivo CSS ao documento devemos utilizar a tag `<link>`, que também deve estar
na `<head>`.

```html {all|6|all}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf8" />
    <title>Minha primeira página Web</title>
    <link href="estilos.css" rel="stylesheet"/>
  </head>
</html>
```

Em caso de mais de uma forma ser utilizada simultaneamente, a prioridade fica com as propriedades inline, seguidas 
daquelas definidas para o documento na tag `<style>` e, por último, as regras oriundas dos arquivos incorporados via 
`<link>`.

---
layout: two-cols
---

## Seletores

Seletores são parte de uma regra de estilo. Sua função é orientar o navegador, por meio de um padrão de pesquisa,
a encontrar os elementos que devem receber o estilo no documento

```css
p {
    text-align: center;
    color: yellow;
    font-family: "Arial", cursive;
    font-size: 40px;
}
```

::right::

A regra acima tem como seletor `p`, indicando que todos os elementos do tipo parágrafo do documento devem receber
as propriedades de estilo definidas. Cada par de `propriedade:valor` corresponde a uma declaração. Perceba que toda
declaração finaliza com um `;` e que as declarações ficam envolvidas entre chaves `{}`.

---
layout: two-cols
---

### Universal 
Todo elemento da página irá receber o estilo. Utilizamos * como seletor.

```css
* { 
    margin: 0px;         
}
```
<br>

### Elemento
Especificamos o nome dos elementos HTML que devem receber o estilo no seletor.

```css
p {
    color: black;
}
```

::right::

### Id

Todo elemento HTML possui um atributo chamado `id`. Este atributo é utilizado para identificar de forma única um elemento 
no documento. Isso significa que dois elementos não podem compartilhar o mesmo valor em `id`. No CSS, podemos especificar
um seletor para valores de `id` utilizando o caractere `#` acompanhado do valor de `id` correspondente.

```css
#cabecalho { 
    background-color: black;         
}
```

---

### Classe

Outro atributo global de elementos do HTML5 chama-se `class`. Diferentemente de `id`, diferentes elementos podem
compartilhar do mesmo valor em class e, além disso, vários valores são aceitos, deixando-se um espaço entre eles. 
Seletores baseados em classe são amplamente utilizados. Sua construção requer o uso do caractere ponto `.` acompanhado 
do nome da classe.

Podemos deixar o seletor mais específico, associando com um seletor de elemento, como em `p.teste`. A interpretação,
neste caso, é todo parágrafo que contém a classe teste.

```css
.artigo { 
    text-align: justify;
}
p.teste {
    color:red
}
```

---

### Descendentes

Utilizamos este tipo de seletor para aplicar estilos a elementos com base em seus elementos "pai". Podemos selecionar,
por exemplo, todos os parágrafos (`<p>`) que são descendentes de artigos (`<article>`), desconsiderando os demais. 

```css
article p {
    font-family: 'Roboto', sans-serif;
}
```

<br>

Observe que este seletor considera descendentes diretos e indiretos. Para ser mais restritivo e considerar somente
elementos que são "filhos" diretos, devemos utilizar o símbolo `>`, conforme o exemplo a seguir:

```css
article > p {
    font-family: 'Roboto', sans-serif;
}           
```

---

### Elementos irmãos

São seletores que consideram elementos de mesmo nível ("irmãos", pois são filhos do mesmo "pai"). Para aplicar um 
estilo específico para o primeiro parágrafo (`<p>`) que segue um título de segundo nível (`<h2>`), 
poderíamos utilizar o operador `+` que indica adjacência:

```css
h2 + p { 
    font-family: 'Roboto', sans-serif;
}           
```

<br>

Se a adjacência não for necessária, apenas a idéia de ser "irmão", utilizamos o operador `~`:

```css
h2 ~ p {
    font-family: 'Roboto', sans-serif;
}
```

---

### Atributos

São seletores utilizados para selecionar elementos que contenham um atributo específico sua definição.

```css 
a[href] { 
    font-family: 'Roboto', sans-serif;
}

input[type="text"] {
    background-color: yellow;
}

a[target="_blank"] {
    background-color: yellow;
}
```
---

| Seletor                      | Exemplo                | Descrição                                                                                                                         |
|------------------------------|------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| `[attribute]`                | `[target]`             | Seleciona todos os elementos com um atributo de destino                                                                           |
| `[attribute=value]`          | `[target="_blank"]`    | Seleciona todos os elementos com destino="_blank"                                                                                 |
| `[attribute~=value]`         | `[title~="flower"]`    | Seleciona todos os elementos com um atributo title que contém uma lista de palavras separadas por espaços, uma das quais é "flor" |
| `[attribute^=value]`         | `a[href^="https"]`     | Seleciona todos os elementos `<a>` com um valor de atributo href começando com "https"                                            |
| `[attribute$=value]`         | `a[href$=".pdf"]`      | Seleciona todos os elementos `<a>` com um valor de atributo href terminando com ".pdf"                                            |
| `[attribute*=value]`         | `a[href*="w3schools"]` | Seleciona todos os elementos `<a>` com um valor de atributo href contendo a substring "w3schools"                                 |

---
layout: two-cols
---

### Pseudo-Elementos

São seletores que permitem estilizar partes de um elemento e não sua integralidade. Por exemplo, podemos 
estilizar somente a primeira linha de um parágrafo através da regra a seguir.
```css
p::first-line {
    font-family: 'Roboto', sans-serif;
}
```

Observe que, para todo e qualquer pseudo-elemento, devemos utilizar a sintaxe a seguir (usar ::):
```css
selector::pseudo-element {
    property: value;
}
```

::right::

Para primeira linha:

```css
p::first-line {
    color: #ff0000;
    font-variant: small-caps;
}
```

Para primeira letra

```css
p::first-letter {
    color: #ff0000;
    font-size: xx-large;
}
```

---

| Seletor           | Exemplo                    | Descrição                                                          |
|-------------------|----------------------------|--------------------------------------------------------------------|
| `::after`         | `p::after`                 | Insira algo após o conteúdo de cada elemento `<p>`                 |
| `::before`        | `p::before`                | Insira algo antes do conteúdo de cada elemento `<p>`               |
| `::first-letter`  | `p::first-letter`          | Seleciona a primeira letra de cada elemento `<p>`                  |
| `::first-line`    | `p::first-line`            | Seleciona a primeira linha de cada elemento `<p>`                  |
| `::marker`        | `::marker`                 | Seleciona os marcadores dos itens da lista                         |
| `::selection`     | `p::selection`             | Seleciona a parte de um elemento que é selecionado por um usuário  |

---

### Pseudo-Classes

Pseudo-classes são utilizadas para selecionar elementos com base em algum estado específico

Observe que, para toda e qualquer pseudo-classe, devemos utilizar a sintaxe a seguir (usar `:`)

```css
selector:pseudo-class {
    property: value;
}
```

O seletor abaixo modifica a cor de todos os links visitados:

```css
a:visited {
    color: forestgreen;
    text-decoration-color: hotpink;
}
```
---

| Seletor      | Exemplo           | Descrição                                        |
|--------------|-------------------|--------------------------------------------------|
| `:active`    | `a:active`        | Selects the active link                          |
| `:disabled`  | `input:disabled`  | Selects every disabled `<input>` element         |         
| `:empty`     | `p:empty`         | Selects every `<p>` element that has no children |
| `:enabled`   | `input:enabled`   | Selects every enabled `<input>` element          | 
| `:hover`     | `a:hover`         | Selects links on mouse over                      |
| `:link`      | `a:link`          | Selects all unvisited links                      |              

---

### Seletor por negação

Seleciona todos os elementos que não atendem a condição especificada.

```css
div:not(.oculto) {
    background-color:red;
}
```

























































