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
title: Algoritmos e Programação I
author: Pablo Leon Rodrigues
export:
  format: pdf
  timeout: 30000
  withClicks: false
---


---

<Toc></Toc>

---

## Algoritmos e Programação I

Podemos definir tipos de conhecimento em:

- Conhecimento declarativo{style="color: green;"}

  Onde conhecimento declarativo refere-se ao conhecimento sobre fatos, conceitos e descrições.
  - 2 é um número par
  - valor de $\pi$ é aproximadamente 3.141592653589793...
  - Expressamos usando linguagem Natural

- Conhecimento Imperativo{style="color: green;"}

  E o conhecimento imperativo refere-se ao "saber como", enquanto na computação utilizamos o conhecimento imperativo para realizar tarefas ou procedimentos, sendo relacionado a execução e prática.
  - um número é considerado par se ele for divisível por 2 e o resto da divisão for igual a zero.
  - $\pi$ é a razão entre a circunferência de um círculo e seu diâmetro.
  - Expressamos usando algoritmos

---
layout: two-cols
---

## Pensamento computacional

Utilizando conhecimento imperativo precisamos mudar a forma de pensar:

- Pensamento Instintivo{style="color: green;"}
  modo rápido e intuitivo de processamento mental guiado por emoções e instintos

- Pensamento Lógico{style="color: green;"}
  abordagem racional e sistemática que busca fundamentarse em fatos e evidências

::right::

- Pensamento Computacional{style="color: green;"}
  forma de pensamento abstrato que se assemelha aos processos de um computador e é frequentemente utilizado para resolver problemas complexos e estratégicos


<img class="m-auto -z-5 bottom-0 right-0 max-w-full max-h-full absolute" style="background-color: white" src="/computing.jpg"/>

---
layout: two-cols
---

<img class="m-auto -z-5 top-0 right-0 max-w-full max-h-full" style="background-color: white" src="/pc.png"/>


::right::

- Decomposição{style="color: green;"}
  Dividir um problema complexo em partes menores e mais fáceis para se trabalhar e encontrar uma solução

- Reconhecimento de padrões{style="color: green;"}
  Permite identificar características que sejam em comum e que se repita no problema como um todo

- Abstração{style="color: green;"}
  É um mecanismo importante no processo de solução de problemas, o qual permite simplificar a realidade e representar os aspectos mais relevantes

- Algoritmo{style="color: green;"}
  É uma lista de etapas que permitem você completar uma  determinada tarefa em passo a passo para que seja fácil atingir os resultados desejados


<!--
  Decomposição exemplo da caneta, demontar a caneta e mostrar as peças
  Reconhecimento de padrões, identificar e diferenciar cachorro e gato
-->


---
layout: two-cols
---

## Programação

Programação é o processo de criação, desenvolvimento e implementação de algoritmos para resolver problemas computacionais por meio de uma linguagem de programação. Esse processo envolve a escrita de instruções que um computador pode entender e executar para realizar tarefas específicas de forma automática e eficiente.

::right::

```python{none|all}{lines:true}
# Solicita os números ao usuário
num1 = float(
  input("Digite o primeiro número: ")
)
num2 = float(
  input("Digite o segundo número: ")
)

# Realiza a soma
soma = num1 + num2

# Exibe o resultado
print("A soma é: ", soma)
```

---
layout: two-cols
---

## Algoritmos

"Algoritmo é qualquer procedimento computacional bem definido que recebe algum valor ou conjunto de valores como entrada e produz algum valor ou conjunto de valores como saída em um período de tempo finito". (CORMEN et al., 2012)

Um algoritmo é uma sequência finita e ordenada de passos ou instruções bem definidas, destinadas a resolver um problema ou realizar uma tarefa específica.

Um exemplo de um algoritmo é uma receita de bolo.

Como podemos fazer o computador efetuar a soma de dois números?

::right::

<v-click>
```ts {*}{lines:true}
Início
  inteiro num1
  inteiro num2
  inteiro soma
  Escreva "Digite o primeiro número:"
  Leia num1
  Escreva "Digite o segundo número:"
  Leia num2
  soma ← num1 + num2
  Escreva "A soma é: ", soma
Fim
```
</v-click>
---

