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
title: Kotlin
author: Pablo Leon Rodrigues
export:
  format: pdf
  timeout: 30000
  withClicks: false
---
---

<Toc maxDepth="2"></Toc>

---
layout: two-cols
---

## Kotlin

Kotlin é uma linguagem de programação multiplataforma, orientada a objetos e funcional, concisa e estaticamente tipada,
desenvolvida pela JetBrains em 2011, que compila para a Máquina virtual Java e que também pode ser traduzida para a linguagem JavaScript e compilada para código nativo.

Uma das características mais importantes do Kotlin é a interoperabilidade fluida com Java.
Como o código Kotlin é compilado até o bytecode da JVM, seu código Kotlin pode ser chamado diretamente no código Java
e vice-versa. Isso significa que você pode aproveitar bibliotecas Java já existentes diretamente do Kotlin.

Além disso, a maioria das APIs do Android é gravada em Java, e você pode chamá-las diretamente do Kotlin.

::right::

![](/jetbrains-kotlin.png)

---
layout: two-cols
---
## Hello, world!

<br>

```kotlin
fun main() {
    println("Hello, world!")
}
```

::right::

`fun` é usado para declarar funções

a função `main()` é onde o programa inicia

o corpo da função é escrito entre chaves `{}`

`println()` e `print()` são usadas como saída padrão

` ; ` não é necessário!

---
layout: two-cols
---

## String Templates

```kotlin {all|1|2|5|6|all}
val customers = 10
println("We have $customers customers")
// We have 10 customers

println("We have ${customers + 1} customers")
// We have 11 customers
```

<br>

## Type inference

```kotlin
var customers = 10
customers = 8
customers = customers + 3 // addition: 11
customers += 7            // addition: 18
customers -= 3            // subtraction: 15
customers *= 2            // multiplication: 30
customers /= 3            // division: 10

println(customers) // 10
```

::right::

## Tipos Básicos

| **Categoria**{style="color: green;"} | **Tipos**{style="color: green;"}   |
|--------------------------------------|------------------------------------|
| Integers                             | `Byte`, `Short`, `Int`, `Long`     |
| Unsigned integers                    | `UByte`, `UShort`, `UInt`, `ULong` |
| Floating-point numbers               | `Float`, `Double`                  |
| Booleans                             | `Boolean`                          |
| Characters                           | `Char`                             |
| Strings                              | `String`                           |

---
layout: two-cols
---

## Segurança Nula(*Null safety*)

No Kotlin, é possível ter um valor `null`. A segurança nula detecta possíveis problemas com valores nulos em tempo de compilação, e não em tempo de execução.

A segurança nula é uma combinação de recursos que permitem:
- declare explicitamente quando valores nulos são permitidos em seu programa.
- verifique se há valores nulos.
- use chamadas seguras para propriedades ou funções que possam conter valores nulos.
- declare ações a serem executadas se valores nulos forem detectados.

::right::

```kotlin
fun main() {
    // neverNull has String type
    var neverNull: String = "can't be null"
    // Throws a compiler error
    neverNull = null
    // nullable has nullable String type
    var nullable: String? = "can be null here"
    // This is OK  
    nullable = null
    // null values aren't accepted
    var inferredNonNull = "Compiler assumes non-nullable"
    // Throws a compiler error
    inferredNonNull = null
    // notNull doesn't accept null values
    fun strLength(notNull: String): Int {                 
        return notNull.length
    }
    println(strLength(neverNull))// 18
    println(strLength(nullable))// Throws compiler error
}
```

---
layout: two-cols
---

## Chamadas Seguras

No exemplo a seguir, a função `lengthString()` usa uma chamada segura para retornar o comprimento da string ou `null`:

```kotlin
fun lengthString(maybeString: String?):
        Int? = maybeString?.length

fun main() { 
    var nullString: String? = null
    println(lengthString(nullString))
    // null
}
```

