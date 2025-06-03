---
title: "Inicios con Astro"
description: "Un post explicando lo aprendido con Astro"
publishDate: "25 Aug 2024"
updatedDate: "7 Jan 2025"
tags: [ "astro", "learn"]
draft: True
---
# 🚀 Introducción a Astro

En este post te compartiré todo lo que he ido aprendiendo sobre **Astro**, un framework moderno para construir sitios web rápidos y optimizados.

---

## Índice

1. [¿Qué es Astro?](#qué-es-astro)
2. [Diferencias con otros frameworks](#diferencias-con-otros-frameworks)
3. [Instalación y configuración](#instalación-y-configuración)
4. [Estructura básica de un proyecto Astro](#estructura-básica-de-un-proyecto-astro)
5. [Primer componente `.astro`](#primer-componente-astro)
6. [Práctica sugerida](#práctica-sugerida)

---

## ¿Qué es Astro?

**Astro** es un framework que permite crear sitios web **estáticos** y **dinámicos** con un enfoque en la performance.
A diferencia de otros frameworks SPA (como React o Vue), Astro genera HTML puro por defecto y solo carga JavaScript cuando es necesario.

### Características principales:

- 🚀 **Island Architecture**: solo hidrata partes interactivas.
- 🛠️ **Framework agnóstico**: puedes usar React, Vue, Svelte, Solid, Lit...
- ⚡ **Performance**: páginas ultra rápidas por defecto.
- 🔍 **SEO optimizado**: ideal para contenido.
- ✨ **Developer Experience excelente**.

---

## Diferencias con otros frameworks

| Framework       |         Modelo         | JavaScript | SEO       | Usos ideales                         |
| --------------- | :--------------------: | ---------- | --------- | ------------------------------------ |
| Astro           | Static First + Islands | Opcional   | Excelente | Blogs, landing pages, documentación |
| React (Next.js) |       Client/SSR       | Necesario  | Bueno     | Apps interactivas                    |
| Vue (Nuxt)      |       Client/SSR       | Necesario  | Bueno     | Apps interactivas                    |

---

## Instalación y configuración

### Requisitos:

- Node.js >= v18
- npm, pnpm o yarn

### Crear un proyecto nuevo:

```bash
npm create astro@latest
# o
pnpm create astro@latest
```

El asistente te guiará para seleccionar plantillas y configuraciones básicas.

### Instalar dependencias:

Una vez creado el proyecto:

```bash
cd nombre-del-proyecto
npm install
# o
pnpm install
```

### Levantar el servidor de desarrollo:

```bash
npm run dev
# o
pnpm run dev
```

Abre tu navegador en [http://localhost:3000](http://localhost:3000) para ver tu sitio.

---
