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
title: Flutter
author: Pablo Leon Rodrigues
export:
  format: pdf
  timeout: 30000
  withClicks: false
---

---

<Toc columns="1" maxDepth="3"></Toc>

---

## Flutter

["Flutter"](https://flutter.dev/) é um framework que permite construir aplicações nativas cross-plataform
(iOs, Android, Windows, Web, Mac) usando um único código fonte/linguagem de programação.

<img src="/flutter-1.png" class="h-90 m-auto rounded " />
<!-- m-auto -z-5 left-0 top-0 right-0 bottom-0 max-w-full max-h-full absolute-->

---

Desenvolvido em 2015 pelo Google o Flutter é ["open source"](https://github.com/flutter) e possuí licença de 
distribuição BSD. Ele utiliza a linguagem de programação ["DART"](https://dart.dev/).

Ao programar usando DART e o Flutter framework, o sdk gera código nativo para a plataforma de destino.

<img src="/flutter-2.png" class="h-60 m-auto rounded " />

Podemos dividir o flutter em dois componentes principais:
 
- SDK(**Software development kit**): ferramenta de compilação que gera código nativo.
- Framework: onde ficam a biblioteca de componentes, packages e funções. 

---

## Instalação

A documentação do Flutter explica bem o que é preciso para configurar o ambiente
de desenvolvimento em sua máquina em qualquer sistema operacional que você
esteja usando, ["docs"](https://docs.flutter.dev/get-started/install)

<img src="/flutter-4.png" class="m-auto rounded " />

<br>

- ["JDK"](https://www.oracle.com/java/technologies/downloads/) 11 ou superior
- Visual Studio Code, ["VS"](https://code.visualstudio.com/)
- Emulador ["Genymotion"](https://www.genymotion.com/)
- ["GIT"](https://git-scm.com/)
- Adroid SDK and Android tools( mais fácil usar o android studio para fazer isso)

---

### Linux

O Flutter pode ser baixado em: https://docs.flutter.dev/get-started/install/linux/desktop

```shell
sudo apt-get update -y && sudo apt-get upgrade -y
sudo apt-get install -y curl git unzip xz-utils zip libglu1-mesa
sudo apt-get install \
      clang cmake git \
      ninja-build pkg-config \
      libgtk-3-dev liblzma-dev \
      libstdc++-12-dev
```

1) Baixe o ["pacote"](https://storage.googleapis.com/flutter_infra_release/releases/stable/linux/flutter_linux_3.19.6-stable.tar.xz) de instalação
2) Crie uma pasta para instalar `/usr/bin/flutter`
3) Descompacte o pacote na pasta criada
   - `~/Downloads/flutter_linux_3.19.6-stable.tar.xz /usr/bin/flutter`
5) Adicione a pasta ao path do usuário.
   - `echo 'export PATH="$/usr/bin/flutter/bin:$PATH"' >> ~/.bash_profile`

---

<img src="/flutter-7.png" class="m-auto rounded " />

---

### Windows

O Flutter pode ser baixado em: https://docs.flutter.dev/get-started/install/windows#get-the-flutter-sdk

Extraia a pasta flutter do arquivo zip para a pasta C:\ do seu PC Pronto, agora certifique-se que ficou esse caminho 
e já lembre dele.

No windows precisamos adicionar a variável de ambiente do flutter no sistema.

1) Painel de controle -> Editar variáveis de ambiente
2) Variáveis de ambiente
3) Variáveis do sistema
4) Path
5) Adicionar o caminho C:\flutter\bin
   
Após esses passo podemos testar a instalação do flutter usando o Flutter doctor.
```shell
flutter doctor
```

---
layout: two-cols
---

No android studio podemos instalar os dois plugins:

![](/flutter-5.png)

::right::

No visual studio podemos instalar os dois plugins:

![](/flutter-6.png)

---

## DART

<Youtube height="450" width="860" id="5F-6n_2XWR8" />

