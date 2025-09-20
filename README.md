# Creative Studio

This repository contains a single-page marketing site built with [Astro](https://astro.build) and styled with [Tailwind CSS](https://tailwindcss.com). The layout is intentionally simple so you can customize the hero, navigation, and section styling while keeping page content in Markdown files.

## Prerequisites

- [Node.js](https://nodejs.org) 18.17 or newer

## Install dependencies

```bash
npm install
```

## Start the development server

```bash
npm run dev
```

The site will be available at `http://localhost:4321/` with hot module reloading.

## Build for production

```bash
npm run build
```

A static build will be created in the `dist/` directory. You can preview the build locally with `npm run preview`.

## Project structure

```
src/
├── content/sections/   # Markdown files for each navigation item
├── layouts/            # Reusable page layout that loads Tailwind CSS
├── pages/              # Main single-page layout that assembles the sections
└── styles/             # Global Tailwind layer configuration
```

Each menu item corresponds to a Markdown file inside `src/content/sections`. Update these Markdown files to change the content for the **Home**, **The Book**, **Videos**, and **About** sections.

Tailwind-driven layout and styling live in `src/pages/index.astro` and `src/styles/global.css`, so you can modify spacing, typography, or colors without touching the Markdown content.
