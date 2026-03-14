# MiddleMind Landing Page — Build Spec

## Brand
- Company: MiddleMind (AI Consultancy & Product Studio)
- Tagline: "The Intelligence Layer for Modern Enterprise"
- Colors: Purple #6C5CE7 (primary), Teal #00b894 (accent), Light bg (#FAFBFC, #FFF)
- NO dark mode. Light only, always.
- NO emojis anywhere — not in code, comments, text, or UI.
- Typography: Plus Jakarta Sans (Google Fonts) for headings, Inter for body

## Design Direction
Apple-like precision meets luxury enterprise SaaS. Think Linear.app + Stripe + Apple. Impactful, minimal, future-ready. Heavy whitespace. Clean sharp edges. Subtle animations. Professional.

## Tech Stack
- Next.js 15 App Router (already scaffolded)
- Tailwind CSS (already installed)
- Framer Motion (already installed) — use for ALL animations
- TypeScript
- livekit-client + @livekit/components-react (already installed)

## Files to Create

- app/layout.tsx — fonts (Plus Jakarta Sans + Inter from Google Fonts), metadata
- app/page.tsx — main page assembling all sections
- app/globals.css — minimal resets + CSS custom properties
- app/api/token/route.ts — LiveKit token endpoint
- components/Navbar.tsx
- components/HeroSection.tsx
- components/ProductsSection.tsx
- components/ServicesSection.tsx
- components/MetricsSection.tsx
- components/TechnologySection.tsx
- components/CTASection.tsx
- components/Footer.tsx
- components/VoiceWidget.tsx

## Sections

### 1. NAVBAR
- Logo: "MiddleMind" wordmark in purple
- Nav links: Products, Services, Technology, Contact
- CTA button: "Talk to Maya" (opens voice widget)
- Sticky with glass morphism blur on scroll
- Animated entry from top on load

### 2. HERO SECTION
- Full viewport height
- Large bold headline: "Enterprise AI," / "Engineered to Scale."
- Subheading: "MiddleMind designs and deploys AI systems that transform how enterprises operate — from intelligent voice agents to end-to-end ERP automation."
- Two CTAs: "Explore Products" (primary purple filled) and "Talk to Maya" (ghost/outline)
- Subtle animated mesh/grid background (CSS only, light purple tint)
- Staggered text reveal with Framer Motion (words animate up one by one)
- Abstract floating gradient cards in background (pure CSS, no images needed)

### 3. PRODUCTS SECTION
- Section heading: "What We Build"
- 6 product cards in responsive grid (3 cols desktop, 2 tablet, 1 mobile):
  a. Taliq HR — Voice-first HR platform. 93 voice tools. Saudi compliance built-in.
  b. Qanuni — End-to-end law firm management. ZATCA compliant. Arabic + English.
  c. MRNA Voice — Financial services voice agent. Loans, investments, OTP verification.
  d. pikAui PM — Voice-driven project management. Commands that move the board.
  e. GoNetwork — Real estate intelligence dashboard. 144 documents, zero guesswork.
  f. Taliq Interviewer — AI-powered candidate screening. Scored. Consistent. Fast.
- Each card: gradient top border (purple to teal), product name, category tag, 1-line description, "Learn More" link
- Scroll-triggered stagger animation
- Hover: lift + shadow deepens

### 4. SERVICES SECTION
- Section heading: "What We Do"
- 6 service blocks in 2x3 grid:
  a. AI Consulting — Strategy, architecture, and roadmap for your AI transformation.
  b. Voice Agents — Production voice AI for customer support, HR, legal, and finance.
  c. ERP Integration — Connect Dynamics 365, SAP, and legacy systems to modern AI layers.
  d. RAG Pipelines — Knowledge bases that actually work. Fast retrieval, accurate answers.
  e. Rapid Development — From brief to deployed in days, not months.
  f. Agent Automation — Multi-agent workflows that replace manual processes at scale.
- Clean SVG icon (simple geometric, purple), service name, description
- Alternating scroll reveal

