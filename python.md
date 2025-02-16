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
title: Python
author: Pablo Leon Rodrigues
export:
  format: pdf
  timeout: 30000
  withClicks: false
---


---

<Toc></Toc>

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

## Console Python (REPL)
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

# Indentação

Python utiliza **indentação** para definir blocos de código. Exemplo:

```python
def saudacao():
    print("Olá, Mundo!")

saudacao()
```

⚠️ O não uso correto da indentação resulta em erro!

---

# Declaração de Variáveis

Em Python, não é necessário especificar o tipo da variável.

```python
nome = "Alice"  # String
idade = 25       # Inteiro
altura = 1.70    # Float
```

ℹ️ Python é **dinamicamente tipado**.

---

# Comentários em Python

Comentários são usados para documentar o código.

```python
# Este é um comentário de linha única

"""
Este é um comentário de múltiplas linhas.
Pode ser útil para documentação.
"""
```

---

# Tipos de Dados e Conversões

Principais tipos de dados:

- `int`: números inteiros
- `float`: números decimais
- `str`: texto
- `bool`: valores booleanos (True ou False)

Conversões de tipo:

```python
numero = "10"
numero_inteiro = int(numero)
print(numero_inteiro + 5)  # Saída: 15
```

---

# Entrada e Saída de Dados

Para interagir com o usuário:

```python
nome = input("Digite seu nome: ")
print("Olá,", nome)
```

⚠️ `input()` sempre retorna uma string, conversões podem ser necessárias.

---

# Exercícios Práticos

1. Escreva um programa que solicite o nome e a idade do usuário e exiba uma mensagem formatada.
2. Leia dois números e exiba a soma deles.
3. Converta uma temperatura em Celsius para Fahrenheit.

```python
# Exemplo: Somar dois números
num1 = int(input("Digite um número: "))
num2 = int(input("Digite outro número: "))
soma = num1 + num2
print("A soma é:", soma)
```

---

## Ambiente Virtual (venv)

O Python permite a criação de ambientes isolados usando `venv`.

#### Criando um ambiente virtual:
```sh
python -m venv meu_ambiente
```

#### Ativando o ambiente virtual:
- Windows: `meu_ambiente\Scripts\activate`
- Mac/Linux: `source meu_ambiente/bin/activate`

Para desativar, use:
```sh
deactivate
```