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
title: HTML
author: Pablo Leon Rodrigues
export:
  format: pdf
  timeout: 30000
  withClicks: false
---

---

<Toc class="col-2" maxDepth="3"></Toc>

---

## HTML

*Hypertext Markup Language*, ou simplesmente HTML, é uma linguagem de marcação utilizada para representar informação na
Web. Nasceu juntamente com o conceito da Web e hoje, conjuntamente às linguagens `JavaScript` e `CSS`, compõe as bases para
o desenvolvimento de soluções frontend neste ecossistema.

Desde seu desenvolvimento, em 1989, a linguagem HTML foi passando por diversas revisões, que culminaram com o lançamento
de novas versões da linguagem. Atualmente está em uso a versão 5, motivo pelo qual é comum encontrar citações à
linguagem como HTML5.

Antes de propriamente iniciarmos nosso estudo na linguagem HTML5, precisamos entender os atores principais da Web e
como eles se comunicam. Obviamente faremos uma simplificação da arquitetura, enfatizando o papel do `web browser` ou
navegador e do `web server`.

Observe o diagrama a seguir. Nele representamos um cliente estabelecendo comunicação com um servidor. O cliente envia
uma requisição - uma solicitação de recurso - que é recepcionada pelo servidor e devolvida ao cliente por meio de uma
resposta. Esse modelo de arquitetura distribuída é chamada `client/server` e define em alto nível como ocorre a
comunicação entre web browsers (clientes) e web servers (servidores).

---

Nesta troca de mensagens está sendo utilizado o protocolo HTTP (Hypertext Transfer Protocol), que por sua vez transporta
documentos HTML quando recursos são retornados ao cliente. Logo, grande parte da informação que trafega na Web é
representada em HTML.

O HTML é um dos pilares da Web, junto ao protocolo HTTP e o conceito de URI. Define-se como uma linguagem de marcação,
ou seja, uma representação de documento em que adicionamos marcas de significado(semântica) e de estrutura à informação.

O conceito de `hipertexto` é essencial à compreensão do HTML. De forma simples, entendemos como hipertexto um conjunto de
nós (palavras, imagens, vídeos, áudios, documentos) que possuem ligações entre si.

