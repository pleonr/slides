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
title: Python
author: Pablo Leon Rodrigues
export:
  format: pdf
  timeout: 30000
  withClicks: false
---


---

<Toc maxDepth="3" columns="2"></Toc>

---
layout: image-right
image: pythoncode.png
title: Programação
---

# Programação

A programação é o processo de escrever instruções que serão executadas por um computador para realizar tarefas específicas.

Essas instruções são escritas em **linguagens de programação**, que servem como uma ponte entre o pensamento humano e a máquina.

A sequência de passos elaborada pelo programador para alcançar a solução de um problema é chamada de **algoritmo**. Existem diferentes estratégias/abordagens para expressar e organizar um algoritmo em código.

Estas abordagens recebem o nome de **paradigmas de programação**.

---
title: Paradigma de Programação
---

### Paradigma de Programação - Abordagem ou Estilo

Um paradigma de programação define o estilo, a abordagem e as diretrizes de como o código será escrito e organizado.
Ele estabelece o “como pensar” sobre a solução de um problema usando conceitos específicos.
Exemplo:

- No paradigma imperativo, pensamos em uma sequência de passos a serem seguidos.
- No paradigma orientado a objetos, pensamos em termos de objetos que interagem entre si.
- No paradigma funcional, pensamos em funções que recebem entradas e retornam saídas, sem alterar o estado.

---
title: Algoritmo – A Solução
---

### Algoritmo – A Solução

Um algoritmo é uma sequência finita e ordenada de passos ou instruções bem definidas, destinadas a resolver um problema ou realizar uma tarefa específica.

- É independente de linguagem e paradigma: um algoritmo pode ser descrito em português, em pseudocódigo ou implementado em qualquer linguagem de programação.
- No entanto, o paradigma escolhido influencia a forma como o algoritmo é estruturado.

---
title: Linguagem de Programação
---

### Linguagem de Programação – A Ferramenta ou Meio

Uma linguagem de programação é o meio pelo qual o programador expressa o algoritmo seguindo as regras de um paradigma.

- É um idioma com regras específicas usada para comunicar ao computador o que ele deve executar.
- Cada linguagem tem sua sintaxe, semântica e recursos específicos, mas algumas suportam múltiplos paradigmas.
- Python suporta paradigmas imperativo, orientado a objetos e funcional. - C é mais focada no paradigma imperativo/procedural. - Haskell é fortemente funcional.

---
layout: image-right
image: /Guido_van_Rossum_2006.jpg
alt: Guido van Rossum
---

## Linguagem de Programação Python

Python é uma linguagem de programação...

- Interpretada
- De alto nível
- Tipagem Dinâmica
- Orientada a objetos

Guido Van Rossum publicou a primeira versão do código Python (versão 0.9.0) em 1991.
Versão 2.0 em 2000 e 3.0 em 2008.

