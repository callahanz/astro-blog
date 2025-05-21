---
title: Explorando Funciones de ES6
date: 2023-06-01
description: Explorando algunas de las nuevas funciones de ES6 en JavaScript.
author: jane-doe

# image: https://placehold.co/1400x900/

# public: recordar que esto vendra de /public y su contenido se mueve a la raiz y no permite optimizaciones (es peor)
#image: '/assets/images/post-01.png'

# src: para aprovechar las optimizaciones copiamos los contenidos de /public a /src y asi podemos aprovecharlos para optimizar nuestras imagenes de blog (es mejor);

# En resumen:
# /public/assets/images → Se copia directamente a /assets/images en el build (sin optimización).
# /src/assets/images → Se procesa, optimiza y se coloca en una carpeta interna (como /_astro/) con nombres transformados para optimización y cache busting.

# Recuerda: Evita esperar que los alias de tsconfig se apliquen en frontmatter Las rutas definidas en compilerOptions.paths se usan solo en el código TypeScript o archivos que son procesados como módulos de JavaScript, no en el procesamiento de datos en frontmatter. Por ello, si necesitas que Astro optimice las imágenes y puedan ser reconocidas por el helper image(), debes usar rutas que sean válidas según la estructura real del proyecto.

# Por ese motivo aqui colocaremos una ruta relativa desde los src/content/blog/post-01.png hasta '../../assets/images/post-01.png' para que pueda ser procesada por print() "ver: config.ts".
image: '../../assets/images/post-01.png'

tags: [JavaScript, ES6, Programming]

# layout: src/layouts/TypedBlogLayout.astro
# isDraft: true
---

<!-- # {frontmatter.title} podriamos usar esto si el archivo fuera un .mdx y si queremos usar los mdx con los rss feeds necesitamos instalar un plugin. Por ese motivo hemos puesto el titulo directamente y hemos renombrado el archivo como .md -->
# Explorando Funciones de ES6

<!-- {/* Mostrar imagen */} -->
<!-- {/* <img src="/assets/images/post-01.png" width="350" alt="Explorando Funciones de ES6" /> */} -->
<!-- {/* Ahora mostraremos la imagen dinamicamente desde [slug].astro */} -->

JavaScript ES6 introdujo varias funciones nuevas que han hecho que la codificación en JavaScript sea más eficiente y agradable. Vamos a explorar algunas de estas funciones.

## Arrow Functions - Funciones de Flecha

Las funciones de flecha proporcionan una nueva sintaxis para escribir expresiones de función. Son más concisas y vinculan léxicamente el valor `this`.

### Ejemplo

```javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5
```

## Template Literals - Literales de Plantilla

Los literales de plantilla permiten una interpolación de cadenas más fácil y cadenas de varias líneas. Utilizan comillas invertidas (\`) en lugar de comillas simples o dobles.

### Ejemplo

```javascript
const name = 'Jane';
console.log(`Hello, ${name}!`);
// Output: Hello, Jane!
```

## Destructuring Assignment - Asignación por Desestructuración

La asignación por desestructuración le permite extraer valores de matrices u objetos y asignarlos a variables de una manera más concisa.

### Ejemplo

```javascript
const person = { name: 'Jane', age: 30 };
const { name, age } = person;
console.log(name, age); // Output: Jane 30
```
