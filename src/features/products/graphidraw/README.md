# GraphiDraw Landing Page

A professional product landing page for GraphiDraw - a comprehensive shop management system built with the modern stack.

## Overview

GraphiDraw is a complete shop management solution featuring:

- **Invoice Management** - Complete invoice system with financial transaction logging
- **Inventory Tracking** - Real-time inventory management with stock alerts
- **Customer & Vendor Management** - Complete transaction history and records
- **Real-time Dashboards** - Dynamic analytics and performance metrics
- **Payment Status Tracking** - Automated payment tracking with status updates
- **Excel-like Data Entry** - Integrated Handontable for spreadsheet-style data entry
- **Sales Analytics** - Comprehensive reports, trends, and forecasting
- **Transaction History** - Complete audit trail with timestamps and logs

## Tech Stack

Built with modern modern stack technologies:

- **React** - Modern UI library
- **Redux** - State management
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **PostgreSQL** - Relational database
- **Prisma** - Type-safe ORM
- **TypeScript** - Type safety
- **JWT** - Authentication system
- **Handontable** - Excel-like data grids

## Landing Page Structure

### Components

1. **Hero Section** (`hero.tsx`)

   - Eye-catching headline with gradient text
   - Call-to-action buttons
   - Key metrics showcase
   - Live status indicator

2. **Demo Section** (`demo.tsx`)

   - Video demonstration
   - Feature highlights
   - Quick benefits overview

3. **Features Section** (`features.tsx`)

   - 8 comprehensive features with icons
   - Hover effects and animations
   - Detailed descriptions

4. **Tech Stack Section** (`tech-stack.tsx`)

   - Technology logos with descriptions
   - Key technical features checklist
   - Modern, clean grid layout

5. **CTA Section** (`cta.tsx`)
   - Final call-to-action
   - Project statistics
   - Contact buttons
   - Gradient background with effects

## Video Setup

Place your GraphiDraw demo video at:

```
public/video/graphidraw-video.mp4
```

Optional poster image:

```
public/images/products/graphidraw-poster.jpg
```

## Route

The landing page is accessible at:

```
/products/graphidraw
```

## Navigation

Added to the main navigation in `src/config/site.ts`:

```typescript
{
  title: "Products",
  href: "/products/graphidraw",
}
```

## Future Extensions

This structure supports adding more products:

```
src/
  app/
    (app)/
      products/
        graphidraw/          # GraphiDraw landing page
        [new-product]/     # Future products
  features/
    products/
      graphidraw/            # GraphiDraw components
      [new-product]/       # Future product components
```

## Customization

### Colors

The landing page uses the site's theme colors defined in Tailwind CSS. Primary color is used for:

- Gradient text
- Icons
- Hover states
- Accent elements

### Content

Update the following to customize:

- Feature descriptions in `features.tsx`
- Tech stack items in `tech-stack.tsx`
- Statistics in `cta.tsx`
- Hero copy in `hero.tsx`

### Video

Replace `/video/graphidraw-video.mp4` with your demo video. Supported formats:

- MP4 (recommended)
- WebM
- OGG

## SEO & Metadata

Configured in `page.tsx`:

```typescript
export const metadata: Metadata = {
  title: "GraphiDraw - Complete Shop Management System",
  description: "...",
  openGraph: { ... },
};
```

## Development Period

- **Start**: November 2023
- **End**: April 2024
- **Duration**: 5+ months
- **Status**: Self-employed project

## Links

- **Live Demo**: [https://graphidraw-pos.vercel.app/](https://graphidraw-pos.vercel.app/)
- Contact: `/#contact`
- Experience: `/#experience`
- Demo section: `#demo`
- Features section: `#features`
