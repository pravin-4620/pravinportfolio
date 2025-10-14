# Design System Reference

## Color Palette

### Primary Colors
```css
--primary-color: #2563eb;      /* Main brand color - Professional Blue */
--primary-dark: #1e40af;       /* Darker variant for hover states */
--primary-light: #3b82f6;      /* Lighter variant */
--secondary-color: #0891b2;    /* Accent color - Teal */
```

### Neutral Colors
```css
--text-primary: #1e293b;       /* Main text color - Dark slate */
--text-secondary: #64748b;     /* Secondary text - Medium slate */
--text-light: #94a3b8;         /* Light text - Light slate */
```

### Background Colors
```css
--bg-primary: #ffffff;         /* Main background - Pure white */
--bg-secondary: #f8fafc;       /* Secondary background - Very light gray */
--bg-subtle: #f1f5f9;          /* Subtle backgrounds - Light gray */
--bg-muted: #e2e8f0;          /* Muted backgrounds - Medium light gray */
```

### Border Colors
```css
--border-color: #e2e8f0;       /* Standard borders */
--border-light: #f1f5f9;       /* Light borders */
```

## Shadows

### Standard Shadows
```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
```

## Typography

### Font Families
```css
Primary: 'Inter', system-ui, -apple-system, sans-serif
Monospace: 'Fiona Code', 'Courier New', monospace
```

### Font Sizes
- Extra Small: 0.75rem (12px)
- Small: 0.875rem (14px)
- Base: 1rem (16px)
- Medium: 1.125rem (18px)
- Large: 1.25rem (20px)
- XL: 1.5rem (24px)
- 2XL: 2rem (32px)
- 3XL: 2.5rem (40px)
- 4XL: 3rem (48px)

### Font Weights
- Normal: 400
- Medium: 500
- Semibold: 600
- Bold: 700

## Spacing

### Standard Scale
```css
0.25rem = 4px
0.5rem = 8px
0.75rem = 12px
1rem = 16px
1.25rem = 20px
1.5rem = 24px
2rem = 32px
2.5rem = 40px
3rem = 48px
4rem = 64px
5rem = 80px
```

## Border Radius

### Standard Sizes
```css
Small: 6px
Medium: 8px
Large: 12px
XL: 16px
Full: 9999px (circular)
```

## Transitions

### Standard Timing
```css
Quick: 0.15s ease
Standard: 0.2s ease
Smooth: 0.3s ease
```

## Component Patterns

### Cards
```css
background: white;
border: 1px solid var(--border-color);
border-radius: 12px;
padding: 2rem;
box-shadow: var(--shadow-sm);
transition: all 0.2s ease;
```

### Card Hover
```css
transform: translateY(-2px);
box-shadow: var(--shadow-lg);
border-color: var(--primary-color);
```

### Buttons Primary
```css
background: var(--primary-color);
color: white;
padding: 0.75rem 1.5rem;
border-radius: 6px;
font-weight: 500;
transition: all 0.2s ease;
```

### Button Primary Hover
```css
background: var(--primary-dark);
transform: translateY(-1px);
box-shadow: var(--shadow-md);
```

### Buttons Secondary
```css
background: white;
color: var(--text-primary);
border: 1px solid var(--border-color);
padding: 0.75rem 1.5rem;
border-radius: 6px;
font-weight: 500;
transition: all 0.2s ease;
```

### Button Secondary Hover
```css
background: var(--bg-subtle);
border-color: var(--primary-color);
color: var(--primary-color);
transform: translateY(-1px);
```

### Form Inputs
```css
width: 100%;
padding: 0.75rem;
border: 1px solid var(--border-color);
border-radius: 6px;
background: white;
color: var(--text-primary);
transition: all 0.2s ease;
```

### Input Focus
```css
outline: none;
border-color: var(--primary-color);
box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
```

## Section Patterns

### Section Spacing
```css
padding: 5rem 0;
```

### Section Titles
```css
font-size: 2.5rem;
font-weight: 600;
text-align: center;
margin-bottom: 3rem;
color: var(--text-primary);
position: relative;
```

### Section Title Underline
```css
.section-title::after {
  content: '';
  display: block;
  width: 80px;
  height: 4px;
  background: var(--primary-color);
  margin: 1rem auto 0;
  border-radius: 2px;
}
```

## Grid Patterns

### Two Column Grid
```css
display: grid;
grid-template-columns: 1fr 1fr;
gap: 2rem;
```

### Three Column Grid
```css
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 2rem;
```

### Auto-fit Grid (Responsive)
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
gap: 2rem;
```

## Responsive Breakpoints

```css
Mobile: max-width: 768px
Tablet: max-width: 968px
Desktop: max-width: 1200px
```

## Icon Usage

### Icon Sizes
- Small: 18px
- Medium: 24px
- Large: 32px
- XL: 48px

### Icon Colors
- Primary: var(--primary-color)
- Secondary: var(--text-secondary)
- Accent: var(--secondary-color)

## Design Principles

### DO ✅
- Use clean white backgrounds
- Subtle shadows for depth
- Primary blue for accents
- Minimal, purposeful animations
- Clean typography
- Consistent spacing
- Professional color palette

### DON'T ❌
- Neon colors
- Glowing effects
- Excessive animations
- Glassmorphism
- Backdrop blur (except modals)
- UPPERCASE text everywhere
- Busy backgrounds
- Multiple gradients

## Accessibility

### Color Contrast
- Text on white: minimum 4.5:1 ratio
- Interactive elements: clear focus states
- Hover states: visible changes

### Focus States
```css
outline: 2px solid var(--primary-color);
outline-offset: 2px;
```

### Motion
- Respect prefers-reduced-motion
- Keep animations subtle
- Use transforms over position changes

## Performance

### Best Practices
- Use CSS transforms for animations (GPU accelerated)
- Avoid excessive box-shadows
- Use will-change sparingly
- Optimize images
- Lazy load heavy content

## Code Examples

### Professional Card Component
```css
.card {
  background: white;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: var(--shadow-sm);
  transition: all 0.2s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary-color);
}
```

### Professional Button
```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: var(--primary-dark);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}
```

### Section Header
```css
.section {
  padding: 5rem 0;
  background: white;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--text-primary);
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 80px;
  height: 4px;
  background: var(--primary-color);
  margin: 1rem auto 0;
  border-radius: 2px;
}
```

## Maintenance Notes

### When Adding New Sections
1. Use the color palette defined above
2. Follow the card pattern for content boxes
3. Use consistent spacing (multiples of 0.5rem)
4. Keep animations subtle (max 0.3s duration)
5. Test on mobile breakpoints

### When Updating Colors
1. Update CSS variables in :root
2. Never hardcode colors
3. Maintain contrast ratios
4. Test in light/dark modes if applicable

### When Adding Animations
1. Keep them under 0.3s
2. Use ease or ease-in-out timing
3. Only animate transform and opacity
4. Respect prefers-reduced-motion

This design system ensures consistency, professionalism, and maintainability across the entire portfolio.