A linguagem HTML tornou-se um padrão de referência a partir de 1997, graças ao trabalho da W3C. Isso garantiu à
tecnologia interoperabilidade em diferentes plataformas e meios de acesso. A especificação corrente da linguagem está
disponível no portal da [W3C](https://www.w3.org/){style="color: grey"} de forma pública.

---
layout: two-cols
---

## HTML5

- Cooperação W3C e WHATWG
  - Web Hypertext Application Technology Working Group: representantes da Apple, Mozilla e Opera

- Acrescentou à linguagem
  - Semântica
  - Acessibilidade
  - Elementos de estrutura
  - Elementos de conteúdo
  - Reprodução de áudio e vídeo sem plug-ins

::right::

- Novos elementos
  - Semânticos: `<header>`, `<footer>`, `<article>` e `<section>`
  - Atributos para formulários: number, date, time, calendar, and range
  - Gráficos: `<svg>` e `<canvas>`
  - Multimídia: `<audio>` e `<video>`

![](/html-versions.png)

---
layout: two-cols
---

## Conceitos Básicos

A linguagem HTML5 é composta por um conjunto de `tags` (ou elementos). Cada tag serve a um propósito,
atribuindo um significado(*semântica*) ao conteúdo envolvido. Quando aplicadas a um documento, a tag é aberta e
fechada, ficando o conteúdo em meio. Observe a sintaxe de escrita:

Abertura da tag: colocamos o nome da tag entre os símbolos de `<` `>`
````html
<p>
````
Fechamento da tag: colocamos uma `/` na frente do nome da tag
````html
</p>
````

::right::

A tag `p`, por exemplo, é utilizada para demarcar parágrafos em um documento HTML.
Logo, qualquer conteúdo entre a abertura e o fechamento da tag compreende o conteúdo de um parágrafo. Observe:

```html
<p>Aqui está um novo parágrafo!</p>
```

---

As tags podem conter atributos, que são propriedades que customizam/modificam comportamentos ou associam valores
específicos aos elementos. Assim como os nomes de tags, os atributos são pré-definidos, não podemos inventar novos.

Os atributos são informados na abertura da tag, por meio do seu nome, símbolo e o respectivo valor entre aspas duplas.

```html
<p id="par01" class="vermelho" style="font-size:1.3rem">Aqui está um novo parágrafo!</p>
```

Define um parágrafo com id `par01` e uma classe com o valor vermelho.

---

## Documentos e Metadados

<br>

- `<html>` Chamada de root tag, corresponde ao elemento que envolve todo documento.
As demais tags devem ser descendentes diretas ou indiretas de `<html>`. Espera-se que sigam apenas o
elemento `<head>` e o elemento `<body>`. Autores tem encorajado a utilização do atributo `lang` dentro da tag `html`
para indicar a sintetizadores de voz qual a língua do documento.

- `<head>`: Utilizada para indicar informações gerais do documento, como metadados e vinculações com scripts e folhas
estilo.

- `<body>`: Todo documento contém apenas uma tag `<body>` e nela colocamos o conteúdo que será exibido pelo navegador.

---

Dentro da tag `<head>` podemos definir os seguintes descendentes(*opcionais*):

- `<meta>`: Permite definir metadados que não podem ser especificados em outras tags.
- `<base`: Define a URL inicial do documento para efeitos de navegação.
- `<title>`: Metadado que define o título do documento ou seu nome. No máximo uma ocorrência é permitida.
- `<link>`: Permite especificar as relações entre o documento e outro recurso externo. Utilizado especialmente
para vincular folhas de estilo. O endereço do recurso vinculado fica no atributo href. Já o atributo rel indica o
tipo de relacionamento estabelecido, que deve considerar um conjunto de opções definidas pela linguagem.
- `<style>`: Permite incluir regras de estilo ao documento.
- `<script>`: Permite definir ou referenciar um script executável (JavaScript). A tag pode aparecer no corpo do
documento e há diferenças entre uma opção e outra.

---
layout: iframe-right
url: /index-page.html
---

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hello World!</title>
</head>
<body>
  <h1 id="hello">Hello World!</h1>
</body>
</html>
```

<!--
HTML - Encadeamento (nesting)
- Encadeamento é quando adicionamos elementos dentro de outros
- Uma técnica utilizada para criarmos sessões dentro de uma página HTML
-->

---
layout: iframe-right
url: /tags1.html
---

- `<p>`: Utilizado para criar um parágrafo
- `<small>`: Representa comentários colaterais, textos de menor relevância
- `<s>`: Representa conteúdo desatualizado ou que não é mais relevante
- `<strong>`: Representa um conteúdo de maior seriedade, importância ou urgente. Quanto mais ancestrais strong houver,
maior será a relevância do conteúdo
- `<br>`: Utilizado para representar uma quebra de linha
- `<pre>`: Representa um texto pré-formatado, apresentado pelo navegador respeitando a forma em que ele foi inserido no
documento

---
layout: iframe-right
url: /tags2.html
---

- `<sup>`: Adiciona conteúdo sobrescrito
- `<sub>`: Adiciona conteúdo subscrito
- `<mark>`: Usado para evidenciar um trecho de conteúdo
- `<em>`: Utilizado para enfatizar fortemente um determinado trecho de conteúdo
- `<code>`: Aplicado para conteúdo que representa trechos de código de programas de computador
- `<span>`: Utilizado para demarcar um trecho de conteúdo para alguma finalidade específica.
A tag, em si, não adiciona semântica ao conteúdo
- `<b>` e `<i>`: bold e italic


---
layout: iframe-right
url: /tags3.html
---

- `<q>`: Demarca citações curtas, apresentadas em meio a outro conteúdo.
- `<quote>`: Utilizado para especificar o título de um trabalho (livro, programa de computador, artigo, etc.).
Não devemos utilizar para envolver nomes de autores, somente o título da obra.
- `<blockquote>`: Demarca citações longas.
- `<cite>`: Utilizado para especificar o título de um trabalho (livro, programa de computador, artigo, etc.).
Não devemos utilizar para envolver nomes de autores, somente o título da obra.


---
layout: iframe-right
url: /tags4.html
---

No HTML5 temos a possibilidade de utilizar seis níveis de títulos. Para isso, temos disponíveis as tags
`<h1>`,`<h2>`,`<h3>`,`<h4>`,`<h5>` e `<h6>`. Títulos `<h1>` são os de maior importância, e na medida que o número
aumenta, a relevância do título diminui. Veja um exemplo de documento contendo quatro níveis de títulos.

---
layout: iframe-right
url: /tags5.html
---

As listas são utilizadas para elencar itens de forma ordenada ou não. Para cada caso, temos a disposição uma
tag diferente: se o objetivo é utilizar uma lista ordenada, então utilizaremos `<ol>` e, caso haja interesse em uma
lista não ordenada, então devemos usar `<ul>`. Quando os elementos da lista, para ambos os casos, utilizamos a tag
`<li>`.

---
layout: two-cols
---

## Hiperlynks

A capacidade da linguagem HTML de expressar relacionamentos entre documentos certamente é um dos fatores-chave para o
sucesso da web. Os hiperlinks, como chamamos estas ligações, constituem vias que ligam um documento a outro, contido
no mesmo site ou em sites diferentes, através de palavras, imagens, vídeos e outras coisas. Esse emaranhado de vias
levou ao termo web, ou seja, uma grande teia de informação, cujo caminho a ser seguido depende unicamente das escolhas
do usuário.

Em nossos documentos HTML5 podemos criar hiperlinks através da tag `<a>`. Para fins didáticos, iremos apresentar como
criamos âncoras posicionais para elementos do documento, links locais e links externos.

::right::

Para que a tag `<a>` seja considerada um hiperlink, o atributo `href` deve estar presente com o endereço do recurso.
Ao clicar sobre o objeto que representa o hiperlink (texto, imagem, etc), o navegador irá transportar o
usuário até o recurso informado.

O atributo `target` do elemento `<a>` é `target`, especifica ao navegador onde o recurso deverá
ser apresentado (contexto do navegador).

- `_blank`: Abre o recurso em nova janela ou aba.
- `_self`: Abre o recurso no mesmo contexto de navegação do documento origem do hiperlink.
- `_parent`: Abre o recurso no contexto de navegação pai.
- `_top`: Abre o recurso no contexto de navegação mais elevado da página.

---
layout: two-cols
---

Não apenas recursos obtidos via protocolo HTTP podem ser informados no atributo `href`.

- URL (Uniform Resource Locator) absoluto, como `href="http://localhost:8000/web/html5/hiperlinks/"`.
- URL relativa, como `href="hiperlinks/"`. Esse formato é utilizado para navegar entre recursos locais do site.
- Link para algum elemento da página através de seu valor de atributo `id`, como `href="#rodape"`.
- Código JavaScript, como `href="javascript:alert("oi");"`.

::right::

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hiperlinks</title>
    <meta charset="utf-8">
  </head>
  <body>
    <p>Blog
      <a href="www.leon.dev.br">Leon</a>
      <a href="#teste">Leon</a>
      <a href="./doc.pdf">Leon</a>
    </p>
    <div id="teste"></div>
  </body>
</html>
```

---

## Imagens

Em termos de código, utilizamos o elemento `<img>` para incorporar imagens ao HTML5. Os atributos obrigatórios são
`src` e `alt`. O primeiro deles indica o caminho para o arquivo, que pode ser absoluto ou relativo.

Já o atributo `alt` contém uma descrição textual que será exibida pela navegador em substituição à imagem, caso
ela não possa ser apresentada.

Outros dois atributos importantes são `width` (largura) e `heigth` (altura). Utilizamos eles para especificar as
dimensões da imagem em pixels. É conveniente utilizar valores nestas propriedades para melhorar a experiência do
usuário quando da carga do recurso pelo navegador.

Temos também o elemento `<figure>`, que é utilizado para construir um container para figuras, ilustrações,
diagramas, etc. Torna-se necessário quando precisamos adicionar legendas às imagens, conforme iremos observar
no código que segue.

---

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Figuras/Imagens</title>
    <meta charset="utf-8">
  </head>
  <body>
      <img src="https://www.caminho.com/para/a/imagem.jpg"
           alt="Imagem" width="300" height="500">

      <figure>
          <img src="https://www.caminho.com/para/a/imagem.jpg"
               alt="Imagem com legenda"
               width="300" height="500" />
          <figcaption>Galáxia de Andrômeda: Wikipédia</figcaption>
      </figure>

  </body>
</html>
```
---

## Tabelas

A elemento `<table>` é utilizado para delimitar a tabela. Como descendentes, podemos indicar o cabeçalho, conteúdo e
rodapé através das elementos `<thead>`, `<tbody>` e `<tfoot>`, respectivamente. Estes elementos não são obrigatórios
e são aplicadas para adicionar semântica ao conteúdo da tabela.

Efetivamente, os dados da tabela estão contidos nas células de dados, criadas a partir do elemento `<td>`, organizadas
em linhas especificadas a partir do elemento `<tr>`. Para células que representam cabeçalhos, podemos utilizar o
elemento `<th>` para diferenciar das células de dados.

Os atributos `rowspan` e `colspan`, ao aplicar rowspan, indicamos que uma célula se projeta pela quantidade
de linhas informada, enquanto que colspan indica a quantidade de colunas.

---
layout: iframe-right
url: /table.html
---

```html
<table style="width:100%">
  <tr>
    <th colspan="2">Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>43</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>57</td>
  </tr>
</table>
```

---
layout: iframe-left
url: /table2.html
---

```html
<table style="width:100%">
  <tr>
    <th>Name</th>
    <td>Jill</td>
  </tr>
  <tr>
    <th rowspan="2">Phone</th>
    <td>555-1234</td>
  </tr>
  <tr>
    <td>555-8745</td>
  </tr>
</table>
```
---
layout: iframe-left
url: /table3.html
---

```html
<table>
  <thead>
    <tr>
        <th>Avaliação I</th>
        <th>Avaliação II</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>9.5</td>
      <td>5.7</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>8.7</td>
      <td>6.0</td>
    </tr>
  </tfoot>
</table>
```


---

## Web Semântica

<br>

- `<article>`: Representa um trecho de conteúdo independente, autocontido, que pode ser distribuído sem o restante da
página.
- `<section>`: Indica uma seção genérica de conteúdo.
- `<aside>`: Seção de conteúdo tangencialmente relacionado ao seu entorno, o qual poderia ser removido sem representar
uma perda significativa para a compreensão.
- `<footer>`: Utilizado para rodapé de seções, para registro de informações de direitos autorais, autoria e links
relacionados.
- `<header>`: Conteúdo introdutório, cabeçalho, recursos iniciais de navegação.
- `<nav>`: Segmento do documento reservado para navegação.
- `<main>`: Especifica o trecho do documento que contém o conteúdo principal.

---
layout: iframe
url: /page_content.html
---


---

<img class="m-auto -z-5 left-0 top-0 right-0 bottom-0 max-w-full max-h-full absolute" src="/semantic.png"/>

---
layout: iframe-right
url: /forms.html
---

## Forms

HTML Forms, são formulários criados para possibilitar que o usuário envie dados, esses dados são normalmente enviados
para um servidor para serem processados.

O elemento HTML `<form>` é usado para criar um formulário HTML para entrada do usuário.

```html
<form>
... elementos do formulário...
</form>
```

O elemento `<form>` é um contêiner para diferentes tipos de elementos de entrada, como: campos de texto, caixas de
seleção, botões de opção, botões de envio, etc...

---

Dois atributos importantes da tag `<form>` são:
- **ação**: Especifica a URL do programa que irá manipular os dados enviados (geralmente um script do lado do servidor).
- **método**: define como os dados do formulário são enviados ao servidor. Existem dois métodos principais:
  - *GET*: acrescenta os dados do formulário ao URL como pares de valores-chave (visíveis na barra de endereço e
  tem limitações no tamanho dos dados).
  - *POST*: Envia os dados como parte do corpo da solicitação HTTP (não visível na URL e sem limites de tamanho).

O navegador coleta os dados de todos os elementos do formulário na tag `<form>`. Isso inclui o atributo name do elemento
e o valor inserido pelo usuário. A solicitação HTTP é enviada ao servidor especificado no atributo action.


---

### Input Element

O elemento HTML `<input>` é o elemento de formulário mais usado.
Um elemento `<input>` pode ser exibido de várias maneiras, dependendo do atributo type.

| Type                      | Description                                                      |
|---------------------------|------------------------------------------------------------------|
| `<input type="text">`     | Displays a single-line text input field                          |
| `<input type="radio">`    | Displays a radio button (for selecting one of many choices)      |
| `<input type="checkbox">` | Displays a checkbox (for selecting zero or more of many choices) |
| `<input type="submit">`   | Displays a submit button (for submitting the form)               |
| `<input type="button">`   | Displays a clickable button                                      |

---

Mas existem muitos outros com diversas funcionalidades


| `<input type="button">`         | `<input type="reset">`    | `<input type="search">` |
|----------------------------------|----------------------------|--------------------------|
| `<input type="checkbox">`       | `<input type="image">`    | `<input type="submit">` |
| `<input type="color">`          | `<input type="month">`    | `<input type="tel">`    |
| `<input type="date">`           | `<input type="number">`   | `<input type="text">`   |
| `<input type="datetime-local">` | `<input type="password">` | `<input type="time">`   |
| `<input type="email">`          | `<input type="radio">`    | `<input type="url">`    |
| `<input type="file">`           | `<input type="range">`    | `<input type="week">`   |

---

### `Input` e `Label`

A tag `<label>` define um rótulo para muitos elementos do formulário. O elemento `<label>` é útil para usuários de
leitores de tela, porque o leitor de tela lerá o rótulo em voz alta quando o usuário focar no elemento de entrada.
O elemento `<label>` também ajuda usuários com dificuldade em clicar em regiões muito pequenas (como botões de
opção ou caixas de seleção) - porque quando o usuário clica no texto dentro do elemento `<label>`, ele alterna a
caixa de seleção do botão de opção. O atributo for da tag `<label>` deve ser igual ao atributo id do elemento
`<input>` para ligá-los.

```html
<label for="name">Name (4 to 8 characters):</label>
<input type="text" id="name" name="name"
       required minlength="4" maxlength="8" size="10" />
```

<br>

<label for="name">Name (4 to 8 characters):</label><br>
<input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10px" />




---

https://whatwg.org/

https://html.spec.whatwg.org/

https://www.w3.org/

https://www.w3schools.com/

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input

https://www.w3schools.com/html/html_form_input_types.asp
