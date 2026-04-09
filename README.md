# Sarmistha Sahoo — Developer Portfolio

Minimal, developer-focused info for building and maintaining this React + Tailwind portfolio.

## Tech stack
- React + TypeScript (.tsx)
- Tailwind CSS
- motion (motion/react)
- lucide-react (icons)
- Vite / Next-style imports (project uses @/ alias)
- Components: src/components/sections

## Prerequisites
- Node 18+ and npm (or yarn)
- Git

## Quick commands
- Install: npm install
- Dev: npm run dev
- Build: npm run build
- Preview/Start: npm run start

(Replace commands if your project uses yarn or framework-specific scripts in package.json.)

## Environment
- Place secrets in .env.local (not committed).
- Typical example:
  NODE_ENV=development
  NEXT_PUBLIC_API_URL=https://...

## Key files / places to edit
- Hero: src/components/sections/Hero.tsx — name, headline, CTA targets (scrollTo ids)
- Projects: src/components/sections/Projects.tsx — update projects[] (title, description, image, tags, link, github)
- Contact: src/components/sections/Contact.tsx — email, mailto, location
- Global styles: tailwind.config.js, src/styles/globals.css
- Icons/components: src/components (shared UI primitives)

## Notes for maintainers
- Ensure section elements have matching ids ("projects", "contact") for smooth scrolling.
- Use anchor tags with target="_blank" rel="noopener noreferrer" for external links.
- Optimize images and add descriptive alt text.
- Run a build and inspect the output folder before deploy.

## Deployment
- Suitable for Vercel / Netlify / static hosts. Configure environment variables on the platform.

## License
This project is licensed under the GNU General Public License v2.0. See the included LICENSE file for full terms.

## Contact
- Maintainer: sarmistha.persona14@gmail.com
