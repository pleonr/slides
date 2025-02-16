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
title: Linux
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
image: /Linus.webp
---

## História do Linux
- Criado em 1991 por **Linus Torvalds**
- Baseado no **Unix**
- Open Source
- Código aberto sob a licença **GPL**
- Comunidade global de desenvolvimento

Linux é um termo popularmente empregado para se referir a sistemas operacionais que utilizam o Kernel Linux inspirado no sistema Minix que era baseado em Unix. E surgiu como um projeto pessoal, sem fins lucrativos.

https://github.com/torvalds/linux

No dia 25 de agosto de 1991, ele anunciou esse sistema em um post no newsgroup "comp.os.minix." da Usenet

---

```
Olá a todos que estão usando minix -

Eu estou fazendo um sistema operacional livre (é apenas um hobby, não será grande e
profissional como o gnu) para os clones AT 386(486). Está sendo desenvolvido desde abril
e está quase pronto. Gostaria de receber qualquer feedback sobre o que as pessoas
gostam/não gostam no minix, uma vez que o meu SO se parece um pouco com ele (mesmo
layout físico de sistema de arquivos (devido a razões práticas) entre outras coisas.

No momento eu o portei para bash(1.08) e gcc(1.40), e as coisas parecem funcionar.
Isso implica que irei conseguir algo prático dentro de poucos meses e gostaria de
saber quais características a maioria das pessoas gostaria que tivesse. Quaisquer
sugestões são bem-vindas, mas não prometo que eu vá implementá-las :-)

Linus (torvalds@kruuna.helsinki.fi)

PS. Sim — ele não tem nenhum código minix, e possui um fs multitarefa. Ele NÃO é
portável (usa troca de contexto 386, etc), e provavelmente nunca será compatível
com nada além de discos rígidos AT, uma vez que isso é tudo o que eu tenho :-(.
— Linus Torvalds
```

---
layout: image-right
image: tux.png
---

Hoje aproximadamente 92% dos super computadores em atividade no mundo utilizam Linux.
https://top500.org/statistics/list/

O SO também é utilizado em computadores pessoais, videogames, dispositivos móveis
e embarcados... [85% dos smartphones utilizam Linux](https://linuxblog.io/85-of-all-smartphones-are-powered-by-linux/).

---
layout: two-cols
---

## Principais Distribuições (Distros) [🐧](https://upload.wikimedia.org/wikipedia/commons/1/1b/Linux_Distribution_Timeline.svg)
- **Ubuntu** – Amigável para iniciantes
- **Debian** – Estável e confiável
- **Arch Linux** – Para usuários avançados
- **Fedora** – Inovador e moderno
- **openSUSE** – Flexível e profissional
- **Kali** - Foco em segurança e pen test

::right::

![Distros Linux](https://upload.wikimedia.org/wikipedia/commons/1/1b/Linux_Distribution_Timeline.svg)

---

<img class="m-auto -z-5 bottom-0 top-0 right-0 left-0 max-w-full max-h-full absolute" style="background-color: white" src="/cinnamon.png"/>

---

<img class="m-auto -z-5 bottom-0 top-0 right-0 left-0 max-w-full max-h-full absolute" style="background-color: white" src="/gnome.jpg"/>

---

<img class="m-auto -z-5 bottom-0 top-0 right-0 left-0 max-w-full max-h-full absolute" style="background-color: white" src="/kde.png"/>

---

<img class="m-auto -z-5 bottom-0 top-0 right-0 left-0 max-w-full max-h-full absolute" style="background-color: white" src="/xfce.png"/>

---

## Sistemas de Arquivos 📂

É a definição de **como os dados são armazenados e organizados** no sistema
- Controla a leitura, escrita e manipulação de arquivos
- Diferentes sistemas otimizados para diferentes necessidades

<br>

<img class="m-auto -z-5 bottom-0 right-0 left-0 max-w-full max-h-full" style="background-color: white" src="/ext.jpg"/>


---
layout: two-cols
---

## Sistemas de Arquivos 📁

### **EXT4** – Padrão no Linux
- Rápido, confiável e retro compatível
- Suporta arquivos de até 16 TB
- Journaling

### **XFS** – Alta performance
- Grandes arquivos
- Suporte a snapshots e alto paralelismo

### **Btrfs** – Moderno e flexível
- Snapshot nativo, compressão e RAID embutido
- Melhor para servidores e backups

### **ZFS** – Segurança e estabilidade
- Criado pela Sun Microsystems
- Deduplicação, foco na integridade de dados

::right::

### **F2FS** – Otimizado para SSDs
- Criado pela Samsung
- Melhor uso da memória flash

<br>

| Sistema | Vantagem |
|---------|---------|
| **EXT4** | Equilíbrio entre desempenho e estabilidade |
| **XFS** | Melhor para arquivos grandes |
| **Btrfs** | Snapshot e compressão nativos |
| **ZFS** | Segurança e integridade de dados |
| **F2FS** | Desempenho otimizado para SSDs |

---
layout: two-cols
---

## Estrutura de Pastas 📁

| Diretório | Função |
|-----------|--------|
| `/` | Raiz do sistema |
| `/home` | Diretório dos usuários |
| `/bin` | Binários essenciais |
| `/etc` | Arquivos de configuração |
| `/var` | Logs e variáveis do sistema |
| `/usr` | Programas e bibliotecas |

::right::

<img class="m-auto -z-5 bottom-0 right-0 left-0 max-w-full max-h-full" style="background-color: white" src="/file_system.png"/>

---
layout: two-cols
---

## Principais Comandos 💻
- `ls` – Lista arquivos
- `cd` – Navega entre diretórios
- `cp` – Copia arquivos
- `mv` – Move ou renomeia
- `rm` – Remove arquivos
- `chmod` – Modifica permissões
- `ps` – Processos em execução
- `kill` – Finaliza processos

::right::

```sh
ls -la
cd /home
cp arquivo.txt /backup/
chmod +x script.sh
ps aux | grep firefox
kill 1234
```