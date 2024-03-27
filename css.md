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
layout: iframe-right
url: /style.html
---

```html
<div style="position:relative;height:220px;margin-top:50px;">
  <div style="opacity:0.5;position:absolute;left:50px;top:-30px;width:300px;height:150px;background-color:#40B3DF"></div>
  <div class="w3-theme" style="opacity:0.3;position:absolute;left:120px;top:20px;width:100px;height:170px;"></div>
  <div style="margin-top:30px;width:360px;height:130px;padding:20px;border-radius:10px;border:10px solid #EE872A;font-size:120%;">
 <h1>CSS = Styles and Colors</h1>
 <div style="letter-spacing:12px;font-size:15px;position:relative;left:25px;top:10px;">Manipulate Text</div>
 <div style="color:#40B3DF;letter-spacing:12px;font-size:15px;position:relative;left:25px;top:20px;">Colors,
 <span style="background-color:#B4009E;color:#ffffff;">&nbsp;Boxes</span></div>
 </div>
</div>
```

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

---

## Unidades de medida absolutas

As medidas absolutas, como pixels (`px`), polegadas (`in`), centímetros (`cm`), etc., são especificadas com um valor
fixo que não é afetado pelo ambiente ou contexto da página. Elas fornecem uma precisão absoluta e são consistentes 
independentemente do dispositivo ou configuração de exibição.

Isso significa que medidas absolutas resultam em elementos com tamanhos fixos e invariáveis, independentemente do 
tamanho da tela ou do navegador em que estão sendo exibidos. De modo geral, tal característica impõe problemas de
adaptação em dispositivos com tamanhos de tela variados, especialmente em dispositivos móveis ou em layouts
responsivos.

No CSS3 temos a disposição diversas medidas absolutas, contudo a que utilizamos com maior frequência é o 
pixel (`px`).

```css
font-size: 16px;
width: 300px;
```

---

## Unidades de medida relativas

Diferentemente das absolutas, as medidas relativas, como `%` (porcentagem), `em` (relativo ao elemento pai),
`rem` (relativo ao elemento raiz), `vw` (viewport width), vh (viewport height), etc...
são dimensionadas com base em algum aspecto do ambiente de layout, como o tamanho da fonte, largura da tela ou 
tamanho do elemento pai.

São muito utilizadas, pois elas se ajustam dinamicamente conforme o contexto, proporcionando uma melhor adaptação a 
diferentes dispositivos e ambientes de visualização. São fundamentais para criar layouts responsivos, onde os elementos
se ajustam de acordo com o tamanho da tela, garantindo uma experiência consistente em dispositivos variados.

Deste modo, ao usar medidas relativas, é possível manter proporções consistentes entre elementos em diferentes partes 
do layout, pois eles são dimensionados proporcionalmente em relação ao ambiente de exibição.

---
layout: two-cols
---

### Porcentagem (%)
Unidade relativa as proporções do elemento pai.

```css
width: 50%;
```

### Em (em)
Unidade relativa ao tamanho da fonte do elemento pai.

```css
font-size: 1.2em;
```

### Rem (rem)
REM define o tamanho relativo à fonte do elemento raiz (normalmente o elemento `<html>`).
```css
margin-left: 2rem;  
```

::right::

### Viewport Width (vw) e Viewport Height (vh)
Referem-se à largura e altura da janela de visualização do navegador, respectivamente.

```css
width: 50vw;
height: 80vh;
```

### Viewport Minimum (vmin) e Viewport Maximum (vmax)
Referem-se à menor ou maior dimensão da janela de visualização do navegador (largura ou altura), respectivamente.

```css
width: 50vmin;
height: 80vmax;
```

---

## Cores

Cores são um dos recursos mais importantes da linguagem CSS. Várias propriedades de estilo as utilizam, como àquelas 
que modificam bordas, preenchimento de fundo, texto e sombras, por exemplo.

