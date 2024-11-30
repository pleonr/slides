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
title: PERN
author: Pablo Leon Rodrigues
export:
  format: pdf
  timeout: 30000
  withClicks: false
---

---

<Toc columns="2" maxDepth="3"></Toc>

---

## PERN

O PERN stack é uma coleção de quatro tecnologias usadas para construir aplicativos web, PostgreSql, Express, React e 
Nodejs.

- PostgreSQL{style="color: lightblue;"}: um sistema de gerenciamento de banco de dados relacional de objeto (ORDBMS) 
de código aberto que oferece suporte a SQL para dados relacionais e JSON para dados não relacionais.
- Express.js{style="color: lightyellow;"}: uma estrutura da web JavaScript popular desenvolvida para Node.js que simplifica a construção de 
aplicativos da web e APIs. 
- React.js{style="color: thistle;"}: uma biblioteca JavaScript para construir interfaces de usuário dinâmicas. 
- Node.js{style="color: lightgreen;"}: um ambiente de tempo de execução JavaScript que permite executar JavaScript no lado do servidor.


---

![](/pern.jpg)

---

### Prós

- JavaScript full-stack: usar JavaScript tanto para front-end quanto para back-end 
pode simplificar o desenvolvimento para aqueles que já estão familiarizados com a linguagem. 
- Comunidade: as grandes comunidades por trás de cada tecnologia da pilha fornecem amplos recursos de aprendizagem e
suporte. 
- Escalabilidade: O stack PERN pode lidar com aplicações pequenas e grandes devido à escalabilidade inerente
de seus componentes. 
- Flexibilidade: Os recursos de manipulação de dados do PostgreSQL oferecem flexibilidade no armazenamento e
gerenciamento de dados.

---

### Cons

- Complexidade: embora o uso de JavaScript em toda a pilha possa ser vantajoso, ele também pode adicionar complexidade
para desenvolvedores que não estão familiarizados com JavaScript no back-end. 
- Escolha de banco de dados: o PostgreSQL pode ser um exagero para aplicativos mais simples que não exigem seus 
recursos avançados. 
- Considerações de segurança: como acontece com qualquer desenvolvimento web, a segurança precisa ser cuidadosamente
considerada. Porém, o mesmo pode ser dito para qualquer outro stack.

---
layout: two-cols
---

## REACT

REACT é uma biblioteca Javascript utilizada para criar interfaces de usuário. Mais utilizado para single-page apps, foi
desenvolvido pelo Facebook.

O objetivo do react é simplificar o processo de desenvolver interfaces de usuário utilizando uma abordagem baseada em
componentes.

![](/react-component.png)

JSX, uma extensão de sintaxe para JavaScript, permite aos desenvolvedores escrever componentes de UI em um formato
semelhante a XML ou HTML. Tornando o código mais legível e expressivo.

::right::


```jsx
function Video({ video }) {
  return (
    <div>
      <Thumbnail video={video} />
      <a href={video.url}>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </a>
      <LikeButton video={video} />
    </div>
  );
}
```

React usa um DOM virtual (Document Object Model). Em vez de atualizar todo o DOM quando os dados mudam, o React
primeiro cria uma representação virtual do DOM na memória. Em seguida, ele calcula a maneira mais eficiente de
atualizar o DOM real, reduzindo a necessidade de recarregamentos.

---

### Virtual DOM

O Virtual DOM é uma representação DOM real na memória. Quando o estado de um componente muda,
o React não manipula o DOM diretamente. O seguinte processo ocorre:

- O React cria uma cópia virtual do DOM (Virtual DOM)
- As atualizações são feitas primeiro nesse Virtual DOM
- O React então compara o Virtual DOM com a versão anterior (diffing)
- Após essa comparação, o React calcula a menor quantidade de alterações necessárias para transformar o DOM real para refletir o Virtual DOM.
- Só então o React atualiza o DOM real com essas mudanças específicas, evitando re-renderizações desnecessárias.

---

#### Renderização

O processo de renderização do React funciona principalmente em três etapas:


1. **Renderização Inicial**
Quando você carrega uma aplicação React pela primeira vez, o componente raiz (normalmente App.js) é renderizado.
O React cria o Virtual DOM com base nos componentes JSX que você definiu.
Em seguida, o React transforma esse Virtual DOM em HTML e aplica ao DOM real do navegador.
2. **Mudanças no Estado ou Props**
Cada vez que ocorre uma mudança de estado ou props em um componente:
O React cria um novo Virtual DOM refletindo o estado atualizado.
Ele compara o novo Virtual DOM com o anterior, identificando as diferenças (essa fase é chamada de diffing).
Com base nas diferenças encontradas, o React aplica somente as mudanças mínimas ao DOM real.
3. **Reconciliação**
O processo de reconciliação é o mecanismo que o React usa para decidir o que precisa ser atualizado no DOM real. Ele envolve duas etapas principais:
- Diffing: Comparação entre o antigo e o novo Virtual DOM.
- Patching: Aplicação das mudanças necessárias no DOM real.