---
layout: image-right
image: /flutter-3.svg
backgroundSize: 38em 100%
---

Dart é uma linguagem de programação free e ["open source"](https://github.com/dart-lang/) para desenvolver 
aplicativos multiplataforma.

Dentre suas características podemos destacar, tipagem forte, multi-platform, null safety, orientado a objetos e
Hot Reload.

Ele compila código para `ARM`, `x64`, `RISC-V` código de máquina, `Javascript` e `WebAssembly`. 

---
layout: two-cols
---

### Hello world

Primeiro criaremos um arquivo com a extensão `.dart` que identifica um código fonte dart `hello.dart`.

```dart
void main() {
  print("Hello, World!");
}
```

Depois podemos chamar o dart para executar o código

```shell
dart run hello.dart
```

Um programa em dart sempre vai começar com uma função `main()`.

::right::

Se os plugins do Flutter e Dart estiverem corretamente instalados no visual studio code podemos rodar utilizando o 
botão run em cima da função `main`.

![](/flutter-8.png)

---
layout: two-cols
---

### Statements

Uma instrução é uma instrução que declara um tipo ou instrui o programa a executar uma tarefa. Uma instrução 
sempre termina com ponto e vírgula `(;)`

```dart
String message = 'Welcome to Dart!';
```

<br>

### Blocks

No Dart, um bloco é uma sequência de zero ou mais instruções. Um bloco é cercado por chaves `({})`. São utilizados em
blocos de controle como `if else`, `while`, `do while` e `for`.

```dart
{
   String message = 'Welcome to Dart!';
   print(message);
}
```

::right::

### Literals

Literais são valores primitivos no programa. Por exemplo, um inteiro tem o seguinte literal `10`

Para formar uma string literal, coloque o texto entre aspas simples `(')`, aspas duplas `(")` ou aspas triplas `(""")`.
```dart
'Welcome to Dart!'
```

<br>

### Comentários

O dart utiliza três tipos de comentários, linha `(//)`, bloco `(/**/)` e doc `(///)`

```dart
/// documentação para variavel hello
String hello = "hello";
```

---
layout: two-cols
---

### Tipos

Na programação, você precisa gerenciar valores como números, strings e booleanos. Para armazenar esses valores 
em programas, você usa variáveis. Uma variável é um identificador que armazena um valor de um tipo específico. 

Por definição, uma variável está associada a um tipo e possui um nome.

- `int` – representa números inteiros **-1, 0, 1, 2** 
- `double` – representa decimais **0.5, e 9.98**
- `String` – representa texto **"Good Morning!"**
- `bool` – representa Boolean `true` e `false`

Constantes são declaradas com `const` antes do nome. `const string constante = 'TESTE' `

::right::

```dart
void main() {
  int statusCode = 200;
  int response = statusCode;
  print('statusCode: $statusCode');
}
```

````shell
statusCode: 200
````

<br>

```dart
int httpStatusCode, response;
```

### TypeInference

```dart
int httpStatusCode = 200;
var httpStatusCode = 200;

String message = "OK";
var message = "OK";
```

---
layout: two-cols
---

### Final

A palavra-chave `const` permite definir constantes que são conhecidas em tempo de compilação. Para definir constantes 
cujos valores são conhecidos em tempo de execução, use a palavra-chave `final` com a seguinte sintaxe:

`final type finalVariable;`

Nesta sintaxe, você usa a palavra-chave `final`, o tipo da variável e o nome da variável. 
Ao contrário da palavra-chave `const`, você não precisa inicializar a finalVariable na declaração imediatamente.

O exemplo a seguir mostra como declarar a variável final currentTime e atribuir a ela a hora atual
retornada por `DateTime.now()`

::right::

```dart
void main() {
   final DateTime currentTime;
   currentTime = DateTime.now();
   
   print(currentTime);
}
```

Depois de inicializar uma variável `final` ela vira uma constante e não pode ter seu valor alterado. Ao tentar alterar
é disparado um erro.

---
layout: two-cols
---

### Strings

Em uma string podemos usar a `(\)` como escape para inserir caracteres especiais.

```dart
void main() {
  String message = 'It\'s me.';
  print(message);
}
```

Podemos fazer interpolação de texto com `($)` para inserir o valor de uma variável e concatenar com um texto.
O mesmo também serve para expressões usando `(${})`

```dart
var price = 10;
var tax = 0.08;
var message = 'The $price is base price';
var message = '= ${price + price * tax}';
```

::right::

Podemos identificar o tamanho em caracteres de uma strin chamando a propriedade `length`

```dart
void main() {
  var message = 'Hello';
  print(message.length);
}
```

Ou acessar cada elemento da string como se fosse um array

```dart
void main() {
  var message = 'Hello';
  print(message[0]);
  print(message[1]);
  print(message[2]);
  print(message[3]);
  print(message[4]);
}
```

---
layout: two-cols
---

Para criar uma string com mais de uma linha podemos utilizar `(```)`

```dart
void main() {
  var sql = '''select phone
  from phone_books
  where name =?''';
  print(sql);
}
```

```
select phone
  from phone_books
  where name =?