[Zen of Python](https://peps.python.org/pep-0020/)


<!--
Guido van Rossum (Haarlem, 31 de janeiro de 1956 [1]) é um matemático e programador de computadores holandês, mais conhecido por ser o autor da linguagem de programação Python.
Na comunidade Python, ele é conhecido como Benevolent Dictator for Life (BDFL), o que significa que ele continua a supervisionar o processo de desenvolvimento do Python, tomando decisões quando necessário.
Entretanto, em julho de 2018, ele anunciou que estaria se afastando deste função devido a desentendimentos com a equipe de desenvolvimento da linguagem Python.
-->

---
layout: image-right
image: /Python-Symbol.png
---

## Console Python (REPL)

No python temos um ferramenta chamada terminal interativo, também chamado de REPL(Read, Evaluate, Print, Loop)
O console interativo do Python pode ser acessado com:
```sh
python
```
No console, é possível testar comandos rapidamente:
```python
>>> print("Olá, Mundo!")
Olá, Mundo!
```

---

## Declaração de Variáveis

Em Python, não é necessário especificar o tipo da variável, ele é dinâmicamente tipado.

```python
nome = "Alice"   # String
idade = 25       # Inteiro
altura = 1.70    # Float
PI = 3.14159     # Constante
GRAVIDADE = 9.8  #Constante
```

## Comentários em Python

Comentários são usados para documentar o código.

```python
# Este é um comentário de linha única

"""
Este é um comentário de múltiplas linhas.
Pode ser útil para documentação.
"""
```

---

## Tipos de Dados e Conversões

No Python, os tipos de dados definem a natureza dos valores armazenados em variáveis.

- `int`: números inteiros
- `float`: números decimais
- `str`: string, texto, cadeia de caracteres
- `bool`: valores booleanos (True ou False)
- `list`: coleção mutável de elementos ordenados
- `tuple`: coleção ordenada e imutável de elementos
- `range`: intervalo, sequência numérica
- `dict`: dicionário, estrutura de chave-valor, usada para armazenar pares associativos
- `set`: conjunto, coleção de elementos únicos, não ordenada
- `None`: NoneType, Representa a ausência de valor

---

## Entrada e Saída de Dados

Para interagir com o usuário:

```python
nome = input("Digite seu nome: ")
print("Olá,", nome)
```

⚠️ `input()` sempre retorna uma string, conversões podem ser necessárias.

Python permite a conversão de tipos com funções como:

```python
int("10")       # Converte string para inteiro → 10
float(5)        # Converte inteiro para float → 5.0
str(3.14)       # Converte número para string → "3.14"
```

---

### Variável

Podemos encontrar e testar o tipo de uma variável usando as funções `type` e `instanceOf()`

```python
x = 10
y = 3.14
texto = "Olá, Python!"
lista = [1, 2, 3]
dicionario = {"nome": "Alice", "idade": 25}

print(type(x))          # <class 'int'>
print(type(y))          # <class 'float'>
print(type(texto))      # <class 'str'>
print(type(lista))      # <class 'list'>
print(type(dicionario)) # <class 'dict'>

numero = 10
if isinstance(numero, int):
    print("A variável é um inteiro!")
```
---

| Função      | Descrição |
|------------|-----------|
| `int(x)`   | Converte para inteiro |
| `float(x)` | Converte para ponto flutuante |
| `str(x)`   | Converte para string |
| `bool(x)`  | Converte para booleano |
| `list(x)`  | Converte para lista |
| `tuple(x)` | Converte para tupla |
| `set(x)`   | Converte para conjunto |
| `dict(x)`  | Converte para dicionário (se a estrutura for compatível) |

---

## Operações

```python{all|1|2|3|4|5|6|7|all}
resultado = 5 + 3     # Soma
resultado = 10 - 7    # Subtração
resultado = 4 * 6     # Multiplicação
resultado = 20 / 5    # Divisão
resultado = 20 // 6   # Divisão inteira
resto = 20 % 6        # Resto da Divisão
resultado = 2 ** 3    # Exponenciação
```

---

## Saída de Dados print()

A função print() exibe valores no console do REPL, é utilizada para mostrar algo, e pode ser utilizada como ferramenta de depuração.

```python
print("Olá, mundo!")  # Simples string
print(10 + 5)         # Operação matemática
print("Python", 3.11) # Vários valores separados por espaço
```

Podemos personalizar a saída com sep (separador) e end (finalizador).

```python
print("Python", "é", "incrível", sep="-")
print("Linha 1", end=" ")
print("Linha 2")
```

Ainda podemos formatar a saída de dados

```python
print("Meu nome é %s e tenho %d anos." % (nome, idade))
```

---

### f-strings

Usando f-strings (Python 3.6+)

```python
nome = "Alice"
idade = 25
print(f"Meu nome é {nome} e tenho {idade} anos.")
```

Ou

```python
print("Meu nome é {} e tenho {} anos.".format(nome, idade))
```

---

## Strings

As strings são usadas para representar texto e são imutáveis, o que significa que uma vez que uma string é criada, ela não pode ser alterada.

### `len()`

Retorna o comprimento da string, ou seja, o número de caracteres presentes nela.

```python
string = "Olá, mundo!"
print(len(string))
```

<br>

### `upper()` e `lower()`

`upper()` converte todos os caracteres da string para maiúsculo, enquanto `lower()` os converte para minúsculo.

```python
string = "Olá, Mundo!"
print(string.upper())
print(string.lower())
```

---
layout: two-cols
---

### `strip()`, `lstrip()` e `rstrip()`

Removem espaços em branco e caracteres especiais do início e/ou final da string.

```python
string = "   Olá, Mundo!   "
print(string.strip())
print(string.lstrip())
print(string.rstrip())
```

::right::

### `split()` e `join()`

`split()` divide a string em uma lista de substrings com base em um separador, enquanto `join()` junta uma lista de strings em uma única string.


```python
string = "Python é lindo"
lista = string.split()
print(lista)

string_nova = "-".join(lista)
print(string_nova)
```

---

### `replace()`

Substitui todas as ocorrências de uma substring por outra.

```python
string = "Python é incrível!"
nova_string = string.replace("incrível", "fantástica")
print(nova_string)
```

<br>

### `startswith()` e `endswith()`

Verificam se a string começa ou termina com uma determinada substring, respectivamente.

```python
string = "Olá, Mundo!"
print(string.startswith("Olá"))
print(string.endswith("!"))
```

---

### `find()` e `index()`

`find()` retorna a primeira ocorrência de uma substring na string, enquanto `index()` retorna o índice da primeira ocorrência. A diferença é que `index()` gera uma exceção se a substring não for encontrada.

```python
string = "Python é uma linguagem de programação"
print(string.find("linguagem"))
print(string.index("linguagem"))
```

<br>

### `count()`

Conta o número de ocorrências de uma substring na string.

```python
string = "Python é uma linguagem de programação, e Python é incrível!"
print(string.count("Python"))
```

---

### `str.translate(table)`

O método `translate()` retorna uma cópia da string original onde cada caractere foi traduzido usando a tabela de tradução fornecida.

```python
tabela = str.maketrans("aeiou", "12345")
string_original = "Olá, mundo!"
string_traduzida = string_original.translate(tabela)
print(string_traduzida)

```

O método `translate()` é útil para realizar operações de tradução em strings de maneira eficiente e rápida. Ele é especialmente útil quando você precisa substituir caracteres por outros em grandes volumes de dados.

---

### Prática

1. **FUAQ** (Faça um algoritmo que) leia um valor de temperatura em graus Celsius, calcule e exiba a temperatura correspondente em graus Kelvin (sabendo que Kelvin = Celsius + 273).

2. **FUAQ** receba um valor de um produto e que escreva o novo valor tendo em vista que o desconto foi de 5%.

3. **FUAQ** leia uma temperatura em graus Celsius e mostrea convertida em graus Fahrenheit. A fórmula de conversão é: 
F=(9*C+160) / 5, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.

<!--

```python
# Leitura da temperatura em Celsius
celsius = float(input("Digite a temperatura em graus Celsius: "))

# Cálculo da temperatura em Kelvin
kelvin = celsius + 273

# Exibição do resultado
print(f"A temperatura em Kelvin é: {kelvin}")
```


```python
# Leitura do valor do produto
valor = float(input("Digite o valor do produto: R$ "))

# Cálculo do valor com desconto
desconto = valor * 0.05
novo_valor = valor - desconto

# Exibição do resultado
print(f"O valor com 5% de desconto é: R$ {novo_valor:.2f}")
```

```python
# Leitura da temperatura em Celsius
celsius = float(input("Digite a temperatura em graus Celsius: "))

# Cálculo da temperatura em Fahrenheit
fahrenheit = (9 * celsius + 160) / 5

# Exibição do resultado
print(f"A temperatura em Fahrenheit é: {fahrenheit}")
```

-->


---

## Indentação

Python utiliza **indentação** para definir blocos de código. Exemplo:

```python
def saudacao():
    print("Olá, Mundo!")

saudacao()
```

⚠️ O não uso correto da indentação resulta em erro!


---
layout: image-left
image: /decision.png
---

## Estruturas Condicionais

As estruturas condicionais na programação visam oferecer ao programador maneiras de tomar decisões dentro de um programa, executando diferentes blocos de código com base em condições específicas.

Elas permitem que o fluxo de execução do programa seja alterado de acordo com a avaliação de expressões lógicas, cujo valor poder ser verdadeiro ou falso, a depender do estado da execução.


---
layout: two-cols
---

### if

O comando condicional mais básico em Python é o if, que permite verificar se uma condição lógica é verdadeira e então executar um bloco de código associado a ela.

<br>

```python
idade = 18

if idade >= 18:
  print("Idade igual maior que 18")
```

::right::

<br>
<img src="/flutter-10.svg" class="m-auto rounded " />


<!--
Uma condição lógica é uma expressão cujo resultado de sua avaliação será verdadeiro (True) ou falso (False). Utilizam-se operadores de comparação e operadores lógicos na composição das expressões.
-->

---
layout: two-cols
---

#### Conversão para Boolean

Valores considerados falsos (False):

- `0`
- `""` (string vazia)
- `None`
- `[]`, `{}`, `()`, `set()` (estruturas vazias)
- Todos os outros valores são verdadeiros (True).

::right::

```python
print(bool(0))         # False
print(bool(1))         # True
print(bool(""))        # False
print(bool("Python"))  # True
print(bool([]))        # False
print(bool([1, 2]))    # True
```

---
layout: two-cols
---

Ao utilizar o comando o if, temos a disposição o else, utilizado para executar um bloco de código quando a condição especificada NÃO é verdadeira.

```python
idade = 16

if idade >= 18:
    print("Maior  de idade.")
else:
    print("Menor de idade.")
```

::right::

<br>
<img src="/flutter-11.svg" class="m-auto rounded" />

---
layout: two-cols
---

Há casos em que temos a necessidade de múltiplas condições. Para isso, utilizamos o comando elif (abreviação de else if), que permite verificar condições adicionais após a condição inicial if. Tal construção permite a criação de uma cadeia de testes para avaliar várias condições em uma única instrução.

```python
idade = 20

if idade < 18:
    print("Menor de idade.")
elif idade == 18:
    print("18")
else:
    print("Você é maior de idade.")
```

::right::

<img src="/flutter-12.svg" class="block m-auto max-h-115 rounded" />

<!--
Conforme você deve ter observado, o comando if avalia uma expressão lógica, cujos únicos valores possíveis são VERDADEIRO ou FALSO. Expressões nem sempre são simples, contendo apenas uma premissa. Tipicamente, temos duas ou mais premissas lógicas compondo as expressões. Neste caso, precisamos dos operadores lógicos para unir as partes.
-->

---

### Operadores de comparação

Operadores de comparação são usados para comparar valores e expressões, resultando em valores *booleanos* (True ou False) que indicam se a comparação é verdadeira ou falsa.

| Operador  | Descrição                        | Exemplo      | Retorno |
|-----------|----------------------------------|--------------|---------|
| `==`      | Igual a                          | `5 == 5`     | `True`  |
| `!=`      | Diferente de                     | `5 != 3`     | `True`  |
| `>`       | Maior que                        | `7 > 3`      | `True`  |
| `<`       | Menor que                        | `2 < 5`      | `True`  |
| `>=`      | Maior ou igual a                 | `4 >= 4`     | `True`  |
| `<=`      | Menor ou igual a                 | `3 <= 5`     | `True`  |


---
layout: two-cols
---

#### Igualdade

O operador **== (igual a)** verifica se dois valores são iguais. Não confunda com `=`, que indica atribuição.
```python
    a = 5
    b = 10
    print(a == b)
```

<br>

#### Diferença

O operador **!= (diferente de)** verifica se dois valores são diferentes.
```python
    a = 5
    b = 10
    print(a != b)
```

::right::

#### Menor que

O operador **< (menor que)** verifica se o valor à esquerda é menor que o valor à direita.
```python
    a = 5
    b = 10
    print(a < b)
```

<br>

#### Maior que

O operador **> (maior que)** verifica se o valor à esquerda é maior que o valor à direita.
```python
    a = 5
    b = 10
    print(a > b)
```

---
layout: two-cols
---

#### Menor ou igual a
O operador **<= (menor ou igual a)** verifica se o valor à esquerda é menor ou igual ao valor à direita.
```python
    a = 5
    b = 10
    print(a <= b)
```

<br>

#### Maior ou igual a
O operador **>= (maior ou igual a)** verifica se o valor à esquerda é maior ou igual ao valor à direita.
```python
    a = 5
    b = 10
    print(a >= b)
```

::right::

Esses operadores são frequentemente usados em instruções condicionais (como `if`, `elif`, `else`), onde o fluxo do programa depende do resultado das comparações.

Também é importante mencionar que os operadores de comparação podem ser combinados com operadores lógicos (`and`, `or`, `not`) para criar condições mais complexas. Isso permite construir lógicas de decisão mais elaboradas em um programa.

---

### Operadores lógicos

Operadores lógicos são elementos fundamentais em linguagens de programação que permitem combinar e avaliar condições booleanas. Eles são essenciais para controlar o fluxo de execução de um programa com base em diversas situações e critérios.

Em Python, existem três operadores lógicos principais: `and`, `or` e `not`. Cada um deles desempenha um papel específico na avaliação e combinação de expressões booleanas.

---
layout: two-cols
---

#### "**Operador `and`**"

Este operador retorna `True` se ambas as expressões que ele conecta forem verdadeiras e `False` caso contrário. Ele é frequentemente utilizado para verificar se múltiplas condições devem ser atendidas para que uma determinada ação seja tomada.

```python
idade = 25
if idade >= 18 and idade <= 30:
    print("Você é um adulto.")
```

::right::

A tabela verdade do operador `and` é:

| A     | B     | A and B |
| ----- | ----- | ------- |
| True  | True  | True    |
| True  | False | False   |
| False | True  | False   |
| False | False | False   |

---
layout: two-cols
---

#### "**Operador `or`**"

Este operador retorna `True` se pelo menos uma das expressões que ele conecta for verdadeira e `False` apenas se ambas as expressões forem falsas. Ele é útil quando pelo menos uma de várias condições precisa ser verdadeira para que uma ação seja executada.

```python
peso = 200
if peso >=190 or peso <= 210:
    print("Peso válido.")
```

::right::

A tabela verdade do operador `or` é:

| A     | B     | A or B |
| ----- | ----- | ------ |
| True  | True  | True   |
| True  | False | True   |
| False | True  | True   |
| False | False | False  |

---
layout: two-cols
---

#### "**Operador `not`**"

Este operador é utilizado para inverter o valor de uma expressão booleana. Se a expressão original for True, o `not` a transformará em False, e vice-versa. Ele é frequentemente utilizado para verificar se uma condição não é verdadeira.

```python
idade = 15
if not idade >= 18:
  print("Você é menor de idade.")
```

::right::

A tabela verdade para o operador `not` (negação) é muito simples, pois compreende o oposto do valor lógico recebido. Observe:

| A     | not A |
| ----- | ----- |
| True  | False |
| False | True  |

---
layout: two-cols
---

### Match

O comando [`match`](https://docs.python.org/3/tutorial/controlflow.html#match-statements) foi introduzido no Python a partir da versão 3.10 e oferece uma nova forma de realizar múltiplas comparações de padrões de forma mais legível e concisa do que as estruturas condicionais tradicionais.

Ele é especialmente útil quando se tem múltiplas condições a serem verificadas e quando cada condição envolve uma expressão de padrão específica.

O `match` funciona de maneira semelhante ao `switch` em outras linguagens de programação. Observe o exemplo:

::right::

```python
def dia_da_semana(numero):
  match numero:
    case 1:
      print("Domingo")
    case 2:
      print("Segunda-feira")
    case 3:
      print("Terça-feira")
    case 4:
      print("Quarta-feira")
    case 5:
      print("Quinta-feira")
    case 6:
      print("Sexta-feira")
    case 7:
      print("Sábado")
    case _:
      print("Número inválido")
```

---
layout: two-cols
---

Neste exemplo, a função `dia_da_semana` recebe um número e utiliza o comando `match` para verificar qual dia da semana corresponde a esse número. Se o número corresponder a um dos casos especificados (de 1 a 7), o programa imprime o nome do dia correspondente. Caso contrário, imprime `Número inválido`.

O `match` permite a combinação de padrões mais complexos usando a sintaxe `case <padrão> if <condição>:`, onde `<padrão>` é um padrão a ser verificado e `<condição>` é uma expressão booleana que também deve ser verdadeira para que a correspondência seja feita.

::right::

```python
match valor:
  case valor if valor>0 and valor%2==0:
    print("PAR e POSITIVO")
  case valor if valor>0 and valor%2!=0:
    print("ÍMPAR e POSITIVO")
  case valor if valor<0 and valor%2==0:
    print("PAR e NEGATIVO")
  case valor if valor<0 and valor%2!=0:
    print("ÍMPAR e NEGATIVO")
  case _:
    print("ZERO")
```

---
layout: two-cols
---

Também podemos testar vários valores em cada caso utilizando o operador `|`.

Isso por vezes é necessário quando o mesmo tratamento deve ser aplicado a mais de um valor da variável em avaliação.

```python
match codigo:
  case 0 | -1:
    print("Valor 0 ou -1")
  case 1 | 2 | 3:
    print("Valor 1, 2, ou 3.")
  case _:
    print("Algum outro valor")
```

::right::


<img src="/flutter-13.svg" class="block m-auto max-h-115 rounded" />

---
layout: two-cols
---

Agora vamos utilizar um editor com mais opções e ferramentas. O [Visual Studio Code](https://code.visualstudio.com/) é um Ambiente de Desenvolvimento Integrado(**Integrated Development Environment - IDE**) da Micrsoft que em partes é open source.
É a ide mais utilizada no [mundo](https://survey.stackoverflow.co/2024/technology#most-popular-technologies-new-collab-tools).

<img src="/vscode.png" class="block m-auto max-h-80 rounded" />

::right::

✅ 1. Instalar o VS Code
- Baixe e instale o Visual Studio Code:
- https://code.visualstudio.com/

✅ 2. Instalar o Python
- Baixe e instale o Python
- https://www.python.org/downloads/
- Marque a opção "Add Python to PATH" durante a instalação.

✅ 3. Instalar a extensão do Python no VS Code
- Vá em Extensões (Ctrl+Shift+X).
- Busque por Python (desenvolvida pela Microsoft) e instale.

---
layout: two-cols
---

Agora precisamos criar um `venv`. venv é o módulo padrão do Python (desde a versão 3.3) para criar ambientes virtuais isolados.
Ele permite que você tenha um ambiente Python separado para cada projeto, com suas próprias bibliotecas e dependências.

📦 1. Criar o ambiente
No terminal, dentro da pasta do seu projeto:

```bash
python -m venv venv
```
Isso cria uma pasta chamada venv com tudo que é necessário.

::right::

🚀 2. Ativar o ambiente

- Windows:
```bash
.\venv\Scripts\activate
```

- Linux/macOS:
```bash
source venv/bin/activate
```

Quando ativado, você verá algo assim no terminal:
```bash
(venv) C:\Users\seu-usuario\meu-projeto>
```

- Selecionar o interpretador Python
Pressione Ctrl+Shift+P para abrir a paleta de comandos. Digite "Python: Select Interpreter".
 (deve mostrar `./venv/bin/python` ou `.\venv\Scripts\python.exe`).

---

## Coleções de dados

As coleções de dados são estruturas fundamentais em programação utilizadas para armazenar e organizar múltiplos valores de maneira eficiente. Elas permitem a manipulação de grandes volumes de informação, possibilitando operações como inserção, remoção, pesquisa e iteração de elementos.

Em Python, as coleções mais comuns são listas, tuplas, conjuntos e dicionários. As listas são estruturas ordenadas e mutáveis, permitindo a adição e remoção de elementos conforme necessário. Já as tuplas são semelhantes às listas, porém imutáveis, o que garante maior segurança e eficiência quando os dados não precisam ser alterados.

Os conjuntos são coleções não ordenadas que não permitem elementos duplicados, sendo úteis para operações como união e interseção. Por outro lado, os qdicionários armazenam pares de chave e valor, possibilitando acesso rápido aos dados por meio de uma chave única, em vez de um índice numérico.

Cada tipo de coleção possui características específicas que se adaptam a diferentes necessidades. O uso adequado dessas estruturas melhora o desempenho do código e facilita a manipulação de informações em diversas aplicações.

---

| Estrutura     | Definição | Características Principais | Exemplo |
|---------------|-----------|----------------------------|---------|
| Lista         | ordenada e mutável  | Permite duplicatas, indexada, mutável  | `[1, 2, 3, 4]` |
| Tupla         | ordenada e imutável | Permite duplicatas, indexada, imutável | `(1, 2, 3, 4)` |
| Conjunto(set) | não ordenada | Não permite duplicatas, não indexado, mutável | `{1, 2, 3, 4}` |
| Dicionário    | não ordenada | Chaves únicas, valores mutáveis | `{"a": 1, "b": 2}`|

---
layout: two-cols
---

### Listas

As listas são uma estrutura de dados versátil que permite armazenar coleções de itens em uma ordem específica.

São mutáveis, o que significa que você pode adicionar, remover e modificar itens conforme necessário sem gerar uma cópia do objeto. Normalmente, as listas são utilizadas para armazenar dados de forma homogênea, ou seja, todos os items apresentam mesmo tipo. Contudo, é possível criar listas com elementos de tipos distintos, pois o Python não impõe a necessidade de homogeneidade.

Para criar uma lista, podemos especificar os valores entre colchetes. Cada elemento deve ser separado dos demais com vírgulas. Caso a lista deva estar vazia, basta utilizar `[]`.

::right::

```python
minha_lista = [1, 2, 3, 4, 5]
outra_lista = ["teste1", "teste2"]
```
O acesso aos elementos se dá por meio de um índice numérico (inteiro), que começa SEMPRE em 0.
O índice deve ser aplicado utilizando o operador de slicing ([]).

```python
print(minha_lista[0])
print(outra_lista[2])
```

O mesmo se aplica ao modificar o valor de uma posição, basta atribuir ao índice desejado um novo valor.

```python
minha_lista[0] = 100
print(minha_lista)
```

---
layout: two-cols
---

As principais operações que podem ser realizadas com listas são:

**Adição de elementos**: `append()`, `insert()` <br/>
```python
minha_lista = [1,2,3,4]
minha_lista.append(5)
minha_lista.insert(0,0)
minha_lista.insert(5,6)
```

**Remoção de elementos**: `remove()`, `pop()` <br/>

```python
minha_lista = [1,2,3,4]
minha_lista.remove(0)
minha_lista.pop()
```

**Ordenação**: `sort()` <br/>
**Reversão**: `reverse()` <br/>
**Concatenação**: `+` <br/>

::right::

Já em termos de funções, relacionam-se às listas as funções:

`minha_lista = [1,2,3,4]`

`len()`: Retorna o número de elementos em uma lista. <br/>
```python
len(minha_lista)
```

`sum()`: Retorna a soma de todos os elementos em uma lista. <br/>
```python
sum(minha_lista)
```

`max()` e `min()`: máximo e mínimo em uma lista. <br/>
```python
min(minha_lista)
max(minha_lista)
```

---



















































---


```python

```

```python

```






---
layout: two-cols
---

## Estruturas de repetição
Laços de repetição são estruturas de controle que permitem criar iterações, ou seja, repetição de uma ou mais intruções.

As estruturas de repetição (ou laços, ou loops) servem para executar um bloco de código várias vezes, sem que você precise repetir o código manualmente.

Imagine que você precisa imprimir “Olá!” 10 vezes. Em vez de escrever print("Olá!") dez vezes, você usa um loop para automatizar isso.

::right::

No Python, as principais estruturas são o `for` e o `while`.

<img src="/loop.gif" class="block m-auto max-h-80 rounded" />

---
layout: piramede
---

::center::

### For (*laço*)

O laço `for` pode ser usado para iterar sobre uma sequência (como uma lista, tupla, dicionário, conjunto ou string) ou outro objeto iterável qualquer.
Ele executa um bloco de código para cada item da sequência. Seu uso é destinado justamente para situações em que conhecemos de antemão a quantidade de ciclos (iterações) necessárias.

::left::

```python
# Lista de valores
lista = [1, 2, 3, 4, 5]
for numero in lista:
  print(numero)

# Caracteres de uma string
palavra = "Python"
for letra in palavra:
  print(letra)

```

::right::

```python
# Dicionários
dicionario = {'a': 1, 'b': 2, 'c': 3}
for chave, valor in dicionario.items():
  print(chave, valor)

# Intervalo de valores
for i in range(1, 6):
  print(i)

for par in range(0, 10, 2):
  print(par)
```

---

A função `range()` gera uma sequência de números inteiros em um intervalo especificado. Esta função é comumente utilizada conjuntamente com o laço for para iterar sobre uma sequência de números. O uso da função range() é simples, pois compreende informar apenas o valor final da sequência. Há também opções para modificar o valor de início e o incremento.

Considerando que a assinatura da função é range(start, stop, step), temos que:

- start: O valor inicial da sequência (opcional). Se não especificado, o padrão é 0.
- stop: O valor final da sequência (obrigatório). A sequência gerada não inclui este valor.
- step: O incremento entre os números na sequência (opcional). Se não especificado, o padrão é 1.

<br>

```python
for i in range(1, 10, 2):
  print(i)
```

---

### While (*enquanto*)

O laço `while` serve ao mesmo propósito do for: repetir instruções. Contudo, é usado especialmente para repetir um bloco de código enquanto uma condição especificada for verdadeira. Em boa parte dos casos, a quantidade de iterações não pode ser determinada com exatidão antecipadamente.

```python
# Imprimindo números de 1 a 5 usando while
contador = 1
while contador <= 5:
  print(contador)
  contador += 1

# Pedindo entrada ao usuário até que ele insira "sair"
while True:
  entrada = input("Digite algo (ou 'sair' para sair): ")
  if entrada == 'sair':
    break  # Sai do laço
  print("Você digitou:", entrada)
```

---
layout: piramede
---

### break, continue e else


::center::


Tanto o laço for quanto while podem conter um bloco `else` em sua definição. O uso assemelha-se ao else da construção try except.
No caso dos laços, o bloco else será executado sempre que o laço concluir suas iterações normalmente, ou seja, sem o uso de break internamente.


::left::

O comando `continue` é utilizado para interromper a iteração atual de um loop e passar para a próxima iteração, ignorando o restante do código que segue até o final do bloco.
No código abaixo, quando i tiver valor igual a 3, o comando `print(i)` não será executado.
Isso porque, executar a instrução continue, o interpretador irá retornar para o início do laço, iniciando uma próxima iteração sem considerar as instruções que estão na sequência.

```python
for i in range(1, 6):
  if i == 3:
    continue
  print(i)
```

::right::

O comando `break` é utilizado para interromper completamente a execução de laço de repetição.
Quando o break é encontrado dentro de um laço, o controle do programa é transferido para a instrução imediatamente após o bloco.
Em nosso exemplo apresentado abaixo, quando i alcançar o valor 3, o laço será interrompido e o interpretador seguirá com o próximo comando após o bloco for () (no caso é x = 10).

```python
for i in range(1, 6):
  if i == 3:
    break
  print(i)
x = 10
```


---


<img src="/underConstruction.png" class="h-115  m-auto rounded " />



---