<!--
Melhor performance: Ao minimizar a quantidade de operações diretas no DOM, o React melhora o desempenho da aplicação.
Atualizações eficientes: O processo de reconciliação permite que o React atualize apenas os elementos que realmente mudaram.
Desenvolvimento mais fácil: Como os desenvolvedores não precisam manipular o DOM diretamente, o código React tende a ser mais simples e declarativo.
-->



---
layout: image
image: /virtualdoomreact.webp
---

---

### Next.js

O react recomenda a utilização de frameworks para construção de app, vamos utilizar o [Next.js](https://nextjs.org/),
desenvolvido pela [Vercel](https://vercel.com).

O Nextjs, utiliza [Tailwind](https://tailwindcss.com/) css como padrão para folhas de estilo. 

Para instalar o Nextjs:

```shell
npm install -g nextjs
npx create-next-app@latest
```

<br>

![](/next-app.png)

::right::

![](/nextjsapp.png)

---
layout: two-cols
---

![](/nextnew.png)

::right::

- public: pasta para assets e recursos staticos
- src/pages: cada arquivo aqui será interpretado como uma rota na aplicação
- _app.tsx: Inicializa todas as páginas e permite personalizar o comportamento global.
- _document.tsx: Personaliza o HTML e o body que é renderizado no servidor.
- index.tsx: A página inicial da sua aplicação (rota /).
- next.config.js	Arquivo de configuração Next.js
- package.json	Dependências e scripts do projeto
- .eslintrc.json	Arquivo de configuração ESLint
- next-env.d.ts	Arquivo de configuração TypeScript para Next
- tsconfig.json	Arquivo de configuração  TypeScript


---

- `_app.tsx` é responsável por inicializar as páginas do Next, aqui podemos incluir layout global como header e footer ou wrappers que devem aparecer em todas as páginas e incluir CSS global definindo estilos que serão aplicados em toda a aplicação.

- `_document.tsx` é utilizado para modificar a estrutura básica do documento HTML que é enviado ao cliente. Ele é carregado apenas no servidor, e você pode usá-lo para personalizar o HTML e o body da aplicação, usado inserir fontes ou scripts externos, adicionar links de fontes ou incluir scripts que precisam estar no documento HTML. E também para incluir metadados globais, como favicon, tags meta, etc.

---

### Componentes

Um componente é um bloco de código reutilizável e independente, que divide a interface do usuário em partes menores.

![](/componentes-react.png)

--- 

### CSS

O Next pode adicionar por padrão o Tailwind, mas podemos usar outras bibliotecas. Vamos utilizar o [ReactBootstrap](https://react-bootstrap.netlify.app/).

A instalação requer dois pacotes npm `react-bootstrap` e `bootstrap`.

```shell
npm install react-bootstrap
npm install bootstrap
```

E para utilizar o react bootstrap em todo o projeto chamamos precisamos invocar o css do bootstrap no app:

```typescript
// _app.tsx
import 'bootstrap/dist/css/bootstrap.min.css'
import "@/styles/globals.css"
```

---

### Criando o componente de navegação

```typescript
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const NavbarTop = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" fixed="top">
      <Container>
        <Navbar.Brand>
          <Link href="/">Home</Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} href="/partidas" passHref>
            Partidas
          </Nav.Link>
        </Nav>
      </Container>
      <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="#link">Logoff</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}
export default NavbarTop
```


---

### Componentes de classe

Os **componentes de classes** têm acesso a recursos adicionais, como o ciclo de vida do componente. 
Isso permite que os desenvolvedores controlem o comportamento do componente em diferentes estágios, `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`

Eles também têm suporte nativo ao gerenciamento de estado usando o objeto `state`. Isso permite que os desenvolvedores 
armazenem e atualizem o estado interno do componente de forma fácil e intuitiva. 

Esses componentes precisavam de um método render() para poder retornar o JSX.

```jsx
import React, { Component } from 'react'

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

---
layout: two-cols
---

### Componentes funcionais

Um componente funcional, basicamente, é uma função em JavaScript/ES6 que retorna um elemento do React (JSX).

Os componentes funcionais oferecem uma sintaxe mais concisa, facilidade de reutilização e melhor desempenho, 
sendo a escolha preferida para novos projetos e aqueles que buscam uma abordagem mais moderna de desenvolvimento. Eles
possibilitam gerênciar o lifecycle através de `hooks`.

- é uma função em JavaScript/ES6 
- deve retornar um elemento em React (JSX)
- sempre começa com letra maiúscula (convenção dos nomes)
- aceita props como parâmetro, se necessário

::right::

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
export default Welcome;
```

```jsx
import Welcome from './Welcome';

function App() { 
  return 
    <div className="App">
      <Welcome name="John"/>
    </div>
}
```

`props` são a forma de comunicação entre componentes react. As props transportam dados apenas do elemento pai para os elementos
filhos.
---
layout: two-cols
---

### useState hook

Você chama `useState` dentro do seu componente funcional para declarar uma variável `state`. Essa variável deve ser 
criada no escopo do componente, ao tentar criar um `state` dentro de uma função, bloco condicional ou loop irá causar um
erro.

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0)
  return (<div>{count}<div>);
}
```

::right::

- A chamada `{useState(0)}` declara a variável de estado count com um valor inicial de 0.
- A função setCount é usada para atualizar a variável. 
- `useState` pode ser usado para gerenciar vários tipos de dados, incluindo números, strings, booleanos, arrays ou objetos.
- As atualizações de estado sempre devem ser feitas usando a função setter retornada por useState.
- Nunca modifique diretamente a variável de estado.
- Os componentes do React são renderizados novamente sempre que seu estado muda. 
Isso garante que a IU reflita os valores de estado mais recentes.

---
layout: two-cols
---

### useEffect hook

Hooks são funções que possibilitam gerenciar efeitos em componentes funcionais.

- Buscar data de API's
- Manipular DOM
- Criar temporizadores

```jsx
useEffect(function, dependencies)
```
```jsx
useEffect(() => {
    
}, []);
```

::right::

- O primeiro argumento `function` é uma função que contém a lógica do efeito colateral. 
- O segundo argumento `dependencies` (opcional) é uma matriz de dependências. 
Isso informa ao React quando executar novamente o efeito, se nenhuma dependência for especificada,
o efeito será executado após cada renderização.

Ao executar, por padrão o `effect` vai rodar depois do render inicial e depois de cada update subsequente. Esse 
padrão pode ser alterado usando a um `array` de dependências. Se o array estiver vazio essa função só vai executar uma 
vez, se tiver um valor(es), toda vez que esse valor for alterado a função vai ser executada.

---

```jsx
const [count, setCount] = useState(0)
return(
    <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>mais</button>
        <button onClick={() => setCount(count - 1)}>menos</button>
    </div>
)
```

```jsx
const [hello, setHello] = useState("Hello")
const [bool, setBool] = useState(true)
return(
    <div>
        <p>{hello}</p>
        <button onClick={() => setHello("goodbye")}>bye</button>
        {bool ? <p>verdadeiro</p> : <p>false</p>}
        <button onClick={() => bool ? setBool(false) : setBool(true)}>toogle</button>
    </div>
)
```

---

```jsx
    const [counter, setCounter] = useState(0)
    const [word, setWord] = useState("no")

    useEffect(() => {
        console.log("renderizou")
    }, []);

    return (
        <div>
            <p>{counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Mais</button>

            <p>{word}</p>
            <button onClick={() => setWord("yes")}>yes</button>
        </div>
    )
```

---

### Fetch API

```jsx
useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((resp) => resp.json())
        .then((apiData) => {
            setData(apiData.message);
        });
}, [update]);
```

---
layout: two-cols
---

### Axios

Axios é um cliente HTTP baseado em promessa para `node.js` e navegador. É isomórfico (pode rodar no navegador e 
nodejs com a mesma base de código). No lado do servidor utiliza o módulo http nativo node.js, enquanto no 
cliente (navegador) utiliza XMLHttpRequests. `npm install axios`

```jsx
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
});

