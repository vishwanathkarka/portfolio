---
version: alpha
name: "Vishwanath Reddy Portfolio"
description: "A dark editorial portfolio that lets recruiters understand Vishwanath's identity, product-engineering range, and strongest work quickly."
colors:
  primary: "#FF6338"
  background: "#060606"
  surface: "#0D0D0D"
  surface-raised: "#141414"
  text-primary: "#FFFFFF"
  text-muted: "#B2B2B2"
  ambient: "#373737"
  accent: "#FF6338"
  success: "#45A96A"
  border: "rgba(255, 255, 255, 0.09)"
typography:
  display:
    fontFamily: "Clash Display, Arial, sans-serif"
    lineHeight: "0.92"
  body:
    fontFamily: "Clash Display, Arial, sans-serif"
    lineHeight: "1.6"
rounded:
  control: "999px"
  portrait: "17px"
  media: "20px"
  feature: "28px"
spacing:
  page-max: "1040px"
  page-gutter: "24px"
  section-block: "105px"
components:
  hero: {}
  button: {}
  navigation: {}
  project-card: {}
  contact-panel: {}
---

# Vishwanath Reddy Portfolio Design System

## Overview

### Creative North Star

The portfolio should feel like a developer's sharply art-directed personal dossier viewed in a dark studio: near-black paper, precise white type, quiet graphite light, and one controlled orange annotation color. It is not a SaaS dashboard and should not inherit dashboard-card density from the visual references that informed its palette.

### Product context and register

- **Audience and primary job:** Recruiters, engineering leaders, collaborators, and potential clients should understand who Vishwanath is, what he builds, and where to inspect proof of work within one scan.
- **Target market and evidence:** Global English-speaking technology roles and clients; the repository content, résumé, project links, and English interface are the current evidence.
- **Locale and language policy:** English is the maintained interface language. Copy uses short, direct sentences and active verbs.
- **Usage scene:** Desktop-first portfolio review with complete mobile support; visitors often scan quickly before opening projects or the résumé.
- **Register:** Brand/content site. Expression belongs in the hero and project media; navigation and actions remain familiar.
- **Memorable signature:** The portrait embedded inside the oversized introduction, paired with orange emphasis on “full-stack products.”
- **Restraint:** Supporting copy, section chrome, tags, borders, and motion stay quiet so the signature remains singular.
- **Anti-references:** Avoid generic AI-company dashboards, glass-card grids, neon cyberpunk treatments, orange gradients, ornamental section numbering, and excessive ambient animation.
- **Token ownership/runtime mapping:** Runtime CSS variables in `src/app/globals.css` are canonical. This document mirrors accepted values and intent; `.portfolio-page` maps the palette to `--portfolio-*` variables consumed by homepage components.

## Colors

`#060606` is the continuous canvas. `#FFFFFF` is reserved for primary headings and high-emphasis actions; `#B2B2B2` carries supporting information. `#373737` supplies restrained ambient depth and neutral marks, not large opaque panels. `#FF6338` is expressive rather than semantic and is limited to the hero phrase, small labels, and selected details. `#45A96A` only communicates availability. Borders use translucent white so hierarchy comes from light rather than outlines.

The portfolio is intentionally dark-only. High-contrast and forced-color modes must retain system-operable controls and focus indicators.

## Typography

Clash Display is the current local family for display and body roles. The hero uses regular weight, tight negative tracking, and short line lengths as the primary identity. Body copy uses smaller sizes with relaxed line height and no decorative italics. Utility labels use restrained uppercase only when they genuinely describe metadata. Text below 11px is avoided for essential information.

## Layout

The homepage uses a centered 1040px editorial column over a quiet twelve-column guide. The hero presents one left-aligned path: availability, identity, value statement, and actions. Sections use generous 105px vertical rhythm and hairline separation. Mobile gutters are 17px, navigation collapses below 760px, and content becomes a single readable column without horizontal clipping.

## Elevation & Depth

Depth comes from a graphite radial glow near the hero, tonal surfaces, and thin inset highlights. Static content remains mostly flat. Project media may use a soft deep shadow; pills use only a faint inset highlight. Orange glow is limited to the final contact area. Do not add floating glass panels behind hero copy.

## Shapes

Actions, status chips, and compact navigation controls use pill geometry. The inline portrait uses a compact 17px curved frame with a slight tilt, giving the introduction a deliberate personal accent. Project media uses 20px corners, while the final contact panel uses 28px. Hairline dividers stay straight and quiet.

## Components

### Foundational visual states

Interactive elements require visible hover, focus-visible, and active feedback. Focus uses the orange accent with clear offset. Disabled or busy states must retain geometry and expose state beyond color. Reduced-motion mode removes entrance and hover movement.

### Buttons and actions

The primary hero action is white on black; the secondary action is transparent with a low-contrast border. Both are at least 44px high and retain text labels beside icons. Orange is not used as a button fill because it would compete with the hero signature.

### Navigation and data display

Navigation remains lightweight and text-led. Mobile navigation is a dark opaque popover with familiar link ordering. Project tags are metadata rather than calls to action. Decorative numbers are not used unless order carries real meaning.

### Forms and overlays

The current homepage has no forms or modal overlays. Any future overlay must be app-owned, keyboard accessible, focus-managed, and use the same surface/border vocabulary.

### Iconography

Lucide is the canonical icon family. Icons use the library's outline stroke, remain optically aligned at 14–19px, and do not replace labels for important actions.

### Motion

Motion is brief and composed: a single subtle hero entrance and restrained hover movement on the portrait, buttons, and project media. Motion communicates affordance; it does not loop decoratively. `prefers-reduced-motion` disables nonessential movement.

### Content and data visualization

Copy is direct and evidence-led. Project descriptions explain the problem or outcome before implementation details. Numbers are used only when supported by project evidence.

## Do's and Don'ts

- **Do:** Preserve the portrait-in-headline signature and one controlled orange phrase.
- **Do:** Use white, muted grey, and spacing—not more cards—to create hierarchy.
- **Don't:** Turn the portfolio into a monochrome SaaS template or dashboard.
- **Don't:** hide scrollbars, reduce essential copy below readable sizes, or rely on hover alone.