### 5. METRICS SECTION
- Full-width, purple gradient background (#6C5CE7 to #4361ee)
- 4 animated counters (count up on scroll into view):
  - "6" Products in Production
  - "93" Voice Tools Built
  - "5" Enterprise Clients
  - "48h" Average Delivery Time
- White text, large numbers (font-size: 4rem+), label below each
- Use Framer Motion useInView + useMotionValue + useTransform for counting

### 6. TECHNOLOGY SECTION
- Section heading: "Built on the Best Stack"
- Horizontal marquee (infinite scroll CSS animation, both directions for two rows):
  Row 1: LiveKit, Deepgram, OpenAI, Anthropic, Neon Postgres, Next.js
  Row 2 (reverse): Python, Vercel, Tailwind CSS, LangChain, Qdrant, Ollama
- Below marquee: 3 pillars with icon + title + desc:
  - Real-Time Voice (LiveKit + Deepgram)
  - Intelligent Reasoning (GPT-4o + Claude)
  - Enterprise Memory (Qdrant + RAG)

### 7. CTA SECTION
- Clean full-width section
- Heading: "Ready to Build Something Extraordinary?"
- Sub: "Talk to Maya — our AI consultant — right now. No forms, no waiting."
- Large "Start the Conversation" button (opens voice widget)
- Subtle purple tinted background (#F5F3FF)

### 8. FOOTER
- Logo + tagline left
- Links right: Products, Services, Contact
- Bottom bar: copyright "2026 MiddleMind. All rights reserved."
- Clean, minimal, white/light gray

### 9. VOICE WIDGET (Most Important)

State machine: idle -> pre-call -> connecting -> in-call -> post-call

**Floating Button (idle)**
- Fixed bottom-right corner
- Purple pill button: "Talk to Maya"
- Subtle pulse animation on the dot indicator
- On click: open modal

**Modal (full-screen overlay, backdrop blur)**

Pre-call state:
- Maya avatar: gradient circle (purple to teal) with "M" letter centered
- "Maya" heading, "AI Consultant at MiddleMind" subtitle
- 3 capability chips: "Product Inquiries", "Technical Questions", "Partnership Discussions"
- "Start Call" primary button
- "Dismiss" text link

Connecting state:
- Animated pulsing circles (ripple effect, purple)
- "Connecting to Maya..." text

In-call state:
- Large animated breathing orb (CSS keyframes, purple gradient, scales 1.0 to 1.08)
- Status text changes: "Connected" / "Maya is speaking..." / "Listening..."
- Live transcript panel (scrollable div, max-height 200px):
  - Agent lines: left aligned, purple name tag
  - Visitor lines: right aligned, gray
- Bottom controls: Mute button (mic icon SVG) + End Call button (red)
- Call duration timer (MM:SS format)

Post-call state:
- "Call Complete" heading
- Duration display
- Two sections with headings:
  - "Topics Discussed" — bulleted list (auto-parse from transcript)
  - "Next Steps" — static suggestions: ["Review our product portfolio", "Schedule a technical deep-dive", "Request a custom demo"]
- Two buttons: "Contact Us" (mailto:hello@middlemind.ai) and "New Call"

**LiveKit Integration:**
- Fetch token from GET /api/token?room=maya-room&username=visitor-{timestamp}
- LiveKit URL: wss://agent-ls5zwwm3.livekit.cloud
- Use @livekit/components-react: LiveKitRoom, RoomAudioRenderer, useVoiceAssistant, useParticipants
- Handle RoomEvent.Disconnected -> move to post-call state
- Capture transcript from data channel messages (topic: "transcription") or from participant track metadata
- If no real transcript available, use placeholder summary

**API Route (app/api/token/route.ts):**
```typescript
// Use these exact credentials:
const LIVEKIT_API_KEY = "APIuZr5fSExnTri"
const LIVEKIT_API_SECRET = process.env.LIVEKIT_API_SECRET || "your-secret-here"
// Create AccessToken with canPublish + canSubscribe grants
// Return JSON: { token: string }
```

## Animation Rules (Framer Motion)
- Page load: navbar slides from y:-20, hero staggers word by word (0.08s between)
- Scroll reveals: whileInView={{ opacity:1, y:0 }}, initial={{ opacity:0, y:30 }}, viewport={{ once:true }}
- Card hover: whileHover={{ y:-4, scale:1.02 }}
- Voice modal: AnimatePresence, scale 0.95->1, opacity 0->1
- Metrics: count from 0 to target over 2s when in view
- Duration: 0.4-0.6s default, easing: [0.25, 0.1, 0.25, 1]
- Marquee: pure CSS animation (no Framer for performance)

## Critical Rules
- LIGHT THEME ONLY — no dark backgrounds anywhere
- No emojis in any file
- Plus Jakarta Sans for headings (700, 800)
- Inter for body
- Tailwind classes only, no inline styles
- "use client" only on interactive components
- Make it Vercel-deployable (no local-only deps)
- The voice widget must be production-quality — it is the primary conversion tool

## When Done
Run: npx next build
Then notify: openclaw system event --text "Done: MiddleMind Next.js landing built and verified" --mode now
