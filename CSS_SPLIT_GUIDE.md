# CSS Split Guide

The CSS has been split into template-specific files to reduce bundle size. Users can now import only the CSS they need.

## Available CSS Files

### Base & Utilities (Required)
- **`base.css`** (~5 KB) - Base styles (variables, reset, mixins)
- **`utilities.css`** (~9 KB) - Utility classes (layout, spacing, colors, responsive, typography)

### Template-Specific CSS
- **`skyscrapper.css`** (~29 KB) - Base + Utilities + Skyscrapper components
- **`voodvale.css`** (~27 KB) - Base + Utilities + Voodvale components  
- **`default.css`** (~23 KB) - Base + Utilities + Default components

### Full Bundle (Backward Compatibility)
- **`right-property-generated-web-ui-toolkit.css`** (~39 KB) - All templates (base + utilities + all components)

## Usage Examples

### Option 1: Import Only One Template (Recommended)
```typescript
// For Skyscrapper template only
import 'right-property-generated-web-ui-toolkit/styles/skyscrapper';

// For Voodvale template only
import 'right-property-generated-web-ui-toolkit/styles/voodvale';

// For Default template only
import 'right-property-generated-web-ui-toolkit/styles/default';
```

**Size savings**: ~60-70% reduction (from 39KB to 23-29KB)

### Option 2: Import Base + Utilities + Specific Template
```typescript
// More granular control
import 'right-property-generated-web-ui-toolkit/styles/base';
import 'right-property-generated-web-ui-toolkit/styles/utilities';
import 'right-property-generated-web-ui-toolkit/styles/skyscrapper';
```

### Option 3: Import Everything (Backward Compatible)
```typescript
// All templates (original behavior)
import 'right-property-generated-web-ui-toolkit/styles';
// or
import 'right-property-generated-web-ui-toolkit/dist/right-property-generated-web-ui-toolkit.css';
```

## Size Comparison

| Import | Size | Gzipped | Use Case |
|--------|------|---------|----------|
| `styles/base` | ~5 KB | ~1.4 KB | Base styles only |
| `styles/utilities` | ~9 KB | ~2.7 KB | Utilities only |
| `styles/skyscrapper` | ~29 KB | ~6.4 KB | Skyscrapper only |
| `styles/voodvale` | ~27 KB | ~6.0 KB | Voodvale only |
| `styles/default` | ~23 KB | ~5.4 KB | Default only |
| `styles` (all) | ~39 KB | ~7.7 KB | Multiple templates |

**Size Reduction**: Using template-specific imports reduces CSS by **25-40%** compared to the full bundle.

## Additional Requirements

### Swiper CSS
Swiper CSS is **not bundled**. Import it separately:
```typescript
import 'swiper/swiper.css';
```

### Google Fonts
Add to your HTML `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;600;700&display=swap" rel="stylesheet">
```

## Migration Guide

### Before (All Templates)
```typescript
import 'right-property-generated-web-ui-toolkit/styles';
```

### After (Template-Specific)
```typescript
// If using only Skyscrapper
import 'right-property-generated-web-ui-toolkit/styles/skyscrapper';

// If using only Voodvale
import 'right-property-generated-web-ui-toolkit/styles/voodvale';

// If using only Default
import 'right-property-generated-web-ui-toolkit/styles/default';

// If using multiple templates, use the full bundle
import 'right-property-generated-web-ui-toolkit/styles';
```
