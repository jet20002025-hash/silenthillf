# Silent Hill F - Premium Online Games Collection

A modern, responsive gaming website built with HTML5, Tailwind CSS, and vanilla JavaScript. Features a clean Apple-inspired design and optimized for both desktop and mobile devices.

## Features

- 🎮 **Game Collection**: Curated collection of premium online browser games
- 📱 **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- 🎨 **Apple-Inspired UI**: Clean, modern design with Apple's color palette
- ⚡ **Fast Loading**: Optimized for quick loading and smooth performance
- 🔍 **SEO Optimized**: Complete SEO implementation with structured data
- 📊 **Analytics Ready**: Google AdSense integration
- 🛠️ **Easy Management**: Simple admin panel for adding new games

## Technology Stack

- **Frontend**: HTML5, Tailwind CSS, Vanilla JavaScript
- **Deployment**: GitHub Pages + Cloudflare CDN
- **SEO**: Structured data, sitemap, robots.txt
- **Analytics**: Google AdSense integration

## Project Structure

```
silenthillf.store/
├── index.html              # Main homepage
├── admin/
│   └── add-game.html      # Admin panel for adding games
├── assets/
│   ├── css/               # Custom CSS (if needed)
│   ├── js/
│   │   └── main.js        # Main JavaScript functionality
│   └── images/            # Images and icons
├── data/
│   └── games.json         # Game data storage
├── games/                 # Individual game pages
├── sitemap.xml           # SEO sitemap
├── robots.txt            # SEO robots file
├── ads.txt               # Google AdSense configuration
├── manifest.json         # PWA manifest
├── privacy.html          # Privacy policy
└── terms.html            # Terms of service
```

## Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/jet20002025-hash/silenthillf.git
cd silenthillf
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

### Adding New Games

1. Navigate to `/admin/add-game.html`
2. Fill in the game information:
   - Game Title
   - Description
   - Category
   - Iframe URL
   - What Is (detailed introduction)
   - How to Play (gameplay guide)
   - Features (game features list)
   - FAQs (frequently asked questions)
3. Submit the form to add the game to the collection

## Deployment

### GitHub Pages

This project is configured for GitHub Pages deployment:

1. Push your code to the main branch
2. Go to repository Settings > Pages
3. Select "Deploy from a branch" and choose "main"
4. Your site will be available at `https://jet20002025-hash.github.io/silenthillf`

### Custom Domain

To use your custom domain `silenthillf.store`:

1. Add a `CNAME` file with your domain name
2. Configure DNS settings to point to GitHub Pages
3. Enable HTTPS in GitHub Pages settings

### Cloudflare Integration

For enhanced performance and CDN:

1. Add your domain to Cloudflare
2. Update nameservers
3. Enable Cloudflare's CDN and optimization features

## SEO Features

- **Structured Data**: JSON-LD format for better search engine understanding
- **Meta Tags**: Complete Open Graph and Twitter Card implementation
- **Sitemap**: XML sitemap for search engine crawling
- **Robots.txt**: Proper crawling instructions
- **Canonical URLs**: Prevents duplicate content issues
- **Mobile Optimization**: Mobile-first responsive design

## Google AdSense Integration

The site includes Google AdSense integration with your publisher ID:
- Publisher ID: `pub-7208260866318884`
- Ads.txt file configured
- Ad-friendly design and content

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- Website: [silenthillf.store](https://silenthillf.store)
- Email: contact@silenthillf.store
- GitHub: [@jet20002025-hash](https://github.com/jet20002025-hash)

## Acknowledgments

- Tailwind CSS for the utility-first CSS framework
- Apple Design Guidelines for inspiration
- GitHub Pages for hosting
- Cloudflare for CDN services
