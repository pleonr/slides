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
title: Git
author: Pablo Leon Rodrigues
export:
  format: pdf
  timeout: 30000
  withClicks: false
---

---

<Toc columns="1" maxDepth="3"></Toc>

---
layout: two-cols
---

## Git

Git é um sistema de controle de versionamento criado em 2005 Por Linus Torvalds. Ele é mantido por Junio Hamano.

Em 7 de Abril de 2005 Linus Torvalds fez o primeiro
[commit](https://github.com/git/git/blob/e83c5163316f89bfbde7d9ab23ca2e25604af290/README) 
do código do git com a mensagem:

```
Initial revision of "git", the
 information manager from hell
```
::right::

![](/Linus.webp)

<!--
Piada com Hellsink
GIT - the stupid content tracker

"git" can mean anything, depending on your mood.

 - random three-letter combination that is pronounceable, and not 
   actually used by any common UNIX command.  The fact that it is a
   mispronunciation of "get" may or may not be relevant.
 - stupid. contemptible and despicable. simple. Take your pick from the 
   dictionary of slang.
 - "global information tracker": you're in a good mood, and it actually
   works for you. Angels sing, and a light suddenly fills the room. 
 - "goddamn idiotic truckload of sh*t": when it breaks

This is a stupid (but extremely fast) directory content manager.  It  
doesn't do a whole lot, but what it _does_ do is track directory
contents efficiently.
-->

---

- Gerencie projetos com Repositórios(`repositories`) 
- Clone(`clone`) um projeto para trabalhar em uma cópia local 
- Controle e rastreie alterações com preparação(`staging`) e confirmação(`commit`) 
- Branch(`branch`) and Merge(`merge`) para permitir o trabalho em diferentes partes e versões de um projeto
- Extraia(`pull`) a versão mais recente do projeto para uma cópia local 
- Envie(`push`) atualizações locais para o projeto principal

<!-- 
Initialize Git on a folder, making it a Repository
Git now creates a hidden folder to keep track of changes in that folder
When a file is changed, added or deleted, it is considered modified
You select the modified files you want to Stage
The Staged files are Committed, which prompts Git to store a permanent snapshot of the files
Git allows you to see the full history of every commit.
You can revert back to any previous commit.
Git does not store a separate copy of every file in every commit, but keeps track of changes made in each commit!
-->

---
layout: two-cols
---

## Como começar

Primeiro criamos uma pasta para nosso projeto e inicializamos o repositório

```shell
mkdir projeto
cd projeto
git init
```

Isso vai criar uma pasta chamada `.git`
Após vamos configurar o git para nosso usuário:

```shell
git config --global user.name "nome"
git config --global user.email "email"
```

O parâmetro `--global` seta as configurações para todos os repositórios. Ao remover esse parâmetro
a configuração é adicionada no repositório aberto

::right::

Para verificar o conteúdo do repositório podemos usar o comando `git status`.

Ao adicionarmos um arquivo ao repositório o git vai "perceber" que existe um arquivo não versionado.
Para versionar esse arquivo primeiro, precisamos adicioná-lo ao `staging`.

```shell
git add index.html
```

Ainda temos as opções:

- `git add -A` adiciona tudo ao stage
- `git add .` adiciona modificações e novos arquivos, não remoções
- `git add -u` adiciona modificações e remoções, sem novos arquivos

<!--
git status --short 
?? - Untracked files
A - Files added to stage
M - Modified files
D - Deleted files
-->

---
layout: two-cols
---

Agora que temos arquivos em `stage`, podemos "commitar"(`commit`). Um
`commit` é como um "ponto de backup", ao trabalhar podemos voltar para o estado de um `commit` caso necessário

Sempre enviamos uma mensagem junto de um `commit`.

```shell
git commit -m "First Hello World!"
```


---
layout: image
image: /github-bitbucket-gitlab.png
background-size: contain
---

---