<Youtube id="cDA3_5982h8" width="100%" height="100%"/>

---
layout: two-cols
---

### Pseudocódigo

O pseudocódigo é uma forma simplificada e estruturada de descrever algoritmos usando uma linguagem próxima da natural, mas com elementos da lógica de programação.
Ele é utilizado para representar a lógica de um programa de forma clara e compreensível, sem se prender às regras rígidas de uma linguagem de programação específica.

O objetivo do pseudocódigo é facilitar o planejamento e entendimento da solução de um problema antes de sua implementação em uma linguagem de programação real.

::right::

|     Categoria     |         Palavras-chave        |
|:-----------------:|:-----------------------------:|
| Estrutura         | Início, Fim                   |
| Entrada/Saída     | Leia, Escreva                 |
| Controle de Fluxo | Se, Senão, FimSe              |
| Repetição         | Enquanto, Para, Repita        |
| Variáveis         | Inteiro, Real, Caractere      |
| Funções           | Função, Procedimento, Retorne |

---
layout: two-cols
---

## O que são Operadores Aritméticos?

Operadores usados para realizar cálculos matemáticos em programação.

Exemplos:
- `+` (Adição)
- `-` (Subtração)
- `*` (Multiplicação)
- `/` (Divisão)
- `//` (Divisão Inteira)
- `%` (Módulo - Resto da divisão)
- `**` (Exponenciação)

::right::

### Adição e Subtração ➕➖

```python
soma = 5 + 3  # 8
subtracao = 10 - 4  # 6
```

- A adição soma valores.
- A subtração diminui um valor do outro.

<br>

### Multiplicação e Divisão ✖️➗

```python
multiplicacao = 6 * 2  # 12
divisao = 9 / 2  # 4.5
```

- `*` Multiplica dois números.
- `/` Divide um número pelo outro e retorna um decimal.

---
layout: two-cols
---

### Divisão Inteira e Módulo 🔢

```python
divisao_inteira = 9 // 2  # 4
resto = 10 % 3  # 1
```

- `//` Retorna apenas a parte inteira da divisão.
- `%` Retorna o **resto** da divisão.

<br>

### Exponenciação 🚀

```python
potencia = 2 ** 3  # 8
```

- `**` Eleva um número à potência de outro.

::right::

### Ordem de Precedência 📌

Segue a regra matemática **PEMDAS**:

1. `()` Parênteses
2. `**` Exponenciação
3. `* / // %` Multiplicação, Divisão e Módulo
4. `+ -` Adição e Subtração

### Exemplo:
```python
resultado = 5 + 3 * 2
# 11 (Multiplicação antes da soma)
```

Se quisermos somar primeiro:
```python
resultado = (5 + 3) * 2  # 16
```

---
layout: two-cols
---

Faça um algoritmo que (FUAQ) Troque o pneu de um carro.

<v-click>
```ts {*}{lines:true}
Início
  desligar o carro
  pegar ferramentas
  pegar o estepe
  posicionar o macaco
  suspender o carro com o macaco
  desenroscar os 4 parafusos
    do pneu furado
  remover pneu
  colocar o estepe
  enroscar os 4 parafusos
  baixar o carro com o macaco
  guardar ferramentas
Fim
```
</v-click>

::right::

<v-click>
FUAQ que receba um número e mostre o dobro desse número
</v-click>

<v-click>
```ts {*}{lines:true}
Início
    inteiro numero
    Escreva "Digite um número:"
    Leia numero
    dobro = numero * 2
    Escreva "O dobro de ", numero
    Escreva " é " dobro
Fim
```
</v-click>

---

### Teste de Mesa

O teste de mesa (ou simulação manual) é uma técnica utilizada para validar algoritmos e programas, analisando seu comportamento passo a passo antes da execução em um computador. O objetivo é identificar erros lógicos e verificar se a saída gerada corresponde ao esperado.

Essa técnica é chamada de "teste de mesa" porque tradicionalmente era feita à mão, em papel ou em uma tabela, antes da era dos computadores modernos.

---
layout: two-cols
---

