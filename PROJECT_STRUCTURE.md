# Edifice Glow Grid - Project Structure & Development Guidelines

## Project Overview

**Name:** edifice-glow-grid  
**Repository:** Frantz36/edifice-glow-grid  
**Platform:** Lovable Connected Project  
**Type:** Modern React Web Application

This is a Lovable-connected project. **Avoid rewriting published git history** (force pushing, rebasing, amending, squashing commits that are already pushed) as it rewrites history on Lovable's side and the user will lose project history.

---

## Tech Stack

### Frontend Framework
- **TanStack Start** (React meta-framework with SSR/isomorphic routing)
- **React 19.2.0** with TypeScript
- **TanStack Router** (v1.170.16) - File-based routing
- **TanStack React Query** (v5.101.1) - Server state management
- **Vite** (v8.0.16) - Build tool and dev server

### UI & Styling
- **Tailwind CSS** (v4.2.1) with Tailwind Merge
- **Radix UI** - Headless component library (Accordion, Dialog, Tabs, Dropdown, etc.)
- **Shadcn/ui** inspired components in `src/components/ui/`
- **Lucide React** (v0.575.0) - Icon library
- **Embla Carousel** (v8.6.0) - Carousel component
- **Recharts** (v2.15.4) - React charting library
- **Sonner** (v2.0.7) - Toast notifications

### Forms & Validation
- **React Hook Form** (v7.71.2) - Form state management
- **Zod** (v3.24.2) - TypeScript-first schema validation
- **@hookform/resolvers** - Integration layer

### Additional Libraries
- **date-fns** (v4.1.0) - Date manipulation
- **react-day-picker** (v9.14.0) - Date picker
- **cmdk** (v1.1.1) - Command menu
- **input-otp** (v1.4.2) - OTP input
- **vaul** (v1.1.2) - Drawer component
- **react-resizable-panels** (v4.6.5) - Resizable panels
- **clsx** (v2.1.1) - Class name utilities
- **class-variance-authority** (v0.7.1) - CSS-in-JS variant pattern

### Development Tools
- **TypeScript** (v5.8.3)
- **ESLint** (v9.32.0) with TypeScript support
- **Prettier** (v3.7.3) - Code formatter
- **Nitro** (3.0.260603-beta) - Universal JavaScript server

---

## Project Structure

```
.
├── src/
│   ├── components/
│   │   ├── ui/                    # Reusable Shadcn/Radix UI components
│   │   │   ├── accordion.tsx
│   │   │   ├── alert-dialog.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── form.tsx
│   │   │   ├── input.tsx
│   │   │   ├── select.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── chart.tsx
│   │   │   ├── sonner.tsx          # Toast notifications wrapper
│   │   │   └── ... (other UI components)
│   │   └── site/                  # Site-specific components
│   │       ├── header.tsx
│   │       ├── footer.tsx
│   │       └── ... (page-specific components)
│   │
│   ├── hooks/                     # Custom React hooks
│   │   └── ... (custom hooks)
│   │
│   ├── lib/                       # Utility functions and helpers
│   │   ├── utils.ts               # General utilities (classnames, etc)
│   │   └── ... (other utilities)
│   │
│   ├── routes/                    # TanStack Router file-based routes
│   │   ├── __root.tsx             # Root layout component
│   │   ├── index.tsx              # Home page (/index)
│   │   ├── a-propos.tsx           # About page (/a-propos)
│   │   ├── services.tsx           # Services page (/services)
│   │   ├── engagement-solidaire.tsx # Solidarity page
│   │   ├── contact.tsx            # Contact page (/contact)
│   │   ├── blog.tsx               # Blog page (/blog)
│   │   ├── references.tsx         # References page (/references)
│   │   ├── sitemap[.]xml.ts       # Sitemap generation
│   │   └── README.md              # Route documentation
│   │
│   ├── start.ts                   # Application entry point (TanStack Start)
│   └── server.ts                  # SSR error wrapper (optional)
│
├── public/                        # Static assets
│   └── ... (images, icons, etc)
│
├── vite.config.ts                 # Vite config (with Lovable TanStack defaults)
├── tsconfig.json                  # TypeScript configuration
├── eslint.config.js               # ESLint configuration
├── .prettierrc                     # Prettier configuration
├── bunfig.toml                    # Bun configuration (if using Bun)
├── components.json                # Shadcn components registry
├── package.json                   # Dependencies and scripts
├── package-lock.json              # Locked dependencies (npm)
├── bun.lock                       # Locked dependencies (Bun, if using Bun)
├── tsconfig.json                  # TypeScript config
├── .eslintignore
├── .prettierignore
├── .gitignore
├── .lovable/                      # Lovable project metadata
├── AGENTS.md                      # Agent-related documentation
├── README.md                      # Main project README
├── humaitaire.md                  # Additional documentation
└── service-page.md                # Service page documentation
```

---

## Development Practices & Conventions

### Code Style

#### Formatting
- **Prettier Settings:**
  - `printWidth: 100` - Line length limit
  - `semi: true` - Require semicolons
  - `singleQuote: false` - Use double quotes
  - `trailingComma: "all"` - Trailing commas in multi-line structures

#### Linting
- **ESLint Rules:**
  - TypeScript recommended configs enabled
  - React Hooks rules enforced
  - React Refresh warnings (allows constant exports)
  - No unused variables reported (`@typescript-eslint/no-unused-vars: off`)
  - No restricted imports: `server-only` package disallowed (use `*.server.ts` naming instead)

### Component Architecture