```

::right::

Resumindo

- Uma string é uma sequência de unidades de código UTF-16. 
- O tipo String representa strings. 
- Use a propriedade str.length para obter o comprimento do str.
- Use str[index] para acessar um caractere no índice do str. 
- Use o operador + para concatenar duas strings. 
- Strings são imutáveis. 
- Use aspas triplas para formar strings multilinhas.

---

### Operadores lógicos

<br><br>

<img src="/flutter-9.png" class="m-auto rounded " />


---
layout: two-cols
---

### if

<br>

```dart
void main() {
  bool isWeekend = true;
  String weather = "rainy";

  if (isWeekend) {
    if (weather == "sunny") {
      print("Sol");
    }
    if (weather == "rainy") {
      print("Chuva");
    }
  }
}
```

::right::

<br>
<img src="/flutter-10.svg" class="m-auto rounded " />

---
layout: two-cols
---

### if-else

<br>

```dart
void main() {
  bool isWeekend = true;
  String weather = "rainy";

  if (isWeekend) {
    if (weather == "sunny") {
      print("Sol");
    } else {
      print("Chuva");
    }
  }
}
```

::right::

<br>
<img src="/flutter-11.svg" class="m-auto rounded " />

---
layout: two-cols
---

### if-else-if

<br>

```dart
void main() {
  bool isWeekend = true;
  String weather = "rainy";

  if (isWeekend) {
    if (weather == "sunny") {
      print("Sol");
    } else if (weather == "rainy"){
      print("Chuva");
    } else {
       print("Nevando");
    }
  }
}
```

::right::

<img src="/flutter-12.svg" class="h-115  m-auto rounded " />


---
layout: two-cols
---

### switch

```dart
void main() {
  int dayNumber = 3;
  String dayName = "";

  switch (dayNumber) {
    case 1:
      dayName = "Sunday";
      break;
    case 2:
      dayName = "Monday";
      break;
    default:
      dayName = "Invalid day";
      break;
  }
  print(dayName);
}
```

::right::

<img src="/flutter-13.svg" class="h-115  m-auto rounded " />

---
layout: two-cols
---

### while

```dart
void main() {
   int current = 0;

   while (current < 5) {
      current++;
      print(current);
   }
}
```

::right::

<img src="/flutter-14.svg" class="h-115  m-auto rounded " />

---
layout: two-cols
---

### do while

```dart
void main() {
   int number = 0;

   do {
      number++;
      print(number);
   } while (number < 5);
}
```

::right::

<img src="/flutter-15.svg" class="h-115  m-auto rounded " />

---
layout: two-cols
---

### for

```dart
void main() {
   int total = 0;
   for (var i = 1; i <= 10; i++) {
      total += i;
   }
   print(total);
}
```

::right::

<img src="/flutter-16.svg" class="h-115  m-auto rounded " />

---
layout: two-cols
---

### break

```dart
void main() {
   String txt = "Dart is awesome!";
   for (int i = 0; i < txt.length; i++) {
      if (txt[i] == 's') {
         print("found at index $i");
         break;
      }
   }
}
```

O break para o loop quando atingido.

::right::

<img src="/flutter-17.svg" class="h-115  m-auto rounded " />

---
layout: two-cols
---

### continue

```dart
void main() {
   int total = 0, i = 0;
   while (i < 10) {
      i++;
      if (i % 2 == 0) {
         continue;
      }
      total += i;
      print(i);
   }
   print('Total: $total');
}
```

O continue pula para a próxima iteração do loop

::right::

<img src="/flutter-118.svg" class="h-115  m-auto rounded " />


---
src: /emuladores.md
---

---

## Flutter

Para criar nosso primeiro aplicativo vamos chamar usar o `flutter create aplicativo`. Isso vai fazer download de um 
exemplo de aplicativo para iniciar o projeto.

<img src="/runflutter.png" class="h-90  m-auto rounded " />

---
layout: image-right
background-size: contain
image: /scrcpy.png
---

## flutter run

Para executar o aplicativo que vamos construir precisamos de um dispositivo, ele pode ser um emulador(**máquina virtual**),
podemos executar em um container web no chrome ou ainda podemos conectar um dispositivo para fazer a instalação por 
uma conexão entre o dispositivo e o mobile.

Para executar podemos usar `flutter run` dentro da pasta do projeto.

Dentre eles podemos usar, [AVD](https://developer.android.com/studio/run/managing-avds?hl=pt-br) e
[Genymotion](https://www.genymotion.com/) ou a lib do genymotion 
[Scrcpy](https://github.com/Genymobile/scrcpy/blob/master/doc/linux.md) 

---
layout: two-cols
---

- `lib`: código fonte do projeto
- `windows, linux, android, ios, web`: projeto na linguagem destino da
plataforma após compilar. Podemos alterar alguma config nelas.
- `pubspec.yml`: na raíz do projeto, este arquivo contém configurações
e pacotes, imagens, fontes, tudo o que vamos precisar indicar como dependência
no projeto, tanto para desenvolver, quanto na hora de rodar o projeto.
Sempre ao alterar esse arquivo, devemos rodar o comando `flutter pub get` o qual faz o download das

::right::

![](/flutter-structure.png)

---

```dart
import 'package:flutter/material.dart';
void main() { //inicializa a aplicação
  runApp(MyApp());
}
class MyApp extends StatelessWidget { // widget raiz
  @override //metodo que constrói a árvore de widgets
  Widget build(BuildContext context) {
    return MaterialApp( //aqui usamos o widget MaterialApp
      home: Scaffold(
         appBar: AppBar(
           backgroundColor: Colors.blue,
           title: Text("Explorando Widgets"),
         ),
         body: Text("hello world"),
      )
    );
  }
}
```

---
layout: two-cols
---

## widget

No Flutter tudo é considerado um widget, o próprio app é um `widget` que encapsula outros `widgets`.

O Flutter não utiliza widgets nativos ele gera uma implementação própria que controla cada pixel desenhado. 

Podemos usar o outline para ver árvore de widgets do aplicativo.

https://docs.flutter.dev/ui/widgets


::right::

![](/outline.png)

---
layout: two-cols
---

### Stateless

widgets sem estado(**stateless**) são o tipo de widget que não armazena nenhum estado. Ou seja, eles não
armazenam valores que podem mudar. Por exemplo, um ícone é sem estado, você define a imagem do ícone quando a cria
e depois não muda mais. 

::right::

### Statefull

um widget com estado(**statefull**) significa que ele pode acompanhar as alterações e atualizar a interface do 
usuário com base nessas alterações.

---
layout: image
image: /flutter-states.png
background-size: contain
---



---

### Lifecycle

Para trabalhar com widgets `stateful` utilizamos o `state` que gerenciar os dados mantidos pelo widget.
Por exemplo ao usar o `setState` avisamos o flutter que precisamos chamar o método `build` novamente.

A primeira função que o flutter executa na criação de um estado é o `createState()`, que vai inicializar o `state`
em um widget.

Depois tem o método `initState()`, que vai executar na inicialização do widget, esse método pode ser sobrescrito 
utilizando a anotação `@override` para ser alterado, sendo possível adicionar funcionalidades dentro dele 
como conexão com banco, chamadas externas
etc.

Após isso ele chama o `didChangeDependencies()` utilizado para verificar se os valores passados para o widget foram 
alterados em tempo de execução, buscando os valores atualizados.

Então é feito o `build()`, responsável por renderizar o app na tela. Esse método alteramos para criar o visual do widget.

Após o build o flutter utiliza o método `didUpdateWidget()` para verificar se houve alteração e se o widget foi 
atualizado. E no final temos os métodos `deactivate()` e `disposal()`, o deactivate desativa o widget e o disposal 
é para quando ele é removido da árvore de widgets. 


<!--
- initState(): Flutter’s initState() method is the first method that is used while creating a stateful class, here 
we can initialize variables, data, properties, etc. for any widget.
- createState(): When we create a stateful widget, our framework calls a createState() method and it must be overridden.
- build(): The build method is used each time the widget is rebuilt. This can happen either after calling initState,
didChangeDependencies, didUpdateWidget, or when the state is changed via a call to setState
- didChangeDependencies(): This method is called immediately after initState and when dependency of the State object 
changes via InheritedWidget.
- didUpdateWidget(): This method is called whenever the widget configuration changes. A typical case is when a parent 
passes some variable to the children() widget via the constructor.
- deactivate(): It is used when the state is removed from the tree but before the current frame change can be 
re-inserted into another part of the tree
- dispose(): We use this method when we remove permanently like should release resource created by an object 
like stop animation
-->


---
layout: two-cols
---

### App Cores

```dart
final Map<String, Color> colors = {
 'blue': Colors.blue,
 'red': Colors.red,
 'green': Colors.green,
 'yellow': Colors.yellow,
 'purple': Colors.purple,
 'teal': Colors.teal,
 'orange': Colors.orange
};
```

O método `initState` executa ao construir a aplicação 

```dart
@override
void initState() {
 _getColor();
 super.initState();
}
```

::right::

No `initState` usamos o `getColor` para buscar a cor selecionada pelo usuário. Na construção do widget tentamos 
buscar a cor se ela existe nas preferências. `backgroundColor: selectedColor ?? Colors.black,`

```dart
children: [
for (var entry in colors.entries)
  Container(
    margin: const EdgeInsets.all(10),
    child: ElevatedButton(
      style: ElevatedButton.styleFrom(
        backgroundColor: entry.value,
      ),
      child: Text(''),
      onPressed: () => _setColor(
         entry.key, entry.value
      ),
    ),
  ),
],
```

---

Usamos o SharedPreferences para armazenar a cor escolhida pelo usuário. 

```dart
  void _setColor(String colorName, Color color) async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    await prefs.setString('color', colorName);
    print(prefs);
    setState(() {
      selectedColor = color;
    });
  }

  void _getColor() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    String? colorName = prefs.getString('color');
    setState(() {
      selectedColor = colors[colorName];
    });
  }