Temos a disposição grande variedade de cores (mais de 16 milhões) e podemos especificá-las de várias formas.
A mais simples é através do nome da cor, se a mesma constar no rol de cores suportadas pelo navegador e/ou
predefinidas na especificação do CSS3. Embora simples, esta não costuma ser a forma mais adequada para definir 
valor de cor.

As outras opções que temos são código hexadecimal e as funções rgb, rgba, hsl e hlsa. Dentre todos, o código 
hexadecimal é a opção mais comum, correspondendo a um conjunto de 6 caracteres iniciado com o símbolo #. Estes 
caracteres representam a quantidade de vermelho, verde e azul que irá compor a cor final.

<!--
Hue-Saturation-Lightness
Red Green Blue

-->

---
layout: two-cols
---

Cada canal de cor pode receber valores entre `00` (sem cor) a `ff` (cor cheia). Logo, o código `#000000` é branco, 
enquanto que `#ffffff` indica a cor preta. Já para as funções rgb e rgba, a quantidade de cor de cada canal é definida
no intervalo 0 e 255, no caso da rgba, um último valor entre 0.0 e 1.0 indicando a transparência aplicada.

![](/hexadecimal.png)

::right::

```css
body {
     background-color: #000010;
}
.artigo {
    background-color: rgb(200,240,255);
}
.secao {
    background-color: rgba(100,55,36,0.5);
}
```

O outro modelo de cores suportado chama-se HSL (Hue-Saturation-Lightness), especificado por meio das funções `hsl` e 
`hlsa`. Novamente a função terminada com a permite especificar o canal alpha para transparência.

```css
.artigo {
    background-color: hsl(167,15,35);
}
```

---
layout: two-cols
---

<style>
.round {
  background-color: lightblue;
  border-radius: 10px;
}
</style>

| Cor                                           | Nome    | Hex Code | RGB Code           | 
|-----------------------------------------------|---------|----------|--------------------|
| <mdi-square-rounded style="color:#FFFFFF;" /> | White   | #FFFFFF  | rgb(255, 255, 255) |
| <mdi-square-rounded style="color:#C0C0C0;" /> | Silver  | #C0C0C0  | rgb(192, 192, 192) |
| <mdi-square-rounded style="color:#808080;" /> | Gray    | #808080  | rgb(128, 128, 128) |
| <mdi-square-rounded style="color:#000000;" /> | Black   | #000000  | rgb(0, 0, 0)       |
| <mdi-square-rounded style="color:#FF0000;" /> | Red     | #FF0000  | rgb(255, 0, 0)     |
| <mdi-square-rounded style="color:#800000;" /> | Maroon  | #800000  | rgb(128, 0, 0)     |
| <mdi-square-rounded style="color:#FFFF00;" /> | Yellow  | #FFFF00  | rgb(255, 255, 0)   |
| <mdi-square-rounded style="color:#808000;" /> | Olive   | #808000  | rgb(128, 128, 0)   |


::right::

| Cor                                           | Nome    | Hex Code | RGB Code           | 
|-----------------------------------------------|---------|----------|--------------------|
| <mdi-square-rounded style="color:#00FF00;" /> | Lime    | #00FF00  | rgb(0, 255, 0)     |
| <mdi-square-rounded style="color:#008000;" /> | Green   | #008000  | rgb(0, 128, 0)     |
| <mdi-square-rounded style="color:#00FFFF;" /> | Aqua    | #00FFFF  | rgb(0, 255, 255)   |
| <mdi-square-rounded style="color:#008080;" /> | Teal    | #008080  | rgb(0, 128, 128)   |
| <mdi-square-rounded style="color:#0000FF;" /> | Blue    | #0000FF  | rgb(0, 0, 255)     |
| <mdi-square-rounded style="color:#000080;" /> | Navy    | #000080  | rgb(0, 0, 128)     |
| <mdi-square-rounded style="color:#FF00FF;" /> | Fuchsia | #FF00FF  | rgb(255, 0, 255)   |
| <mdi-square-rounded style="color:#800080;" /> | Purple  | #800080  | rgb(128, 0, 128)   |

