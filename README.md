# deployonfriday.dev Portfolio

A modern, accessible portfolio website built with Vue.js 3 and Vite. Features dark/light mode support, responsive design, and WCAG 2.1 compliance.

## Features

- 🎨 Modern, clean design
- 🌙 Dark/light mode support
- 📱 Fully responsive
- ♿ WCAG 2.1 AA compliant
- 🚀 Fast loading with optimized assets
- 🖨️ Print-friendly styles
- 🎯 Reduced motion support
- 🔍 High contrast mode support
- ⚡ Built with Vue.js 3 and Vite

## Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- Color contrast compliance
- Reduced motion support

## Technologies Used

- Vue.js 3
- Vue Router 4
- Vite
- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Google Fonts (Inter)

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/deployonfriday.git
cd deployonfriday
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Visit `http://localhost:5173` in your browser

The development server will automatically reload when you make changes to the code.

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
deployonfriday/
├── public/
│   └── images/          # Static images (client logos, assets)
├── src/
│   ├── components/      # Vue components
│   │   └── PortfolioPage.vue
│   ├── views/           # Page components
│   │   ├── Home.vue
│   │   ├── ProjectsPage.vue
│   │   └── portfolio/
│   │       ├── FrontEndDevPage.vue
│   │       ├── ScrumMasterPage.vue
│   │       ├── GameIndustryPage.vue
│   │       └── ManagerPage.vue
│   ├── App.vue          # Root component
│   ├── main.js          # Application entry point
│   ├── router.js        # Vue Router configuration
│   └── styles.css       # Global styles
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies and scripts
```

## GitHub Pages Deployment

### Method 1: Using GitHub Actions (Recommended)

1. Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

2. Push your code to GitHub:
```bash
git add .
git commit -m "Setup Vue.js project"
git push origin main
```

3. Go to your repository on GitHub → Settings → Pages
4. Under Source, select "GitHub Actions"
5. Your site will be automatically deployed on each push to main

### Method 2: Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Copy the `dist` folder contents to your GitHub Pages branch or repository

## Customization

### Colors and Theming

The site uses CSS custom properties for easy theming. Edit the `:root` variables in `src/styles.css`:

```css
:root {
    --bg-primary: #ffffff;
    --bg-secondary: #f8fafc;
    --accent-primary: #3b82f6;
    /* ... other variables */
}
```

### Content Updates

- **Home page**: Edit `src/views/Home.vue`
- **Portfolio pages**: Edit files in `src/views/portfolio/`
- **Projects page**: Edit `src/views/ProjectsPage.vue`
- **Navigation**: Edit `src/App.vue`
- **Client logos**: Update the `clients` array in `src/views/Home.vue`

### Adding New Portfolio Pages

1. Create a new component in `src/views/portfolio/YourPage.vue`
2. Use the `PortfolioPage` component as a template
3. Add a route in `src/router.js`
4. Add a navigation link in `src/App.vue`

### Images

- Place static images in `public/images/`
- Reference them in components using `/images/filename.png`
- The images folder structure is preserved in the build

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Performance

The site is optimized for performance with:
- Vite for fast development and optimized builds
- Code splitting via Vue Router
- Lazy loading for images
- Efficient CSS Grid and Flexbox layouts
- Minimal JavaScript bundle size

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to submit issues and enhancement requests!

---

Built with ❤️ for deployonfriday.dev
