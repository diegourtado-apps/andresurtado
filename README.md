# Andrés Urtado · Escultor

Sitio web del escultor uruguayo Andrés Urtado. Esculturas en acero corten,
inoxidable y luz integrada.

Sitio estático (HTML/CSS/JS, sin dependencias ni build). Listo para GitHub + Vercel.

## Estructura

```
.
├── index.html          # Página principal
├── css/styles.css      # Estilos
├── js/main.js          # Interacciones (nav, reveal, carga de imágenes)
├── images/             # Fotos de las obras  ← acá van tus fotos
└── vercel.json         # Config de deploy
```

## Agregar las fotos

Poné las imágenes en la carpeta `images/` con estos nombres exactos:

| Archivo                 | Qué es                                    | Tamaño sugerido |
|-------------------------|-------------------------------------------|-----------------|
| `images/hero.jpg`       | Portada: las 4 esculturas juntas          | ~1400 × 1600 px |
| `images/creciente.jpg`  | Escultura "Creciente"                     | ~900 × 1200 px  |
| `images/nucleo.jpg`     | Escultura "Núcleo"                        | ~900 × 1200 px  |
| `images/oculo.jpg`      | Escultura "Óculo"                         | ~900 × 1200 px  |
| `images/veta.jpg`       | Escultura "Veta"                          | ~900 × 1200 px  |
| `images/artista.jpg`    | Retrato o detalle de textura del artista  | ~1200 × 1500 px |
| `images/og.jpg`         | Imagen para compartir en redes (opcional) | 1200 × 630 px   |

No hace falta tocar el código: al cargar el sitio, cada placeholder se reemplaza
solo por la foto correspondiente si el archivo existe.

Formatos recomendados: `.jpg` (fotos) o `.webp` para menor peso.

## Ver en local

Abrí `index.html` en el navegador, o serví la carpeta:

```bash
python3 -m http.server 8000
```

Luego entrá a http://localhost:8000

## Deploy en Vercel

1. Subí esta carpeta a un repositorio de GitHub.
2. En [vercel.com](https://vercel.com), "New Project" → importá el repo.
3. Framework preset: **Other** (no requiere build). Deploy.
4. (Opcional) Agregá el dominio `andresurtado.com` en Settings → Domains.

Cada push a la rama principal vuelve a desplegar automáticamente.
