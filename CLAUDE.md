# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Lansing Codes community website - a resource hub for coders and tech enthusiasts in Lansing, Michigan. The site features a calendar of tech events, meetup groups, local resources, sponsor information, and community engagement tools.

## Tech Stack

- **Framework**: Nuxt 3 (Vue 3)
- **Styling**: Tailwind CSS with custom SCSS
- **Database**: Firebase Firestore (read-only production data by default in development)
- **Data Management**: VueFire for Firestore integration, migrating from legacy Vuexfire
- **Icons**: FontAwesome via `@fortawesome/vue-fontawesome`
- **Testing**: Playwright for UI testing
- **Node Version**: >= 22.18.0

## Architecture

### Migration Status (Nuxt 2 → Nuxt 3)

This codebase is **currently being migrated** from Nuxt 2 to Nuxt 3:

- **Legacy patterns**: `store/` directory still contains Vuex stores using `vuexfire` (old pattern)
- **New patterns**: `composables/` directory contains Composition API composables using `vuefire` (new pattern)
- Both patterns exist side-by-side during the migration
- Prefer using composables for new features; gradually migrate store usage to composables

### Data Flow

**Firebase Integration**:
- Firestore database connection configured in [utils/firestore.js](utils/firestore.js)
- Firebase app initialized in [plugins/vuefire.client.js](plugins/vuefire.client.js)
- Default environment points to production read-only data
- Custom Firebase config can be provided via `FIREBASE_WEB_CONFIG` environment variable

**Data Loading Patterns**:
1. **New (Nuxt 3)**: Composables in `composables/` directory
   - `useEvents()`: Loads upcoming events from Firestore
   - `useGroups()`: Loads meetup groups
   - `useSponsors()`: Loads sponsor information
   - Use VueFire's `useCollection()` for reactive Firestore queries

2. **Legacy (Nuxt 2)**: Vuex stores in `store/` directory
   - Still present but being phased out
   - Use firestoreAction from vuexfire

**Event Filtering**:
- Events are filtered by date range: today through the end of the configured number of weeks
- Maximum calendar weeks configured in [config/max-calendar-weeks.js](config/max-calendar-weeks.js)
- Uses `date-fns` for date manipulation

### Component Structure

**Page Structure**:
- Single layout: [layouts/default.vue](layouts/default.vue) with header (Navigation) and footer
- Homepage ([pages/index.vue](pages/index.vue)) is composed of section components:
  - Welcome
  - Events (calendar and list views)
  - Meetups
  - Resources
  - Sponsors
  - Newsletter

**Component Organization**:
- Section components in `components/` directory (e.g., `events.vue`, `meetups.vue`)
- Reusable sub-components (e.g., `event-calendar.vue`, `event-list.vue`, `card--event.vue`)
- Logo components with size variants (`logo--small.vue`, `logo--medium.vue`, etc.)

### Styling

- Global styles in [layouts/default.vue](layouts/default.vue)
- Tailwind configuration in [tailwind.config.js](tailwind.config.js)
- Main SCSS entry point: `assets/scss/tailwind.scss`
- Custom CSS classes:
  - `.lc-bg-ltr-gradient`: Left-to-right blue gradient
  - `.lc-bg-right-triangle`, `.lc-bg-left-triangle`, `.lc-bg-down-triangle`: Triangle background patterns
  - `.sr-only`: Screen reader only content

### Configuration

- **SSR**: Disabled (`ssr: false` in nuxt.config.ts)
- **Firebase config**: Hardcoded in nuxt.config.ts under `runtimeConfig.public.firebaseConfig`
- **Resources**: Static resource data in [config/resources.js](config/resources.js)
- **Fonts**: External fonts loaded from CDN (Lansing Codes webfont, Font Mfizz, Montserrat)

## Common Commands

### Development
```sh
npm run dev
```
Runs dev server at http://localhost:3000 with hot reload

### Build
```sh
npm run build
```
Builds production site (output in `.output/` directory)

### Generate Static Site
```sh
npm run generate
```
Generates static files for deployment

### Preview Production Build
```sh
npm run preview
```
Previews the production build locally

### Linting
```sh
npm run lint        # Check for linting errors
npm run lintfix     # Auto-fix linting errors
```
Linting runs automatically on `git commit` via the `precommit` hook

### Testing


## Git Workflow

- **Main branch**: `main` - snapshot of latest in-flight release
- **Production branch**: `production` - live production code
- **Development**: Create feature branches from `main`
- **Deployment**: PRs merge to `main` → auto-deploy to staging → manual promotion to `production`

### Contributors

When contributing, add your name to the `contributors` array in [package.json](package.json)

### Branch Promotion to Production
```sh
git fetch origin && git push --force origin origin/main:production
```

## Deployment

- **Staging**: Auto-deployed to Netlify on merge to `main`
  - URL: lansingcodes-staging.netlify.com
  - All branches get preview deployments
- **Production**: Auto-deployed to Netlify when `production` branch is updated
  - URL: www.lansing.codes
- **Build command**: `npm run build`
- **Deploy directory**: `/dist` (Nuxt 2) or `/.output` (Nuxt 3)

## Utilities

Located in `utils/` directory:
- `clean-event-description.js`: Sanitizes event description HTML
- `format-readable-date-time.js`: Formats timestamps into readable strings
- `group-for-event.js`: Matches events to their parent meetup groups
- `simplified-name.js`: Normalizes names for comparison
- `firestore.js`: Firebase/Firestore initialization and exports

## Code of Conduct

All contributors must follow the [Code of Conduct](https://www.lansing.codes/code-of-conduct/). Treat all participants with respect.
