# Preset Studio

A modern React + Tailwind photo preset editor with canvas-based effects, HEIC upload support, before/after comparison, and export.

## Features

- Upload JPG/PNG/HEIC images
- Automatic client-side HEIC to JPEG conversion (`heic2any`)
- Preset categories with thumbnail previews
- Adjustable preset intensity and manual controls
- Before/after comparison slider
- Export edited images as PNG or JPG
- Fully client-side (no backend)

## Tech Stack

- React (Vite)
- Tailwind CSS
- HTML5 Canvas image processing

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

Vite will print a local URL, typically:

- `http://localhost:5173`

## Available Scripts

- `npm run dev` - start local dev server with HMR
- `npm run build` - create production build in `dist/`
- `npm run preview` - preview production build locally

## Notes

- HEIC uploads are converted in the browser before entering the editing pipeline.
- All effects are implemented with canvas/filter logic; no paid APIs are used.
