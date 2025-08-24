# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` - Starts Vite dev server with host flag for network access
- **Build**: `npm run build` - Compiles TypeScript and builds production bundle
- **Preview**: `npm run preview` - Preview the production build locally
- **Deploy**: `npm run deploy` - Builds and deploys to GitHub Pages via gh-pages

## Project Architecture

This is a React TypeScript portfolio website built with Vite, using SCSS for styling.

### Core Structure
- **Entry point**: `src/main.tsx` renders the root App component
- **Main component**: `src/App.tsx` orchestrates the layout with Header, Hero, Main, and placeholder sections
- **Component hierarchy**: Simple flat structure in `src/Components/` with corresponding SCSS files in `src/Styles/`

### Key Components
- **Header**: Navigation with responsive hamburger menu and animated transitions
- **Hero**: Landing section with name, dynamic title, and CV download
- **AboutMe**: Profile section with portrait and bio text
- **Main**: Content area (currently work in progress)

### Styling Architecture
- Uses SCSS with shared variables (`$small: 300px`, `$medium: 900px`)
- Roboto font family imported from Google Fonts
- Mobile-first responsive design with media queries
- Custom selection colors and CSS animations for navigation

### Build Configuration
- **Output directory**: `./docs` (configured for GitHub Pages deployment)
- **TypeScript**: Strict mode disabled, ESNext target
- **Vite**: SWC React plugin for fast compilation
- **Assets**: Images and SVGs in `src/assets/`, PDF in `public/`

### Deployment
- Builds to `docs/` directory for GitHub Pages
- Uses `gh-pages` package for automated deployment
- Homepage configured for GitHub Pages URL structure

## Visual Development

### Design Principles
- Comprehensive design checklist in `/context/design-principles.md`
- Brand style guide in `/context/style-guide.md`
- When making visual (front-end, UI/UX) changes, always refer to these files for guidance

### Quick Visual Check
IMMEDIATELY after implementing any front-end change:
1. **Identify what changed** - Review the modified components/pages
2. **Navigate to affected pages** - Use `mcp__playwright__browser_navigate` to visit each changed view
3. **Verify design compliance** - Compare against `/context/design-principles.md` and `/context/style-guide.md`
4. **Validate feature implementation** - Ensure the change fulfills the user's specific request
5. **Check acceptance criteria** - Review any provided context files or requirements
6. **Capture evidence** - Take full page screenshot at desktop viewport (1440px) of each changed view
7. **Check for errors** - Run `mcp__playwright__browser_console_messages`

This verification ensures changes meet design standards and user requirements.

### Comprehensive Design Review
Invoke the `@agent-design-review` subagent for thorough design validation when:
- Completing significant UI/UX features
- Before finalizing PRs with visual changes
- Needing comprehensive accessibility and responsiveness testing