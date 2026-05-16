# BRAGO — Directorio Digital

Directorio editorial premium de estilo de vida para San Miguel de Allende y León, Guanajuato.

---

## Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **TailwindCSS**
- **Framer Motion**

---

## Instalación rápida

```bash
# 1. Ir al directorio
cd brago

# 2. Instalar dependencias
npm install

# 3. Correr en desarrollo
npm run dev

# 4. Abrir en el navegador
open http://localhost:3000
```

Si usas **pnpm** o **bun**:
```bash
pnpm install && pnpm dev
# ó
bun install && bun dev
```

---

## Rutas

| Ruta                    | Descripción                         |
|-------------------------|-------------------------------------|
| `/`                     | Landing page — Hero, Featured, Categorías |
| `/directorio`           | Directorio completo con filtros     |
| `/negocio/[slug]`       | Perfil editorial individual         |
| `/membresias`           | Planes Estrella y Diamante + formulario |
| `/admin`                | CMS simple para gestionar negocios  |

---

## Estructura del proyecto

```
brago/
├── app/
│   ├── layout.tsx              # Root layout con fuentes Google
│   ├── globals.css             # Estilos globales + variables
│   ├── page.tsx                # Home
│   ├── directorio/page.tsx     # Directorio
│   ├── negocio/[slug]/page.tsx # Perfil de negocio
│   ├── membresias/page.tsx     # Membresías
│   └── admin/page.tsx          # CMS admin
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Nav fijo, city selector, mobile menu
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── Hero.tsx            # Cinematográfico con búsqueda
│   │   ├── CategoriesSection.tsx
│   │   ├── FeaturedGrid.tsx    # Grid asimétrico editorial
│   │   └── EditorialSection.tsx # Manifiesto, teaser membresías, ciudades
│   ├── directory/
│   │   ├── BusinessCard.tsx    # Vista grid y lista
│   │   ├── FilterBar.tsx       # Filtros ciudad, categoría, tier
│   │   └── DirectoryGrid.tsx   # Grid con estado de filtros
│   ├── business/
│   │   ├── BusinessHero.tsx    # Hero con parallax scroll
│   │   ├── Gallery.tsx         # Galería con lightbox
│   │   ├── BusinessDetail.tsx  # Historia, servicios, contacto
│   │   └── RelatedBusinesses.tsx
│   ├── membership/
│   │   ├── PricingSection.tsx  # Cards Estrella vs Diamante
│   │   └── ApplicationForm.tsx # Formulario de aplicación
│   └── ui/
│       ├── Badge.tsx           # TierBadge, CategoryBadge
│       ├── Button.tsx          # Variantes: primary, ghost, outline, gold
│       └── AnimatedSection.tsx # Wrappers de animación Framer Motion
│
├── data/
│   └── businesses.ts           # 13 negocios ficticios premium (SMA + León)
├── types/
│   └── index.ts                # Tipos TypeScript
├── lib/
│   └── utils.ts                # cn(), slugify(), formatPrice()
├── tailwind.config.ts          # Paleta brago.*, fuentes, transiciones
├── next.config.js              # Domains de imágenes (Unsplash)
└── tsconfig.json
```

---

## Paleta de color

| Variable              | Hex       | Uso                    |
|-----------------------|-----------|------------------------|
| `brago-black`         | `#080806` | Fondo principal        |
| `brago-cream`         | `#F0EEE8` | Texto principal        |
| `brago-gold`          | `#C8A96E` | Acento, CTA, badges    |

---

## Mock data incluida

**San Miguel de Allende:**
- Casa Mateo — Hotel Diamante
- Ancho & Alma — Restaurante Diamante
- Galería Lumbre — Galería Estrella
- Teocalli Spa — Spa Diamante
- Café La Aurora — Café Estrella
- Índigo Studio — Boutique Estrella
- Club Social 47 — Club Diamante

**León:**
- Atrio Hotel — Hotel Diamante
- Piel Restaurante — Restaurante Diamante
- Galería Forma — Galería Estrella
- Cuero & Alma — Spa Estrella
- Café Cromado — Café Estrella
- Suede Studio — Boutique Diamante

---

## Panel de administración

Accesible en `/admin`. Permite:

- Ver todos los negocios con estadísticas
- Editar información, imágenes, horarios y descripción
- Agregar nuevos negocios
- Marcar como destacado
- Eliminar del directorio

> Los cambios viven en estado React (en memoria). Para persistencia conectar con una API o CMS headless (Sanity, Contentful, Supabase).

---

## Para producción

1. Conectar un CMS headless (recomendado: **Sanity** por su flexibilidad editorial)
2. Subir imágenes a **Cloudinary** o **Uploadcare**
3. Agregar autenticación al panel `/admin` (NextAuth.js)
4. Configurar dominio en **Vercel**

```bash
npm run build
npm start
```
