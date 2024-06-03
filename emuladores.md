---
layout: two-cols
---

## Emuladores

Para rodar o aplicativo podemos utilizar algum emulador ou conectar um dispositivo 
para executar em modo debug.

Algo que facilita o desenvolvimento é a utilização de uma lib para espelhar a tela
de um dispositivo. Como o [`Scrcpy`](https://github.com/Genymobile/scrcpy/)(**Pronunciado Screen Copy**)
informações sobre instalação, requisitos e tutoriais sobre como instalar

Uma versão paga com algumas funcionalidades extras é o [Genymotion](https://www.genymotion.com/).

::right::

<img src="/scrcpy.png" class="h-115  m-auto rounded " />

---
layout: two-cols
---

A partir da versão 11 do android, podemos utilizar o `ADB` para conectar um dispositivo utilizando a wifi. 
Para isso precisamos de algumas configurações

![](/depuracao.png)

::right::

![](/depuracao2.png)

---
layout: image-left
image: /depuracao3.png 
background-size: contain
---

<img src="/depuracao4.png" class="m-auto rounded " />

Após utilizar a opção com código de pareamento usamos o ip mostrado e o token

```shell
$ adb pair 192.168.0.110:37247
Token: 129878
$ adb devices

$ adb connect 192.168.0.110:37247
$ adb devices
$ S21-4345
```

---

Outra opção é o AVD(**Android Virtual Device**) uma ferramenta dentro do 
[Android Studio](https://developer.android.com/) que possibilita emular um dispositivo.

<img src="/android-device.png" class="h-115  m-auto rounded " />
