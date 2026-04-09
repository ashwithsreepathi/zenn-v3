import CaseStudyLayout from "@/components/CaseStudyLayout";

export default function DragonsInn() {
  return (
    <CaseStudyLayout
      title="Dragons Inn"
      tagline="A hospitality-focused web presence with seamless online ordering and reservation management for a beloved local restaurant."
      tag="Web Design"
      year="2024"
      services={["Website Design & Development", "Online Ordering Integration", "Menu Management System", "Google Business Profile Optimization", "Local SEO"]}
      challenge="Dragons Inn had a loyal, established local customer base but a dated web presence that was failing to attract new diners and had no online ordering capability—a critical gap in the post-pandemic hospitality landscape where digital ordering had become an expectation rather than a luxury."
      solution="We designed and developed a warm, inviting digital presence that matched the restaurant's established character, with a frictionless online ordering flow integrated directly with their POS system. A dynamic menu management panel allows the kitchen team to update specials and pricing without any technical knowledge."
      result="Online orders accounted for 28% of total revenue within the first two months of launching the new site and ordering system. The Google Business Profile optimization strategy drove a 60% increase in 'restaurant near me' visibility, significantly expanding their new customer acquisition."
      metrics={[
        { label: "Revenue via Online Orders (Month 2)", value: "28%" },
        { label: "Increase in Local Search Visibility", value: "60%" },
        { label: "Order Integration Uptime", value: "99.9%" },
      ]}
      prevProject={{ slug: "blackfridaybins", title: "Black Friday Bins" }}
      nextProject={{ slug: "embersgrillehouse", title: "Embers Grille House" }}
    />
  );
}
