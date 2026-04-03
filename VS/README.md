# Vault Transfer DS — Sitio Web

Sitio introductorio del **Vault Transfer Design System**, un sistema de componentes para una app de agenda de transferencias bancarias.

## Stack

- HTML + CSS puro (sin frameworks)
- Fuentes: Syne (display) + DM Sans (body) via Google Fonts
- Animaciones: CSS keyframes + IntersectionObserver
- Deploy: Vercel (static)

## Estructura

```
vault-ds-site/
├── index.html     # Todo el sitio en un único archivo
├── vercel.json    # Configuración de Vercel
└── README.md
```

## Deploy en Vercel via GitHub

### 1. Subir a GitHub

```bash
git init
git add .
git commit -m "feat: Vault DS site — Fase 1"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/vault-ds-site.git
git push -u origin main
```

### 2. Conectar con Vercel

1. Ir a [vercel.com](https://vercel.com) → New Project
2. Importar el repo `vault-ds-site` desde GitHub
3. Framework Preset: **Other** (es static HTML)
4. Build Command: dejar vacío
5. Output Directory: `.` (raíz)
6. Click **Deploy**

El sitio queda en `https://vault-ds-site.vercel.app` (o el dominio que asigne Vercel).

## Secciones del sitio

| Sección | Contenido |
|---|---|
| Hero | Título, descripción, estadísticas |
| Qué es | Explicación del DS, flujo de capas |
| KPI Strip | 6 métricas del DS en dark navy |
| Componentes | Grid de las 25 piezas con variantes |
| Pantallas | Las 5 pantallas con mockup visual |
| Roadmap | 4 fases de construcción |

## Actualizaciones futuras

- [ ] Agregar modo oscuro
- [ ] Sección de tokens de color interactiva
- [ ] Preview de componentes embebidos desde Figma
