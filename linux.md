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

## História do Linux 🐧
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
layout: image-right
image: maddog.jpg
alt: Jon "maddog" Hall
---

John "maddog" Hall é um dos maiores evangelistas do software livre, ajudando a moldar a forma como o Linux e outras tecnologias abertas foram adotadas no mundo. Sua influência foi crucial para que empresas e governos adotassem o open source como uma alternativa viável ao software proprietário.

- um dos grandes responsáveis pela popularização do Linux no início dos anos 1990.
- ajudou a levar o sistema operacional para plataformas comerciais, especialmente em servidores.
- Foi diretor executivo da Linux International, uma organização sem fins lucrativos que promovia o uso do Linux no mundo corporativo.


<!--
Viaja pelo mundo palestrando sobre software livre, acessibilidade digital e inclusão tecnológica.
É um dos defensores do uso de tecnologias abertas na educação, especialmente em países emergentes.
Atua em diversas iniciativas para promover o uso do software livre em comunidades carentes.
Envolvido no projeto Caninos Loucos, uma iniciativa brasileira que desenvolve hardware de código aberto acessível.

"Free Software, em português é muito mais correto, Software Livre, livre como em freedom liberdade."

Apaixonado pelo Brasil, sempre participou de eventos sobre software lvire.

O apelido "maddog" (cachorro louco) foi dado por seus alunos quando ele era professor na Hartford State Technical College. Ele tinha um jeito energético e apaixonado de ensinar, o que rendeu o apelido, que ele adotou ao longo da vida.

-->

---
layout: image-right
image: richardstallman.jpg
alt: Richard Stallman
---

## Richard Stallman, O Pai do Software Livre

- Fundador da **Free Software Foundation (FSF)** (1985)
- Criador do conceito de **Software Livre** e das 4 liberdades essenciais
- Iniciador do **Projeto GNU** (1983), visando criar um sistema operacional totalmente livre
- Criador da licença **GPL (GNU General Public License)**, que garante liberdade de uso, estudo, modificação e distribuição do software
- Forte crítico de software proprietário, DRM e vigilância digital

---
layout: two-cols
---

## O Projeto GNU

- Criado em **1983** por Stallman para desenvolver um sistema operacional livre
- Objetivo: Substituir o Unix com software 100% aberto
- Desenvolveu ferramentas essenciais como **GNU Compiler Collection (GCC)**, **GNU Emacs** e **Bash**
- Influenciou o desenvolvimento do **Linux**, que passou a usar ferramentas GNU, formando o **GNU/Linux**

::right::

<img class="m-auto -z-5 bottom-0 top-0 right-0 left-0 max-w-full max-h-full" style="background-color: white" src="/gnu.svg"/>

<!--
Reescrever o Unix só com software livre.
GNU is not Unix
-->

---
layout: two-cols
---

Principais Características da GPL

Qualquer pessoa pode usar o software para qualquer propósito, sem restrições.
Liberdade para Estudar e Modificar

O código-fonte deve estar disponível para que os usuários possam entender como o programa funciona e modificá-lo como desejarem.
Liberdade para Distribuir Cópias

Os usuários podem compartilhar cópias do software, seja gratuitamente ou cobrando por isso, desde que respeitem os termos da GPL.
Liberdade para Distribuir Versões Modificadas

Qualquer versão modificada do software também deve ser distribuída sob a mesma licença GPL, garantindo que o software permaneça livre para todos.

::right::

A GPL ajudou a consolidar o movimento do software livre e influenciou diversas iniciativas, incluindo o Linux, GCC, Bash, GIMP, WordPress e muitos outros projetos essenciais.

Grandes empresas, como IBM, Red Hat e Canonical, utilizam software GPL em seus produtos e serviços.

A existência da GPL foi fundamental para a construção da infraestrutura de software livre e open source que conhecemos hoje.

---

<Youtube id="0GkdgN0S7o4" width="100%" height="100%"/>

---

## Kernel 🐧

O kernel do Linux é o núcleo do sistema operacional Linux. Ele atua como uma camada intermediária entre o hardware do computador e os softwares que os usuários executam, sendo responsável pelo gerenciamento de recursos, como CPU, memória, dispositivos de entrada e saída.

- Gerenciamento de Processos - Controla a execução de programas, escalonamento de tarefas e alocação de recursos da CPU.
- Gerenciamento de Memória - Organiza o uso da RAM, evitando conflitos entre programas.
- Sistema de Arquivos - Manipula arquivos e diretórios, suportando formatos como ext4, NTFS e FAT.
- Gerenciamento de Dispositivos - Controla periféricos como teclado, mouse, impressoras e discos rígidos por meio de drivers.
- Segurança e Controle de Acesso - Implementa mecanismos como permissões de usuários e firewall para proteger o sistema.
- Monolítico - O kernel do Linux é monolítico, contém a maioria dos serviços diretamente no seu código.
- Modular - Embora seja monolítico, ele é modular, permitindo a adição ou remoção de drivers e funcionalidades sem precisar reinicializar o sistema.