```kotlin
fun main() {
    var nullString: String? = null
    println(nullString?.length ?: 0) // 0
}
```

::right::

### Elvis Operator

<v-click>

![](/elvis-operator.jpg)

</v-click>

<!--
Elvis Operator - https://kotlinlang.org/docs/kotlin-tour-null-safety.html#use-elvis-operator
-->

---
layout: two-cols
---

## Collections

Ao programar, é útil poder agrupar dados em estruturas para processamento posterior. 
O Kotlin fornece coleções exatamente para esse propósito.

### List

As listas armazenam itens na ordem em que são adicionados e permitem itens duplicados.
Para criar uma lista somente leitura (List), use a função listOf().
Para criar uma lista mutável (MutableList), use a função mutableListOf().

Ao criar listas, o Kotlin pode inferir o tipo de itens armazenados. 
Para declarar o tipo explicitamente, adicione o tipo entre colchetes angulares <> após a declaração da lista:

::right::

```kotlin
// Read only list
val readOnlyShapes = 
    listOf("triangle", "square", "circle")
println(readOnlyShapes)
// [triangle, square, circle]

// Mutable list, explicit type declaration
val shapes: MutableList<String> = 
    mutableListOf("triangle",
            "square",
            "circle")
println(shapes)
// [triangle, square, circle]
```

---

```kotlin {all|1|2|4|7|9|12|15|18|19|all}
val readOnlyShapes = listOf("triangle", "square", "circle")
val shapes: MutableList<String> = mutableListOf("triangle", "square", "circle")

println("The first item in the list is: ${readOnlyShapes[0]}")
// The first item in the list is: triangle

println("The first item in the list is: ${readOnlyShapes.first()}")
// The first item in the list is: triangle
println("The first item in the list is: ${readOnlyShapes.last()}")
// The last item in the list is: circle

println("This list has ${readOnlyShapes.count()} items")
// This list has 3 items

println("circle" in readOnlyShapes)
// true

shapes.add("pentagon")
shapes.remove("pentagon")
```
---

### Set

Diferente das listas o `Set` é um tipo de lista sem ordem e armazena itens únicos.

```kotlin {all|2|4|6|all}
// Read-only set
val readOnlyFruit = setOf("apple", "banana", "cherry", "cherry")
// Mutable set with explicit type declaration
val fruit: MutableSet<String> = mutableSetOf("apple", "banana", "cherry", "cherry")

println(readOnlyFruit)
// [apple, banana, cherry]
```

As funções `.count`, `in`, `.add` e `.remove` de List estão disponíveis para Set.

---

### Map

Map é um tipo de estrutura que utiliza *Key-value*, chave e valor. Você pode acessar um valor de
acordo com a sua chave. Cada **chave** em um mapa é única.

```kotlin {all|2|7-8|11|13|all}
// Read-only map
val readOnlyJuiceMenu = mapOf("apple" to 100, "kiwi" to 190, "orange" to 100)
println(readOnlyJuiceMenu)
// {apple=100, kiwi=190, orange=100}

// Mutable map with explicit type declaration
val juiceMenu: MutableMap<String, Int> = 
        mutableMapOf("apple" to 100, "kiwi" to 190, "orange" to 100)
println(juiceMenu)
// {apple=100, kiwi=190, orange=100}
println("The value of apple juice is: ${readOnlyJuiceMenu["apple"]}")
// The value of apple juice is: 100
println("This map has ${readOnlyJuiceMenu.count()} key-value pairs")
// This map has 3 key-value pairs
```

---

Para adicionar e remover a sintaxe é um pouco diferente:

