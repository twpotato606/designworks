# B2B UX Designer Portfolio — Design Guideline
**Version:** 1.0 | **Date:** 2026-04-14 | **Stack:** HTML + Tailwind CSS

---

## 0. Design Philosophy

> "Design that earns trust before it earns admiration."

This portfolio is built for **enterprise decision-makers** — product managers, CPOs, and procurement leads who need to evaluate a UX designer's strategic thinking, not just aesthetics. Every design decision must communicate:

- **Credibility** — You understand complexity at scale
- **Clarity** — You can simplify enterprise chaos into logical systems
- **Impact** — Your work moves business metrics, not just pixels

### Core Principles

| Principle | Application |
|-----------|-------------|
| **Substance over style** | Lead with outcomes and metrics, not tool logos |
| **Restraint** | Whitespace and precision signal confidence |
| **Legibility first** | Enterprise readers skim on low-res monitors |
| **Trust signals everywhere** | Clients, metrics, processes visible at all times |

---

## 1. Color System

### Primary Palette — "Professional Navy"

| Role | Token | Hex | Tailwind |
|------|-------|-----|----------|
| Primary | `--color-primary` | `#0F172A` | `slate-900` |
| Secondary | `--color-secondary` | `#334155` | `slate-700` |
| Accent / CTA | `--color-accent` | `#0369A1` | `sky-700` |
| Background | `--color-bg` | `#F8FAFC` | `slate-50` |
| Surface | `--color-surface` | `#FFFFFF` | `white` |
| Text Primary | `--color-text` | `#020617` | `slate-950` |
| Text Muted | `--color-muted` | `#475569` | `slate-600` |
| Border | `--color-border` | `#E2E8F0` | `slate-200` |

### Semantic Colors

| Role | Hex | Usage |
|------|-----|-------|
| Success / Positive metric | `#059669` | KPI improvements, green outcomes |
| Warning | `#D97706` | Timelines, caution states |
| Error | `#DC2626` | Form errors only |
| Gold accent | `#F59E0B` | Awards, certifications, featured badges |

### Dark Mode (Optional — Sections Only)

Used selectively for hero section or case study headers to create visual depth:

| Role | Hex | Tailwind |
|------|-----|----------|
| Dark Background | `#0F172A` | `slate-900` |
| Dark Surface | `#1E293B` | `slate-800` |
| Dark Text | `#F1F5F9` | `slate-100` |
| Dark Muted | `#94A3B8` | `slate-400` |
| Dark Border | `#334155` | `slate-700` |

### Contrast Requirements (WCAG AAA)

```
Text (#020617) on Background (#F8FAFC) → 19.5:1 ✓ AAA
Muted (#475569) on Background (#F8FAFC) → 5.7:1 ✓ AA
Accent (#0369A1) on White → 4.8:1 ✓ AA
White on Primary (#0F172A) → 18.2:1 ✓ AAA
```

### Usage Rules

