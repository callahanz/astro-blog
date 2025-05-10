---
title: Construyendo una API REST con Node.js
date: 2023-06-20
description: En este tutorial, construiremos una API RESTful utilizando Node.js y Express.
author: bob-williams

# image: https://placehold.co/1400x900/

# public: recordar que esto vendra de /public y su contenido se mueve a la raiz y no permite optimizaciones (es peor)
#image: '/assets/images/post-04.png'

# src: para aprovechar las optimizaciones copiamos los contenidos de /public a /src y asi podemos aprovecharlos para optimizar nuestras imagenes de blog (es mejor)

# En resumen:
# /public/assets/images → Se copia directamente a /assets/images en el build (sin optimización).
# /src/assets/images → Se procesa, optimiza y se coloca en una carpeta interna (como /_astro/) con nombres transformados para optimización y cache busting.

# Recuerda: Evita esperar que los alias de tsconfig se apliquen en frontmatter Las rutas definidas en compilerOptions.paths se usan solo en el código TypeScript o archivos que son procesados como módulos de JavaScript, no en el procesamiento de datos en frontmatter. Por ello, si necesitas que Astro optimice las imágenes y puedan ser reconocidas por el helper image(), debes usar rutas que sean válidas según la estructura real del proyecto.

# Por ese motivo aqui colocaremos una ruta relativa desde los src/content/blog/post-04.png hasta '../../assets/images/post-04.png' para que pueda ser procesada por print() "ver: config.ts".
image: '../../assets/images/post-04.png'

tags: [Node.js, Express, API, Backend]
---

# Construyendo una API REST con Node.js

En este tutorial, construiremos una API RESTful utilizando Node.js y Express. Una API RESTful es una interfaz de programación de aplicaciones que sigue los principios de REST (Representational State Transfer). Utilizaremos Express, un marco de aplicaciones web de Node.js, para crear nuestra API.

## Instalación de Node.js

Primero, necesitas instalar Node.js en tu sistema. Puedes descargar Node.js desde el [sitio web oficial](https://nodejs.org/).

```bash
npm init -y
npm install express
```

Creamos un archivo `index.js` y agregamos el siguiente código:

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

Para ejecutar la aplicación, ejecuta el siguiente comando:

```bash
node index.js
```

Ahora puedes acceder a tu aplicación en `http://localhost:3000`.

## Creación de rutas para la API

Vamos a crear algunas rutas para nuestra API. Por ejemplo, una ruta para obtener una lista de usuarios y otra ruta para obtener un usuario por su ID.

```javascript
app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ]);
});

app.get('/api/users/:id', (req, res) => {
  const id = req.params.id;
  res.json({ id, name: 'Alice' });
});
```

Ahora puedes acceder a la API de usuarios en `http://localhost:3000/api/users` y `http://localhost:3000/api/users/1`.

## Conclusion

En este tutorial, hemos construido una API RESTful utilizando Node.js y Express. Puedes agregar más rutas y funcionalidades a tu API según tus necesidades. ¡Diviértete construyendo tu API!

Espero que este tutorial te haya sido útil. Si tienes alguna pregunta, no dudes en dejar un comentario.
