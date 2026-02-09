# Portfolio Website

A minimalist portfolio website built with Next.js, TypeScript, and Tailwind CSS, powered by Payload CMS for content management.

## Features

- **Backend-driven content**: All content (Projects, Skills, Work Experience) is managed through Payload CMS
- **Minimalist design**: Clean, modern UI with a neutral color palette and teal accent
- **Dark mode support**: Automatic dark mode based on system preferences
- **Type-safe**: Full TypeScript support with type definitions for all content types
- **Optimized**: Server-side rendering with ISR for optimal performance

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Payload CMS instance running (can be in a separate directory/server)

### Installation

1. Clone the repository and install dependencies:

```bash
npm install
```

2. Set up Payload CMS:

   - Install Payload CMS in a separate directory or server
   - Create collections for Projects, Skills, and Work Experience
   - Ensure Payload API is accessible (default: `http://localhost:3001/api`)

3. Configure environment variables:

   Create a `.env.local` file in the root directory:

```bash
PAYLOAD_API_URL=http://localhost:3001/api
# OR if using NEXT_PUBLIC prefix for client-side access:
NEXT_PUBLIC_PAYLOAD_API_URL=http://localhost:3001/api
```

   **Note**: If your Payload instance is running on a different port or URL, update accordingly.

4. Set up Payload collections:

   You'll need to create the following collections in your Payload CMS:
   - **Projects**: title, slug, description, technologies, images, links, etc.
   - **Skills**: name, category, proficiency level, etc.
   - **Work Experience**: company, role, dates, achievements, technologies, etc.

   See the type definitions in `lib/types/` for the exact schema structure.

5. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
app/
├── components/          # Reusable React components
│   ├── layout/         # Header, Footer
│   ├── projects/       # Project-related components
│   ├── skills/         # Skills components
│   ├── experience/     # Experience components
│   └── ui/             # UI primitives (Button, Card)
├── api/                # Next.js API routes
│   └── cms/           # CMS data fetching endpoints
├── about/             # About page
├── projects/          # Projects listing and detail pages
├── skills/            # Skills page
└── experience/        # Work experience page

lib/
├── cms/               # Payload client and queries
└── types/             # TypeScript type definitions
```

## Content Management

All content is managed through Payload CMS. Once configured, you can:

- Add/edit projects without code changes
- Update skills and proficiency levels
- Manage work experience entries
- Upload and manage images

The site uses Incremental Static Regeneration (ISR) to cache content and revalidate every hour.

## Payload CMS API Endpoints

The frontend expects the following Payload collections:
- `/api/projects` - Projects collection
- `/api/skills` - Skills collection  
- `/api/work-experience` - Work Experience collection

Make sure your Payload instance has these collections configured with matching field names as defined in `lib/types/`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
