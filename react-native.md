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
title: React Native
author: Pablo Leon Rodrigues
export:
  format: pdf
  timeout: 30000
  withClicks: false
---

---

<Toc columns="2" maxDepth="3"></Toc>

---

## React Native

[React Native](https://reactnative.dev/) é um framework para desenvolvimento mobile escrito em javascript com a premissa
`Write once run anywhere`, usando uma base de código para executar em múltiplas plataformas.

Desenvolvido e mantido pelo Facebook tendo sido lançado em 2015. 

<img src="/reactnativeshowcase.webp" class="h-80 m-auto rounded " />

---

Segundo a lei de [Atwood](https://blog.codinghorror.com/the-principle-of-least-power)


<img src="/atwoodslaw.jpg" class="m-auto rounded " />

<!-- 
Jeff Atwood - Programador, co-fundador do stack-overflow, soltou essa frase em 2007
-->

---

### Funcionamento

React Native usa JavaScript para escrever a lógica do aplicativo e os componentes da UI. Esses componentes são 
mapeados para componentes nativos da plataforma (como botões ou visualizações). Uma `bridge` 
comunica entre o código JavaScript e o código nativo (JavaKotlin para Android, SwiftObjective-C para iOS).

- Escrevemos a interface do usuário(**UI**) e a lógica do seu aplicativo usando JavaScript e JSX (uma sintaxe para 
incorporar XML em JavaScript). 
- O código JS cria uma representação em árvore sombreada da interface de usuário.
- Quando ocorrem alterações, a árvore de sombra é atualizada com eficiência. 
- O JavaScript se comunica com módulos nativos por meio da ponte, geralmente usando JSON para troca de dados. 
- Os módulos nativos lidam com tarefas específicas do dispositivo e enviam dados de volta pela ponte.
- A `bridge` atualiza os componentes nativos da UI com base nas instruções do JavaScript.

---
layout: image
image: /reactnativeeco.png
---

<!-- 
- JavaScript (JS) e JavaScriptCore (JSC): você escreve a lógica do seu aplicativo em JavaScript. 
- JSC é um mecanismo JavaScript que executa seu código JS no dispositivo. 
- Shadow Tree: Esta é uma representação virtual da UI do seu aplicativo, construída por React Native no lado JavaScript. 
Ajuda a determinar com eficiência as alterações da IU. 
- JSON e Async: JSON (JavaScript Object Notation) é usado para troca de dados entre JavaScript e código nativo. 
Funções assíncronas (assíncronas) são usadas para lidar com tarefas que demoram, como buscar dados de uma API.
- Bridge: Este é o canal de comunicação entre JavaScript e código nativo. Ele permite que o código JavaScript
interaja com módulos nativos e funcionalidades do dispositivo. 
- Módulos nativos: são módulos pré-escritos que fornecem acesso aos recursos nativos do dispositivo, como câmera,
GPS, etc. Eles são escritos em linguagens específicas da plataforma (JavaKotlin ou SwiftObjective-C) e expostos 
ao JavaScript por meio da ponte.
-->


---
src: ./emuladores.md
---

---
layout: two-cols
---

### React Native CLI

- **Acesso de baixo nível**: oferece mais controle e flexibilidade para personalizar o aplicativo. 
- **Dependências nativas**: Permite utilizar bibliotecas nativas (escritas em JavaKotlin para Android ou SwiftObjective-C 
para iOS) para funcionalidades não disponíveis em JavaScript. 
- **Configuração manual**: Requer configuração manual de ferramentas nativas e dependências, o que pode ser complexo para 
iniciantes.
- **Tamanho do aplicativo potencialmente menor e melhor desempenho**: mais controle sobre o código pode levar a otimizações
de tamanho e desempenho.

::right::

### Expo Cli 

- **Componentes e APIs pré-construídos**: oferece um grande conjunto de componentes e funcionalidades de UI
pré-construídos, reduzindo o tempo de desenvolvimento. 
- **Acesso nativo limitado**: acesso restrito a módulos nativos em comparação com React Native CLI. A funcionalidade 
poderá ser limitada se seu aplicativo exigir integrações nativas profundas. 
- **Tamanho maior do aplicativo**: os aplicativos Expo tendem a ser maiores devido à inclusão de bibliotecas e estruturas 
adicionais. 
- **Aplicativo Expo Go para teste**: permite testes em um dispositivo físico usando o aplicativo Expo Go

---

<img src="/expogoexample.png" class="h-115 m-auto rounded " />

---
layout: two-cols
---

## Primeiro app

Primeiro precisamos instalar o nodejs, após isso instalamos o pacote do expo.

```shell
npm install -g expo-cli
```

Depois disso podemos usar o comando do expo para criar um projeto novo partindo do template `blank`.

```javascript
npx create-expo-app --template blank nome
```

Usando a ferramenta do Expo podemos adicionar um app ao dispositivo que vai gerênciar o `deploy` do nosso aplicativo.
Esse app está disponível para Android e IOS.

```shell
npx expo start
```

::right::

![](/expo.png)

---
layout: two-cols
---

### App

O expo vai criar uma estrutura semelhante a essa
![](/reactnativeproj.png)

::right::

- App.js: ponto de entrada do sistema.
- app.js: configurações do projeto
- babel.config.js: configurações para interpretação do javascript
- assets: pasta para adicionar resources

---
layout: two-cols
---

## Componentes principais

Os principais componentes nativos do react native estão listados abaixo.

### View

É equivalente ao `<div>` sendo usada para agrupar componentes.

```javascript
import React from 'react'
import { View, Text } from 'react-native'

const App = () => (
  <View>
    <Text>Hello</Text>
  </View>
)
export default App
```

::right::

### Text

Usando para renderizar texto.

```javascript
<Text style={
  { fontSize: 20, color: 'blue' }
}>
  Olá, mundo!
</Text>
```

### Image

Carrega e exibe imagens, seja da web ou locais.

```javascript
import { Image } from 'react-native';

<Image
  source={{ uri: 'http://i.com/img.png' }}
  style={{ width: 100, height: 100 }}
/>
```

---
layout: two-cols
---

### ScrollView

Utilizado para adicionar scroll a uma view.

```javascript
import { ScrollView } from 'react-native'
import { Text } from 'react-native'

<ScrollView>
  <Text>Item 1</Text>
  <Text>Item 2</Text>
  <Text>Item 3</Text>
</ScrollView>
```

---

## UI Layout

[Flexbox](https://reactnative.dev/docs/flexbox) é o sistema de layout padrão no React Native. É similar ao funcionamento
do flexbox do css, compartilhando algumas propriedades e atributos.

Flexbox fornece uma maneira flexível e intuitiva de estruturar sua UI. Funciona tratando os elementos como itens dentro de um contêiner. Esses elementos, também conhecidos como elementos filhos, podem ser posicionados e redimensionados com base em propriedades específicas aplicadas a eles e ao contêiner. Essa abordagem permite layouts dinâmicos que se adaptam a diferentes tamanhos e orientações de tela.

O componente View assim como outros são por padrão elementos do tipo flex.

---

### Propriedades

<br>

- `flexDirection`: Define o eixo principal do layout (linha, coluna, linha reversa, coluna reversa) 
- `justContent`: Alinha os elementos ao longo do eixo principal (início flexível, final flexível, centro, 
espaço entre, espaço ao redor) 
- `alignItems`: Alinha elementos ao longo do eixo cruzado (início flexível, final flexível, centro, 
linha de base, alongamento)
- `flex`: Um único valor numérico para dimensionamento e distribuição (flex > 0 aumenta, flex = 0 diminui, 
flex < 0 não aumenta nem diminui) 
- `flexGrow`: Valor positivo para crescimento proporcional (somente se houver espaço disponível) 
- `flexShrink`: Valor positivo para redução proporcional (quando o espaço é insuficiente) 
- `flexBasis`: Define o tamanho padrão de um item antes de flexGrow e flexShrink

<!-- 
flexDirection: This property dictates the main axis along which child elements are positioned. It can be set
to "row" (default, horizontal), "column" (vertical), "row-reverse," or "column-reverse."
justifyContent: This property controls the alignment of child elements along the main axis. Options include 
"flex-start" (default, start edge), "flex-end" (end edge), "center" (centered), "space-between" (evenly distributed with space on ends), and "space-around" (evenly distributed with space around).
alignItems: This property aligns child elements along the cross-axis, which is perpendicular to the main axis.
Options include "flex-start" (top edge for row, left edge for column), "flex-end" (bottom edge for row, right 
edge for column), "center," "baseline" (aligns based on baselines), and "stretch" (stretches to fill 
the container's height).
-->

--- 
layout: two-cols
---

### Folha de Estilos

No RN(*react native*) não utilizamos CSS e sim um objeto de estilo que possuí atributos "semelhantes" aos do css. Alguns
componentes do RN recebem a propriedade [`style`](https://reactnative.dev/docs/style) e dentro dela chamamos o objeto referente.
Cuidado nem todos os atributos do CSS estão disponíveis, e nem todos os componentes do RN recebem a propriedade `style`.

```javascript
<View style={styles.inputContainer}>
    <TextInput style={styles.textInput} 
      placeholder='Anotação' 
      onChangeText={anotacaoChange}/>
    <Button title='Adicionar' 
      onPress={adicionarAnotacao}/>
</View>
```

::right::

```javascript
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1
  },
  textInput: {
    padding: 20,
    width: "70%"
  }
});

```

---

## Migração para o expo sdk 52.

Com a nova versão do react native o expo lançou a versão 52 do seu sdk. Com isso será necessário atualizar a versão do sdk do projeto. 
Para isso precisamos instalar a última versão do expo

```shell
npm install expo@latest
```

Depois precisamos atualizar as dependências
```shell
npx expo install --fix
```

---
layout: two-cols
---

## Gerar Build

Podemos gerar uma versão fechada de um projeto usando o expo, através da ferramenta EAS CLI, que é a ferramenta da Expo para build e deploy. 
Instale-o globalmente no seu sistema:

```shell
npm install -g eas-cli

```

Configure o EAS no projeto
Dentro do diretório do seu projeto, inicialize o EAS:

```shell
eas build:configure
```

Este comando cria um arquivo eas.json no projeto. Escolha a opção Managed Workflow, se você usa o Expo de forma padrão. Autentique-se no Expo

```shell
npx expo login
```


::right::

```json
{
  "expo": {
    "name": "MeuApp",
    "slug": "meu-app",
    "version": "1.0.0",
    "android": {
      "package": "com.seuprojeto.meuapp",
      "versionCode": 1
    }
  }
}
```

Depois disso inicie o processo de build

```shell
eas build --platform
  android --profile preview
```

























