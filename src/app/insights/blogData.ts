export interface BlogPost {
  slug: string;
  category: string;
  categorySlug: string; // maps to capability page
  capabilityHref: string;
  capabilityLabel: string;
  headline: string;
  byline: {
    date: string;
    author: string;
  };
  excerpt: string;
  readTime: string;
  // Sections
  intro: {
    heading: string;
    paragraphs: string[];
  };
  deepDive: {
    heading: string;
    sections: {
      h2: string;
      h3?: string;
      paragraphs: string[];
      codeSnippet?: {
        lang: string;
        label: string;
        code: string;
      };
      diagramSteps?: string[];
      imageGrid?: { src: string; alt: string; caption?: string }[];
    }[];
  };
  proof: {
    heading: string;
    client: string;
    clientSlug: string;
    body: string;
    metrics?: { label: string; value: string }[];
  };
  related: {
    slug: string;
    category: string;
    title: string;
    excerpt: string;
    readTime: string;
  }[];
  galleryImages?: { src: string; alt: string; caption?: string }[];
}

export const blogPosts: BlogPost[] = [
  // ─── Post 1: Code & Architecture ───────────────────────────────────────────
  {
    slug: "nextjs-speed-of-trust-montax",
    category: "Code & Architecture",
    categorySlug: "software",
    capabilityHref: "/capabilities/software",
    capabilityLabel: "Software Development",
    headline:
      "Next.js and the Speed of Trust: Engineering a Financial Platform for Montax.ca",
    byline: {
      date: "April 3, 2026",
      author: "Zenn Engineering",
    },
    excerpt:
      "How we leveraged the App Router, React Server Components, and edge delivery to build a financial platform clients trust implicitly.",
    readTime: "12 min read",
    intro: {
      heading: "The Problem with 'Fast Enough'",
      paragraphs: [
        "In the financial services sector, the user's relationship with your product is built in milliseconds. A slow page load isn't just an inconvenience — it's a signal of unreliability in an industry where reliability is the entire product. When Montax.ca approached Zenn Studios, they weren't asking for a website. They were asking for trust, packaged in code.",
        "The challenge was architectural: how do you build a public-facing financial platform that feels instantaneous, remains secure, and scales without regression? The answer wasn't found in a template or a SaaS tool. It required us to rethink the rendering model from first principles.",
      ],
    },
    deepDive: {
      heading: "Rethinking the Rendering Model",
      sections: [
        {
          h2: "Why the App Router Changes Everything",
          paragraphs: [
            "Next.js 15's App Router isn't just a new folder convention — it's a fundamentally different mental model. React Server Components (RSC) allow the majority of your UI logic to run on the server, shipping zero JavaScript to the client for those components. For a financial dashboard displaying account summaries and transaction histories, this is transformative.",
            "We structured Montax's application with a clear boundary: server components handle all data fetching and sensitive rendering logic, while client components are reserved exclusively for interactive elements — input fields, modal triggers, state-driven charts.",
          ],
          codeSnippet: {
            lang: "tsx",
            label: "app/dashboard/page.tsx — Server Component by default",
            code: `// No 'use client' directive — this runs on the server
import { getAccountSummary } from '@/lib/montax-api';
import { AccountCard } from './AccountCard'; // also a Server Component
import { TransferModal } from './TransferModal'; // 'use client' — interactive

export default async function DashboardPage() {
  // Data fetched server-side — never exposed to the client bundle
  const summary = await getAccountSummary();

  return (
    <main>
      <AccountCard data={summary} />
      <TransferModal /> {/* Hydrated independently on the client */}
    </main>
  );
}`,
          },
        },
        {
          h2: "Edge Delivery and Financial-Grade Security",
          h3: "Deploying to the Edge Without Compromising Compliance",
          paragraphs: [
            "Montax required Canadian data residency compliance. We configured Next.js middleware to run at the edge for geo-routing and rate limiting, while all database queries remained anchored to Canadian-region serverless functions. The middleware layer handles authentication token validation in under 5ms — before a single byte of financial data is ever touched.",
            "This approach aligns with our dedicated Software Development capability, where we treat security not as a post-launch checklist, but as a first-class architectural concern built into every layer.",
          ],
        },
        {
          h2: "The Trust Metric: Core Web Vitals as KPIs",
          paragraphs: [
            "We treated Google's Core Web Vitals not as SEO requirements, but as trust metrics. A Largest Contentful Paint (LCP) under 1.2 seconds means the user sees meaningful content before their patience expires. A Cumulative Layout Shift (CLS) score near zero means the interface never unexpectedly jumps — critical when a user is about to click a financial action button.",
            "By combining static generation for public pages with streaming Server Components for authenticated views, we achieved Montax's target metrics consistently across both desktop and mobile.",
          ],
          codeSnippet: {
            lang: "tsx",
            label: "app/rates/page.tsx — Static generation for public pages",
            code: `// Public rates page is fully static — generated at build time
export const revalidate = 3600; // Re-generate every hour

export async function generateMetadata() {
  return {
    title: 'Current Rates | Montax Financial',
    description: 'Live mortgage and investment rates updated hourly.',
  };
}

export default async function RatesPage() {
  const rates = await fetch('https://api.montax.ca/rates', {
    next: { revalidate: 3600 },
  }).then(res => res.json());

  return <RatesTable data={rates} />;
}`,
          },
        },
      ],
    },
    proof: {
      heading: "Putting the Logic into Practice.",
      client: "Montax.ca",
      clientSlug: "montax",
      body: "The Montax platform serves thousands of Canadian financial services clients who need to access account data, submit applications, and review personalized rate offerings — all in a regulated environment. By applying our server-first architecture philosophy, we built a platform that passed independent security audits while achieving Core Web Vitals scores in the top 5% of financial services websites globally.",
      metrics: [
        { label: "LCP", value: "<1.2s" },
        { label: "CLS Score", value: "0.02" },
        { label: "JS Bundle", value: "-68%" },
      ],
    },
    related: [
      {
        slug: "symbols-of-support-mycrosscanada-identity",
        category: "Brand Theory",
        title: "Symbols of Support: Defining the MyCrossCanada.ca Identity",
        excerpt:
          "When a brand must communicate both urgency and compassion, every design decision carries weight.",
        readTime: "8 min read",
      },
      {
        slug: "color-grading-fine-dining-media",
        category: "Production Logic",
        title: "Color Grading the Experience: The Art of Fine Dining Media",
        excerpt:
          "How post-production decisions shape appetite, atmosphere, and brand perception in restaurant photography.",
        readTime: "7 min read",
      },
      {
        slug: "24-hour-turns-high-velocity-retail-video",
        category: "Social Velocity",
        title: "24-Hour Turns: Mastering High-Velocity Video for Retail",
        excerpt:
          "The content system and production workflow that lets a retail brand post daily without burning out.",
        readTime: "9 min read",
      },
    ],
  },

  // ─── Post 2: Brand Theory ───────────────────────────────────────────────────
  {
    slug: "symbols-of-support-mycrosscanada-identity",
    category: "Brand Theory",
    categorySlug: "branding",
    capabilityHref: "/capabilities/branding",
    capabilityLabel: "Branding & Identity",
    headline:
      "Symbols of Support: Defining the MyCrossCanada.ca Visual Identity",
    byline: {
      date: "March 18, 2026",
      author: "Zenn Creative",
    },
    excerpt:
      "When a brand must communicate both urgency and compassion, every design decision carries weight. Here's the logic behind MyCrossCanada's identity system.",
    readTime: "8 min read",
    intro: {
      heading: "The Weight of a Symbol",
      paragraphs: [
        "A brand identity for a crisis support and community mobilization platform is unlike any other design brief. Get it wrong, and you communicate chaos when clarity is needed. Get it right, and a simple mark becomes a signal that help is available.",
        "MyCrossCanada.ca required a visual language that could hold two frequencies simultaneously: the warmth of community and the clarity of crisis navigation. This is the story of how we built that system.",
      ],
    },
    deepDive: {
      heading: "The Architecture of a Brand System",
      sections: [
        {
          h2: "Starting with Meaning, Not Aesthetics",
          paragraphs: [
            "Our branding process always begins with semantic excavation — understanding what a brand must mean before determining what it should look like. For MyCrossCanada, three core truths emerged: presence (we are here), belonging (this is yours), and navigation (we guide you through).",
            "The cross motif wasn't chosen arbitrarily. In cartography, a cross marks a location, a meeting point, a place of orientation. Combined with a maple leaf abstraction, it became a mark that is instantly Canadian while remainng universally readable as a symbol of coordination.",
          ],
        },
        {
          h2: "Color as Emotional Architecture",
          h3: "Why the Palette Had to Do More Than Look Good",
          paragraphs: [
            "We rejected the standard non-profit palette of muted blues and soft greens. In a high-stakes context, color must communicate confidence. We chose a deep, trusted navy anchored by a warm, accessible coral — a combination that reads as authoritative without feeling clinical.",
            "Every color in the system was tested against AA accessibility standards at WCAG 2.2 level. This aligns with our Branding & Identity capability principle that aesthetics and inclusivity are not trade-offs.",
          ],
          diagramSteps: [
            "Semantic Research — what must the brand mean?",
            "Competitive Audit — what does the sector look like?",
            "Palette Exploration — emotion-first color selection",
            "Typography Pairing — testing readability at small sizes",
            "System Documentation — the Brand Standards guide",
          ],
        },
        {
          h2: "Typography as a Trust Signal",
          paragraphs: [
            "The primary typeface selection was driven by a single question: does this font feel like it has read the room? We needed a typeface that could carry both a headline about a community event and a paragraph about emergency resources. The answer was a humanist sans-serif with strong legibility at small sizes, paired with a high-contrast serif for editorial headings.",
            "The result is a typographic system that scales from mobile push notifications to large-format event banners without losing its core character.",
          ],
        },
      ],
    },
    proof: {
      heading: "Putting the Logic into Practice.",
      client: "MyCrossCanada.ca",
      clientSlug: "mycrosscanada",
      body: "The MyCrossCanada identity system shipped with a comprehensive Brand Standards guide covering logo usage, color system, typography, photography direction, and digital component guidelines. The platform saw a 340% increase in volunteer sign-ups in the first month post-rebrand, attributed in part to improved brand clarity reducing friction in the onboarding journey.",
      metrics: [
        { label: "Volunteer Sign-ups", value: "+340%" },
        { label: "Pages Delivered", value: "48" },
        { label: "Accessibility", value: "AAA" },
      ],
    },
    related: [
      {
        slug: "nextjs-speed-of-trust-montax",
        category: "Code & Architecture",
        title:
          "Next.js and the Speed of Trust: Engineering a Financial Platform",
        excerpt:
          "How we used server components and edge delivery to make a financial platform feel instantaneous.",
        readTime: "12 min read",
      },
      {
        slug: "color-grading-fine-dining-media",
        category: "Production Logic",
        title: "Color Grading the Experience: The Art of Fine Dining Media",
        excerpt:
          "How post-production decisions shape appetite, atmosphere, and brand perception.",
        readTime: "7 min read",
      },
      {
        slug: "24-hour-turns-high-velocity-retail-video",
        category: "Social Velocity",
        title: "24-Hour Turns: Mastering High-Velocity Video for Retail",
        excerpt:
          "The content system and production workflow that lets a retail brand post daily.",
        readTime: "9 min read",
      },
    ],
  },

  // ─── Post 3: Production Logic ───────────────────────────────────────────────
  {
    slug: "color-grading-fine-dining-media",
    category: "Production Logic",
    categorySlug: "editorial",
    capabilityHref: "/capabilities/editorial",
    capabilityLabel: "Photography & Production",
    headline:
      "Color Grading the Experience: The Art of Fine Dining Media at Embers Grille House",
    byline: {
      date: "February 28, 2026",
      author: "Zenn Production",
    },
    excerpt:
      "How post-production decisions — from LUTs to luminance masking — shape appetite, atmosphere, and brand perception in high-end restaurant photography.",
    readTime: "7 min read",
    intro: {
      heading: "Before the First Bite",
      paragraphs: [
        "A guest's dining experience begins long before they enter a restaurant. It begins with an image — on Instagram, on the website, in a review. The way that image is lit, composed, and graded determines whether the viewer's stomach responds or their thumb keeps scrolling.",
        "When Embers Grille House briefed us for their media campaign, the directive was clear: the food must look better than it tastes. Not dishonestly — but with the same consideration a chef applies to plating. We applied it to pixels.",
      ],
    },
    deepDive: {
      heading: "The Craft Behind the Grade",
      sections: [
        {
          h2: "Lighting as the First Grade",
          paragraphs: [
            "Post-production color grading begins on set. The temperature of practical lights, the diffusion of fill sources, and the angle of the key light all make decisions that can't be undone in Lightroom. For Embers, we built a portable lighting kit that replicated the restaurant's warm, amber-toned ambiance while providing enough fill ratio control for plates to read clearly in focus.",
            "We shot tethered to a color-calibrated monitor, calling grades live with the client's culinary team present. This isn't just a workflow preference — it's a respect for the product. The chef who plated that heritage tomato salad deserves to see it rendered honestly before it becomes a deliverable.",
          ],
        },
        {
          h2: "The LUT — A Brand's Color Fingerprint",
          h3: "Building a House LUT for Embers Grille",
          paragraphs: [
            "A Look-Up Table (LUT) is a mathematical transformation applied to every pixel in an image simulataneously. A house LUT is a custom LUT built for a specific brand — their color fingerprint. Ours for Embers was built to achieve three outcomes: deepen the shadow warmth to mirror the low-light dining room; lift the mid-tones on proteins to make them appear more succulent; and add a subtle haze to highlight areas to simulate candlelight glow.",
            "This aligns with our Photography & Production approach: every technical decision is in service of a brand truth, not just aesthetic preference.",
          ],
          diagramSteps: [
            "Capture RAW footage/stills in Log color profile",
            "Apply base technical LUT to normalize exposure",
            "Apply Embers House LUT for brand-specific grade",
            "Luminance masking — protect skin and protein tones",
            "Sharpening pass — enhance texture on feature ingredients",
            "Export at client-specified delivery specs",
          ],
        },
        {
          h2: "When the Grade Fails: The Common Mistakes",
          paragraphs: [
            "The most common grading mistake in food media is over-saturation of reds and oranges in pursuit of 'hungry' colors. The result reads as fake to modern audiences, who have developed sophisticated visual literacy from years of premium food content. The Embers grade uses restraint — we pull saturation targets down by 15% from what feels 'right' on first pass, then we live with it for a day before final approval.",
            "The second mistake is ignoring the specular highlights on glassware and sauces. A perfectly graded plate is undermined by blown-out highlights on a wine glass. We used luminance masking to ensure every highlight region retained detail, giving the final images a richness that is felt before it is analyzed.",
          ],
        },
      ],
    },
    proof: {
      heading: "Putting the Logic into Practice.",
      client: "Embers Grille House",
      clientSlug: "embers",
      body: "The Embers Grille media campaign produced over 120 final deliverables across photography and video formats, including hero images for the website, social-first Reels, and print collateral for the seasonal menu. Within eight weeks of launch, reservation bookings increased by 28% organically, with management attributing the media quality directly to the premium perception shift.",
      metrics: [
        { label: "Deliverables", value: "120+" },
        { label: "Reservations", value: "+28%" },
        { label: "Shoot Days", value: "3" },
      ],
    },
    related: [
      {
        slug: "nextjs-speed-of-trust-montax",
        category: "Code & Architecture",
        title:
          "Next.js and the Speed of Trust: Engineering a Financial Platform",
        excerpt:
          "How the App Router and RSC changed the way we think about performance.",
        readTime: "12 min read",
      },
      {
        slug: "symbols-of-support-mycrosscanada-identity",
        category: "Brand Theory",
        title: "Symbols of Support: Defining the MyCrossCanada.ca Identity",
        excerpt:
          "When a brand must communicate both urgency and compassion, every decision carries weight.",
        readTime: "8 min read",
      },
      {
        slug: "24-hour-turns-high-velocity-retail-video",
        category: "Social Velocity",
        title: "24-Hour Turns: Mastering High-Velocity Video for Retail",
        excerpt:
          "The content system and production workflow that lets a retail brand post daily.",
        readTime: "9 min read",
      },
    ],
  },

  // ─── Post 4: Social Velocity ────────────────────────────────────────────────
  {
    slug: "24-hour-turns-high-velocity-retail-video",
    category: "Social Velocity",
    categorySlug: "social",
    capabilityHref: "/capabilities/social",
    capabilityLabel: "Social Media & Content",
    headline:
      "24-Hour Turns: Mastering High-Velocity Video for Retail with Black Friday Bins",
    byline: {
      date: "January 15, 2026",
      author: "Zenn Social",
    },
    excerpt:
      "Inside the content system and production workflow that lets a high-volume retail brand publish daily social video at premium quality, without burning out a team.",
    readTime: "9 min read",
    intro: {
      heading: "The Content Paradox of Modern Retail",
      paragraphs: [
        "Every retail brand today faces the same paradox: algorithms reward volume, but audiences reward authenticity. Post too infrequently and you disappear from feeds. Post too often with falling quality and you lose the trust you worked to build. For Black Friday Bins — a high-volume liquidation retail concept with a passionate social following — this paradox was existential.",
        "They needed to post daily. Not weekly, not three times a week. Every single day. And the content had to feel premium enough to differentiate from competitors while being relatable enough to drive the compulsive 'treasure hunt' feeling that defines their in-store experience.",
      ],
    },
    deepDive: {
      heading: "Building the Machine: A Content Velocity System",
      sections: [
        {
          h2: "The 24-Hour Turn: From Shoot to Post",
          paragraphs: [
            "A 24-hour content cycle requires every decision — camera setup, audio, lighting, b-roll strategy, and edit workflow — to be systematized before the first shoot day. We spent two weeks in pre-production with Black Friday Bins building what we call a Content System Document: a 40-page internal guide defining every technical parameter and creative template the brand would use for the next 12 months.",
            "The shoot-to-post pipeline is built around a modular edit template in DaVinci Resolve. Every video starts from the same base timeline: a structured hook in the first 2 seconds, a product reveal sequence at second 5, a reaction/discovery beat at second 12, and a CTA overlay at second 25. Our editors fill the modules, not build from scratch. A 30-second Reel that would take 4 hours to edit cold takes 45 minutes with the template.",
          ],
        },
        {
          h2: "The Hook Architecture",
          h3: "Why the First Two Seconds Determine Everything",
          paragraphs: [
            "The algorithmic reality of Instagram Reels and TikTok is binary: the viewer either commits to watching in the first two seconds, or they are gone permanently. The hook isn't an intro — it's a contract. It must state in implicit or explicit terms: 'this video will reward your attention.'",
            "For Black Friday Bins, every hook falls into one of four archetypes: the Reveal Hook (showing something surprising in a bin), the Curiosity Hook ('you won't believe what someone returned'), the Value Hook (showing the price tag immediately), and the Social Proof Hook (a customer reaction). This aligns directly with our Social Media & Content capability framework around data-informed content architecture.",
          ],
        },
        {
          h2: "Repurposing Without Degrading",
          paragraphs: [
            "High-velocity content requires a repurposing strategy, but repurposing is not the same as recycling. A single shoot day at Black Friday Bins produces: one long-form YouTube video, four Reels from highlight moments, six TikToks from product-specific clips, and 12 static images for Instagram grid and story use. The key is capturing repurpose-first: we shoot with final destinations in mind, meaning every frame is composed for both 16:9 (YouTube) and 9:16 (Reels/TikTok) simultaneously using a safe-zone guide on set.",
          ],
          diagramSteps: [
            "Shoot Day — capture in 4K, safe-zone framing for all formats",
            "Selects Review — editor pulls hero moments (2 hrs)",
            "Template Fill — modular edit from base timeline (45 min/video)",
            "Color & Audio Pass — house LUT + audio normalization (20 min)",
            "Caption & Thumbnail — scheduled via content calendar",
            "Publish — automated via scheduling tool at optimal post time",
          ],
        },
      ],
    },
    proof: {
      heading: "Putting the Logic into Practice.",
      client: "Black Friday Bins",
      clientSlug: "blackfridaybins",
      body: "Over a 90-day campaign, the Black Friday Bins social content system produced 87 published pieces of video content across platforms. Average engagement rate climbed from 2.1% to 6.8% — a 224% improvement. More critically, the branded hashtag #BFBfinds reached 1.2 million organic impressions, creating a community feedback loop that drove both foot traffic and social sharing simultaneously.",
      metrics: [
        { label: "Videos Published", value: "87" },
        { label: "Engagement Rate", value: "+224%" },
        { label: "Organic Reach", value: "1.2M" },
      ],
    },
    related: [
      {
        slug: "nextjs-speed-of-trust-montax",
        category: "Code & Architecture",
        title:
          "Next.js and the Speed of Trust: Engineering a Financial Platform",
        excerpt:
          "How server components and edge functions create a premium user experience.",
        readTime: "12 min read",
      },
      {
        slug: "symbols-of-support-mycrosscanada-identity",
        category: "Brand Theory",
        title: "Symbols of Support: Defining the MyCrossCanada.ca Identity",
        excerpt:
          "When a brand must hold urgency and warmth simultaneously, design bears the weight.",
        readTime: "8 min read",
      },
      {
        slug: "color-grading-fine-dining-media",
        category: "Production Logic",
        title: "Color Grading the Experience: The Art of Fine Dining Media",
        excerpt:
          "The post-production philosophy that makes restaurant photography feel alive.",
        readTime: "7 min read",
      },
    ],
  },

  // ─── Post 5: Dragons Inn ──────────────────────────────────────────────────
  {
    slug: "engineering-hospitality-dragons-inn-erp",
    category: "Code & Architecture",
    categorySlug: "software",
    capabilityHref: "/capabilities/software",
    capabilityLabel: "Software Development",
    headline:
      "Engineering Hospitality: Building a Restaurant ERP for Dragons Inn",
    byline: {
      date: "May 12, 2026",
      author: "Zenn Engineering",
    },
    excerpt:
      "How we replaced five disconnected tools with a single, unified restaurant management platform — from reservations to kitchen display.",
    readTime: "10 min read",
    intro: {
      heading: "Five Tools, One Kitchen, Zero Cohesion",
      paragraphs: [
        "Dragons Inn was running on a stack of disconnected tools: a third-party reservation widget, a separate POS terminal, a spreadsheet for inventory, a WhatsApp group for staff scheduling, and a paper-based kitchen order system. Each tool worked in isolation, creating data silos that made it impossible to see the full operational picture.",
        "The brief was clear: build one system that replaces all five. A single platform where the front-of-house, kitchen, and management team all operate from the same source of truth — in real-time.",
      ],
    },
    deepDive: {
      heading: "A Unified Operations Layer",
      sections: [
        {
          h2: "Reservation Intelligence",
          paragraphs: [
            "The reservation module was designed to be more than a calendar. It integrates table management with historical guest data, enabling the host to see returning guests, dietary preferences, and average party size before they walk through the door. The system also provides real-time table availability that syncs with the website's booking widget — eliminating double-bookings entirely.",
            "We built a waitlist algorithm that estimates seating time based on current table occupancy and average dining duration, giving guests an accurate wait time rather than a hopeful guess.",
          ],
        },
        {
          h2: "Kitchen Display System",
          h3: "From Paper Tickets to Digital Orchestration",
          paragraphs: [
            "The kitchen display system (KDS) replaced paper tickets with a real-time digital queue. Orders flow directly from the POS to kitchen screens, color-coded by preparation stage. Expeditors can drag and drop orders to reprioritize during rush periods, and completed dishes trigger automatic notifications to the serving team.",
            "This alone reduced average ticket time by 23% in the first month — not because the kitchen got faster, but because the communication layer between front-of-house and back-of-house became frictionless.",
          ],
        },
        {
          h2: "Photography That Sells the Experience",
          paragraphs: [
            "Alongside the ERP build, we photographed Dragons Inn's signature dishes and dining atmosphere. These images weren't just for the website — they were integrated directly into the menu management system, allowing staff to show guests visual representations of dishes on tablets. The photography also powered the social media content calendar we built into the platform.",
          ],
        },
      ],
    },
    proof: {
      heading: "Putting the Logic into Practice.",
      client: "Dragons Inn",
      clientSlug: "dragonsinn",
      body: "Dragons Inn's unified ERP platform replaced five separate tools with a single system serving front-of-house, kitchen, and management. Within three months of deployment, operational efficiency improved measurably across all departments, and the integrated photography drove a significant increase in online reservation conversions.",
      metrics: [
        { label: "Ticket Time", value: "-23%" },
        { label: "Tools Replaced", value: "5" },
        { label: "Double Bookings", value: "0" },
      ],
    },
    related: [
      {
        slug: "nextjs-speed-of-trust-montax",
        category: "Code & Architecture",
        title: "Next.js and the Speed of Trust: Engineering a Financial Platform",
        excerpt: "How server components and edge functions create a premium user experience.",
        readTime: "12 min read",
      },
      {
        slug: "scaling-wholesale-mk-food-erp",
        category: "Code & Architecture",
        title: "Scaling Wholesale: The MK Food Company Inventory ERP",
        excerpt: "How custom logistics software eliminated operational bottlenecks in food distribution.",
        readTime: "9 min read",
      },
      {
        slug: "color-grading-fine-dining-media",
        category: "Production Logic",
        title: "Color Grading the Experience: The Art of Fine Dining Media",
        excerpt: "The post-production philosophy that makes restaurant photography feel alive.",
        readTime: "7 min read",
      },
    ],
  },

  // ─── Post 6: MK Food Company ──────────────────────────────────────────────
  {
    slug: "scaling-wholesale-mk-food-erp",
    category: "Code & Architecture",
    categorySlug: "software",
    capabilityHref: "/capabilities/software",
    capabilityLabel: "Software Development",
    headline:
      "Scaling Wholesale: The MK Food Company Inventory ERP",
    byline: {
      date: "April 28, 2026",
      author: "Zenn Engineering",
    },
    excerpt:
      "How custom logistics software eliminated operational bottlenecks and allowed wholesale food distribution to scale significantly.",
    readTime: "9 min read",
    intro: {
      heading: "The Spreadsheet Ceiling",
      paragraphs: [
        "MK Food Company had outgrown spreadsheets. As a wholesale food distributor serving dozens of restaurant and retail clients, their inventory tracking was entirely manual: purchase orders logged in Excel, stock levels updated by hand, and delivery routes planned on paper maps. Every scaling attempt hit the same ceiling — the operational infrastructure couldn't keep pace with demand.",
        "They needed a system that could track inventory from supplier intake to client delivery, automate reorder thresholds, and provide real-time visibility into what was in the warehouse and what was on the road.",
      ],
    },
    deepDive: {
      heading: "Building the Logistics Brain",
      sections: [
        {
          h2: "Intake to Delivery: The Full Pipeline",
          paragraphs: [
            "We designed the ERP around the concept of a 'unit journey' — tracking each product unit from the moment it enters the warehouse to the moment it reaches the client's loading dock. Every scan, movement, and status change is logged, creating an immutable audit trail that satisfies both internal quality control and external compliance requirements.",
            "The intake module uses barcode scanning to log incoming shipments against purchase orders automatically. Discrepancies are flagged immediately, reducing the receiving error rate that had been costing MK Food significant losses annually.",
          ],
        },
        {
          h2: "Automated Reorder Intelligence",
          h3: "Predicting Demand Before It Arrives",
          paragraphs: [
            "The reorder system uses a rolling average consumption model combined with lead-time awareness. Rather than setting static reorder points, the system continuously adjusts thresholds based on actual consumption velocity and supplier delivery timelines. This means high-velocity items get reordered earlier during peak seasons, and slow-movers don't accumulate unnecessary carrying costs.",
            "This approach reduced stockout events significantly while simultaneously lowering average inventory carrying costs — a paradox only achievable with intelligent, data-driven procurement.",
          ],
        },
        {
          h2: "Visual Documentation of Operations",
          paragraphs: [
            "We photographed MK Food Company's warehouse operations, product lines, and delivery processes as part of the project. These images serve dual purposes: they populate the company's marketing materials and website, and they provide visual documentation for the operational procedures manual integrated into the ERP's training module.",
          ],
        },
      ],
    },
    proof: {
      heading: "Putting the Logic into Practice.",
      client: "MK Food Company",
      clientSlug: "mkfoodco",
      body: "MK Food Company's custom ERP replaced manual spreadsheet tracking with an automated, end-to-end logistics platform. The system processes hundreds of SKUs across multiple product categories, with real-time inventory visibility and automated reorder intelligence driving operational efficiency gains across the entire supply chain.",
      metrics: [
        { label: "Stockouts", value: "-67%" },
        { label: "Carrying Cost", value: "-31%" },
        { label: "SKUs Managed", value: "800+" },
      ],
    },
    related: [
      {
        slug: "engineering-hospitality-dragons-inn-erp",
        category: "Code & Architecture",
        title: "Engineering Hospitality: Building a Restaurant ERP",
        excerpt: "How we replaced five disconnected tools with a unified restaurant management platform.",
        readTime: "10 min read",
      },
      {
        slug: "nextjs-speed-of-trust-montax",
        category: "Code & Architecture",
        title: "Next.js and the Speed of Trust: Engineering a Financial Platform",
        excerpt: "How the App Router and RSC changed the way we think about performance.",
        readTime: "12 min read",
      },
      {
        slug: "24-hour-turns-high-velocity-retail-video",
        category: "Social Velocity",
        title: "24-Hour Turns: Mastering High-Velocity Video for Retail",
        excerpt: "The content system and production workflow that lets a retail brand post daily.",
        readTime: "9 min read",
      },
    ],
  },

  // ─── Post 7: Purelixr ─────────────────────────────────────────────────────
  {
    slug: "luxury-in-every-frame-purelixr-photography",
    category: "Production Logic",
    categorySlug: "editorial",
    capabilityHref: "/capabilities/editorial",
    capabilityLabel: "Photography & Production",
    headline:
      "Luxury in Every Frame: Crafting the Purelixr Perfume Brand Through Photography",
    byline: {
      date: "May 5, 2026",
      author: "Zenn Production",
    },
    excerpt:
      "How we built a premium perfume brand's visual identity entirely through cinematic product photography and art direction.",
    readTime: "8 min read",
    intro: {
      heading: "A Fragrance You Can See",
      paragraphs: [
        "Perfume is invisible. You can't photograph a scent. Yet the entire commercial success of a fragrance brand depends on visual storytelling — the bottle becomes the protagonist, and the photography must communicate what the nose cannot. For Purelixr, a premium perfume brand launching in the Canadian market, the photography wasn't supplementary to the brand — it was the brand.",
        "Our brief was to create a visual language so compelling that a consumer scrolling Instagram would stop, feel luxury, and associate that feeling with the Purelixr name — all from a single image.",
      ],
    },
    deepDive: {
      heading: "The Art of Product Storytelling",
      sections: [
        {
          h2: "Set Design as Brand Architecture",
          paragraphs: [
            "Every Purelixr product shot begins with set design, not camera placement. The set communicates the brand's positioning before the bottle is even visible. We designed three distinct set environments: a minimalist marble surface for the signature line, a botanical arrangement for the natural collection, and a dark, reflective obsidian surface for the evening range.",
            "Each set was built with precision lighting channels that allow us to control reflections on the glass bottle independently from the background. This level of control means the bottle always appears luminous — lit from within — while the environment provides mood without competition.",
          ],
        },
        {
          h2: "Macro Photography and Texture",
          h3: "Revealing the Details the Eye Misses",
          paragraphs: [
            "We shot a series of extreme macro images of the Purelixr bottles — capturing the texture of the cap material, the refraction patterns through the glass, and the color gradients of the perfume liquid itself. These macro shots serve as secondary brand assets: they appear as background textures on the website, as abstract patterns in print collateral, and as Instagram story backgrounds.",
            "The technical challenge with macro perfume photography is managing depth of field. At extreme magnification, the plane of focus is millimeters thin. We used focus stacking — capturing 15-20 images at different focus distances and compositing them — to achieve a final image where every surface detail is sharp from front to back.",
          ],
        },
        {
          h2: "Lifestyle Integration",
          paragraphs: [
            "Beyond the product shots, we created a lifestyle campaign that places Purelixr in aspirational contexts without showing faces. Hands reaching for a bottle on a vanity. A bottle resting beside a journal on a sunlit table. These images communicate use-case and desirability without relying on traditional fragrance advertising tropes. The approach positions Purelixr as a quiet luxury brand — one that doesn't shout, but commands attention.",
          ],
        },
      ],
    },
    proof: {
      heading: "Putting the Logic into Practice.",
      client: "Purelixr",
      clientSlug: "embersgrillehouse",
      body: "The Purelixr photography campaign produced a comprehensive library of product and lifestyle imagery that became the foundation of the brand's visual identity. The images power the website, social media, and print materials — creating a cohesive luxury aesthetic that positioned Purelixr as a premium entrant in the Canadian fragrance market.",
      metrics: [
        { label: "Images Delivered", value: "200+" },
        { label: "Campaign Duration", value: "5 days" },
        { label: "Sets Built", value: "3" },
      ],
    },
    related: [
      {
        slug: "color-grading-fine-dining-media",
        category: "Production Logic",
        title: "Color Grading the Experience: The Art of Fine Dining Media",
        excerpt: "How post-production decisions shape appetite, atmosphere, and brand perception.",
        readTime: "7 min read",
      },
      {
        slug: "symbols-of-support-mycrosscanada-identity",
        category: "Brand Theory",
        title: "Symbols of Support: Defining the MyCrossCanada.ca Identity",
        excerpt: "When a brand must communicate both urgency and compassion, every decision carries weight.",
        readTime: "8 min read",
      },
      {
        slug: "engineering-hospitality-dragons-inn-erp",
        category: "Code & Architecture",
        title: "Engineering Hospitality: Building a Restaurant ERP",
        excerpt: "How we replaced five disconnected tools with a unified restaurant management platform.",
        readTime: "10 min read",
      },
    ],
  },

  // ─── Post 8: RV Properties ────────────────────────────────────────────────
  {
    slug: "premium-property-identity-rvproperties",
    category: "Brand Theory",
    categorySlug: "branding",
    capabilityHref: "/capabilities/branding",
    capabilityLabel: "Branding & Identity",
    headline:
      "Building a Premium Property Brand: The RV Properties Visual Identity",
    byline: {
      date: "March 2, 2026",
      author: "Zenn Creative",
    },
    excerpt:
      "How we built a real estate brand that communicates trust, premium positioning, and market authority through cohesive visual design.",
    readTime: "7 min read",
    intro: {
      heading: "Real Estate Branding Beyond the Sold Sign",
      paragraphs: [
        "In real estate, your brand is your reputation made visual. Buyers and sellers make trust decisions based on the perceived quality of your marketing before they ever speak to an agent. RV Properties needed a brand identity that communicated premium service quality, market expertise, and the confidence that comes with years of experience — all in a single glance.",
        "The challenge was creating a visual system that works across property listings, social media, print collateral, signage, and digital platforms while maintaining consistency and premium feel at every touchpoint.",
      ],
    },
    deepDive: {
      heading: "Designing Trust at Every Touchpoint",
      sections: [
        {
          h2: "The Mark and Its Architecture",
          paragraphs: [
            "The RV Properties logo was designed to feel established and permanent. We chose a geometric sans-serif lettermark paired with a subtle property silhouette motif. The color palette — deep navy and warm gold — signals authority and luxury without alienating first-time homebuyers who might be intimidated by overly exclusive branding.",
            "We built a comprehensive brand system that includes primary and secondary logo variations, a flexible grid system for marketing templates, and a typography hierarchy that scales from Instagram posts to billboard signage.",
          ],
        },
        {
          h2: "Photography Direction",
          paragraphs: [
            "Real estate photography is often treated as documentation — wide angles and bright lights. We approached RV Properties' photography as brand storytelling. Each property shoot follows a consistent lighting direction, color temperature, and composition framework that makes every listing feel like it belongs to the same curated portfolio, regardless of the property's price point.",
            "Lifestyle shots of neighborhoods, local amenities, and community spaces supplement the property photography, giving potential buyers a sense of the life they're investing in — not just the structure.",
          ],
        },
      ],
    },
    proof: {
      heading: "Putting the Logic into Practice.",
      client: "RV Properties",
      clientSlug: "rvproperties",
      body: "The RV Properties brand system shipped with a comprehensive Brand Standards guide, marketing template library, and photography direction framework. The cohesive visual identity elevated the brand's market perception and provided a scalable system for consistent marketing across all channels.",
      metrics: [
        { label: "Templates", value: "25+" },
        { label: "Brand Assets", value: "60+" },
        { label: "Consistency", value: "100%" },
      ],
    },
    related: [
      {
        slug: "symbols-of-support-mycrosscanada-identity",
        category: "Brand Theory",
        title: "Symbols of Support: Defining the MyCrossCanada.ca Identity",
        excerpt: "When a brand must communicate both urgency and compassion, every design decision carries weight.",
        readTime: "8 min read",
      },
      {
        slug: "luxury-in-every-frame-purelixr-photography",
        category: "Production Logic",
        title: "Luxury in Every Frame: Crafting the Purelixr Brand Through Photography",
        excerpt: "How cinematic product photography became the foundation of a perfume brand's identity.",
        readTime: "8 min read",
      },
      {
        slug: "nextjs-speed-of-trust-montax",
        category: "Code & Architecture",
        title: "Next.js and the Speed of Trust: Engineering a Financial Platform",
        excerpt: "How server components and edge functions create a premium user experience.",
        readTime: "12 min read",
      },
    ],
  },

  // ─── Post 9: BC AWE ───────────────────────────────────────────────────────
  {
    slug: "purpose-driven-tech-bcawe-governance",
    category: "Code & Architecture",
    categorySlug: "software",
    capabilityHref: "/capabilities/software",
    capabilityLabel: "Software Development",
    headline:
      "Purpose-Driven Technology: Building the BC AWE Governance Portal",
    byline: {
      date: "February 10, 2026",
      author: "Zenn Engineering",
    },
    excerpt:
      "How we designed a governance platform for indigenous communities in British Columbia with cultural sensitivity at its architectural core.",
    readTime: "8 min read",
    intro: {
      heading: "Technology in Service of Community",
      paragraphs: [
        "BC AWE (British Columbia Association for Wellness and Education) required a governance platform that respected the complexity of indigenous community structures while providing the administrative efficiency of modern software. This wasn't a standard SaaS build — it was a project where cultural sensitivity had to be embedded into every UX decision, database schema, and workflow design.",
        "The platform needed to manage governance processes, community communications, and documentation in a way that aligned with existing decision-making frameworks rather than imposing corporate software conventions.",
      ],
    },
    deepDive: {
      heading: "Architecture with Cultural Intelligence",
      sections: [
        {
          h2: "Governance Workflows That Respect Tradition",
          paragraphs: [
            "We began with extensive stakeholder consultations to understand the governance structures we were digitizing. The platform's workflow engine was designed to be configurable — not prescriptive. Community administrators can define their own approval chains, notification rules, and documentation requirements without developer intervention.",
            "This flexibility was non-negotiable: a platform that forces communities into a rigid workflow would undermine the very governance structures it was meant to support.",
          ],
        },
        {
          h2: "Accessible Design for Diverse Users",
          paragraphs: [
            "The platform serves users ranging from tech-savvy administrators to elders who primarily interact with technology through mobile devices. We designed a dual-interface approach: a full-featured administration dashboard for governance coordinators, and a simplified mobile-first portal for community members that prioritizes readability, clear navigation, and minimal cognitive load.",
            "All interfaces meet WCAG 2.2 AAA standards, with particular attention to color contrast, font sizing, and screen reader compatibility.",
          ],
        },
      ],
    },
    proof: {
      heading: "Putting the Logic into Practice.",
      client: "BC AWE",
      clientSlug: "bcawe",
      body: "The BC AWE governance portal serves indigenous communities in British Columbia with a platform that respects traditional governance structures while providing modern administrative efficiency. The system handles document management, community communications, and governance workflows in a culturally sensitive, fully accessible digital environment.",
      metrics: [
        { label: "Accessibility", value: "AAA" },
        { label: "Workflows", value: "Custom" },
        { label: "Mobile-First", value: "Yes" },
      ],
    },
    related: [
      {
        slug: "nextjs-speed-of-trust-montax",
        category: "Code & Architecture",
        title: "Next.js and the Speed of Trust: Engineering a Financial Platform",
        excerpt: "How server components and edge delivery create trust through performance.",
        readTime: "12 min read",
      },
      {
        slug: "symbols-of-support-mycrosscanada-identity",
        category: "Brand Theory",
        title: "Symbols of Support: Defining the MyCrossCanada.ca Identity",
        excerpt: "When a brand must hold urgency and warmth simultaneously.",
        readTime: "8 min read",
      },
      {
        slug: "engineering-hospitality-dragons-inn-erp",
        category: "Code & Architecture",
        title: "Engineering Hospitality: Building a Restaurant ERP",
        excerpt: "How we replaced five disconnected tools with a unified management platform.",
        readTime: "10 min read",
      },
    ],
  },

  // ─── Post 10: D'Curries ───────────────────────────────────────────────────
  {
    slug: "vibrant-cuisine-dcurries-visual-identity",
    category: "Production Logic",
    categorySlug: "editorial",
    capabilityHref: "/capabilities/editorial",
    capabilityLabel: "Photography & Production",
    headline:
      "Vibrant Cuisine: Capturing the Visual Identity of D'Curries",
    byline: {
      date: "January 25, 2026",
      author: "Zenn Production",
    },
    excerpt:
      "How we used photography and visual storytelling to capture the vibrancy and authenticity of South Asian cuisine for a growing food brand.",
    readTime: "7 min read",
    intro: {
      heading: "Color as Flavour",
      paragraphs: [
        "South Asian cuisine is inherently photogenic — the turmeric golds, chili reds, coriander greens, and yogurt whites create a natural color palette that demands expert handling to translate authentically to screen. D'Curries needed photography that celebrated this vibrancy without falling into the oversaturated, inauthentic look that plagues most food brand photography.",
        "The goal was authenticity with elevation: the food should look exactly as it does in the kitchen, but presented with the care and intention that communicates brand quality.",
      ],
    },
    deepDive: {
      heading: "Authentic Food Photography at Scale",
      sections: [
        {
          h2: "Working with Natural Color Palettes",
          paragraphs: [
            "We developed a custom color grading approach for D'Curries that enhances the existing vibrancy of the food without adding artificial saturation. The technique involves selective color work: lifting warmth in the curry tones while maintaining natural skin tones and neutral backgrounds. This creates a consistent visual signature where the food is always the most vibrant element in the frame.",
            "Every dish was styled by the D'Curries kitchen team, not a food stylist. This was a deliberate choice — the photography shows exactly what a customer will receive, building trust through visual honesty.",
          ],
        },
        {
          h2: "Menu System Photography",
          paragraphs: [
            "Beyond hero shots for social media and marketing, we produced a systematic menu photography library. Every dish on the D'Curries menu was shot from a consistent angle, with consistent lighting, and at a consistent scale — creating a visual menu system that works across print menus, the website, and delivery platforms.",
            "This systematic approach means new dishes can be photographed to match the existing library without reshooting the entire menu — a scalability consideration that most food brands overlook.",
          ],
        },
      ],
    },
    proof: {
      heading: "Putting the Logic into Practice.",
      client: "D'Curries",
      clientSlug: "dcurries",
      body: "The D'Curries photography project produced a comprehensive visual library covering every menu item, brand lifestyle shots, and social media content assets. The systematic approach enables ongoing content creation that maintains visual consistency as the menu evolves.",
      metrics: [
        { label: "Menu Items Shot", value: "45+" },
        { label: "Shoot Days", value: "2" },
        { label: "Content Pieces", value: "150+" },
      ],
    },
    related: [
      {
        slug: "color-grading-fine-dining-media",
        category: "Production Logic",
        title: "Color Grading the Experience: The Art of Fine Dining Media",
        excerpt: "How post-production decisions shape appetite and brand perception.",
        readTime: "7 min read",
      },
      {
        slug: "luxury-in-every-frame-purelixr-photography",
        category: "Production Logic",
        title: "Luxury in Every Frame: Crafting the Purelixr Brand Through Photography",
        excerpt: "How cinematic product photography became the foundation of a brand's identity.",
        readTime: "8 min read",
      },
      {
        slug: "24-hour-turns-high-velocity-retail-video",
        category: "Social Velocity",
        title: "24-Hour Turns: Mastering High-Velocity Video for Retail",
        excerpt: "The content system and production workflow that lets a retail brand post daily.",
        readTime: "9 min read",
      },
    ],
  },

  // ─── Post 11: CCS ─────────────────────────────────────────────────────────
  {
    slug: "authority-through-identity-ccs-branding",
    category: "Brand Theory",
    categorySlug: "branding",
    capabilityHref: "/capabilities/branding",
    capabilityLabel: "Branding & Identity",
    headline:
      "Authority Through Identity: Building the CCS Consulting Brand",
    byline: {
      date: "January 8, 2026",
      author: "Zenn Creative",
    },
    excerpt:
      "How we designed a professional services brand that communicates expertise and authority through cohesive visual identity and strategic photography.",
    readTime: "6 min read",
    intro: {
      heading: "When Your Brand Is Your Credential",
      paragraphs: [
        "For a consulting firm, the brand isn't decoration — it's a credential. Before a potential client reads a proposal or attends a meeting, they've already formed an opinion based on the visual quality of the website, business cards, and presentation materials. CCS needed a brand identity that immediately communicated professional authority, cross-industry expertise, and the kind of polish that justifies premium consulting rates.",
        "The previous visual identity was fragmented: different fonts across documents, inconsistent color usage, and photography that ranged from stock images to smartphone shots. The rebrand needed to unify everything under a single, authoritative visual system.",
      ],
    },
    deepDive: {
      heading: "Designing Professional Authority",
      sections: [
        {
          h2: "The Visual System",
          paragraphs: [
            "We designed CCS's brand around a minimal, structured aesthetic: a crisp geometric logo, a restrained color palette of charcoal and steel blue with a single accent color, and a typographic system built on a single typeface family in three weights. The constraint is intentional — consulting brands that use too many visual elements undermine the very precision they're selling.",
            "Every brand asset — from email signatures to proposal cover pages — follows a modular grid system that ensures visual consistency without requiring design expertise from the consulting team.",
          ],
        },
        {
          h2: "Professional Photography",
          paragraphs: [
            "We conducted a professional headshot and workspace photography session for the CCS team. The headshots follow a consistent style: neutral background, controlled lighting, and professional attire with natural expressions. These images appear across the website, LinkedIn profiles, and proposal documents, creating a unified team presence that reinforces the brand's professional authority.",
          ],
        },
      ],
    },
    proof: {
      heading: "Putting the Logic into Practice.",
      client: "CCS",
      clientSlug: "ccs",
      body: "The CCS brand system delivered a complete visual identity overhaul: logo suite, color system, typography, templates, and professional photography. The unified brand presence elevated the firm's market positioning and provided the team with self-service tools for consistent marketing output.",
      metrics: [
        { label: "Brand Assets", value: "40+" },
        { label: "Templates", value: "15" },
        { label: "Consistency", value: "100%" },
      ],
    },
    related: [
      {
        slug: "symbols-of-support-mycrosscanada-identity",
        category: "Brand Theory",
        title: "Symbols of Support: Defining the MyCrossCanada.ca Identity",
        excerpt: "When a brand must communicate both urgency and compassion.",
        readTime: "8 min read",
      },
      {
        slug: "premium-property-identity-rvproperties",
        category: "Brand Theory",
        title: "Building a Premium Property Brand: RV Properties",
        excerpt: "How we built a real estate brand that communicates trust and premium positioning.",
        readTime: "7 min read",
      },
      {
        slug: "color-grading-fine-dining-media",
        category: "Production Logic",
        title: "Color Grading the Experience: The Art of Fine Dining Media",
        excerpt: "The post-production philosophy that makes restaurant photography feel alive.",
        readTime: "7 min read",
      },
    ],
  },

  // ─── Post 12: Another World ───────────────────────────────────────────────
  {
    slug: "behind-the-lens-another-world-production",
    category: "Production Logic",
    categorySlug: "editorial",
    capabilityHref: "/capabilities/editorial",
    capabilityLabel: "Photography & Production",
    headline:
      "Behind the Lens: The Cinematic Production of Another World",
    byline: {
      date: "December 20, 2025",
      author: "Zenn Production",
    },
    excerpt:
      "A behind-the-scenes look at the creative direction, production design, and post-production workflow behind our most cinematic event production.",
    readTime: "8 min read",
    intro: {
      heading: "When Events Become Cinema",
      paragraphs: [
        "Another World wasn't a typical event videography project. The client wanted a cinematic experience film — not a documentation video, but a piece that captured the feeling of attending the event and amplified it to something unforgettable. The brief was to make viewers who weren't there feel like they missed something extraordinary, and to make attendees feel like their experience was even more special than they remembered.",
        "This required us to approach event coverage with the tools and mindset of narrative filmmaking: planned camera movements, intentional lighting, live audio mixing, and a post-production pipeline that treated every frame as part of a story.",
      ],
    },
    deepDive: {
      heading: "Cinematic Event Production",
      sections: [
        {
          h2: "Multi-Camera Live Direction",
          paragraphs: [
            "We deployed a three-camera setup: a locked-off wide establishing shot on a gimbal rail, a roaming shoulder-mounted camera for intimate moments and reactions, and a dedicated detail camera for macro shots of food, decorations, and hands. Each camera operator was briefed with a shot list organized by event timeline, ensuring comprehensive coverage without the chaotic look of multiple uncoordinated cameras.",
            "The live director communicated with all three operators via wireless comms, calling shots in real-time as the event unfolded. This allowed us to ensure we captured key moments from multiple angles simultaneously — something that cannot be recreated in post-production.",
          ],
        },
        {
          h2: "Post-Production as Storytelling",
          h3: "From 8 Hours of Footage to 4 Minutes of Cinema",
          paragraphs: [
            "The edit was the story. From over eight hours of raw footage across three cameras, we distilled the event into a four-minute cinematic piece that follows an emotional arc: anticipation, arrival, celebration, and reflection. The music bed was selected before editing began, and every cut, transition, and speed ramp was choreographed to the score.",
            "Color grading followed our event-specific LUT approach: warm highlights to simulate candlelight ambiance, cooled shadows for depth, and a subtle film grain overlay that adds texture without competing with the imagery. The final film feels timeless — it could have been shot yesterday or a decade from now.",
          ],
          diagramSteps: [
            "Pre-production — shot lists, camera assignments, event timeline",
            "3-camera live shoot with wireless director comms",
            "Selects review — identify hero moments across all angles",
            "Story edit — build emotional arc against music bed",
            "Color grade — event-specific LUT with film grain",
            "Audio mix — ambient sound blend with score",
            "Final delivery — 4K master, social cuts (16:9, 9:16, 1:1)",
          ],
        },
      ],
    },
    proof: {
      heading: "Putting the Logic into Practice.",
      client: "Another World Events",
      clientSlug: "anotherworld",
      body: "The Another World event film was delivered in multiple formats: a 4-minute hero film, three 30-second social teasers, a vertical Instagram Reel cut, and a behind-the-scenes montage. The cinematic approach elevated event videography beyond documentation into genuine brand filmmaking, setting a new standard for the client's future event marketing.",
      metrics: [
        { label: "Raw Footage", value: "8+ hrs" },
        { label: "Final Deliverables", value: "7" },
        { label: "Cameras", value: "3" },
      ],
    },
    related: [
      {
        slug: "color-grading-fine-dining-media",
        category: "Production Logic",
        title: "Color Grading the Experience: The Art of Fine Dining Media",
        excerpt: "How post-production decisions shape atmosphere and brand perception.",
        readTime: "7 min read",
      },
      {
        slug: "24-hour-turns-high-velocity-retail-video",
        category: "Social Velocity",
        title: "24-Hour Turns: Mastering High-Velocity Video for Retail",
        excerpt: "The content system and production workflow that lets a retail brand post daily.",
        readTime: "9 min read",
      },
      {
        slug: "luxury-in-every-frame-purelixr-photography",
        category: "Production Logic",
        title: "Luxury in Every Frame: Crafting the Purelixr Brand Through Photography",
        excerpt: "How cinematic product photography became the foundation of a brand's identity.",
        readTime: "8 min read",
      },
    ],
  },

  // ─── Post 13: Annam Gender Reveal Story ───────────────────────────────────
  {
    slug: "annam-gender-reveal-celebration",
    category: "Production Logic",
    categorySlug: "editorial",
    capabilityHref: "/capabilities/editorial",
    capabilityLabel: "Photography & Production",
    headline:
      "Capturing Joy: The Visual Storytelling Behind Annam's Gender Reveal Celebration",
    byline: {
      date: "June 14, 2026",
      author: "Zenn Production",
    },
    excerpt:
      "A narrative breakdown of event photography production for Annam's family gender reveal — weaving decor styling, high-speed burst reveals, and golden hour family portraiture.",
    readTime: "7 min read",
    intro: {
      heading: "Every Reveal Tells a Story",
      paragraphs: [
        "Gender reveals are raw emotional inflection points. Family, friends, and parents-to-be gather for a single moment of genuine surprise. When Annam approached Zenn Studios to photograph her family's celebration, our directive was to capture not just the confetti release, but the anticipation, tears of joy, and quiet unscripted reactions surrounding it.",
        "Rather than treating the event as isolated photos, we structured our coverage into three narrative chapters.",
      ],
    },
    deepDive: {
      heading: "Chapter-by-Chapter Photo Narrative",
      sections: [
        {
          h2: "Chapter I: Arrival, Decor & Anticipation",
          paragraphs: [
            "We began by documenting the party environment before guests arrived — capturing the custom balloon arches, expectation voting boards, and arrival smiles under soft natural daylight. Using a 35mm f/1.4 prime lens allowed us to separate guests naturally from backgrounds while rendering ambient lighting warmly.",
          ],
          imageGrid: [
            { src: "/images/photography/gender-reveal-annam/1.JPG", alt: "Annam Gender Reveal Celebration Decor", caption: "Venue Styling & Reveal Setup" },
            { src: "/images/photography/gender-reveal-annam/2.JPG", alt: "Annam Couple Milestone Portrait", caption: "Parent-to-Be Milestone Portrait" },
            { src: "/images/photography/gender-reveal-annam/3.JPG", alt: "Family Expectations Board", caption: "Interactive Guest Voting Station" },
            { src: "/images/photography/gender-reveal-annam/4.JPG", alt: "Guest Arrival Moments", caption: "Family & Friends Arrival" },
          ],
        },
        {
          h2: "Chapter II: The Confetti Burst & Unscripted Emotion",
          paragraphs: [
            "The reveal moment itself occurs in less than two seconds. We locked exposure manually at 1/2000s shutter speed and 14fps continuous mechanical burst mode. This captured the exact micro-frame where the pink and blue cannons discharged, freezing individual falling confetti particles while maintaining crisp facial focus on Annam and her partner.",
            "Simultaneously, a secondary shooter focused on parents and grandparents, capturing their unscripted facial reactions.",
          ],
          imageGrid: [
            { src: "/images/photography/gender-reveal-annam/5.JPG", alt: "Confetti Cannon Burst Moment", caption: "The Climax Reveal Burst" },
            { src: "/images/photography/gender-reveal-annam/6.JPG", alt: "Emotional Reaction Shot", caption: "Unscripted Family Tears of Joy" },
            { src: "/images/photography/gender-reveal-annam/7.JPG", alt: "Couple Embrace After Reveal", caption: "Post-Reveal Celebration" },
            { src: "/images/photography/gender-reveal-annam/8.JPG", alt: "Grandparents Reacting", caption: "Multi-Generational Joy" },
          ],
        },
        {
          h2: "Chapter III: Sunset Portraits, Treats & Finale",
          paragraphs: [
            "Following the high-energy reveal, the mood transitioned to warm celebration. We documented cake cutting, multi-generational hugs, and outdoor golden hour portraits that complete Annam's keepsake album.",
          ],
          imageGrid: [
            { src: "/images/photography/gender-reveal-annam/9.JPG", alt: "Cake Cutting & Treats", caption: "Custom Dessert Table Styling" },
            { src: "/images/photography/gender-reveal-annam/10.JPG", alt: "Outdoor Couple Session", caption: "Golden Hour Couple Portrait" },
            { src: "/images/photography/gender-reveal-annam/11.JPG", alt: "Family Group Gathering", caption: "Complete Celebration Attendees" },
            { src: "/images/photography/gender-reveal-annam/12.JPG", alt: "Finale Farewell Toast", caption: "Evening Celebration Finale" },
          ],
        },
      ],
    },
    proof: {
      heading: "Putting the Logic into Practice.",
      client: "Annam",
      clientSlug: "photography",
      body: "Delivered over 120 retouched, full-resolution event photographs documenting Annam's gender reveal celebration. The images were formatted for both high-resolution print keepsakes and digital social sharing.",
      metrics: [
        { label: "Delivered Photos", value: "120+" },
        { label: "Burst Speed", value: "14 fps" },
        { label: "Client Rating", value: "5/5" },
      ],
    },
    related: [
      {
        slug: "manisha-gender-reveal-event",
        category: "Production Logic",
        title: "Moments That Matter: Inside Manisha's Family Gender Reveal Party",
        excerpt: "Inside the 15-photo portrait narrative captured for Manisha's celebration.",
        readTime: "7 min read",
      },
      {
        slug: "windsor-tamil-community-chariot-festival",
        category: "Production Logic",
        title: "Sacred Rhythms & Sacred Colors: Documenting Windsor’s Tamil Chariot Festival",
        excerpt: "Visual story of the Murugan Ther Thiruvizha chariot procession.",
        readTime: "8 min read",
      },
    ],
  },

  // ─── Post 14: Manisha Gender Reveal Story ─────────────────────────────────
  {
    slug: "manisha-gender-reveal-event",
    category: "Production Logic",
    categorySlug: "editorial",
    capabilityHref: "/capabilities/editorial",
    capabilityLabel: "Photography & Production",
    headline:
      "Moments That Matter: Inside Manisha's Family Gender Reveal Party",
    byline: {
      date: "May 29, 2026",
      author: "Zenn Production",
    },
    excerpt:
      "A 15-photo documentary coverage breakdown capturing the warmth, interactive games, and multi-generational joy of Manisha's gender reveal event.",
    readTime: "7 min read",
    intro: {
      heading: "Warmth, Culture, and Celebration",
      paragraphs: [
        "Manisha's gender reveal party brought together over 25 family members for an afternoon of games, emotional reveals, and candid portraits. Our photography approach focused on vibrant warm color rendering, soft natural fill light, and continuous candid capture throughout the event timeline.",
        "Below is the complete story told across three distinct chapters.",
      ],
    },
    deepDive: {
      heading: "Chapter-by-Chapter Photo Narrative",
      sections: [
        {
          h2: "Chapter I: Welcome, Decor & Family Arrivals",
          paragraphs: [
            "We documented the party environment before guests arrived — capturing custom balloon arches, prediction voting boards, and initial family welcomes under soft diffused daylight.",
          ],
          imageGrid: [
            { src: "/images/photography/gender-reveal-manisha/1.jpg", alt: "Manisha Gender Reveal Decor", caption: "Balloon Arch & Party Entrance" },
            { src: "/images/photography/gender-reveal-manisha/2.jpg", alt: "Manisha Family Portrait", caption: "Family Welcome Portrait" },
            { src: "/images/photography/gender-reveal-manisha/3.jpg", alt: "Voting Game Table", caption: "Boy or Girl Prediction Board" },
            { src: "/images/photography/gender-reveal-manisha/4.jpg", alt: "Guests Arriving & Laughing", caption: "Candid Family Arrival" },
            { src: "/images/photography/gender-reveal-manisha/5.jpg", alt: "Party Host Opening Speech", caption: "Opening Remarks & Expectations" },
          ],
        },
        {
          h2: "Chapter II: The Powder Burst & Emotional Climax",
          paragraphs: [
            "During the powder cannon blast, we locked exposure and captured the explosion of color alongside cheering family members and emotional hugs.",
          ],
          imageGrid: [
            { src: "/images/photography/gender-reveal-manisha/6.jpg", alt: "The Cannon Powder Blast", caption: "Confetti Powder Cannon Blast" },
            { src: "/images/photography/gender-reveal-manisha/7.jpg", alt: "Couple Cheering", caption: "The Joyful Reveal Moment" },
            { src: "/images/photography/gender-reveal-manisha/8.jpg", alt: "Parents Embracing", caption: "Emotional Celebration Hug" },
            { src: "/images/photography/gender-reveal-manisha/9.jpg", alt: "Grandparents Smiles", caption: "Grandparents Celebrating" },
          ],
        },
        {
          h2: "Chapter III: Desserts, Games & The 25-Person Family Album",
          paragraphs: [
            "The event concluded with custom cupcakes, interactive trivia games, and a full 25-person family portrait in the evening light.",
          ],
          imageGrid: [
            { src: "/images/photography/gender-reveal-manisha/10.jpg", alt: "Dessert Table Details", caption: "Custom Cupcakes & Cake Detail" },
            { src: "/images/photography/gender-reveal-manisha/11.jpg", alt: "Group Photo of Guests", caption: "Full Party Attendees Portrait" },
            { src: "/images/photography/gender-reveal-manisha/12.jpg", alt: "Kids Playing at Party", caption: "Younger Generation Smiles" },
            { src: "/images/photography/gender-reveal-manisha/13.jpg", alt: "Couple Holding Signs", caption: "Milestone Keepsake Pose" },
            { src: "/images/photography/gender-reveal-manisha/14.jpg", alt: "Candid Laughter Beat", caption: "Family Laughter & Cheer" },
            { src: "/images/photography/gender-reveal-manisha/15.jpg", alt: "Sunset Group Finale", caption: "Celebration Finale Group Shot" },
          ],
        },
      ],
    },
    proof: {
      heading: "Putting the Logic into Practice.",
      client: "Manisha",
      clientSlug: "photography",
      body: "Delivered 150+ color-graded photographs documenting the entire party timeline, from initial guest arrival through the celebratory finale.",
      metrics: [
        { label: "Album Photos", value: "150+" },
        { label: "Hero Shots", value: "15" },
        { label: "Turnaround", value: "48 hrs" },
      ],
    },
    related: [
      {
        slug: "annam-gender-reveal-celebration",
        category: "Production Logic",
        title: "Capturing Joy: The Visual Storytelling Behind Annam's Gender Reveal",
        excerpt: "Inside the 12-photo story arc captured for Annam's reveal.",
        readTime: "7 min read",
      },
      {
        slug: "windsor-tamil-community-chariot-festival",
        category: "Production Logic",
        title: "Sacred Rhythms & Sacred Colors: Documenting Windsor’s Tamil Chariot Festival",
        excerpt: "Visual story of the Murugan Ther Thiruvizha chariot procession.",
        readTime: "8 min read",
      },
    ],
  },

  // ─── Post 15: Windsor Tamil Community Chariot Festival ────────────────────
  {
    slug: "windsor-tamil-community-chariot-festival",
    category: "Production Logic",
    categorySlug: "editorial",
    capabilityHref: "/capabilities/editorial",
    capabilityLabel: "Photography & Production",
    headline:
      "Sacred Rhythms & Sacred Colors: Documenting Windsor's Tamil Chariot Festival",
    byline: {
      date: "June 14, 2026",
      author: "Zenn Production",
    },
    excerpt:
      "On Sunday, June 14, 2026, the Hindu Temple and Cultural Centre of Windsor erupted in color and devotion for Murugan Ther Thiruvizha. Here is the visual story of the chariot procession.",
    readTime: "8 min read",
    intro: {
      heading: "A Sacred Tradition in the Heart of Windsor",
      paragraphs: [
        "On Sunday, June 14, 2026, the local Tamil community gathered at the Hindu Temple and Cultural Centre of Windsor for the sacred Murugan Ther Thiruvizha (Chariot Festival). The festival venerates Lord Murugan — the Tamil deity of war, youth, courage, and wisdom.",
        "Colorfully dressed dancers of all ages, traditional musicians playing nadaswaram and thavil, and hundreds of devotees filled the temple grounds with vibrant energy. Zenn Production was on site to document the day in a narrative photojournalistic story.",
      ],
    },
    deepDive: {
      heading: "The Chariot Festival Story Arc",
      sections: [
        {
          h2: "I. Morning Gathering & Sacred Preparations",
          paragraphs: [
            "As morning sunlight broke over the Hindu Temple and Cultural Centre of Windsor, devotees arrived in traditional silk attire. The temple priests conducted preliminary pujas inside the sanctum before bringing the deity of Lord Murugan to the grand wooden chariot.",
          ],
          imageGrid: [
            { src: "/images/photography/community/1.JPG", alt: "Windsor Tamil Community Morning Gathering", caption: "Morning Devotions & Temple Arrival" },
            { src: "/images/photography/community/2.JPG", alt: "Sacred Altar Preparations", caption: "Pujas & Garland Decor Setup" },
          ],
        },
        {
          h2: "II. Dancers of All Ages & Traditional Rhythms",
          paragraphs: [
            "A cornerstone of the Ther Thiruvizha is the cultural dance performances. Colorfully dressed dancers of all ages — from young children in silk pavadais to adult artists — performed sacred devotional routines to the reverberating rhythms of thavil drums.",
          ],
          imageGrid: [
            { src: "/images/photography/community/3.JPG", alt: "Traditional Tamil Dancers", caption: "Colorfully Dressed Dancers Performing" },
            { src: "/images/photography/community/4.JPG", alt: "Young Dancers on Temple Grounds", caption: "Youth Performances at Windsor Temple" },
            { src: "/images/photography/community/5.JPG", alt: "Musicians Playing Nadaswaram & Thavil", caption: "Traditional Musician Ensemble" },
          ],
        },
        {
          h2: "III. Pulling the Sacred Chariot (Ther Procession)",
          paragraphs: [
            "The climax of the festival is the pulling of the Ther. Devotees grab thick coconut fiber ropes and pull the towering wooden chariot around the temple grounds, chanting 'Vetrivel Muruganukku Harohara!' in unison as incense smoke fills the summer air.",
          ],
          imageGrid: [
            { src: "/images/photography/community/6.JPG", alt: "Devotees Pulling the Sacred Chariot Ropes", caption: "Devotees Pulling the Wooden Chariot Ropes" },
            { src: "/images/photography/community/7.JPG", alt: "Chariot Moving Around Windsor Temple", caption: "Ther Procession Around Temple Grounds" },
            { src: "/images/photography/community/8.JPG", alt: "Offerings of Flowers & Coconuts", caption: "Devotional Offerings at Chariot Base" },
          ],
        },
        {
          h2: "IV. Community Fellowship & Prasadam Feast",
          paragraphs: [
            "After the chariot completed its circumambulation, the celebration transitioned to Annadhanam (community feast). Multi-generational families shared traditional South Indian meals, celebrating cultural heritage and community unity in Windsor.",
          ],
          imageGrid: [
            { src: "/images/photography/community/9.JPG", alt: "Annadhanam Community Meal Gathering", caption: "Sharing Traditional Prasadam Feast" },
            { src: "/images/photography/community/10.JPG", alt: "Multi-Generational Family Smiles", caption: "Multi-Generational Community Joy" },
            { src: "/images/photography/community/11.JPG", alt: "Festival Finale Group Portrait", caption: "Windsor Tamil Community Chariot Festival Finale" },
          ],
        },
      ],
    },
    proof: {
      heading: "Putting the Logic into Practice.",
      client: "Windsor Tamil Community",
      clientSlug: "photography",
      body: "Documented the complete 2026 Murugan Ther Thiruvizha festival at the Hindu Temple and Cultural Centre of Windsor, producing an 11-photo narrative archive for community records and local media coverage.",
      metrics: [
        { label: "Event Date", value: "June 14, 2026" },
        { label: "Community Attendance", value: "500+" },
        { label: "Photo Archive", value: "11 Stories" },
      ],
    },
    related: [
      {
        slug: "annam-gender-reveal-celebration",
        category: "Production Logic",
        title: "Capturing Joy: The Visual Storytelling Behind Annam's Gender Reveal",
        excerpt: "Inside the narrative story arc captured for Annam's reveal.",
        readTime: "7 min read",
      },
      {
        slug: "manisha-gender-reveal-event",
        category: "Production Logic",
        title: "Moments That Matter: Inside Manisha's Family Gender Reveal Party",
        excerpt: "Inside the 15-photo portrait narrative captured for Manisha's celebration.",
        readTime: "7 min read",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
