---
title: Comprendiendo los Hooks de React
date: 2023-06-15
description: Learn how to use React Hooks to manage state and lifecycle in functional components.
author: alice-johnson

# image: https://placehold.co/1400x900/

# public: recordar que esto vendra de /public y su contenido se mueve a la raiz y no permite optimizaciones (es peor)
#image: '/assets/images/post-03.png'

# src: para aprovechar las optimizaciones copiamos los contenidos de /public a /src y asi podemos aprovecharlos para optimizar nuestras imagenes de blog (es mejor)

# En resumen:
# /public/assets/images → Se copia directamente a /assets/images en el build (sin optimización).
# /src/assets/images → Se procesa, optimiza y se coloca en una carpeta interna (como /_astro/) con nombres transformados para optimización y cache busting.

# Recuerda: Evita esperar que los alias de tsconfig se apliquen en frontmatter Las rutas definidas en compilerOptions.paths se usan solo en el código TypeScript o archivos que son procesados como módulos de JavaScript, no en el procesamiento de datos en frontmatter. Por ello, si necesitas que Astro optimice las imágenes y puedan ser reconocidas por el helper image(), debes usar rutas que sean válidas según la estructura real del proyecto.

# Por ese motivo aqui colocaremos una ruta relativa desde los src/content/blog/post-03.png hasta '../../assets/images/post-03.png' para que pueda ser procesada por print() "ver: config.ts".
image: '../../assets/images/post-03.png'

tags: [React, JavaScript, Web Development]
---

# Comprendiendo los Hooks de React

Los Hooks de React son una característica que te permite usar el estado y otras características de React en componentes funcionales. Esto te permite escribir componentes más simples y reutilizables sin tener que convertirlos en clases.

## useState Hook

El `useState` hook te permite añadir estado a tus componentes funcionales.

```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

## useEffect Hook

El `useEffect` hook te permite realizar efectos secundarios en tus componentes funcionales, como acceder a datos externos o modificar el DOM.

```javascript
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

## Custom Hooks

Puedes crear tus propios hooks personalizados para reutilizar lógica en tus componentes.

```javascript
import { useState } from 'react';

function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + 1);
  };

  return { count, increment };
}
```

Luego puedes usar tu hook personalizado en tus componentes.

```javascript
import React from 'react';
import useCounter from './useCounter';

function Counter() {
  const { count, increment } = useCounter(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={increment}>Click me</button>
    </div>
  );
}
```

Los Hooks de React son una poderosa característica que te permite escribir componentes más limpios y reutilizables en React. ¡Empieza a usarlos en tus proyectos hoy mismo!