```kotlin {all|3|6|9|11|13|15|17|all}
val juiceMenu: MutableMap<String, Int> = 
        mutableMapOf("apple" to 100, "kiwi" to 190, "orange" to 100)
juiceMenu.put("coconut", 150) // Add key "coconut" with value 150 to the map
println(juiceMenu)
// {apple=100, kiwi=190, orange=100, coconut=150}
juiceMenu.remove("orange")    // Remove key "orange" from the map
println(juiceMenu)
// {apple=100, kiwi=190, coconut=150}
println(juiceMenu.containsKey("kiwi"))
// true
println(juiceMenu.keys)
// [apple, kiwi, orange]
println(juiceMenu.values)
// [100, 190, 100]
println("orange" in juiceMenu.keys)
// true
println(200 in juiceMenu.values)
// false
```
---
layout: two-cols
---

## Conditional Expressions
<br>

### IF

```kotlin
val d: Int
val check = true

if (check) {
    d = 1
} else {
    d = 2
}

println(d)
// 1
```

Não existe operador ternário no Kotlin, `condition ? then : else`.

::right::

### When

Aqui o `When` é implementado como *statement* 

```kotlin
val obj = "Hello"

when (obj) {
    // Checks whether obj equals to "1"
    "1" -> println("One")
    // Checks whether obj equals "Hello"
    "Hello" -> println("Greeting")
    // Default statement
    else -> println("Unknown")     
}
// Greeting
```

Mas ele também pode ser implementado como expressão.

---
layout: two-cols
---

Aqui `When` é utilizado como expressão que define o valor de uma variável.

```kotlin
val obj = "Hello"    

val result = when (obj) {
    "1" -> "One"
    "Hello" -> "Greeting"
    else -> "Unknown"
}
println(result)
// Greeting
```

::right::

```kotlin
val temp = 18

val description = when {
    temp < 0 -> "very cold"
    temp < 10 -> "a bit cold"
    temp < 20 -> "warm"
    else -> "hot"             
}
println(description)
// warm
```

---
layout: two-cols
---

## Loops

Em Kotlin podemos definir `range` usando o operador `..`, o método mais comum de criar um range é `1..4` 
que é equivalente a `1,2,3,4`.

É possivel usar o operador `<` para não incluir o último valor, `1..<4`, que representa `1,2,3`.

Para declarar o `range` em ordem reversa podemos usar `downTo`, `4 downTo 1`, resulta em `4,3,2,1`.

Para declarar um incremento maior que 1 podemos usar o `step`, `1..5 step 2`, resulta em `1,3,5`.

Podemos usar também `char`, `'a'..'d'` resulta em `'a','b','c','d'`.

::right::

### For

```kotlin
for (number in 1..5) { 
    // number is the iterator
    // and 1..5 is the range
    print(number)
}
// 12345
```

```kotlin
val cakes = 
  listOf("carrot", "cheese", "chocolate")

for (cake in cakes) {
    println("Yummy, it's a $cake cake!")
}
// Yummy, it's a carrot cake!
// Yummy, it's a cheese cake!
// Yummy, it's a chocolate cake!
```

---
layout: two-cols
---

### While

`While`pode ser usado de duas formas,
- Para executar um bloco de código enquanto uma expressão for verdadeira (`while`)
- Para executar um bloco de código e depois verificar uma expressão condicional (`do-while`)

```kotlin
var cakesEaten = 0
while (cakesEaten < 3) {
    println("Eat a cake")
    cakesEaten++
}
// Eat a cake
// Eat a cake
// Eat a cake
```

::right::

```kotlin
var cakesEaten = 0
var cakesBaked = 0
while (cakesEaten < 3) {
    println("Eat a cake")
    cakesEaten++
}
do {
    println("Bake a cake")
    cakesBaked++
} while (cakesBaked < cakesEaten)
// Eat a cake
// Eat a cake
// Eat a cake
// Bake a cake
// Bake a cake
// Bake a cake
```

---

### Simple

```kotlin {all|2|3|4-6|all} twoslash
fun main() {
    val name = "stranger"       // Declare your first variable
    println("Hi, $name!")       // ...and use it!
    print("Current count:")
    for (i in 0..10) {          // Loop over a range from 0 to 10
        print(" $i")
    }
}
```

