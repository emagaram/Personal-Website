# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Astro 5, React 19, and Tailwind CSS 4. The site features a unique blueprint/technical drawing design aesthetic with a paper-like color scheme. It's deployed on Vercel with static site generation.

## Key Commands

```bash
# Install dependencies
pnpm install

# Start development server (localhost:4321)
pnpm dev

# Build production site (outputs to ./dist/)
pnpm build --remote

# Preview production build locally
pnpm preview

# Run Astro CLI commands
pnpm astro [command]
```

Note: The `--remote` flag is required for build because this project uses Astro DB, which requires remote database access during build.

## Architecture

### Tech Stack
- **Framework**: Astro 5 with static output
- **UI Library**: React 19 (islands architecture)
- **Styling**: Tailwind CSS 4 (via Vite plugin)
- **Animation**: Framer Motion
- **Database**: Astro DB (for contact form inquiries)
- **Deployment**: Vercel with image optimization and web analytics
- **Email**: Resend (configured but placeholder key in codebase)

### Hybrid Component Approach
The site uses Astro's islands architecture, mixing Astro components (.astro files) for static content with React components (.tsx files) for interactive features:

- **Astro components**: Layout, page structure, static sections
- **React components**: Interactive skill grid modal, contact form with client-side validation
- **Client directives**: React components are hydrated with `client:load` or `client:idle`

### Project Structure

```
src/
├── pages/
│   └── index.astro              # Main homepage
├── layouts/
│   └── Layout.astro             # Base HTML layout with metadata
├── components/
│   ├── Header.astro             # Site header/nav
│   ├── Navigation.astro         # Navigation component
│   ├── BlueprintGrid.astro      # Background grid overlay
│   └── home/
│       ├── Hero.astro           # Hero section
│       ├── Projects/            # Project showcase section
│       ├── Skills/              # Tech stack bento grid
│       │   ├── BentoGrid.tsx    # Interactive modal grid (React)
│       │   └── SkillDescriptions/ # Individual skill content
│       └── Contact/             # Contact form section
│           └── Form.tsx         # Form with validation (React)
├── actions/
│   └── index.ts                 # Server actions for form submission
├── styles/
│   └── global.css               # Tailwind config and custom theme
└── types.ts                     # Shared TypeScript types

db/
├── config.ts                    # Astro DB schema (Inquiry table)
└── seed.ts                      # Database seeding
```

### Design System

The site uses a blueprint/technical drawing aesthetic with custom Tailwind theme colors defined in `src/styles/global.css`:

- `--color-paper-dim`: #F4F1E8 (background)
- `--color-paper-100`: #FAF8F3 (card backgrounds)
- `--color-ink`: #2C2416 (primary text)

Design elements include:
- Blueprint-style corner markers on cards
- Dashed grid backgrounds
- Technical annotation styling (e.g., "TECH-01" labels)
- Sketch-style underlines and borders

### State Management

- No global state management library
- React `useState` for local component state (modal, form submission)
- Astro Actions for server-side form handling with Zod validation

### Contact Form Flow

1. User submits form in `Form.tsx`
2. Client-side validation via React state
3. Form data sent to server action in `src/actions/index.ts`
4. Server validates with Zod schema
5. Valid submissions saved to Astro DB `Inquiry` table
6. Success message displayed to user

### Skills Grid

The `BentoGrid.tsx` component features a responsive grid layout with:
- Different layouts for mobile (6-column) and desktop (8-column)
- Click-to-expand modals using Framer Motion `layoutId` animations
- Individual skill description components in `SkillDescriptions/`
- Body scroll lock when modal is open

Known issues (see TODOs in BentoGrid.tsx):
- Modal backdrop doesn't account for mobile browser chrome
- No reduced motion support yet
- Font size/zoom accessibility considerations

## Development Notes

### Adding New Skills

1. Add skill definition to `SKILLS` object in `BentoGrid.tsx`
2. Create corresponding description component in `SkillDescriptions/`
3. Add skill to both `LAYOUT_ORDERS.mobile` and `LAYOUT_ORDERS.desktop` arrays
4. Import and register the description component

### Modifying the Contact Form

- Update validation schema in `src/actions/index.ts`
- Update form fields in `src/components/home/Contact/Form.tsx`
- Update database schema in `db/config.ts` if adding new fields

### Styling Conventions

- Use Tailwind utility classes extensively
- Custom colors reference the theme variables (e.g., `bg-paper-dim`, `text-ink`)
- Blueprint corner markers use absolute positioning with border utilities
- Maintain the technical drawing aesthetic when adding new components

## Database

This project uses Astro DB (libSQL/Turso). The schema is defined in `db/config.ts`:
- `Inquiry` table: name (text), email (text), message (text)

To work with the database, ensure you have proper Astro DB credentials configured locally.

## Deployment

The site is configured for Vercel deployment with:
- Static site generation (`output: 'static'`)
- Vercel adapter with image service enabled
- Web analytics enabled
- Build command must include `--remote` flag for database access