export default api;
```

::right::

```jsx
axios({
  method: 'post',
  url: '/login',
  data: {
    firstName: 'Finn',
    lastName: 'Williams'
  }
});
```

- `axios.request(config)`
- `axios.get(url[, config])`
- `axios.delete(url[, config])`
- `axios.head(url[, config])`
- `axios.options(url[, config])`
- `axios.post(url[, data[, config]])`
- `axios.put(url[, data[, config]])`
- `axios.patch(url[, data[, config]])`

---
layout: two-cols
---

#### Axios Post

Depois que uma solicitação HTTP POST é feita, o Axios retorna uma promessa que é cumprida ou rejeitada, dependendo da
resposta do serviço de backend

```jsx
axios.post('/login', {
  firstName: 'Finn',
  lastName: 'Williams'
})
.then((response) => {
  console.log(response);
}, (error) => {
  console.log(error);
});
```

Se a promessa for cumprida, o primeiro argumento de then() será chamado; se a promessa for rejeitada, o segundo
argumento será chamado.

::right::

```json
{
  // `data` é a resposta(*response*)
  data: {},
  // `status` é o HTTP status code
  status: 200,
  // `statusText` é a mensagem de status
  statusText: 'OK',
  // `headers` headers da resposta
  headers: {},
  // `config` configuração para o axios
  config: {},
  // `request` é o request dessa response
  request: {}
}
```

---
layout: two-cols
---

### SPA

Uma das características do REACT é a possibilidade de criar SPA(**Single Page Applications**)

Usando o pages router, cada página criada dentro da pasta pages, vai redirecionar para uma url de acordo com o nome do 
arquivo. Porém essa navegação envolve o load normal das páginas.

Por exemplo a página `listarPessoas.tsx` vai refletir com a url `localhost:3000/listarPessoas` e a página default
`index.tsx` é associada a url `localhost:3000/`.

::right::

#### Router

Diversas libs podem ser usadas para gerênciar as rotas de páginas, uma delas é o
[`react-router-dom`](https://reactrouter.com/en/main). 

Para instalar 

```shell
npm install react-router-dom
```

Para configurar o router no projeto next precisamos alterar a estrutura da aplicação.

---

#### _app.tsx

```jsx
import "@/styles/globals.css"
import {AppProps} from 'next/app'
import {useEffect, useState} from 'react'

