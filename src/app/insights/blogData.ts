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
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
