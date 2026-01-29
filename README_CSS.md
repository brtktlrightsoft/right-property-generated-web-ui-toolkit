# CSS Import Guide

## Swiper CSS

Swiper CSS is **not bundled** in the library CSS. You must import it separately in your application:

```typescript
// In your app's main CSS file or entry point:
import 'swiper/swiper.css';
```

## Google Fonts

Google Fonts are **not bundled** in the CSS. Add these to your HTML `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;600;700&display=swap" rel="stylesheet">
```

## Current CSS Size

- **Bundled CSS**: ~38.59 KB (7.66 KB gzipped)
- Includes: All template styles (skyscrapper, voodvale, default) + utilities + base styles
