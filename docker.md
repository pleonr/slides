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
title: Docker
author: Pablo Leon Rodrigues
download: true
export:
  format: pdf
  timeout: 30000
  withClicks: false
---

---

<Toc maxDepth="3"></Toc>

---
layout: two-cols
---

# Docker

Docker é uma plataforma open source que automatiza a implantação, escalabilidade e execução de aplicações dentro de contêineres. 

Contêineres são ambientes isolados e portáteis que contêm tudo o que uma aplicação precisa para funcionar, incluindo bibliotecas, dependências e configurações.

<img class="m-auto -z-5 bottom-0 left-0 h-50 absolute" src="/itworksonmymachine.jpg"/>

::right::

<img class="m-auto -z-5 top-40 right-20 h-50 absolute" src="/docker.svg"/>

Antes de falar do docker precisamos entender a diferença entre `Virtualização` e `Conteinarização`

<!--
Outros containers, singularity
-->

---
layout: two-cols
---

## Virtualização (virtualization)

Em vez de usar um único sistema físico para cada tarefa, a tecnologia de virtualização permite dividir o hardware em várias máquinas virtuais (VMs) que operam como sistemas independentes, com seu próprio sistema operacional e aplicações. Cada VM compartilha os recursos do hardware físico, mas opera de forma isolada das demais.

<img class="m-auto -z-5 left-0 right-0 h-60 absolute" src="/virtualization.webp"/>

::right::

Para gerênciar várias máquinas virtuais existe uma camada chamada `hypervisor`, como por exemplo, VirtualBox, VMwere, KVM. O Hipervisor é responsável dimensionar a máquina virtual, fornecer acesso, iniciar e desligar vms... entre outras tarefas.

Existem dois tipos principais de Hypervisors:

- Hosted: são softwares instalados na máquina, e dependem de um sistema operacional, como VMWare e VirtualBox.

- BareMetal: esses softwares rodam diretamente no hardware do host, tendo um controle do host em mais baixo nível... VMware ESXi, Microsoft Hyper-V, and Citrix XenServer.


<!--
Lembrar de falar que a virtualização divide os recursos, memoria, disco e cpu, sendo que os sistemas são isolados um do outro apesar de compartilhar o hardware.
Exemplo EC2 da amazon

Vantagens da Virtualização
- Isolamento total: Cada VM opera de forma independente, com seu próprio sistema operacional, garantindo segurança e isolamento total.
- Compatibilidade: Permite rodar múltiplos sistemas operacionais no mesmo hardware, como Windows e Linux.
- Facilidade de migração: As VMs podem ser facilmente migradas entre servidores físicos, facilitando o balanceamento de carga e a recuperação de desastres.
- Ambientes robustos e estáveis: Cada VM possui seus próprios recursos alocados, tornando-as adequadas para aplicações pesadas.
Desvantagens da Virtualização
- Consumo de recursos: Cada VM carrega um sistema operacional completo, o que consome mais memória e processamento.
- Inicialização mais lenta: Devido ao sistema operacional independente, o tempo de inicialização das VMs tende a ser mais lento.
- Overhead do hypervisor: O hypervisor consome recursos do sistema físico, o que pode reduzir a eficiência em comparação com contêineres.

-->

---
layout: two-cols
---

## Conteinerização (containerization)

A conteinerização é uma tecnologia que permite empacotar um aplicativo e suas dependências em um "container", que é um ambiente isolado, mais leve e que roda em cima do sistema operacional.

A conteinerização compartilha o kernel do sistema operacional do host com múltiplos containers, usando recursos nativos. Cada container é uma instância isolada do ambiente necessário para o aplicativo, incluindo dependências e bibliotecas, mas sem precisar de um sistema operacional completo sendo mais leve que a virtualização.

::right::

<img class="m-auto -z-5 left-0 right-0 h-110 absolute" src="/container.png"/>

---

|       **Aspecto**      |               **Virtualização**               |               **Containerização**               |
|:----------------------:|:---------------------------------------------:|:-----------------------------------------------:|
| Isolamento             | Completo com SO próprio                       | Compartilhamento do kernel do host              |
| Consumo de Recursos    | Alto, devido ao SO completo                   | Baixo, devido ao compartilhamento do kernel     |
| Inicialização          | Mais lento                                    | Mais rápido                                     |
| Portabilidade          | Boa, depende dos hypervisors                  | Muito alta, independente de infraestrutura      |
| Escalabilidade         | Escalável, mas com overhead maior             | Facilmente escalável, ideal para microsserviços |
| Segurança              | Maior isolamento                              | Isolamento limitado                             |
| Uso ideal              | Aplicações pesadas, múltiplos SOs             | Microsserviços, aplicações leves e portáveis    |