---


## Fontes

A escolha de uma fonte é crucial para o sucesso de uma interface web, visto que está diretamente ligada à 
experiência de leitura do usuário.

As propriedades de estilo que o CSS3 nos fornece para manipularmos fontes são `font-family`, `font-style`, `font-weight`,
`font-size`, e `font-variant`, `background-color` e `color`.

Uma curiosidade é que fontes `sans-serif` são recomendadas para uso em telas.

![](/serif.gif)

---
layout: two-cols
---

### Font Family

Especifica a família de fontes que o navegador deve utilizar para renderizar o texto. A propriedade aceita vários 
valores separados por vírgula, indicando opções de fontes quando não for possível utilizar a anterior. Normalmente 
finalizamos especificando uma das cinco famílias genérias de fonte disponíveis: `serif`, `sans-serif`, `monospace`, 
`coursive` e `fantasy`.

A família genérica deve ser utilizada para contornar a possibilidade do usuário não ter disponível em seu navegador
as outras famílias listadas. Logo, nestes casos, o navegador conseguirá preservar o padrão tipográfico com outra 
fonte semelhante disponível.

No CSS existem cinco `font-family`, que o navegador pode utilizar para renderizar o texto.

::right::

<br><br>

- Serif fontes têm um pequeno traço nas bordas de cada letra. Eles criam uma sensação de formalidade e elegância.
- Sans serif fontes têm linhas limpas (sem pequenos traços anexados). Eles criam um visual moderno e minimalista.
- Monospace fontes aqui todas as letras têm a mesma largura fixa. Eles criam uma aparência mecânica.
- Cursive fontes imitam a caligrafia humana.
- Fantasy fontes são fontes decorativas e divertidas.

---

| Serif          | <span style="font-family:'Times New Roman',serif">Times New Roman</span><br><span style="font-family:Georgia,serif">Georgia</span><br><span style="font-family:Garamond,serif">Garamond</span>                 |
|----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Sans-serif     | <span style="font-family:Arial,sans-serif">Arial</span><br><span style="font-family:Verdana,sans-serif">Verdana</span><br><span style="font-family:Helvetica,sans-serif">Helvetica</span>                      |
| Monospace      | <span style="font-family:'Courier New',monospace">Courier New</span><br><span style="font-family:'Lucida Console',monospace">Lucida Console</span><br><span style="font-family:Monaco,monospace">Monaco</span> |
| Cursive        | <span style="font-family:'Brush Script MT',cursive">Brush Script MT</span><br><span style="font-family:'Lucida Handwriting',cursive">Lucida Handwriting</span>                                                 |
| Fantasy        | <span style="font-family:Copperplate,fantasy">Copperplate</span><br><span style="font-family:Papyrus,fantasy">Papyrus</span>                                                                                   |

---
layout: two-cols
---

### Font Style

<br>

- normal - Texto normal
- italic - <span style="font-style: italic;">Texto itálico</span>
- oblique - <span style="font-style: italic;">Texto levemente inclinado</span>

```css
p.italic {
  font-style: italic;
}
```

### Font Weight

Define o peso (intensidade de negrito) da fonte. Os valores podem ser `normal`, `bold`, `bolder`, `lighter`, `100, 
200, 300, 400, 500, 600, 700, 800, 900` e `inherit`. Os valores numéricos indicam uma graduação de negrito. 
O valor 400 equivale a normal enquanto o valor 700 é equivalente a bold.

::right::

Os valores bolder e lighter aplicam-se em relação ao peso herdado do ancestral, enquanto normal e bold aplicam-se
em absoluto ao texto.

