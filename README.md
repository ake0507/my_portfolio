# Aklilu Desalegn – Graphic Designer Portfolio

A static portfolio website for **Aklilu Desalegn**, a freelance graphic designer. Built from a detailed design brief covering hero sections, services, filterable portfolio gallery, case studies, testimonials, and contact form.

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, services overview, featured work, testimonials, CTA |
| About | `about.html` | Bio, design approach, skills, testimonials |
| Services | `services.html` | Detailed service cards with descriptions |
| Portfolio | `portfolio.html` | Filterable gallery + 5 case studies (Problem/Solution) |
| Contact | `contact.html` | Inquiry form with service dropdown |

## Getting Started

Open `index.html` in a browser, or serve the `web` folder locally:

```bash
# Python
cd web
python -m http.server 8080

# Node (npx)
npx serve web
```

Then visit `http://localhost:8080`.

## Structure

```
web/
├── index.html
├── about.html
├── services.html
├── portfolio.html
├── contact.html
├── css/
│   └── style.css
└── js/
    └── main.js
```

## Features

- **Responsive design** — mobile-first layout with hamburger nav below 768px
- **Portfolio filtering** — vanilla JS category filters (All, Social Media, Branding, etc.)
- **Case studies** — Problem / Constraints / Approach / Results format
- **SEO** — unique `<title>` and meta descriptions per page
- **Accessibility** — semantic HTML, labeled forms, alt text, focus outlines, reduced-motion support

## Customization

1. Replace Unsplash placeholder images with your own project photos in `images/`
2. Update contact email and social links in `contact.html`
3. Wire the contact form to a backend (Formspree, Netlify Forms, etc.)
4. Adjust colors in `:root` variables at the top of `css/style.css`

## Style Guide

- **Primary:** Teal (`#0d9488`)
- **Accent:** Orange (`#f97316`)
- **Fonts:** Poppins (headings), Roboto (body)
- **Breakpoints:** 768px (tablet), 1024px (desktop)

## License

© 2026 Aklilu Desalegn. All rights reserved.