function App({Component, pageProps}: AppProps) {
  const [render, setRender] = useState(false)
  useEffect(() => setRender(true), [])
  return render ? <Component {...pageProps} /> : null
}
export default App
```

---

#### index.tsx

```jsx
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ListarPessoas from "@/pages/listarPessoas";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
      <Router>
          <main className="container">
              <Routes>
                  <Route path="/" element={<h1>Home</h1>}/>
                  <Route path="/listarPessoas" element={<ListarPessoas/>}/>
              </Routes>
          </main>
      </Router>
  );
}
```

---
layout: two-cols
---

## Autenticação

Os dois principais métodos de autenticação na web são através de `sessions` e `tokens`. Cada um tem suas características
pontos fracos e fortes, como sempre a utilização desses métodos varia conforme com o projeto e o escopo. 

Ou seja `depende`...

### Sessions

O método de **sessions** é o tradicional na web sendo utilizado em diversos tipos de aplicativos... 

Ele consiste em:

::right::

- Usuário faz o login
- O server cria uma sessão, essa sessão é armazenada em memória no server ou em um banco de dados
- O server devolve o response do login e com o {session ID}
- O cliente armazena essa sessão em um cookie no browser
- O cliente faz uma requisição enviando juntamente o cookie
- O servidor busca essa sessão para checar se ela é válida
- Se estiver tudo certo o servidor devolve o response

---

<div class="left-10 top-0 right-0 bottom-20 max-w-full max-h-full absolute">

```mermaid
sequenceDiagram
    Actor Cliente
    Cliente->>+Servidor: Cliente faz login
    Servidor->>+DB: Servidor cria sessão e armazena
    Servidor-->>-Cliente: Servidor devolve sessionId
    Note right of Cliente: Cliente armazena em cookie
    Cliente->>+Servidor: Cliente envia request com cookie
    Servidor-->>+DB: Servidor valida session
    Servidor-->>+Cliente: Servidor devolve response
