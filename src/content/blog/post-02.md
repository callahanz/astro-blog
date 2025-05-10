---
title: Empezando con Flutter
date: 2024-08-10
description: Aprende a desarrollar aplicaciones móviles con Flutter y Dart.
author: john-smith

# image: https://placehold.co/1400x900/

# public: recordar que esto vendra de /public y su contenido se mueve a la raiz y no permite optimizaciones (es peor)
#image: '/assets/images/post-02.png'

# src: para aprovechar las optimizaciones copiamos los contenidos de /public a /src y asi podemos aprovecharlos para optimizar nuestras imagenes de blog (es mejor)

# En resumen:
# /public/assets/images → Se copia directamente a /assets/images en el build (sin optimización).
# /src/assets/images → Se procesa, optimiza y se coloca en una carpeta interna (como /_astro/) con nombres transformados para optimización y cache busting.

# Recuerda: Evita esperar que los alias de tsconfig se apliquen en frontmatter Las rutas definidas en compilerOptions.paths se usan solo en el código TypeScript o archivos que son procesados como módulos de JavaScript, no en el procesamiento de datos en frontmatter. Por ello, si necesitas que Astro optimice las imágenes y puedan ser reconocidas por el helper image(), debes usar rutas que sean válidas según la estructura real del proyecto.

# Por ese motivo aqui colocaremos una ruta relativa desde los src/content/blog/post-02.png hasta '../../assets/images/post-02.png' para que pueda ser procesada por print() "ver: config.ts".
image: '../../assets/images/post-02.png'

tags: [Flutter, Mobile Development, Dart]
---

# Empezando con Flutter

Flutter es un kit de herramientas de IU para construir aplicaciones compiladas nativamente para móviles, web y escritorio desde un único código base.

## Instalación de Flutter

Para comenzar a desarrollar con Flutter, primero necesitas instalar el SDK de Flutter en tu sistema. Puedes seguir las instrucciones de instalación en la [documentación oficial de Flutter](https://flutter.dev/docs/get-started/install).

```bash
flutter doctor
```

Este comando te ayudará a verificar si tienes todo lo necesario para comenzar a desarrollar con Flutter.

## Creación de un Nuevo Proyecto

Puedes crear un nuevo proyecto de Flutter utilizando el siguiente comando:

```bash
flutter create my_first_app
cd my_first_app
```

Esto creará un nuevo proyecto de Flutter en el directorio `my_first_app`.

## Ejecución de la Aplicación

Para ejecutar tu aplicación de Flutter, puedes utilizar el siguiente comando:

```bash
flutter run
```

Esto compilará y ejecutará tu aplicación en un emulador o dispositivo conectado. ¡Ahora puedes ver tu aplicación en acción!

## Escribiendo tu Primera Aplicación

Puedes editar el archivo `lib/main.dart` para comenzar a escribir tu aplicación de Flutter. Aquí tienes un ejemplo de una aplicación de contador simple.

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePage

State extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Flutter Demo'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'You have pushed the button this many times:',
            ),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headline4,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: Icon(Icons.add),
      ),
    );
  }
}
```
