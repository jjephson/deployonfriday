# deployonfriday.dev Portfolio

A modern, accessible portfolio website built with HTML and CSS. Features dark/light mode support, responsive design, and WCAG 2.1 compliance.

## Features

- 🎨 Modern, clean design
- 🌙 Dark/light mode support
- 📱 Fully responsive
- ♿ WCAG 2.1 AA compliant
- 🚀 Fast loading with optimized assets
- 🖨️ Print-friendly styles
- 🎯 Reduced motion support
- 🔍 High contrast mode support

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

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Google Fonts (Inter)
- Placeholder images for demonstration

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/deployonfriday.git
cd deployonfriday
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

3. Visit `http://localhost:8000` in your browser

## GitHub Pages Deployment

### Method 1: Automatic Deployment (Recommended)

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial portfolio site"
git push origin main
```

2. Go to your repository on GitHub

3. Navigate to **Settings** → **Pages**

4. Under **Source**, select **Deploy from a branch**

5. Choose **main** branch and **/(root)** folder

6. Click **Save**

7. Your site will be available at `https://yourusername.github.io/deployonfriday`

### Method 2: Using GitHub Actions (Optional)

If you want more control over the deployment process, you can create a GitHub Action:

1. Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./
```

## Customization

### Colors and Theming

The site uses CSS custom properties for easy theming. Edit the `:root` variables in `styles.css`:

```css
:root {
    --bg-primary: #ffffff;
    --bg-secondary: #f8fafc;
    --accent-primary: #3b82f6;
    /* ... other variables */
}
```

### Content Updates

- **About section**: Edit the text in the `about-text` div
- **Skills**: Modify the `skills-list` in the HTML
- **Contact information**: Update the links in the contact section
- **Client logos**: Replace placeholder images with actual client logos

### Images

- Replace the placeholder profile image with your actual photo
- Update client logos with real company logos
- Optimize images for web (recommended: WebP format with fallbacks)

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Performance

The site is optimized for performance with:
- Minimal CSS (no frameworks)
- Optimized images
- Efficient CSS Grid and Flexbox layouts
- Lazy loading for images
- Minimal JavaScript (none required)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to submit issues and enhancement requests!

---

Built with ❤️ for deployonfriday.dev