```    
</div>

---

Essa abordagem foi muito utilizada e existe debate entre os prós e cons de utilizar sessões.
Dentre os cons podemos destacar os dois principais:

#### Segurança: 

O principal ponto de falha de segurança nessa abordagem são os ataques de `cross site request forgery`, 
[CSRF](https://owasp.org/www-community/attacks/csrf)

Esse tipo de ataque consiste em utilizar uma sessão atualizada em um cookie no navegador da vítima, e enviar um request
malicioso que usa essa sessão armazenada para fazer alguma ação no servidor verdadeiro.

Se a aplicação for desenvolvida com recursos modernos e frameworks para validação, esse risco diminuí, também é 
necessária uma boa engenharia social por parte do atacante... 

---
layout: image
image: /csrf.webp
backgroundSize: contain
---

---

#### Performance issues

O maior problema atual na utilização de sessões é a sessão ser armazenada ou em memória no servidor, ou em um banco de 
dados, não parece um problema grande né..., mas pense da seguinte forma...

1) cada usuário que faz login cria uma sessão.
2) a sessão é armazenada
3) quando um usuário faz qualquer request o server deve:
   - buscar no banco de dados ou em memória essa sessão e validar se é válida
4) agora imagine que temos 10 instâncias desse servidor(API) em execução, 
uma API escalada horizontalmente em um cloud server
5) e imagine que temos 1 milhão de usuários logados em cada instância e cada usuário vai fazer em média 5 requisições

---
layout: two-cols
---

### JWT

Uma alternativa para o uso de sessions é a utilização de tokens, o mais utilizado hoje é o 
JWT[**Json web token**](https://jwt.io/).

O JWT é um padrão de autenticação definido pela [RFC7519](https://datatracker.ietf.org/doc/html/rfc7519).
No JWT é utilizado um token Base64 que pode ser usado com par de chaves ou assinatura(public/private).

Usando JWT o servidor não precisa armazenar nada, ele gera o JWT e devolve para o cliente.

::right::


<br><br><br>

```mermaid
sequenceDiagram
    Actor Cliente
    Cliente->>+Servidor: Cliente faz login
    Note right of Servidor: Servidor gera um JWT 
    Servidor-->>-Cliente: Servidor devolve o JWT
    Cliente->>+Servidor: Cliente envia request com cookie
    Note right of Servidor: Servidor valida a signature do JWT 
    Servidor-->>-Cliente: Servidor devolve response
```    

---

Um JWT é uma string com três partes separadas por um `.`, as três partes são `header`, `payload`, `signature`.

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJlbWFpbCI6InRlc3RlQHRlc3RlLmNvbSJ9.SnpFarLPRcuEFZ-bnUC-2PLhEAyzgdSYrS4oNcr6v5Q

<br>

<style>
   .meio {
      display: flex;
      justify-content: center;
      align-items: center;
   }
</style>
<div class="meio">
   <pre class="pre">
      eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
     <span style="color:rgb(178, 111, 0)">└──────────────────┬─────────────────┘</span>
                      <span style="color:rgb(178, 111, 0)">header</span>
      eyJpZCI6IjEiLCJlbWFpbCI6InRlc3RlQHRlc3RlLmNvbSJ9.
     <span style="color:#d63aff">└────────────────────────┬───────────────────────┘</span>
                           <span style="color:#d63aff">payload</span>
      SnpFarLPRcuEFZ-bnUC-2PLhEAyzgdSYrS4oNcr6v5Q
     <span style="color:#00b9f1">└──────────────────────┬────────────────────┘</span>
                        <span style="color:#00b9f1">signature</span>
   </pre>
</div>

---

#### header

Headers é o cabeçalho do token onde passamos basicamente duas informações: o `alg` que informa
qual algoritmo é usado para criar a assinatura e o `typ` que indica qual o tipo de token.

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

#### payload

É onde os dados são armazenados. Pode conter informações como o identificador do usuário, permissões, 
expiração do token, etc. O JWT é assinado digitalmente, mas isso não é o mesmo que criptografia,
não é aconselhável utilizar dados sensíveis em um JWT. 

```json
{
  "id": "1",
  "email": "teste@teste.com"
}
```

---

#### signature

A assinatura do token (signature) é composta pela codificação do header e do payload somada 
a uma chave secreta gerada pelo algoritmo especificado no header.

```shell
HS256SHA256(
    base64UrlEncode(header) + "." + base64UrlEncode(payload), secret_key)
```

<br>

Outros atributos que são comuns no `payload` são:

- `sub`: usado para representar o `subject` ou id do usuário
- `iat`: usado para definir o `inserted at` do token
- `eat`: usado para definir o `expire at` do token

---
layout: image
image: /jwt.png
backgroundSize: contain
---

---

```ts
export const doLogin = async (req: Request, res: Response) => {
   const { username, password } = req.body
   if (!username || !password) {
      return res.status(400).json({ error: 'Username e password são obrigatórios' })
   }
   const usuarioRepository = AppDataSource.getRepository(Usuario)
   try {
      const usuario = await usuarioRepository.findOneBy({ username: username })
      if (!usuario) {
         return res.status(401).json({ error: 'Usuário não encontrado' })
      }
      const isPasswordValid = await bcrypt.compare(password, usuario.password)
      if (!isPasswordValid) {
         return res.status(401).json({ error: 'Credenciais inválidas' })
      }
      return res.status(200).json({ message: 'Login com sucesso' })
   } catch (error) {
      console.error('Erro durante login:', error)
      return res.status(500).json({ error: 'Internal server error' })
   }
}
```

---
layout: two-cols
---

Vamos adaptar a api para utilizar jwt. Primeiro precisamos adicionar o jsonwebtoken ao projeto.

```shell
npm install jsonwebtoken
npm i --save-dev @types/jsonwebtoken
```

Agora nosso processo de login ao verificar um usuário no banco, devemos gerar um token para enviar no response,
esse token vai ser utilizado para autenticar outras requisições.

No método de login vamos importar a lib do jsonwebtoken

```shell
import jwt from "jsonwebtoken"
```

::right::

Vamos mudar o trecho após a validação do login adicionando a criação do token e o retorno do mesmo no response

```ts
const token = jwt.sign({
   username: username
}, process.env.TOKEN, { 
    expiresIn: '1h' 
})