#### Result

```shell
Hi, stranger!
Current count: 0 1 2 3 4 5 6 7 8 9 10
```

<br>

`val` é utilizado na declaração de constantes

`var` é utilizado na declaração de variáveis

---

### Asynchronous

```kotlin {all|1|3,15|7-10|17-21|all}
import kotlinx.coroutines.*

suspend fun main() {        // A function that can be suspended and resumed later
    val start = System.currentTimeMillis()
    coroutineScope {                      // Create a scope for starting coroutines
        for (i in 1..10) {
            launch {                      // Start 10 concurrent tasks
                delay(3000L - i * 300)    // Pause their execution
                log(start, "Countdown: $i")
            }
        }
    }
    // Execution continues when all coroutines in the scope have finished
    log(start, "Liftoff!")
}
fun log(start: Long, msg: String) {
    println("$msg " +
            "(on ${Thread.currentThread().name}) " +
            "after ${(System.currentTimeMillis() - start)/1000F}s")
}
```

<!--
```shell
Countdown: 10 (on DefaultDispatcher-worker-2 @coroutine#10) after 0.115s
Countdown: 9 (on DefaultDispatcher-worker-1 @coroutine#9) after 0.416s
Countdown: 8 (on DefaultDispatcher-worker-1 @coroutine#8) after 0.715s
Countdown: 7 (on DefaultDispatcher-worker-1 @coroutine#7) after 1.01s
Countdown: 6 (on DefaultDispatcher-worker-1 @coroutine#6) after 1.31s
Countdown: 5 (on DefaultDispatcher-worker-1 @coroutine#5) after 1.61s
Countdown: 4 (on DefaultDispatcher-worker-1 @coroutine#4) after 1.91s
Countdown: 3 (on DefaultDispatcher-worker-1 @coroutine#3) after 2.21s
Countdown: 2 (on DefaultDispatcher-worker-1 @coroutine#2) after 2.508s
Countdown: 1 (on DefaultDispatcher-worker-1 @coroutine#1) after 2.817s
Liftoff! (on DefaultDispatcher-worker-1 @coroutine#1) after 2.817s
```
-->

---

### Object-Oriented

```kotlin {all|1-3|5-8|10-14|16-22|all}
abstract class Person(val name: String) {
    abstract fun greet()
}
interface FoodConsumer {
    fun eat()
    fun pay(amount: Int) = println("Delicious! Here's $amount bucks!")
}
class RestaurantCustomer(name: String, val dish: String) : Person(name), FoodConsumer {
    fun order() = println("$dish, please!")
    override fun eat() = println("*Eats $dish*")
    override fun greet() = println("It's me, $name.")
}
fun main() {
    val sam = RestaurantCustomer("Sam", "Mixed salad")
    sam.greet() // Implementation of abstract function
    sam.order() // member function
    sam.eat()   // Implementation of interface function
    sam.pay(10) // Default implementation in interface
}
```
<!--
```shell
It's me, Sam.
Mixed salad, please!
*Eats Mixed salad*
Delicious! Here's 10 bucks!
```
-->
---

### Tests Integrated

```kotlin
import org.junit.Test     // Tests
import kotlin.test.*      // The following example works for JVM only
class SampleTest {
    @Test
    fun `test sum`() {    // Write test names with whitespaces in backticks
        val a = 1
        val b = 41
        assertEquals(42, sum(a, b), "Wrong result for sum($a, $b)")
    }
    @Test
    fun `test computation`() {
        assertTrue("Computation failed") {
            setup()        // Use lambda returning the test subject
            compute()
        }
    }}
fun sum(a: Int, b: Int) = a + b         // Sources
fun setup() {}
fun compute() = true
```

<!--
Total test time: 0.023s
Passed: test sum
Passed: test computation
-->


---
https://www.jetbrains.com/

https://kotlinlang.org/docs/kotlin-tour-hello-world.htm