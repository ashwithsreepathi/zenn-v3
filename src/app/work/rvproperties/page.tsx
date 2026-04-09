import CaseStudyLayout from "@/components/CaseStudyLayout";

export default function RVProperties() {
  return (
    <CaseStudyLayout
      title="RV Properties"
      tagline="Premium real estate brand identity and digital marketing suite for a boutique property firm."
      tag="Branding"
      year="2024"
      services={["Visual Identity System", "Brand Guidelines", "Website Design", "Photography Direction", "Print Collateral"]}
      challenge="RV Properties was operating as a boutique real estate firm in a competitive urban market but lacked the visual authority to command premium listings and attract high-net-worth clients. Their existing materials were inconsistent, and their digital footprint was minimal."
      solution="We delivered a comprehensive visual identity from the ground up: a refined typographic mark, a sophisticated neutral-with-gold color palette, and a full brand guidelines document. This was paired with a sleek, conversion-optimized website featuring high-resolution property photography direction standards and a curated listing module."
      result="The rebrand positioned RV Properties as a premium market player, directly contributing to their ability to secure three high-value luxury listings in the first month after the brand launch. Client-reported inquiries from the website doubled within the first six weeks."
      metrics={[
        { label: "Luxury Listings Secured (Month 1)", value: "3" },
        { label: "Increase in Web Inquiries", value: "2×" },
        { label: "Brand Assets Delivered", value: "40+" },
      ]}
      externalUrl="https://rvproperties.ca"
      prevProject={{ slug: "mycrosscanada", title: "MyCrossCanada" }}
      nextProject={{ slug: "bcawe", title: "BC AWE" }}
    />
  );
}
