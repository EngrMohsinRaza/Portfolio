# ✨ Premium Personal Portfolio

A high-end, one-page personal portfolio — dark navy & champagne gold, elegant serif typography, smooth Framer Motion animations, and everything you need to present yourself professionally online.

**Stack:** Next.js 16 (App Router) · React 19 · Tailwind CSS 4 · Framer Motion · TypeScript

---

## ✦ Features

- **Hero** — name, title, intro, 3 CTAs (View Resume · Download Resume · Contact Me) + stats strip
- **About** — professional summary, background, quick facts, key strengths, animated skill bars
- **Resume** — premium glass card with stylised PDF preview + view/download buttons
- **Social links** — LinkedIn, GitHub, X, Instagram, Facebook, Behance, Dribbble (+ email tile)
- **Contact** — email, phone, WhatsApp, address cards · validated form · optional Google Maps embed
- **Footer** — copyright, quick nav, social icons, back-to-top
- Sticky glass navbar · active-section highlighting · animated mobile menu
- Smooth scrolling · scroll-reveal animations · hover micro-interactions
- SEO: metadata + Open Graph + Twitter cards + JSON-LD Person schema + sitemap + robots
- Accessible: semantic landmarks, skip link, ARIA labels, focus styles, `prefers-reduced-motion` support
- Self-hosted fonts (Playfair Display + Inter) — zero runtime external requests

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# → open http://localhost:3000

# 3. Production build + preview
npm run build
npm start
```

---

## 🗂 Folder Structure

```
portfolio/
├── public/
│   ├── resume.pdf          ← ✅ YOUR REAL RESUME (already installed — replace anytime)
│   └── og-image.png        ← social-sharing preview image (1200×630)
└── src/
    ├── app/
    │   ├── layout.tsx      ← fonts, SEO metadata, JSON-LD, skip link
    │   ├── page.tsx        ← assembles the sections in order
    │   ├── globals.css     ← 🎨 design tokens (colors, fonts, utilities)
    │   ├── icon.svg        ← favicon
    │   ├── robots.ts       ← robots.txt
    │   └── sitemap.ts      ← sitemap.xml
    ├── data/
    │   └── site.ts         ← ✏️ EDIT THIS ONE FILE — all your content lives here
    ├── hooks/
    │   └── useActiveSection.ts
    ├── lib/
    │   └── utils.ts
    └── components/
        ├── ui/
        │   └── Button.tsx          ← primary / outline / ghost button
        ├── layout/
        │   ├── Navbar.tsx          ← sticky nav + mobile menu
        │   └── Footer.tsx
        ├── sections/
        │   ├── Hero.tsx
        │   ├── About.tsx
        │   ├── Resume.tsx
        │   ├── SocialLinks.tsx
        │   ├── Contact.tsx
        │   └── ContactForm.tsx     ← validated form
        └── shared/
            ├── MotionProvider.tsx  ← reduced-motion support
            ├── Reveal.tsx          ← scroll-reveal wrapper
            ├── BrandIcon.tsx       ← social brand icons
            └── SectionHeading.tsx
```

---

## ✏️ How to Customize

### 1 · Your personal details (name, title, bio, contact…)

Everything is in **`src/data/site.ts`** — a single, heavily commented file:

| Placeholder | Field in `site.ts` |
|---|---|
| `[YOUR_NAME]` | `name`, `firstName`, `lastName`, `initials` |
| `[YOUR_TITLE]` | `title` |
| `[SHORT_BIO]` | `tagline`, `bio`, `about.paragraphs` |
| `[EMAIL_ADDRESS]` | `contact.email` |
| `[PHONE_NUMBER]` | `contact.phone` (+ `phoneHref` for the `tel:` link) |
| `[FULL_ADDRESS]` | `contact.address`, `contact.addressLine2`, `contact.mapUrl` |

The dev server hot-reloads instantly on save.

### 2 · Social links

Edit the `socials` array in `src/data/site.ts`. Each entry has `name`, `handle`, `url` and `brand`.
**Set a platform's `url` to `""` to hide it** from the page (footer, cards, JSON-LD all update automatically).

### 3 · Your resume PDF

1. Drop your resume at **`public/resume.pdf`** (keep the filename, or update `resume.path`).
2. Set `resume.fileName` to the name people see when downloading.
3. Update `resume.updated` (e.g. `"January 2026"`).

All **View Resume / Download Resume / Download CV** buttons use this path automatically.
*Your real resume (`MD Mohsin Raza.pdf`, 2 pages) is already installed at `public/resume.pdf`.*

### 4 · Google Maps embed (optional)

Paste an embed URL into `contact.mapEmbedUrl` in `src/data/site.ts` (get one at
**google.com/maps → Share → Embed a map** → copy the `src` URL). Leave `""` to hide the map.

### 5 · How the contact form reaches you

Set via `contact.formMode` in `src/data/site.ts`:

| Mode | What happens | Setup |
|---|---|---|
| `"mailto"` *(current)* | Opens the visitor's email app pre-filled to your address | Zero configuration |
| `"endpoint"` | Submissions POST to a service (e.g. [formspree.io](https://formspree.io)) | Paste the endpoint into `contact.formEndpoint` |
| `"demo"` | Simulated success (UI preview only) | Nothing |

### 6 · Colors & fonts

All design tokens are in **`src/app/globals.css`** under `@theme` — `ink-*` (navy backgrounds),
`gold-*` (accent), `mist-*` (text). Fonts are set in `src/app/layout.tsx` via `next/font`
(swap for another Google font there).

### 7 · SEO & sharing preview

- Site title/description/keywords: `src/data/site.ts` → `siteUrl`, `description`, `keywords`
- Open Graph image: replace **`public/og-image.png`** (1200×630 PNG) with your own branded card
- JSON-LD Person schema is generated from `site.ts` automatically

---

## 🚢 Deployment

**Vercel (recommended — zero config)**

1. Push the folder to a GitHub repo.
2. Go to [vercel.com](https://vercel.com) → **Add New → Project** → import the repo.
3. Vercel auto-detects Next.js. Deploy. Done.
4. After deploying, update `siteUrl` in `src/data/site.ts` to your real domain.

**Netlify** — same flow; Netlify auto-detects Next.js with the `@netlify/plugin-nextjs` runtime.

**Static export / GitHub Pages** — add `output: "export"` to `next.config.ts`, run
`npm run build`, and upload the `out/` folder. *(The contact form needs `formEndpoint`
for real sending; everything else works statically.)*

**Any Node host** — `npm run build && npm start` (default port 3000).

---

## ♿ Accessibility

Semantic landmarks, skip-to-content link, ARIA labels on all icon links, visible focus
rings, keyboard-friendly mobile menu, `aria-invalid`/`role="alert"` on form errors, and
all animations respect the OS **reduce-motion** setting.

---

Built with care — make it yours. ✦