```

---
layout: two-cols
---

### Listas

Vamos criar uma lista para exibir dados, para isso usaremos o widget [ListView](https://docs.flutter.dev/cookbook/lists/)

```dart
ListView(
   children: const [
      Text("Curso1"),
      Text("Curso2"),
      Text("Curso3"),
   ],
)
```

Essa forma é utilizada para criar uma lista fixa, onde sempre teremos uma quantidade fixa.

::right::

Outra forma é com uma lista dinâmica onde podemos utilizamos uma quantidade x de itens, para isso usamos um `count` e um
`item builder`. Podemos `scrollDirection: Axis.horizontal` 

```dart
List<String> lista = [
   'Curso1',
   'Curso2',
   'Curso3'
]
ListView.builder(
   itemCount: lista.length,
   itemBuilder: (context, index) {
      return Text(lista[index]);
   },
),

```

---
layout: two-cols
---

Outra opção é a utilização de um ListTile

```dart
ListView.builder(
  itemCount: lista.length,
  itemBuilder: (context, index) {
    return ListTile(
      leading: Icon(Icons.map),
      title: Text(
        lista[index]
      ),
      subtitle: Text("Subtitulo"),
      trailing: Icon(
        Icons.arrow_forward_ios
      ),
    );
  },
),
```

::right::


```dart
home: Scaffold(
appBar: AppBar(
 title: const Text(title),
),
body: ListView(
 children: const <Widget>[
   ListTile(
     leading: Icon(Icons.map),
     title: Text('Map'),
   ),
   ListTile(
     leading: Icon(Icons.photo_album),
     title: Text('Album'),
   ),
   ListTile(
     leading: Icon(Icons.phone),
     title: Text('Phone'),
   ),
 ],),),