---
layout: two-cols
---

## Principais Distribuições (Distros) [🐧](https://upload.wikimedia.org/wikipedia/commons/1/1b/Linux_Distribution_Timeline.svg)
- **Ubuntu** - Amigável para iniciantes
- **Debian** - Estável e confiável
- **Arch Linux** - Para usuários avançados
- **Fedora** - Inovador e moderno
- **openSUSE** - Flexível e profissional
- **Kali** - Foco em segurança e pen test

::right::

https://upload.wikimedia.org/wikipedia/commons/1/1b/Linux_Distribution_Timeline.svg

![Distros Linux](https://upload.wikimedia.org/wikipedia/commons/1/1b/Linux_Distribution_Timeline.svg)


---

## Ambientes gráficos

Os ambientes gráficos (ou desktop environments - DEs) são responsáveis por oferecer uma interface gráfica amigável para os usuários no Linux. Eles incluem elementos como barras de tarefas, menus, janelas, gerenciadores de arquivos, configurações do sistema e diversos outros componentes que facilitam a interação com o sistema operacional.

Cada ambiente gráfico tem seu próprio foco e filosofia, atendendo diferentes públicos e necessidades. A seguir imagens do Cinnamo, Gnome, Kde e xfce.

---

<img class="m-auto -z-5 bottom-0 top-0 right-0 left-0 max-w-full max-h-full" style="background-color: white" src="/cinnamon.png"/>

---

<img class="m-auto -z-5 bottom-0 top-0 right-0 left-0 max-w-full max-h-full" style="background-color: white" src="/gnome.jpg"/>

---

<img class="m-auto -z-5 bottom-0 top-0 right-0 left-0 max-w-full max-h-full" style="background-color: white" src="/kde.png"/>

---

<img class="m-auto -z-5 bottom-0 top-0 right-0 left-0 max-w-full max-h-full" style="background-color: white" src="/xfce.png"/>

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

### **EXT4** - Padrão no Linux
- Rápido, confiável e retro compatível
- Suporta arquivos de até 16 TB
- Journaling

### **XFS** - Alta performance
- Grandes arquivos
- Suporte a snapshots e alto paralelismo

### **Btrfs** - Moderno e flexível
- Snapshot nativo, compressão e RAID embutido
- Melhor para servidores e backups

### **ZFS** - Segurança e estabilidade
- Criado pela Sun Microsystems
- Deduplicação, foco na integridade de dados

::right::

### **F2FS** - Otimizado para SSDs
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
- `ls` - Lista arquivos
- `cd` - Navega entre diretórios
- `cp` - Copia arquivos
- `mv` - Move ou renomeia
- `rm` - Remove arquivos
- `mkdir` - Cria uma pasta
- `chmod` - Modifica permissões
- `ps` - Processos em execução
- `kill` - Finaliza processos
- `touch` - Cria um arquivo

::right::

Exemplos de comandos de terminal

```sh
ls -la
cd /home
cp arquivo.txt /backup/
chmod +x script.sh
ps aux | grep firefox
kill 1234
```

---
layout: two-cols
---

## Permissões

Uma parte da segurança no linux vem das permissões para o sistema de arquivos. Onde temos tipos de usuários

- **Dono** É do usuário que criou o arquivo ou o diretório.

- **Grupo** É referente a um grupo de usuários, utilizado para organização de permissões. Exemplo grupo_usuarios, grupo_admins, grupo_visitantes

- **Outros** É quem não é o dono e nem participa de um grupo, ou seja todos os outros.


::right::

Quanto aos tipos de permissões que se aplicam ao dono, grupo e outros usuários, temos 3 permissões
básicas:

- r Permissão de leitura para arquivos. Caso for um diretório, permite listar seu conteúdo.
- w Permissão de gravação para arquivos. Caso for um diretório, permite a gravação de arquivos ou
outros diretórios dentro dele. Para que um arquivo/diretório possa ser apagado, é necessário o acesso a gravação.
- x - Permite executar um arquivo (caso seja um programa executável). Caso seja um diretório, permite
que seja acessado através do comando cd (veja “cd” para detalhes).

---

As permissões de acesso a um arquivo/diretório podem ser visualizadas com o uso do comando ls -la, com ele são exibidos 10 letras e/ou caracteres
Para maiores detalhes veja “ls”. As 3 letras (rwx) são agrupadas da seguinte forma:

```bash
-rwxr-xr-- gleydson users teste
```

- A primeira letra diz qual é o tipo do arquivo. Caso tiver um "d" é um diretório, um "l" um link a um
arquivo no sistema (veja “ln” para detalhes) , um "-" quer dizer que é um arquivo comum, etc.
- Da segunda a quarta letra (rwx) dizem qual é a permissão de acesso ao dono do arquivo. Neste caso
gleydson ele tem a permissão de ler (r - read), gravar (w - write) e executar (x - execute) o arquivo
teste.
- Da quinta a sétima letra (r-x) diz qual é a permissão de acesso ao grupo do arquivo. Neste caso todos
os usuários que pertencem ao grupo users tem a permissão de ler (r), e também executar (x) o arquivo
teste.
- Da oitava a décima letra (r--) diz qual é a permissão de acesso para os outros usuários. Neste caso todos
os usuários que não são donos do arquivo teste tem a permissão somente para ler o programa.

---

Permissões de acesso ao diretório exemplo.

```bash
drwxr-x--- 2 gleydson user 1024 nov 4 17:55 exemplo
```


- `d` A primeira letra (do conjunto das 10) determina o tipo do arquivo.
Neste caso é um diretório porque tem a letra d.

- `rwx` Estas 3 letras (da segunda a quarta) são as permissões de acesso do
dono do diretório exemplo. O dono do diretório (neste caso gleydson)
tem a permissão para listar arquivos do diretório (r), gravar arquivos
no diretório (w) e entrar no diretório (x).

- `r-x` Estas 3 letras (da quinta a sétima) são as permissões de acesso dos
usuários que pertencem ao grupo user. Os usuários que pertencem ao
grupo user tem a permissão somente para listar arquivos do diretório
(r) e entrar no diretório (x) exemplo.

- `---` Estes 3 simbolos (do oitavo ao décimo) são as permissões de acesso
para usuários que não são donos do diretório exemplo e que não
pertencem ao grupo user. Com as permissões acima, nenhum usuário
que se encaixe nas condições de dono e grupo do diretório tem a
permissão de acessa-lo.

---

### chmod
Comando utilizado para alterar permissões de arquivos ou pastas. Sempre que um arquivo é criado,
seu dono é o usuário que o criou e seu grupo é o grupo do usuário.

`chmod [opções] [permissões] [diretório/arquivo]`

 - `diretório/arquivoDiretório` ou arquivo que terá sua permissão mudada.
 - `opções, -v, --verbose` Mostra todos os arquivos que estão sendo processados.
 - `-f, --silent` Não mostra a maior parte das mensagens de erro.
 - `-c, --change` Semelhante a opção -v, mas só mostra os arquivos que tiveram as permissões
alteradas.
 - `-R, --recursive` Muda permissões de acesso do diretório/arquivo no diretório atual e sub-
diretórios.
- `ugoa+-=rwxXst` Controla que nível de acesso será mudado. Especificam, em ordem,
usuário (u), grupo (g), outros (o), todos (a).
- `+-=`  + coloca a permissão, - retira a permissão do arquivo e = define a
permissão exatamente como especificado.
- `rwx` r permissão de leitura do arquivo. w permissão de gravação. x
permissão de execução (ou acesso a diretórios).

---

#### Exemplos:

```shell
# Adicionar permissão de leitura escrita e execução para o dono e grupo
chmod ug+rwx teste.html
```

```shell
# Remover permissões de outros usuarios
chmod o-rwx teste.html
```

```shell
# Remover permissões de outros usuarios em todos os arquivos dentro de um diretório
chmod -R o-rwx teste
```

```shell
# Adicionar permissão para todos poderem executar o arquivo
chmod a+x teste.sh
```



---

- `chmod g+r *` Permite que todos os usuários que pertençam ao grupo dos arquivos (g)
tenham (+) permissões de leitura (r) em todos os arquivos do diretório
atual.
- `chmod o-r teste.txt` Retira (-) a permissão de leitura (r) do arquivo teste.txt para os
outros usuários (usuários que não são donos e não pertencem ao grupo
do arquivo teste.txt).
- `chmod uo+x teste.txt` Inclui (+) a permissão de execução do arquivo teste.txt para o dono
e outros usuários do arquivo.
- `chmod a+x teste.txt` Inclui (+) a permissão de execução do arquivo teste.txt para o dono,
grupo e outros usuários.
- `chmod a=rw teste.txt` Define a permissão de todos os usuários exatamente (=) para leitura e
gravação do arquivo teste.txt.
- `chmod +x executavel` Define a permissão para executar o arquivo.

---
layout: two-cols
---

### Octal permission

No Linux, as permissões de arquivos e diretórios são representadas de forma octal para definir quem pode ler `(r)`, escrever `(w)` e executar `(x)` determinado arquivo/diretório. Essas permissões são configuradas para três categorias de usuários da esquerda para a direita Dono, Grupo, Outros.

#### Permissões Especiais

- SUID (Set User ID - 4xxx): Permite que um arquivo executável seja rodado com as permissões do dono.
- SGID (Set Group ID - 2xxx): os arquivos dentro da pasta herdam o grupo do diretório.
- Sticky Bit (1xxx): impede que usuários excluam arquivos de outros usuários.

::right::

| Valor Octal |         Permissão         |
|:-----------:|:-------------------------:|
| 0           | --- (sem permissões)      |
| 1           | --x (somente execução)    |
| 2           | -w- (somente escrita)     |
| 3           | -wx (escrita e execução)  |
| 4           | r-- (somente leitura)     |
| 5           | r-x (leitura e execução)  |
| 6           | rw- (leitura e escrita)   |
| 7           | rwx (todas as permissões) |

---

## Gerenciadores de Pacotes

Os gerenciadores de pacotes no Linux são ferramentas essenciais para instalar, atualizar, remover e gerenciar software de maneira eficiente. Cada distribuição Linux possui seu próprio gerenciador de pacotes, geralmente baseado no formato de empacotamento que utiliza.

### **Base Debian/Ubuntu**
- **APT (Advanced Package Tool)** → Trabalha com pacotes **.deb**.
  - Comandos:
    ```bash
    sudo apt update        # Atualiza a lista de pacotes disponíveis
    sudo apt upgrade       # Atualiza todos os pacotes instalados
    sudo apt install pacote # Instala um pacote
    sudo apt remove pacote # Remove um pacote
    ```
- **DPKG (Debian Package Manager)** → Gerencia pacotes diretamente, sem resolver dependências.
  - Exemplo:
    ```bash
    sudo dpkg -i pacote.deb   # Instala um pacote manualmente
    sudo dpkg -r pacote       # Remove um pacote
    ```

---

### **Base Red Hat (RHEL, Fedora, CentOS, Rocky Linux)**
- **DNF (Dandified Yum)** → Sucessor do **YUM**, usado para gerenciar pacotes **.rpm**.
  - Comandos:
    ```bash
    sudo dnf install pacote  # Instala um pacote
    sudo dnf remove pacote   # Remove um pacote
    sudo dnf update          # Atualiza todos os pacotes
    ```
- **RPM (Red Hat Package Manager)** → Similar ao `dpkg`, gerencia pacotes individualmente.
  - Exemplo:
    ```bash
    sudo rpm -i pacote.rpm  # Instala um pacote
    sudo rpm -e pacote      # Remove um pacote
    ```

---

### **Base Arch Linux**
- **Pacman** → Gerencia pacotes no Arch Linux e derivados (Manjaro, EndeavourOS).
  - Comandos:
    ```bash
    sudo pacman -Syu          # Atualiza o sistema
    sudo pacman -S pacote     # Instala um pacote
    sudo pacman -R pacote     # Remove um pacote
    ```

- **AUR Helpers (yay, paru)** → Permitem instalar pacotes da **Arch User Repository (AUR)**.
  - Exemplo com `yay`:
    ```bash
    yay -S pacote  # Instala um pacote do AUR
    ```

---

### **Base SUSE (openSUSE, SUSE Linux Enterprise)**
- **Zypper** → Gerenciador de pacotes para sistemas baseados no **openSUSE**.
  - Comandos:
    ```bash
    sudo zypper install pacote  # Instala um pacote
    sudo zypper remove pacote   # Remove um pacote
    sudo zypper update          # Atualiza o sistema
    ```
---

### **Gerenciadores Universais (Cross-Distribution)**

Além dos gerenciadores específicos de cada distribuição, existem soluções **independentes** do sistema:

- **Snap (Canonical)** → Formato de pacote isolado usado no Ubuntu e outras distros.
    ```bash
    sudo snap install pacote  # Instala um snap
    sudo snap remove pacote   # Remove um snap
    ```

- **Flatpak (Red Hat)** → Alternativa ao Snap, com suporte a diversas distribuições.
    ```bash
    flatpak install repositório pacote  # Instala um flatpak
    flatpak remove pacote               # Remove um flatpak
    ```

- **AppImage** → Arquivos portáteis que não precisam de instalação.
    ```bash
    ./arquivo.AppImage
    ```


---
layout: two-cols
---

<img class="max-w-full max-h-full" style="background-color: white" src="/linuxline.jpg"/>

::right::

<img class="max-w-full max-h-full" style="background-color: white" src="/justforfun.jpg"/>

---
layout: two-cols
---

<img class="max-w-full max-h-full" style="background-color: white" src="/linuxguia.jpg"/>

::right::

<img class="max-w-full max-h-full" style="background-color: white" src="/lpi.jpg"/>

---