res.status(200).json({ 
   auth: true,
   token: token }).send()
```

Agora com o token, precisamos de um método para fazer a autenticação desse token.

---

```ts
import {Request, Response} from "express";
import jwt from "jsonwebtoken";
class Authentication {
    async hasAuthorization(req: Request, res: Response, next: () => void) {
        const bearerHeader = req.headers.authorization
        if (!bearerHeader) {
            res.status(403).json({auth: false, message: 'Nenhum token fornecido.'})
        }
        const bearer = bearerHeader.split(' ')[1]
        jwt.verify(bearer, process.env.TOKEN, function (err, decoded) {
            if (err) return res.status(500).json({
                auth: false,
                message: 'Failed to authenticate token.'
            });
            req.params.token = bearer;
            next();
        });
    }
}
export default new Authentication()
```

---

Depois precisamos adicionar a função que criamos para autenticação nas rotas que queremos "proteger".

```ts
routerUsuario.get("/usuarios/listar", Auth.hasAuthorization ,getUsuarios)
```

![](/postman-jwt.png)

---
layout: image-right
image: /migrations.jpg
---

## Migrations

No contexto do TypeORM com Express, migrations são uma ferramenta para versionar e aplicar mudanças no banco de dados de forma controlada, sem a necessidade de manipular as tabelas ou SQL diretamente. Uma migration permite que você crie, altere ou remova tabelas e colunas, o que facilita o gerenciamento de versões e a colaboração em equipe.

As migrations são criadas com comandos que especificam o que deve ser alterado no banco de dados, como adicionar ou modificar colunas. 
Quando executada, uma migration aplica as alterações especificadas. O TypeORM mantém um controle das migrations executadas, garantindo que cada uma seja aplicada apenas uma vez.
As migrations podem ser revertidas, restaurando o estado do banco de dados ao estado anterior.

---


```typescript
npx typeorm migration:create ./src/migrations/AlterUserPasswordColumn

import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";
export class AlterPasswordColumnTypeTimestamp implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "password" DROP NOT NULL`)
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "password" TYPE varchar USING "password"::varchar`)
        await queryRunner.query(`UPDATE "user" SET "password" = 'default_password' WHERE "password" IS NULL`)
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "password" SET NOT NULL`)
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "password" DROP NOT NULL`)
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "password" TYPE integer USING "password"::integer`)
    }
}
npm run build
npx typeorm migration:run -d ./build/src/data-source.js
npx typeorm migration:revert 
```

<!--
Alterar o data source migrations: [__dirname+"/migrations/*.{js,ts}"],, falar da tabela migrations e da replicação para bancos...

Quando você executa uma migration que altera o tipo da coluna (password de int para varchar), o comportamento depende do banco de dados em uso. No PostgreSQL, por exemplo, a conversão automática de dados entre tipos pode ocorrer, mas há algumas considerações:

Dados Existentes: Se a coluna password já contém dados do tipo int, o banco de dados tenta fazer a conversão desses valores automaticamente para o tipo varchar. Assim, o valor 1234 (inteiro) seria convertido para "1234" (texto). Essa conversão normalmente ocorre sem problemas, desde que os dados no tipo int possam ser representados como varchar.

Conversões Problemáticas: Em alguns casos, especialmente quando você faz uma conversão para tipos incompatíveis, pode haver erros ou perda de dados. Mas, no caso de int para varchar, essa conversão é geralmente segura, já que qualquer número pode ser representado como texto sem perda de informação.

Reversão da Migration: No método down, a migração altera o tipo de volta para int. No entanto, isso só funcionará se todos os valores da coluna puderem ser convertidos novamente em números inteiros. Caso você tenha dados que não sejam representáveis como números, isso resultará em um erro de conversão.

Para evitar problemas com dados que não podem ser revertidos para int, você pode verificar os dados na coluna antes de executar o down ou definir uma lógica de fallback, se possível.
-->

---

## Seeders