```

---
layout: two-cols
---

```dart
ListView.builder(
  itemCount: courses.length,
  itemBuilder: (context, index) {
    return ListTile(
      leading: CircleAvatar(
         child: Text("CS")
      ),
      title: Text(courses[index]),
      subtitle: Text("Subtitulo"),
      trailing: Icon(
         Icons.arrow_forward_ios
      ),
    );
  },
),
```

::right::

```dart
Card(
   elevation: 5,
   child: ListTile(
      leading: const CircleAvatar(
         child: Text("CS")
      ),
   title: Text(courses[index]),
   subtitle: const Text("Subtitulo"),
   trailing: const Icon(
      Icons.arrow_forward_ios
   ),),
);
```

---

### Async Future

Digamos que precisamos buscar uma lista de dados de uma fonte externa como uma api ou servidor.

```dart
List<String> lista = [];
getLista() {
   return = ['Curso 1', 'Curso 2', 'Curso 3'];
}
```

Para mostrar essa lista podemos usar o método `initState()` esse método precisa da anotação @override, pois é nativo
nos widgets.

```dart
@override
void initState() {
   super.initState();
   lista = getLista();
}
```

---

Para isso vamos criar um método que simula uma busca externa que demora 10 segundos.

```dart
Future<List<String>> getLista() async {
 return Future.delayed(const Duration(seconds: 10), () {
   return ['Curso1', 'Curso2', 'Curso3'];
 });
}
```

```dart
@override
void initState() async {
   super.initState();
   lista = await getLista();
}
```

O problema é o método initState não é assíncrono(`async`).

---

Para isso podemos usar o widget FutureBuilder.

```dart
FutureBuilder(
future: coursesFuture,
builder: (context, snapshot) {
  if (snapshot.hasData) {
    return ListView.builder(
      itemCount: snapshot.data!.length,
      itemBuilder: (context, index) {
        return Card(
          elevation: 5,
          child: ListTile(
            title: Text(snapshot.data![index]),
            leading: const CircleAvatar(
              child: Text("CS"),),
            trailing: const Icon(Icons.arrow_forward_ios),
            subtitle: const Text("Subtitulo do curso"),),);},);
  } else {
    return Center( child: CircularProgressIndicator() );
  }},)
```















---















https://flutterparainiciantes.com.br/

https://docs.flutter.dev/ui/interactivity

https://developer.android.com/studio/run/managing-avds?hl=pt-br

https://www.genymotion.com/

https://github.com/Genymobile/scrcpy/blob/master/doc/linux.md 






































