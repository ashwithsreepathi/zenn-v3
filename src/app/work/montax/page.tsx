import CaseStudyLayout from "@/components/CaseStudyLayout";

export default function Montax() {
  return (
    <CaseStudyLayout
      title="Montax"
      tagline="Next-gen financial services platform for modern professionals and their clients."
      tag="Web App"
      year="2025"
      services={["Next.js 15 Architecture", "Custom Client Portal", "Document Management System", "UI/UX Design", "SEO Infrastructure"]}
      challenge="Montax needed to transition from a legacy, fragmented digital presence into a single, high-trust platform capable of serving financial professionals who demand precision, speed, and security. Their existing website offered no client interaction layer—everything was handled off-site via email."
      solution="We architected a full-stack Next.js 15 platform integrating a secure client portal with role-based access control, a document management system for financial records, and a high-performance public-facing site optimized for trust signals and local SEO. The entire system is deployed on edge infrastructure for near-zero latency."
      result="Montax saw a 40% reduction in client onboarding time within the first quarter of launch, and their organic search ranking for key local financial services terms improved significantly. The portal has become the primary communication channel with their clients, replacing email for critical document exchanges."
      metrics={[
        { label: "Reduction in Onboarding Time", value: "40%" },
        { label: "PageSpeed Score", value: "99" },
        { label: "Organic Ranking Improvement", value: "+28" },
      ]}
      externalUrl="https://montax.ca"
      prevProject={{ slug: "embersgrillehouse", title: "Embers Grille House" }}
      nextProject={{ slug: "mycrosscanada", title: "MyCrossCanada" }}
    />
  );
}
