import CaseStudyLayout from "@/components/CaseStudyLayout";

export default function MyCrossCanada() {
  return (
    <CaseStudyLayout
      title="MyCrossCanada"
      tagline="A national platform connecting Canadians to trusted, verified local service providers."
      tag="Brand & Web"
      year="2024"
      services={["Brand Identity", "Full-Stack Web Platform", "Directory Architecture", "Provider Onboarding UX", "SEO Strategy"]}
      challenge="The client needed to launch a national B2C directory from scratch—with no brand, no code, and no clear content architecture. The challenge was building a scalable platform capable of serving thousands of service providers across multiple Canadian provinces while feeling premium and trustworthy to consumers."
      solution="We designed the brand from the ground up, including logo, typography, and color system, then built a custom Next.js directory platform featuring dynamic province-based filtering, a provider onboarding flow, and a consumer-facing search experience with structured data markup for Google's Local Pack."
      result="MyCrossCanada launched with over 500 verified service providers at launch, achieved first-page Google rankings for multiple city-specific service categories within 60 days, and established itself as a credible national resource with a consistent, premium brand identity."
      metrics={[
        { label: "Providers at Launch", value: "500+" },
        { label: "Days to 1st Page Rankings", value: "60" },
        { label: "Provinces Covered", value: "10" },
      ]}
      externalUrl="https://mycrosscanada.ca"
      prevProject={{ slug: "montax", title: "Montax" }}
      nextProject={{ slug: "rvproperties", title: "RV Properties" }}
    />
  );
}
