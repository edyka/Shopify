# 🎨 Savor - Modern Shopify Theme

A beautifully modernized Shopify theme featuring contemporary animations, scroll reveals, and engaging user interactions.

[![Demo](https://img.shields.io/badge/Demo-View%20Live-success)](demo-preview.html)
[![Shopify](https://img.shields.io/badge/Shopify-Theme-96bf48?logo=shopify)](https://www.shopify.com)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## ✨ Features

### 🎬 Modern Animations
- **Scroll Reveal Animations** - Elements smoothly fade and slide into view
- **Hero Scale-In Effect** - Eye-catching entrance animation
- **Parallax Scrolling** - Subtle depth effects for visual interest
- **Smooth Page Transitions** - Seamless navigation experience

### 🛍️ Enhanced Product Cards
- **3D Tilt Effect** - Interactive mouse-tracking perspective
- **Image Zoom on Hover** - Engaging product preview
- **Modern Shadows** - Multi-layered depth system
- **Hover Lift Animation** - Cards rise on interaction

### 🎨 Design Enhancements
- **Glassmorphism Effects** - Frosted glass blur backdrops
- **Modern Gradients** - Sophisticated color transitions
- **Custom Scrollbar** - Branded scrolling experience
- **Text Gradients** - Stylish typography treatments
- **Responsive Typography** - Fluid font sizing with clamp()

### ♿ Accessibility First
- **Reduced Motion Support** - Respects user preferences
- **Keyboard Navigation** - Enhanced focus states
- **Screen Reader Friendly** - Proper ARIA attributes
- **High Contrast** - Meets WCAG standards

### ⚡ Performance Optimized
- **Intersection Observer API** - Efficient scroll detection
- **RequestAnimationFrame** - Smooth 60fps animations
- **GPU Acceleration** - Hardware-accelerated transforms
- **Lazy Loading** - Optimized image loading
- **Debounced Events** - Reduced performance overhead

## 📸 Preview

![Hero Section](https://via.placeholder.com/1200x600/667eea/ffffff?text=Modern+Hero+Section)
![Product Cards](https://via.placeholder.com/1200x600/764ba2/ffffff?text=Enhanced+Product+Cards)

## 🚀 Quick Start

### Option 1: Upload to Shopify (Fastest)

1. Download this repository as ZIP
2. Go to your Shopify Admin → **Online Store** → **Themes**
3. Click **Add theme** → **Upload zip file**
4. Select the downloaded ZIP file
5. Click **Preview** or **Publish**

### Option 2: Shopify CLI (For Development)

```bash
# Install Shopify CLI
brew tap shopify/shopify
brew install shopify-cli

# Clone this repository
git clone https://github.com/edyka/Shopify.git
cd Shopify

# Authenticate
shopify auth login

# Start development server
shopify theme dev --store=your-store.myshopify.com
```

## 📁 Project Structure

```
Shopify/
├── assets/
│   ├── modern-enhancements.css    # Modern CSS animations & effects
│   ├── modern-animations.js       # JavaScript interactions
│   ├── base.css                   # Base theme styles
│   └── ...
├── blocks/                        # Theme blocks
├── sections/
│   ├── hero.liquid               # Enhanced hero section
│   ├── product-list.liquid       # Modernized product grid
│   └── ...
├── snippets/
│   ├── product-card.liquid       # Enhanced product cards
│   └── ...
├── templates/                     # Page templates
├── demo-preview.html             # Standalone demo page
├── MODERNIZATION_GUIDE.md        # Detailed documentation
└── README.md                     # This file
```

## 🎯 Key Files

| File | Description |
|------|-------------|
| `assets/modern-enhancements.css` | Modern CSS with animations, gradients, and effects |
| `assets/modern-animations.js` | JavaScript for scroll reveals and interactions |
| `sections/hero.liquid` | Enhanced hero section with modern classes |
| `sections/product-list.liquid` | Modernized product listing |
| `snippets/product-card.liquid` | Enhanced product cards |
| `MODERNIZATION_GUIDE.md` | Complete documentation and usage guide |

## 🎨 Customization

### Adjusting Animation Speed

Edit `assets/modern-enhancements.css`:

```css
:root {
  --animation-duration-fast: 0.2s;
  --animation-duration-normal: 0.4s;
  --animation-duration-slow: 0.6s;
}
```

### Changing Colors

Modify the gradient colors in `assets/modern-enhancements.css`:

```css
.hero {
  background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
}
```

### Adding Scroll Reveals

Add these classes to any element:

```html
<div class="reveal-up">Slides in from bottom</div>
<div class="reveal-left">Slides in from left</div>
<div class="reveal-right">Slides in from right</div>
<div class="reveal-scale">Scales up on reveal</div>
```

## 📚 Documentation

For detailed documentation, see [MODERNIZATION_GUIDE.md](MODERNIZATION_GUIDE.md)

Topics covered:
- Complete feature list
- Usage examples
- Customization guide
- Browser support
- Accessibility features
- Performance optimizations

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome/Edge | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Opera | 76+ |

Gracefully degrades on older browsers with disabled animations.

## 📱 Mobile Support

- ✅ Touch-optimized interactions
- ✅ Responsive animations
- ✅ Viewport height fixes
- ✅ Reduced motion on battery saver

## 🛠️ Technologies Used

- **CSS3** - Animations, transforms, custom properties
- **JavaScript ES6+** - Modern syntax and features
- **Intersection Observer API** - Efficient scroll detection
- **Shopify Liquid** - Template language
- **Web Animations API** - Smooth transitions

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Shopify Dawn theme as base
- Modern animation techniques inspired by contemporary web design
- Built with accessibility and performance in mind

## 📧 Support

For issues or questions:
- 🐛 [Report a bug](https://github.com/edyka/Shopify/issues)
- 💡 [Request a feature](https://github.com/edyka/Shopify/issues)
- 📖 [Read the docs](MODERNIZATION_GUIDE.md)

---

**🚀 Generated with Claude Code** | Built with ❤️ for modern e-commerce