---
layout: two-cols
---

#### Prós:{style="color: green;"}

- Portabilidade: Aplicações podem ser executadas de forma consistente em diferentes ambientes.
- Isolamento: Contêineres são isolados, reduzindo conflitos entre dependências.
- Eficiência: Contêineres são leves em comparação com máquinas virtuais, economizando recursos.
- Escalabilidade: Fácil replicação e escalabilidade horizontal.

::right::

#### Cons:{style="color: green;"}

- Complexidade: Configurações complexas podem ser desafiadoras para iniciantes.
- Persistência de Dados: Contêineres são efêmeros por padrão; gerenciar dados persistentes requer configuração adicional.
- Segurança: Embora isolados, contêineres compartilham o mesmo kernel do sistema operacional host, o que pode representar um risco de segurança em algumas situações.

---

### Instalação

O [`Docker`](https://docs.docker.com/) para vários SO's, vamos trabalhar com [Linux](https://docs.docker.com/desktop/install/linux/),
nas máquinas do laboratório temos o Ubuntu instalado e o Docker está nos principais repositórios.

Instalando pré-requisitos:

```shell
sudo apt-get update 
sudp apt-get install qemu-system-x86 pass
sudo apt-get install curl apt-transport-https ca-certificates software-properties-common
```

Adiciona a chave GPG, inserindo o comando a seguir:

```shell
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

Agora, adicione o repositório executando este comando:

```shell
sudo add-apt-repository 
  "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
```

---

Depois disso, atualize a informação do repositório

```shell
sudo apt update
```

Garanta que você está instalando a partir do repositório do Docker, ao invés do repositório padrão do Ubuntu ao usar este comando:

```shell
apt-cache policy docker-ce
``` 

A saída correta vai ficar como o texto a seguir, com diferentes números de versões:

```shell
docker-ce:
   Installed: (none)
   Candidate: 16.04.1~ce~4-0~ubuntu
   Version table:
       16.04.1~ce~4-0~ubuntu 500
            500 https://download.docker.com/linux/ubuntubionic/stableamd64packages
```

---
layout: two-cols
---

Após o processo anterior ter sido executado instale utilizando o repositório:

```shell
sudo apt install docker-ce
```

No Ubuntu server apenas o comando abaixo é suficiente:

```shell
sudo apt install docker.io
```

E para verificar a instalação

```shell
sudo systemctl status docker
```

::right::

Para instalar Docker Desktop, baixe o arquivo em [Deb package](https://desktop.docker.com/linux/main/amd64/docker-desktop-amd64.deb)

E em seguida entre na pasta onde o arquivo foi baixado:

```shell
 cd ~/Downloads
 chmod +x docker-desktop-amd64.deb 
```

Atualize os repositórios e depois instale o package .deb

```shell
 sudo dpkg -i ./docker-desktop-amd64.deb
```

<!--
$ sudo sysctl -w kernel.apparmor_restrict_unprivileged_userns=0
$ systemctl --user restart docker-desktop


sudo usermod -aG docker $USER
ls -la /var/run/docker.sock  

systemctl status docker 
sudo systemctl start docker
sudo systemctl restart docker


sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
-->

---

### Primeiro Container

Execute o seguinte comando:

```shell
docker run hello-world
```

<img class="m-auto -z-5 left-0 right-0 max-w-full absolute" src="/docker-hellor-world.png"/>


---

<img src="/docker-hub.png" class="m-auto left-0 right-0 rounded " />

---
layout: two-cols
---

## Dockerfile

O `Dockerfile` é o ponto de entrada de um container docker, é onde a imagem e toda a lógica do container são definidos. Neste [arquivo](https://docs.docker.com/reference/dockerfile/) definimos as etapas para criação de um container.

- FROM: define a imagem base do container.
- WORKDIR: define o diretório de trabalho dentro do container.
- COPY: copia arquivos do sistema de arquivos host para o sistema de arquivos do container.
- RUN: executa comandos no container durante o processo de build.
- EXPOSE: informa qual porta o serviço do container vai escutar

::right::

- CMD: define o comando padrão que será executado quando o contêiner for iniciado. Diferente de RUN, que é executado durante o build, CMD é executado quando o contêiner já está rodando.

Etapas do `container`

- Build da imagem: Ao executar `docker build -t nome-da-imagem .`, o Docker lê o Dockerfile, segue as instruções e cria uma imagem.
- Run da imagem: Quando você executa `docker run - 3000:3000 nome-da-imagem`, o Docker cria um contêiner a partir da imagem criada, mapeia a porta 3000 do host para a porta 3000 do contêiner, e executa o comando definido em CMD.




---

Crie um arquivo chamado `speech.sh`

```shell
#!/bin/bash

TEXTO=("Arise, arise, riders of Rohan!
Fell deeds awake, fire and slaughter!
Spear shall be shaken, shield be splintered!
A sword-day, a red day, ere the sun rises!
Ride now, ride now, ride to Gondor!")

figlet -w 500 -f doh "$TEXTO"
```

---

Após isso vamos criar um `Dockerfile`:

```shell
FROM ubuntu:latest
RUN apt update && apt install -y figlet wget
RUN wget -P /usr/share/figlet http://www.jave.de/figlet/fonts/details/doh.flf
COPY speech.sh /speech.sh
RUN chmod +x /speech.sh
CMD ["/speech.sh"]
```

Vamos criar a imagem:

```shell
docker build -t "ascii" .
```

<!--
- Usa a versão mais atual do ubuntu
- instala o wget e o figlet
- copia o script
- aplica permissões para o script
- Seta o default para roda o script
-->

E usar a imagem:

```shell
docker run ascii:latest 
```

<!--
docker build -t "ascii:v0.0.2" .
-->


---
layout: two-cols
---

Nesse exemplo vamos criar um container para a nossa primeira API com javascript em memória mesmo.

```dockerfile
FROM node:16
# Define o diretório de trabalho
WORKDIR /app
# Copia o package.json
COPY package.json ./
RUN npm install
# Copia o código da aplicação
COPY . .
# Expomos uma porta
EXPOSE 3001
# Comando para iniciar o serviço
CMD ["npm", "start"]
``` 

::right::

#### Construir a imagem

```shell
docker build -t api .
```

#### Executar o container

```shell
docker run -d -p 3002:3001 api
```

#### Listar Containers

```shell
docker ps
```

#### Parar e Remover Containers

```shell
docker stop <container-id>
docker rm <container-id>
```

#### Ver logs

```shell
docker logs <container-id>
```

#### Acessar terminal

```shell
docker exec -it <container-id> /bin/bash
```

<!--
-d: Executa o contêiner em modo "detached" (em segundo plano).
-p 3002:3001: Mapeia a porta do contêiner para a porta 3002 do seu host.
nome-da-imagem: Nome da imagem
-->

---

### Dockerignore

Mas assim como temos arquivos que queremos ignorar no gitignore também seria necessário ignorar na imagem do container, por exemplo:
- .env
- node_modules/

Para isso existe o `.dockerignore` ele segue as mesmas regras do `.gitignore`.

```
node_modules
.env
```


---

## Docker Compose

O Docker Compose é uma ferramenta que facilita a definição e o gerenciamento de aplicações multi-container no Docker.

Ele permite que você defina todos os serviços, redes e volumes de sua aplicação em um arquivo YAML (docker-compose.yml).

Vamos utilizar nossa api e criar um `docker-compose.yaml` na pasta raiz da api junto ao Dockerfile.

```shell
docker-compose up --build // ou down
```


---
layout: two-cols
---

##### docker-compose

```yaml
version: '3.8'
services:
  api:
    build: .
    container_name: api
    ports:
      - "3000:3000"
    environment:
      - DB_HOST=postgres
      - DB_PORT=5432
      - DB_USER=postgres
      - DB_PASSWORD=masterkey
      - DB_NAME=api
    depends_on:
      - postgres
    networks:
      - api-network
```

::right::

```yaml
  postgres:
    image: postgres:16
    container_name: postgres-db
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: masterkey
      POSTGRES_DB: api
    ports:
      - "5000:5432"
    volumes:
  - postgres-data:/var/lib/postgresql/data
    networks:
      - api-network
networks:
  api-network:
    driver: bridge
volumes:
  postgres-data:
```





































---
layout: two-cols
---

## Outros Commandos

##### Help

```shell
docker --help
```

##### Listar

```shell
docker images
```


::right::

##### Iniciar docker daemon

```shell
sudo systemctl start docker
```

##### Parar docker daemon
```shell
sudo systemctl restart docker
```

##### Reiniciar container
```shell
docker-compose restart
```

##### Deletar todos os Containers
```shell
docker rm -f $(docker ps -a -q)
```

##### Deletar todos os volumes: 
```shell
docker volume rm $(docker volume ls -q)
```











---

https://ubuntu.com/blog/containerization-vs-virtualization

https://stackoverflow.com/questions/75907472/docker-desktop-does-not-launch-on-ubuntu-failed-to-start-docker-desktop-service

https://www.youtube.com/watch?v=Ud7Npgi6x8E