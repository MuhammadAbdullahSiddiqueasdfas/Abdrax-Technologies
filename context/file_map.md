# Project File Map

A comprehensive guide to the file structure of Abdrax Technologies.

## Root Directory
- `next.config.js`: Configuration for Next.js features and optimizations.
- `tailwind.config.ts`: Tailwind CSS theme customization and plugins.
- `components.json`: Configuration for shadcn/ui components.
- `package.json`: Project dependencies and scripts.
- `tsconfig.json`: TypeScript configuration.

## `/app` (Routes & Layouts)
- `layout.tsx`: Root layout containing the global structure (Navbar, Footer, SEO meta).
- `globals.css`: Global CSS variables and base styles.
- `page.tsx`: Home page.
- `about/`: About Us page and its metadata.
- `services/`: Services overview page.
- `our-work/`: Portfolio / Case studies page.
- `contact/`: Contact Us page with lead generation.
- `sitemap.ts`: SEO sitemap generation.
- `robots.ts`: Robots.txt configuration.
- `home/`: Components specific to the home page:
    - `HeroSection.tsx`: Main landing section.
    - `StatsSection.tsx`: Business metrics and achievements.
    - `ServicesPreview.tsx`: Grid of services offered.
    - `WhyChooseUs.tsx`: Competitive advantages.
    - `TechStack.tsx`: Technologies used by the company.
    - `TestimonialsSection.tsx`: Client feedback.
    - `CTASection.tsx`: Call to action.
    - `ContactSection.tsx`: Inline contact form.

## `/components` (UI Components)
- `Navbar.tsx`: Sticky navigation with mobile menu support.
- `Footer.tsx`: Comprehensive site footer.
- `ScrollToTop.tsx`: Helper component for scroll behavior.
- `BorderGlow.tsx`: Custom UI effect for glowing borders on cards.
- `SpotlightCard.jsx`: Interactive card component with spotlight effect.

## `/lib` (Utilities)
- `utils.ts`: Contains the `cn` helper for tailwind-merge and clsx.

## `/public` (Assets)
- `logo.png`: Company logo.
- `favicon.png`: Site favicon.