- **No gradients** on UI chrome — gradients signal immaturity to enterprise buyers
- **Accent (#0369A1)** used exclusively for interactive elements and CTAs
- **Gold (#F59E0B)** used only for trust signals: awards, "featured" labels, client logos
- Minimum 3-color rule: never use more than 3 colors on a single section

---

## 2. Typography System

### Font Pairing — "Portfolio Professional"

**Primary Choice:** Archivo (Heading) + Space Grotesk (Body)

```css
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
```

**Enterprise Alternative:** Lexend (Heading) + Source Sans 3 (Body) — for accessibility-critical contexts

```css
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&family=Source+Sans+3:wght@300;400;500;600;700&display=swap');
```

### Type Scale

| Token | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| `text-display` | 56px / 3.5rem | 700 | 1.1 | -0.03em | Hero name |
| `text-h1` | 40px / 2.5rem | 700 | 1.2 | -0.02em | Page titles |
| `text-h2` | 28px / 1.75rem | 600 | 1.3 | -0.01em | Section headings |
| `text-h3` | 20px / 1.25rem | 600 | 1.4 | 0 | Card titles, subsections |
| `text-h4` | 16px / 1rem | 600 | 1.4 | 0 | Labels, captions |
| `text-body-lg` | 18px / 1.125rem | 400 | 1.75 | 0 | Lead paragraphs |
| `text-body` | 16px / 1rem | 400 | 1.6 | 0 | Body copy |
| `text-small` | 14px / 0.875rem | 400 | 1.5 | 0.01em | Metadata, timestamps |
| `text-label` | 12px / 0.75rem | 600 | 1 | 0.08em | Tags, badges (UPPERCASE) |

### Typography Rules

- **Body text minimum:** 16px — never below on any breakpoint
- **Line length:** 60–72 characters per line (max-width: ~68ch on body copy)
- **Heading font (Archivo)** for all titles, role, and section headers
- **Body font (Space Grotesk)** for all paragraphs, descriptions, and UI labels
- **No italics** in UI — reserve for quotes and testimonials only
- **Uppercase** only for `text-label` (tags, categories, metadata labels)

---

## 3. Spacing System

Based on a **4px base unit** with Tailwind's default scale.

### Core Spacing Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Icon gaps, micro spacing |
| `space-2` | 8px | Inline element gaps |
| `space-3` | 12px | Tight component internals |
| `space-4` | 16px | Default padding, card internals |
| `space-6` | 24px | Section sub-spacing |
| `space-8` | 32px | Component vertical rhythm |
| `space-12` | 48px | Section padding (mobile) |
| `space-16` | 64px | Section padding (tablet) |
| `space-24` | 96px | Section padding (desktop) |
| `space-32` | 128px | Hero / large section gaps |

### Layout Containers

```
Max width (content):   1280px  (max-w-7xl)
Max width (text):      768px   (max-w-3xl)
Max width (narrow):    640px   (max-w-2xl)

Horizontal padding:
  Mobile (< 768px):   px-4  (16px)
  Tablet (768-1024):  px-6  (24px)
  Desktop (> 1024):   px-8  (32px)
```

### Grid System

```
Desktop:  12-column grid, gap-8  (32px)
Tablet:   6-column grid,  gap-6  (24px)
Mobile:   1-column grid,  gap-4  (16px)

Project cards:
  Desktop:  3-column (4 cols each)
  Tablet:   2-column (3 cols each)
  Mobile:   1-column (full width)
```

---

## 4. Page Structure & Section Order

```
┌─────────────────────────────────────────┐
│  NAV (floating, transparent → solid)    │
├─────────────────────────────────────────┤
│  HERO                                   │
│  Name · Role · Value Prop · CTA         │
│  Trust bar: client logos                │
├─────────────────────────────────────────┤
│  SELECTED WORK                          │
│  Case study cards (3 featured)          │
├─────────────────────────────────────────┤
│  APPROACH / PROCESS                     │
│  UX methodology, research-to-launch     │
├─────────────────────────────────────────┤
│  METRICS & IMPACT                       │
│  Key outcomes from past work            │
├─────────────────────────────────────────┤
│  MORE WORK                              │
│  Project grid (masonry) + category filter│
├─────────────────────────────────────────┤
│  ABOUT                                  │
│  Bio · philosophy · tools used          │
├─────────────────────────────────────────┤
│  CONTACT / CTA                          │
│  Clear ask, calendar link               │
├─────────────────────────────────────────┤
│  FOOTER                                 │
└─────────────────────────────────────────┘
```

---

## 5. Component Library

### 5.1 Navigation

```
Position:     fixed top, floating (top-4 left-4 right-4 within max-w-7xl)
Height:       56px
Background:   Initial: transparent | Scrolled: bg-white/95 backdrop-blur-sm
Border:       Initial: none | Scrolled: border-b border-slate-200
Shadow:       shadow-sm (on scroll only)
Transition:   all 200ms ease
Z-index:      z-50
```

**Nav items:** text-sm font-medium text-slate-700 hover:text-slate-900  
**Active state:** text-sky-700 font-semibold  
**CTA button:** Filled accent button (see Buttons)

### 5.2 Buttons

**Primary CTA**
```
bg-sky-700 text-white
px-6 py-3 rounded-lg
font-semibold text-sm
hover:bg-sky-800
transition-colors duration-150
cursor-pointer
focus:ring-2 focus:ring-sky-500 focus:ring-offset-2
```

**Secondary / Ghost**
```
border border-slate-300 text-slate-700 bg-transparent
px-6 py-3 rounded-lg
font-semibold text-sm
hover:bg-slate-50 hover:border-slate-400
transition-colors duration-150
cursor-pointer
```

**Text Link**
```
text-sky-700 font-medium underline-offset-4
hover:underline
cursor-pointer
```

### 5.3 Project Cards

```
Background:    bg-white
Border:        border border-slate-200
Border-radius: rounded-xl
Padding:       p-0 (image flush) or p-6 (text-only)
Shadow:        shadow-sm → hover:shadow-md
Transition:    all 250ms ease
Cursor:        cursor-pointer

Image container:
  aspect-ratio: 16/9 or 4/3
  overflow: hidden
  rounded-t-xl

Hover overlay:
  opacity-0 → group-hover:opacity-100
  bg-slate-900/80
  transition-opacity 200ms
  Shows: View Case Study →

Card body (p-5 pt-4):
  Tag:        text-label uppercase text-sky-700 mb-2
  Title:      text-h3 font-semibold text-slate-900 mb-2
  Summary:    text-body text-slate-600 line-clamp-2
  Outcome:    text-small text-emerald-700 font-medium mt-3
              (e.g., "+34% task completion rate")
```

### 5.4 Metric / Impact Cards

```
Background:    bg-white border border-slate-200
Border-radius: rounded-xl
Padding:       p-6

Number:     text-display font-bold text-slate-900 (e.g., "34%")
Label:      text-small text-slate-500 uppercase tracking-wide mt-1
Context:    text-body text-slate-600 mt-2 line-clamp-2
```

### 5.5 Trust Badges & Client Logos

```
Logo strip:
  Grayscale filter by default (filter: grayscale(1) opacity(0.5))
  hover: grayscale(0) opacity(1)
  transition: filter 200ms

Badge chip (award / certification):
  bg-amber-50 border border-amber-200
  text-amber-800 text-label
  rounded-full px-3 py-1
  Icon: SVG shield/star (20x20px)
```

### 5.6 Section Tags / Labels

```
Background:   bg-sky-50
Text:         text-sky-700 text-label uppercase tracking-widest
Padding:      px-3 py-1
Border:       border border-sky-200
Border-radius: rounded-full
Usage:        Mark section type above h2 headings
```

### 5.7 Case Study Page Layout

```
Header:
  Dark bg-slate-900 section
  Role tag · H1 title · Lead paragraph
  Key metrics row (3–4 metric cards inline)
  Hero image / mockup (aspect-video, rounded-xl)

Body sections (light bg):
  Challenge → Research → Insights → Design Process → Solution → Outcomes
  Max-width: max-w-3xl mx-auto for text (68 char line length)
  Images: max-w-5xl mx-auto, rounded-xl, shadow-md

Navigation:
  Prev / Next case study at bottom
  Back to all work link (top-left sticky)
```

---

## 6. Iconography

- **Library:** Lucide Icons (consistent 24px viewBox, stroke-based)
- **Size:** w-5 h-5 (20px) inline, w-6 h-6 (24px) standalone
- **Stroke width:** 1.5px (default Lucide) — never bold icons
- **Color:** Inherits text color — never hardcoded fill
- **Never use emojis** as UI icons

---

## 7. Imagery & Visual Assets

### Project Thumbnails
- **Format:** WebP (AVIF as fallback), max 800px wide
- **Aspect ratio:** 16:9 for grid cards, 4:3 for featured
- **Alt text:** Required — describe the interface content, not "screenshot"
- **Lazy loading:** `loading="lazy"` on all below-fold images

### Person Photography
- **Style:** Neutral background, professional but approachable
- **Aspect ratio:** 1:1 (avatar) or 4:5 (about section)
- **Treatment:** Natural color, no heavy filters

### Mockup Guidelines
- Prefer **device-agnostic** flat mockups over device frames for B2B work
- Use browser frames sparingly — only when UX flows require context
- Annotated process images (with numbered callouts) preferred over raw screenshots

---

## 8. Interaction Patterns

### Hover States
```
Cards:        shadow-sm → shadow-md + translate-y-[-2px]  (250ms ease)
Buttons:      color shift only (150ms ease) — no scale
Links:        underline reveal (150ms)
Logo strip:   grayscale → color (200ms)
Nav items:    color shift (150ms)
```

**Rule:** Never use scale transforms that cause layout shift. Use only `transform: translateY`, `opacity`, and `color` transitions.

### Loading States
- Skeleton screens for project grid (bg-slate-200 animate-pulse)
- Button disabled + spinner during form submission
- Never show empty states without a reason message

### Scroll Animations
```
Trigger:      IntersectionObserver at 10% element visibility
Effect:       opacity 0→1 + translateY(16px→0)
Duration:     400ms ease-out
Stagger:      60ms between items in the same grid row
Reduced motion: prefers-reduced-motion → disable all animations
```

### Page Transitions
- Between pages: instant load (no animation — B2B users value speed)
- Case study open: smooth scroll to top, no slide transitions

---

## 9. Z-Index Scale

```
z-10:   Card hover overlays
z-20:   Sticky in-page navigation (case study sidebar)
z-30:   Floating action elements
z-50:   Navigation bar
z-100:  Modals / lightbox
z-200:  Toast notifications
```

---

## 10. Accessibility Requirements

| Rule | Specification |
|------|---------------|
| Color contrast | 4.5:1 minimum (body), 3:1 (large text) — target AAA |
| Focus rings | `focus:ring-2 focus:ring-sky-500 focus:ring-offset-2` — never `outline-none` without replacement |
| Skip link | "Skip to main content" as first DOM element |
| Tab order | Matches visual reading order left→right, top→bottom |
| Images | Descriptive alt text on all `<img>` — decorative images `alt=""` |
| Forms | `<label for="">` on all inputs — no placeholder-only labels |
| Touch targets | Minimum 44×44px on all interactive elements |
| Keyboard nav | All functionality reachable via keyboard |

---

## 11. Responsive Breakpoints

| Breakpoint | Width | Key Adjustments |
|-----------|-------|-----------------|
| Mobile S | 375px | Single column, px-4, text-display → 32px |
| Mobile L | 428px | — |
| Tablet | 768px | 2-col project grid, px-6 |
| Desktop | 1024px | 3-col project grid, px-8, floating nav |
| Wide | 1280px | Max content width locked at 1280px |
| Ultra | 1440px+ | Centered layout, no further scaling |

---

## 12. Brand Voice & Copy Guidelines

### Tone

| ✓ Do | ✗ Don't |
|------|---------|
| Specific outcomes ("Reduced onboarding time by 40%") | Vague claims ("improved user experience") |
| Process-oriented ("Research → Synthesis → Prototype") | Tool-focused ("Built in Figma") |
| Business language ("stakeholder alignment", "north star metric") | Designer jargon ("pixel-perfect", "intuitive") |
| First person, active voice ("I led...", "The team shipped...") | Passive ("The design was delivered") |

### Content Hierarchy per Case Study

1. **Business problem** (1 sentence) — What was broken and why it mattered
2. **My role** (1 sentence) — Scope and team context
3. **Process** (3–5 steps) — Research method, key decisions
4. **Key insight** (1 sentence callout) — The unexpected finding
5. **Solution** — What shipped, screenshots
6. **Outcomes** — Quantified metrics with timeframe

### Hero Copy Formula

```
[Role] who [specific differentiator]
→ "B2B UX Designer specializing in complex enterprise workflows"

Subheadline: Specific audience + specific result
→ "Helping SaaS companies reduce support tickets through better product design"
```

---

## 13. Anti-Patterns to Avoid

| Anti-Pattern | Why | Fix |
|-------------|-----|-----|
| AI purple/pink gradients | Signals trend-chasing, not expertise | Use flat navy + blue only |
| Tool badge walls (Figma, Notion, Miro) | Focuses on tools, not thinking | Show process artifacts instead |
| "Passion for design" copy | Generic, unverifiable | Specific outcomes + methodology |
| Dribbble-style UI shots without context | B2B buyers need business context | Add before/after + metrics |
| Hidden contact (footer only) | Reduces inbound | CTA in nav + end of each case study |
| Auto-playing video | Distracting in enterprise review | User-initiated only |
| Emoji in UI | Unprofessional in enterprise context | Lucide SVG icons only |
| Dark glass cards on white BG | Poor contrast | Use `bg-white/90` minimum |

---

## 14. Pre-Delivery Checklist

### Visual Quality
- [ ] No emojis as icons — Lucide SVG only
- [ ] All interactive elements have `cursor-pointer`
- [ ] Hover states use `transition-colors` or `transition-shadow` (150–250ms)
- [ ] Metric numbers highlighted in `text-slate-900 font-bold`
- [ ] Client logos displayed in grayscale by default

### Accessibility
- [ ] Skip link present as first element
- [ ] All images have descriptive `alt` text
- [ ] Form labels use `for` attribute matching input `id`
- [ ] Contrast ratio verified: 4.5:1 minimum
- [ ] Focus rings visible (never `outline-none` alone)
- [ ] `prefers-reduced-motion` disables all scroll animations

### Layout
- [ ] No horizontal scroll at 375px viewport
- [ ] Content not hidden behind fixed nav (add `pt-16` or equivalent)
- [ ] Floating nav has `top-4 left-4 right-4` spacing
- [ ] Container max-width consistent at `max-w-7xl`
- [ ] Text blocks max-width `max-w-3xl` for readability

### Content
- [ ] Every case study has at least one quantified outcome
- [ ] Hero states role + specific differentiator clearly
- [ ] Contact CTA appears in nav AND at end of each case study
- [ ] Client logos / trust bar visible above the fold or immediately after hero

### Performance
- [ ] Images use WebP format with `loading="lazy"`
- [ ] Google Fonts loaded with `display=swap`
- [ ] No unused Tailwind classes in production (purge enabled)

---

## 15. Quick Implementation Reference

### Tailwind Config Additions

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        heading: ['Archivo', 'sans-serif'],
        body: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#F0F9FF',
          700: '#0369A1',  // CTA accent
          900: '#0F172A',  // Primary
        }
      },
      maxWidth: {
        'content': '1280px',
        'text': '68ch',
      }
    }
  }
}
```

### CSS Custom Properties

```css
:root {
  --color-primary:    #0F172A;
  --color-secondary:  #334155;
  --color-accent:     #0369A1;
  --color-bg:         #F8FAFC;
  --color-surface:    #FFFFFF;
  --color-text:       #020617;
  --color-muted:      #475569;
  --color-border:     #E2E8F0;

  --font-heading: 'Archivo', sans-serif;
  --font-body:    'Space Grotesk', sans-serif;

  --shadow-card:  0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-hover: 0 4px 12px rgba(0,0,0,0.10), 0 2px 4px rgba(0,0,0,0.06);

  --radius-sm:  0.5rem;  /* 8px */
  --radius-md:  0.75rem; /* 12px */
  --radius-lg:  1rem;    /* 16px */
  --radius-xl:  1.5rem;  /* 24px */
}
```

---

*Generated by UI/UX Pro Max | B2B UX Portfolio Design System v1.0*