Faça um algoritmo que... (FUAQ): Receba dois números inteiros e efetue a soma dos dois, mostrando o resultado no final.

```ts {*}{lines:true}
Início
  inteiro num1, num2, soma
  Escreva "Digite o primeiro número:"
  Leia num1
  Escreva "Digite o segundo número:"
  Leia num2
  soma ← num1 + num2
  Escreva "A soma é: ", soma
Fim
```

::right::

| Linha | num1 | num2 | soma |
|:-----:|:----:|:----:|:----:|
|2||||
|4|5|||
|6|5|5||
|7|5|5|10|

---
layout: two-cols
---

### Debugging

Debugging (ou depuração) é o processo de identificar, analisar e corrigir erros em um código fonte para garantir que ele funcione corretamente.

Em 1947,  Grace Murray Hopper identificou o primeiro "bug" de computador quando rastreou uma falha do Mark I até uma mariposa que ficou presa em um fio de relé, causando um curto-circuito... e inspirando o termo "debugging" usado desde então para resolver problemas com a execução de um programa de computador.

Essa história apesar de engraçada, não é completamente verdade. Sendo que o uso do termo bug foi usado até por Thomas Edison.

::right::

<img class="m-auto -z-5 left-0 top-0 right-0 bottom-0 max-w-full max-h-full" style="background-color: white" src="/grace_hopper.jpg"/>


---
layout: two-cols
---

### Duck Debugging

Ao desenvolver um algoritmo complexo é normal encontrar problemas ou ficar "preso".

https://www.studiopieters.nl/software-rubber-duck-debugging/

<img class="m-auto -z-5 left-0 top-0 right-0 bottom-0 max-w-full max-h-full" style="background-color: white" src="/duckdebugging.gif"/>

::right::

<img class="m-auto -z-5 left-0 top-0 right-0 bottom-0 max-w-full max-h-full" src="/feynman.jpeg"/>

<!--
Richard Phillips Feynman (/ˈfaɪnmən/; May 11, 1918 – February 15, 1988) was an American theoretical physicist. He is best known for his work in the path integral formulation of quantum mechanics, the theory of quantum electrodynamics, the physics of the superfluidity of supercooled liquid helium, and in particle physics, for which he proposed the parton model. For his contributions to the development of quantum electrodynamics, Feynman received the Nobel Prize in Physics in 1965 jointly with Julian Schwinger and Shin'ichirō Tomonaga.
-->

---

### Trabalho Discente

1. Como o Pensamento Computacional e Algoritmos estão relacionados ?

2. O que é decomposição e como ela ajuda no pensamento computacional?

3. O que é abstração no contexto do pensamento computacional? Ao que se referem os dados, processos e tecnologias de construção dos algoritmos ?

4. Dê exemplos do uso do pensamento computacional em outras áreas, que não apenas na computação.

5. Quais são as limitações do pensamento computacional ?


---

CORMEN, Thomas H.; LEISERSON, Charles E.; RIVEST, Ronald L.; STEIN, Clifford. Algoritmos: teoria e prática. 3. ed. Rio de Janeiro: Elsevier, 2012.

BHARGAVA, Aditya Y. Entendendo Algoritmos: Um Guia Ilustrado para Programadores e Outros Curiosos. Tradução de Ana Luiza Brod. São Paulo: Novatec Editora, 2017.

STUDIO PIETERS. Software Rubber Duck Debugging. Disponível em: https://www.studiopieters.nl/software-rubber-duck-debugging/. Acesso em: 1 fev. 2025.

WEALTHVISER4U. How to Learn Faster: The Feynman Technique. Disponível em: https://wealthviser4u.wixsite.com/wealth/post/how-to-learn-faster-the-feynman-technique. Acesso em: 5 fev. 2025.

LUNDUKE, Bryan. The Story of the First Computer Bug. Disponível em: https://lunduke.substack.com/p/the-story-of-the-first-computer-bug. Acesso em: 12 jan. 2025.

WHITE HOUSE. Honoring Grace Hopper. Disponível em: https://obamawhitehouse.archives.gov/blog/2014/12/22/honoring-grace-hopper. Acesso em: 12 jan. 2025.