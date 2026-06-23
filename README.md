# deployonfriday.dev

Accessibility audit and consulting site built with Vue 3 and Vite. Deployed to GitHub Pages at [deployonfriday.dev](https://deployonfriday.dev).

## Features

- Landing page focused on accessibility audits and consulting
- Accessibility information page (WCAG, EAA, audit process)
- Contact form via [FormSubmit](https://formsubmit.co/) — no backend required
- EN / SV locale support
- WCAG 2.1 AA compliant markup and styling

## Tech stack

- Vue 3 + Vue Router 4
- Vite
- GitHub Actions → GitHub Pages

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`.

## Build

```bash
npm run build
```

Output goes to `docs/` (configured in `vite.config.js`).

```bash
npm run preview
```

## Project structure

```
deployonfriday/
├── public/
│   ├── images/          # Client logos, logo.svg, 404.html, CNAME
│   └── 404.html
├── src/
│   ├── components/
│   │   └── ClientGrid.vue
│   ├── data/
│   │   └── clients.js
│   ├── views/
│   │   ├── Home.vue
│   │   ├── AccessibilityPage.vue
│   │   └── ContactPage.vue
│   ├── App.vue
│   ├── main.js
│   ├── router.js
│   └── styles.css
├── index.html
└── vite.config.js
```

## Customization

- **Home page copy & packages**: `src/views/Home.vue`
- **Accessibility page**: `src/views/AccessibilityPage.vue`
- **Contact form**: `src/views/ContactPage.vue` (FormSubmit email in form `action`)
- **Navigation & footer**: `src/App.vue`
- **Client logos**: `src/data/clients.js` and images in `public/images/`
- **Design tokens**: `src/styles.css`

## Deployment

Pushing to `main` triggers the GitHub Actions workflow, which builds the site and publishes the `docs/` folder to GitHub Pages.

## Contact form setup

On first use, FormSubmit sends a confirmation email to the address in the form action. Click the activation link once; after that, submissions are delivered normally.

---

Built for deployonfriday.dev