Seeders são funções que populam o banco de dados com dados iniciais ou de exemplo. Diferente das migrations, eles não alteram a estrutura do banco, mas sim inserem dados para uso em desenvolvimento, testes ou como dados iniciais na aplicação. No TypeORM, seeders não são nativamente suportados como migrations, mas podemos configurar seeders manualmente utilizando scripts específicos.

Edite o `package.json` e adicione um script para executar as seeds:

```json
"scripts": {
    "seed": "ts-node src/seeders/seed.ts"
}
```

Vamos criar uma pasta chamada seeders, e dentro dela vamos adicionar os arquivos e após isso podemos utilizar o comando `npm run seed` para executar as seeds. 
Adicione a biblioteca [faker](https://fakerjs.dev/) para gerar dados "randomicos"

```shell
npm install @faker-js/faker
```

---

```typescript
import { getRepository } from "typeorm";
import { User } from "../entities/user";
import { faker } from "@faker-js/faker";

export class UserSeed {
    public static async seed(): Promise<void> {
        if (!appDataSource.isInitialized) {
            await appDataSource.initialize();
        }        
        const userRepository = appDataSource.getRepository(User)
        const userCount = 100;
        for (let i = 0; i < userCount; i++) {
            const user = userRepository.create({
                name: faker.person.fullName(),
                email: faker.internet.email(),
                password: i,
            });
            await userRepository.save(user);
        }
        console.log("Users seeded successfully with Faker data!");
    }
}
```

---

```typescript
import { UserSeed } from "./userSeed";

const seed = async () => {
    await UserSeed.seed();
};

seed().then(() => {
    console.log("Seeding completed successfully.");
}).catch((error) => {
    console.error("Seeding failed:", error);
});
```

---
layout: two-cols
---

## Testando a API

Para implementarmos testes na API vamos utilizar duas bibliotecas, [Jest](https://jestjs.io/) e 
[Supertest](https://github.com/ladjs/supertest#readme)

- "Jest é um framework de teste de JavaScript encantador com foco na simplicidade." Jest website

- SuperTest é uma biblioteca de asserções HTTP que permite testar seus servidores HTTP Node.js.

<br>

```shell
npm install --save-dev jest
npm install --save-dev supertest ts-jest
npm i --save-dev @types/jest
npm i --save-dev @types/supertest
```

::right::

No `package.json`, vamos adicionar o script de teste. E vamos criar uma pasta para armazenar todos os 
testes, `__test__`.

```json
{
  "scripts": {
    "test": "jest"
  },
  "jest": {
    "testEnvironment": "node",
    "coveragePathIgnorePatterns": 
      ["/node_modules/"]
  }
}
```

---
layout: two-cols
---

Criamos um arquivo na raiz do projeto chamado `jest.config.ts` que vai conter configurações do jest.

````js
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['<rootDir>/**/*.test.ts'],
    verbose: true,
    forceExit: true,
    clearMocks: true,
}
````

::right::

Essa configuração determina que o jest vai utilizar o ts-jest para typescript,
que o ambiente de teste é um container node, e que vai buscar por todos os arquivos de 
teste dentro das pastas do projeto que sigam a nomenclatura `*.test.ts`.

O `verbose` é utilizado para "logar" mais informações sobre os testes em execução para facilitar a interpretação do
resultado. 

O `clearMocks` opção é uma configuração que limpa automaticamente os dados simulados entre cada teste.
Garantindo que seus testes sejam executados isoladamente e que as afirmações sobre o comportamento simulado
sejam precisas.

---

O jest cria blocos de teste utilizando o `describe` dentro dele existem quantos casos de teste forem necessários.
A nomenclatura para nome de arquivos de teste normalmente segue o nome da classe que está sendo testada, seguido de 
`.test`, por exemplo dentro da pasta `__test__` temos a arquivo `login.test.ts`.

```javascript
const request = require('supertest');
const server = require('./server');

describe('GET /usuarios/listar', () => {
    it('deve retornar uma lista de usuários', async () => {
        const response = await request(server).get('/usuarios/listar');
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });
});
```

---
layout: two-cols
---

## Adicionando mais segurança

Além de testes e da validação utilizando jwt tokens, existem outras medidas de segurança que podemos adotar para 
diminuir riscos.

### Restringindo requests

Dependendo do escopo da api podemos restringir a origem das chamadas garantindo que apenas um determinado domínio tenha 
acesso a api.

Para isso vamos utilizar a lib `CORS` e definir os domínios permitidos, requests externos vão ser bloqueados.

::right::

<br>
<br>

```js
const cors = require('cors');
const app = express();
const allow = ['https://localhost'];
const corsOptions = {
  origin: function (origin, callback) {
    if (allow.indexOf(origin) !== -1
         || !origin) {
      callback(null, true);
    } else {
      callback(new Error());
    }
  }
};
app.use(cors(corsOptions));
```

<!--
app.use((err, req, res, next) => {
   if (err) {
      res.status(403).json(
        { message: 'Access forbidden: CORS policy not met' }
      )
   } else {
      next()
   }
}) -->

---
layout: two-cols
---

### Headers 

Para melhorar a proteção contra Cross-Site Scripting entre outros, podemos utilizar o middleware
[`helmet`](https://helmetjs.github.io/?ref=escape.tech).

```shell
npm install helmet
```

Depois utilizar como middleware no app

```js
import helmet from "helmet"

const app = express()


app.use(helmet())
```

O helmet seta diversos headers na api para mitigar alguns tipos de ataque.


::right::

### Permissões

Uma medida que podemos tomar é definir permissões específicas para a api conforme o acesso do usuário.
Por exemplo: apenas usuários com permissão de admin podem fazer determinada chamada para a api. Nesse caso verificamos
as permissões do usuário que fez o request. Isso pode e é normalmente feito no frontend mas também podemos adicionar a 
validação na api. 

Aqui podemos causar um problema de lentidão ao verificar diversas vezes a permissão do usuário no banco, esse tipo de 
medida pode causar uma lentidão conforme o tamanho do sistema.

---
layout: two-cols
---

### rate limit

Alguns ataques consistem em derrubar a aplicação utilizando força bruta(ddos), nesses casos podemos delimitar a 
quantidade de requisições por IP. Uma biblioteca que possibilita isso é a `express-rate-limit`.

```shell
npm install express-rate-limit
```

::right::

```js
import rateLimit from 'express-rate-limit'

const limiter = rateLimit({
   windowMs: 15 * 60 * 1000, 
   // 15 minutes
   max: 100, 
   // Limit to 100 requests by ID
   standardHeaders: true, 
   // Return rate limit info in the
   // `RateLimit-*` headers
   legacyHeaders: false,
   // Disable the `X-RateLimit-*`
   // headers
})

app.use(limiter)
```

---
layout: two-cols
---

### Sanitization

Uma das mais recomendadas boas práticas em apis é a 
[sanitização](https://dev.to/gimnathperera/yup-vs-zod-vs-joi-a-comprehensive-comparison-of-javascript-validation-libraries-4mhi) 
de parâmetros. Existem muitas bibliotecas que ajudam nessa tarefa, aqui vamos usar o `zod`.

```shell
npm install zod
```

Com o zod criamos "schemas"(`schema`) onde passamos o body ou parâmetros que queremos validar para um objeto validador.

```ts
const userSchema = z.object({
  name: z.string().min(1).required(),
  email: z.string().email().optional(),
  password: z.string().min(8).max(100),
  limit: z.number().int().positive(),
});
```

::right::

```ts
import { z } from 'zod'
const loginSchema = z.object({
   username: z.string().min(1).max(20),
   password: z.string().min(5).max(12),
})
const validate = (schema, body) => {
   try {
      schema.parse(body);
      return { 
          isValid: true,
         errors: null 
      }
   } catch (e) {
      return { 
          isValid: false, 
         errors: e.errors 
      }
   }
}
```


---

Desta forma podemos chamar a função validate conforme o schema utilizado
```ts
const { isValid, errors } = validate( userSchema, req.body )

if (!isValid) {
    return res.status(400).json(
        { errors }
    )
}
```




---
https://www.dio.me/articles/react-componentes-de-classes-x-componentes-funcionais

https://www.freecodecamp.org/portuguese/news/componentes-funcionais-props-e-jsx-em-react-tutorial-de-react-js-para-iniciantes/

https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

https://axios-http.com/docs/api_intro

https://www.scaler.com/topics/react/virtual-dom-in-react/

https://dev.to/vinibgoulart/how-to-protected-a-route-with-jwt-token-in-react-using-context-api-l38

https://www.atatus.com/blog/cross-site-request-forgery-a-threat-to-open-web-applications/

https://owasp.org/www-community/attacks/csrf

https://jwt.io/

https://www.alura.com.br/artigos/o-que-e-json-web-tokens

https://dev.to/gimnathperera/yup-vs-zod-vs-joi-a-comprehensive-comparison-of-javascript-validation-libraries-4mhi

https://escape.tech/blog/how-to-secure-express-js-api/

https://medium.com/@developerom/protect-your-rest-apis-in-node-js-253c11a2dfd7