- normal - Texto normal
- bold - <span style="font-weight: bold;">Texto bold</span>
- bolder - <span style="font-weight: bolder;">Texto bolder</span>
- lighter - <span style="font-weight: lighter;">Texto lighter</span>

```css
p.thick {
  font-weight: bold;
}
```

---
layout: two-cols
---

### Font Variant

Indica se o texto deve ser exibido ou não considerando apenas caracteres maiúsculos, utilizando a propriedade 
`small-caps`

```css
p.small {
  font-variant: small-caps;
}
```

<br>

<span style="font-variant: normal;">Texto escrito normalmente</span><br>
<span style="font-variant: small-caps;">Texto em small caps</span>

::right::

### Font Size

Permite especificar o tamanho da fonte, a partir de medidas relativas, como percentual, em, rem, etc ou medidas 
absolutas como pixels.

```css
h1 {
    font-size: 16px;
    font-size: 2rem;
    font-size: 2em;
}

```

<span style="font-size: 16px">16px</span><br><br>
<span style="font-size: 2rem">2rem</span><br><br>
<span style="font-size: 2em">2em</span><br>

---
layout: two-cols
---

### Letter Spacing

```css
p {
    letter-spacing: 0.4cm;
}
```

<p style="letter-spacing: 0.4cm;">Espaçamento entre letras</p>

<br>

### Word Spacing

```css
p {
    word-spacing: 80px;
}
```

<p style="word-spacing: 80px;">Espaçamento entre palavras</p>

::right::

### Text Align

Alinhamento do texto pode ser `left`, `right`, `center`, `justify`.

```css
p {
    text-align: center;
}
```

<p style="text-align: left;">Alinhamento <code>left</code></p>
<p style="text-align: center;">Alinhamento <code>center</code></p>
<p style="text-align: right;">Alinhamento <code>right</code></p>
<p style="text-align: justify;">Alinhamento <code>justify</code>
bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
</p>

---
layout: two-cols
---

### Text Decoration

Opções `none`, `underline`, `overline`, `line-through`, `blink`, `underline dotted`, `underline overline #FF3028`,
`green wavy underline`...

```css
p {
    text-decoration: underline;
}
```

<p style="text-decoration: none;">Texto underline</p>
<p style="text-decoration: underline;">Texto underline</p>
<p style="text-decoration: line-through;">Texto line-through</p>
<p style="text-decoration: overline;">Texto overline</p>
<p style="text-decoration: underline dotted;">Underline dotted</p>
<p style="text-decoration: green wavy underline;">Underline wavy green</p>

::right::

### Text Transform

Opções `none`, `capitalize`, `uppercase`, `lowercase`

<p style="text-transform: capitalize;">Texto Texto Texto</p>
<p style="text-transform: uppercase;">Texto Texto Texto</p>
<p style="text-transform: lowercase;">Texto Texto Texto</p>


---
layout: iframe-right
url: /google-fonts.html
---

### Google Fonts

Se não quiser usar nenhuma das fontes padrão em HTML, você pode usar o Google Fonts. Eles são de uso gratuito e 
têm mais de 1000 fontes para você escolher.

```html
<link rel="stylesheet" href="
https://fonts.googleapis.com/css?family=Sofia
">
<style>
body {
  font-family: "Sofia", sans-serif;
}
</style>
```

https://fonts.googleapis.com/css?family=Sofia

























---

https://developer.mozilla.org/en-US/docs/Learn/CSS

https://diegolusa.github.io/web

https://dev.to/r4h33m/cmyk-and-rgb-hsv-and-hsl-introducing-the-chromatic-compendium-1d7 

https://htmlcolorcodes.com/

https://www.color-hex.com/

https://developer.mozilla.org/pt-BR/docs/Web/CSS/font-family

https://www.w3schools.com/csSref/default.asp

https://www.tutorialrepublic.com/css-tutorial

https://www.nngroup.com/articles/serif-vs-sans-serif-fonts-hd-screens/#toc-screen-typography-for-online-reading-1