#### UI Components
- Locate reusable, generic UI components in `src/components/ui/`
- Use Radix UI primitives as the foundation
- Export components with TypeScript interfaces for props
- Example structure:
  ```typescript
  import * as React from "react"
  import { Slot } from "@radix-ui/react-slot"
  
  interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean
  }
  
  const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, asChild = false, ...props }, ref) => {
      const Comp = asChild ? Slot : "button"
      return (
        <Comp
          className={cn("px-4 py-2 rounded-md", className)}
          ref={ref}
          {...props}
        />
      )
    },
  )
  Button.displayName = "Button"
  
  export { Button, type ButtonProps }
  ```

#### Site Components
- Place page-specific or site-wide components in `src/components/site/`
- Use composition to combine UI components

### Routing

- **TanStack Router** uses file-based routing from `src/routes/`
- File naming convention: `pageName.tsx` → `/pageName` route
- Special files:
  - `__root.tsx` - Root layout (shared across all routes)
  - `[.]` notation for dots in filenames (e.g., `sitemap[.]xml.ts`)
  
#### Route Structure Example
```typescript
// src/routes/index.tsx
export function Route() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}
```

### Styling with Tailwind CSS

- Use Tailwind CSS utility classes directly in JSX
- Combine utilities with `cn()` utility from `lib/utils.ts`:
  ```typescript
  import { cn } from "@/lib/utils"
  
  export function Button({ className, ...props }) {
    return (
      <button className={cn("px-4 py-2 rounded", className)} {...props} />
    )
  }
  ```
- Use CSS files for complex styles when needed
- Leverage Tailwind's color palette and spacing scale

### Form Handling

- Use **React Hook Form** for form state management
- Use **Zod** for schema validation
- Example:
  ```typescript
  import { useForm } from "react-hook-form"
  import { zodResolver } from "@hookform/resolvers/zod"
  import { z } from "zod"
  
  const schema = z.object({
    email: z.string().email(),
    name: z.string().min(1),
  })
  
  export function ContactForm() {
    const form = useForm({
      resolver: zodResolver(schema),
    })
    
    return (
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* Form fields */}
      </form>
    )
  }
  ```

### TypeScript Configuration

- **Target:** ES2022
- **Module Resolution:** Bundler
- **Strict Mode:** Enabled
- **Path Alias:** `@/*` maps to `./src/*`
- **JSX:** react-jsx (automatic runtime)

---

## Build & Development Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev          # Start Vite dev server with HMR

# Production build
npm run build        # Build for production
npm run build:dev    # Build in development mode

# Preview
npm run preview      # Preview production build locally

# Code quality
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

---

## Path Aliases

The project uses TypeScript path aliases:
- `@/*` → `./src/*`

Use these in imports:
```typescript
// Good
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Avoid
import { Button } from "../../components/ui/button"
import { cn } from "../../lib/utils"
```

---

## Important Notes for Agents

### 1. Lovable Integration
- This project is connected to Lovable via `.lovable/` metadata
- **Do NOT rewrite git history** (no force pushes, rebasing, amending, squashing of pushed commits)
- Commits pushed to the connected branch sync back to Lovable
- Keep the branch in a working state at all times

### 2. TanStack Start Configuration
- The `vite.config.ts` uses `@lovable.dev/vite-tanstack-config`
- This already includes:
  - TanStack devtools (dev-only, first)
  - TanStack Start plugin
  - Vite React plugin
  - Tailwind CSS plugin
  - TypeScript paths plugin
  - Nitro (build-only, Cloudflare target)
  - VITE_* env injection
  - @ path alias configuration
  - React/TanStack deduplication
  - Error logger plugins
  - Sandbox detection

- **Do NOT manually add these plugins** or the app will break with duplicates

### 3. File Organization
- Keep UI components in `src/components/ui/`
- Keep site-specific components in `src/components/site/`
- Put utility functions in `src/lib/`
- Create custom hooks in `src/hooks/`
- Routes go in `src/routes/`

### 4. Naming Conventions
- Files: `camelCase` for component/utility files, `kebab-case` for route names
- Components: PascalCase (e.g., `Button`, `ContactForm`)
- Utilities: camelCase (e.g., `cn`, `formatDate`)
- Constants: UPPER_SNAKE_CASE when exported

### 5. Code Quality
- Run `npm run lint` before committing
- Run `npm run format` to auto-format code
- Keep components focused and reusable
- Document complex logic with minimal comments
- Use TypeScript strict mode

### 6. Git Commits
- Include the Co-authored-by trailer:
  ```
  Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>
  ```
- Write clear, descriptive commit messages
- Reference issues/PRs when relevant

### 7. Import Order
- React/external libraries first
- Internal utilities and types
- Components last

```typescript
// Correct order
import React from "react"
import { useForm } from "react-hook-form"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
```

---

## Glossary

- **TanStack Start:** Meta-framework combining TanStack Router with Vite for full-stack React apps
- **Shadcn/ui:** Community component library built on Radix UI and Tailwind
- **Radix UI:** Low-level, accessible component primitives
- **Zod:** TypeScript-first schema validation library
- **Nitro:** Universal JavaScript runtime for building servers
- **HMR:** Hot Module Replacement (automatic updates during dev)

---

## Resources

- [TanStack Start Documentation](https://tanstack.com/start/latest)
- [TanStack Router Documentation](https://tanstack.com/router/latest)
- [React Hook Form Documentation](https://react-hook-form.com/)
- [Zod Documentation](https://zod.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Radix UI Documentation](https://www.radix-ui.com/)
- [Lovable Documentation](https://lovable.dev/docs)

---

**Last Updated:** 2026-07-27  
**Maintained by:** Development Team
